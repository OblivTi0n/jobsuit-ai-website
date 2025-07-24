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

        // Update the subscription in Supabase
        const { error } = await supabase
          .from('subscriptions')
          .upsert({
            id: subscription.id,
            user_id: userId,
            status: subscription.status,
            price_id: priceId,
            plan: getPlanName(priceId),
            quantity: subscription.items.data[0]?.quantity,
            cancel_at_period_end: subscription.cancel_at_period_end,
            created: new Date(subscription.created * 1000).toISOString(),
            current_period_start: new Date((subscription as any).current_period_start * 1000).toISOString(),
            current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
            ended_at: subscription.ended_at ? new Date(subscription.ended_at * 1000).toISOString() : null,
            cancel_at: subscription.cancel_at ? new Date(subscription.cancel_at * 1000).toISOString() : null,
            canceled_at: subscription.canceled_at ? new Date(subscription.canceled_at * 1000).toISOString() : null,
            trial_start: subscription.trial_start ? new Date(subscription.trial_start * 1000).toISOString() : null,
            trial_end: subscription.trial_end ? new Date(subscription.trial_end * 1000).toISOString() : null,
            // Set token limits based on plan
            analysis_token: tokenLimits.analysis_token,
            tailoring_token: tokenLimits.tailoring_token,
            chat_token: tokenLimits.chat_token,
          })

        if (error) {
          console.error('Error updating subscription:', error)
        } else {
          console.log(`Subscription ${subscription.id} updated successfully`)
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
            ended_at: new Date().toISOString(),
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
          
          // Now you have both subscription ID and user ID for full context
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
               current_period_start: new Date((subscription as any).current_period_start * 1000).toISOString(),
               current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
             })
             .eq('id', (invoice as any).subscription) // Using subscription ID as the key

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