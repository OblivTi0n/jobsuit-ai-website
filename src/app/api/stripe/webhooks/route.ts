import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createServiceClient } from '@/lib/supabase/service'
import { headers } from 'next/headers'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
})

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

// Helper function to get token limits based on plan
function getTokenLimits(priceId: string) {
  // Pro plan tokens
  if (priceId === 'price_1RoP7QFVUWA4GIC5bCPu9F9q') {
    return {
      analysis_token: 100,     // Unlimited scans
      tailoring_token: 100,       // 100 tailoring per month  
      chat_token: 350             // 350 chat tokens per month
    }
  }
  
  // Elite plan tokens
  if (priceId === 'price_1Ro64ZFVUWA4GIC52U8YU4FR') {
    return {
      analysis_token: 999999,     // Unlimited scans
      tailoring_token: 999999,    // Unlimited tailoring
      chat_token: 999999          // Full access to AI chat
    }
  }
  
  // Default for unknown plans
  return {
    analysis_token: 0,
    tailoring_token: 0,
    chat_token: 0
  }
}

// Helper function to get plan name based on price ID
function getPlanName(priceId: string) {
  // Pro plan
  if (priceId === 'price_1RoP7QFVUWA4GIC5bCPu9F9q') {
    return 'pro'
  }
  
  // Elite plan
  if (priceId === 'price_1Ro64ZFVUWA4GIC52U8YU4FR') {
    return 'unlimited'
  }
  
  // Default for unknown plans
  return null
}

// Helper function to safely convert Unix timestamp to ISO string with fallback
function safeTimestampToISO(timestamp: number | null | undefined): string {
  if (!timestamp || isNaN(timestamp)) {
    return new Date().toISOString() // Fallback to current time for required fields
  }
  try {
    return new Date(timestamp * 1000).toISOString()
  } catch (error) {
    console.error('Error converting timestamp:', timestamp, error)
    return new Date().toISOString() // Fallback to current time
  }
}

// Helper function for nullable timestamp fields
function safeNullableTimestampToISO(timestamp: number | null | undefined): string | null {
  if (!timestamp || isNaN(timestamp)) {
    return null
  }
  try {
    return new Date(timestamp * 1000).toISOString()
  } catch (error) {
    console.error('Error converting timestamp:', timestamp, error)
    return null
  }
}

export async function POST(request: NextRequest) {
  const body = await request.text()
  const headersList = await headers()
  const sig = headersList.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
  }

  // Use service role client to bypass RLS
  const supabase = createServiceClient()

  try {
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription

        // Get the user ID from the subscription metadata
        const userId = subscription.metadata?.user_id
        if (!userId) {
          console.error('No user_id found in subscription metadata')
          break
        }

        const priceId = subscription.items.data[0]?.price.id
        const tokenLimits = getTokenLimits(priceId)
        const planName = getPlanName(priceId)

        // Check if user has an existing subscription (including free plans)
        const { data: existingSubscriptions, error: fetchError } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('user_id', userId)
          .in('status', ['active', 'trialing', 'past_due', 'unpaid'])
          .order('created', { ascending: false })

        if (fetchError) {
          console.error('Error fetching existing subscriptions:', fetchError)
          break
        }

        let subscriptionData = {
          id: subscription.id,
          user_id: userId,
          status: subscription.status,
          price_id: priceId,
          plan: planName,
          quantity: subscription.items.data[0]?.quantity,
          cancel_at_period_end: subscription.cancel_at_period_end,
          created: new Date(subscription.created * 1000).toISOString(),
          current_period_start: safeTimestampToISO((subscription as any).current_period_start),
          current_period_end: safeTimestampToISO((subscription as any).current_period_end),
          canceled_at: safeNullableTimestampToISO(subscription.canceled_at),
          analysis_token: tokenLimits.analysis_token,
          tailoring_token: tokenLimits.tailoring_token,
          chat_token: tokenLimits.chat_token,
          customer_id: subscription.customer as string,
        }

        if (existingSubscriptions && existingSubscriptions.length > 0) {
          // User has existing subscription(s) - this is an upgrade
          for (const existingSub of existingSubscriptions) {
            // Cancel old Stripe subscriptions, but skip local free plans
            if (existingSub.id !== subscription.id && existingSub.plan !== 'free' && existingSub.id.startsWith('sub_') && !existingSub.id.includes('-')) {
              try {
                await stripe.subscriptions.cancel(existingSub.id)
                console.log(`Cancelled old Stripe subscription ${existingSub.id} during upgrade`)
              } catch (error) {
                console.error(`Error cancelling old subscription ${existingSub.id}:`, error)
              }
            }
            
            // Update the existing subscription record instead of creating a new one
            if (existingSub.plan === 'free' || existingSub.id === subscription.id) {
              const { error: updateError } = await supabase
                .from('subscriptions')
                .update(subscriptionData)
                .eq('id', existingSub.id)

              if (updateError) {
                console.error('Error updating existing subscription:', updateError)
              } else {
                console.log(`Updated existing subscription ${existingSub.id} to ${planName} plan`)
              }
              break // Only update the first matching subscription
            }
          }
        } else {
          // No existing subscription - create new one
          const { error } = await supabase
            .from('subscriptions')
            .insert(subscriptionData)

          if (error) {
            console.error('Error creating new subscription:', error)
          } else {
            console.log(`Created new subscription ${subscription.id}`)
          }
        }
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription

        // Update the subscription status in Supabase
        const { error } = await supabase
          .from('subscriptions')
          .update({
            status: 'canceled',
            canceled_at: new Date().toISOString(),
            // Reset tokens to 0 when subscription is canceled
            analysis_token: 0,
            tailoring_token: 0,
            chat_token: 0,
          })
          .eq('id', subscription.id)

        if (error) {
          console.error('Error canceling subscription:', error)
        } else {
          console.log(`Subscription ${subscription.id} canceled successfully`)
        }
        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice

        if ((invoice as any).subscription) {
          const subscription = await stripe.subscriptions.retrieve((invoice as any).subscription)
          
          // Get user ID from subscription metadata for consistency
          const userId = subscription.metadata?.user_id
          if (!userId) {
            console.error('No user_id found in subscription metadata')
            break
          }
          
          const priceId = subscription.items.data[0]?.price.id
          const tokenLimits = getTokenLimits(priceId)
          
          // Reset tokens for the new billing period
          const { error } = await supabase
            .from('subscriptions')
            .update({
              status: 'active',
              analysis_token: tokenLimits.analysis_token,
              tailoring_token: tokenLimits.tailoring_token,
              chat_token: tokenLimits.chat_token,
              current_period_start: safeTimestampToISO((subscription as any).current_period_start),
              current_period_end: safeTimestampToISO((subscription as any).current_period_end),
            })
            .eq('id', (invoice as any).subscription)

          if (error) {
            console.error('Error resetting tokens on recurring payment:', error)
          } else {
            console.log(`Subscription ${(invoice as any).subscription} renewed - tokens reset`)
          }
        }
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice

        if ((invoice as any).subscription) {
          // Update subscription status on failed payment
          const { error } = await supabase
            .from('subscriptions')
            .update({
              status: 'past_due',
            })
            .eq('id', (invoice as any).subscription)

          if (error) {
            console.error('Error updating subscription on failed payment:', error)
          } else {
            console.log(`Subscription ${(invoice as any).subscription} marked as past_due on failed payment`)
          }
        }
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json({ error: 'Error processing webhook' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
} 