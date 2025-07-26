import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'
import { getUserSubscription, hasActiveSubscription } from '@/lib/stripe/subscription-utils-server'
import { STRIPE_PRICE_IDS } from '@/lib/stripe/config'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
})

export async function POST(request: NextRequest) {
  try {
    const { plan } = await request.json()

    if (!plan) {
      return NextResponse.json(
        { error: 'Plan is required' },
        { status: 400 }
      )
    }

    if (!['pro', 'elite'].includes(plan)) {
      return NextResponse.json(
        { error: 'Invalid plan' },
        { status: 400 }
      )
    }

    // Get the authenticated user
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    // Enhanced subscription validation to prevent duplicate purchases
    const subscription = await getUserSubscription(user.id)
    
    // Check for any active subscriptions first
    if (hasActiveSubscription(subscription)) {
      console.log(`User ${user.id} has active subscription:`, {
        priceId: subscription.price_id,
        status: subscription.status,
        requestedPlan: plan
      })
    }
    
    // Determine current plan with additional validation
    let currentPlan: 'free' | 'pro' | 'elite' = 'free'
    if (hasActiveSubscription(subscription) && subscription.price_id) {
      if (subscription.price_id === STRIPE_PRICE_IDS.pro) {
        currentPlan = 'pro'
      } else if (subscription.price_id === STRIPE_PRICE_IDS.elite) {
        currentPlan = 'elite'
      }
    }
    
    // Enhanced validation: Prevent purchasing the same plan
    if (currentPlan === plan) {
      console.warn(`User ${user.id} attempted to purchase existing plan: ${plan}`)
      return NextResponse.json(
        { 
          error: `You are already subscribed to the ${plan.charAt(0).toUpperCase() + plan.slice(1)} plan. Please manage your subscription from your account dashboard instead.`,
          currentPlan: currentPlan
        },
        { status: 400 }
      )
    }
    
    // Prevent downgrades from Elite to Pro
    if (currentPlan === 'elite' && plan === 'pro') {
      console.warn(`User ${user.id} attempted to downgrade from Elite to Pro`)
      return NextResponse.json(
        { 
          error: 'Cannot downgrade from Elite to Pro plan. Please contact support for assistance.',
          currentPlan: currentPlan
        },
        { status: 400 }
      )
    }
    
    // Additional validation: Double-check by querying active subscriptions directly
    const { data: activeSubscriptions } = await supabase
      .from('subscriptions')
      .select('price_id, status')
      .eq('user_id', user.id)
      .in('status', ['active', 'trialing'])
    
    if (activeSubscriptions && activeSubscriptions.length > 0) {
      const hasRequestedPlan = activeSubscriptions.some(sub => 
        sub.price_id === STRIPE_PRICE_IDS[plan as keyof typeof STRIPE_PRICE_IDS]
      )
      
      if (hasRequestedPlan) {
        console.warn(`User ${user.id} has active subscription for requested plan ${plan}`)
        return NextResponse.json(
          { 
            error: `You already have an active ${plan.charAt(0).toUpperCase() + plan.slice(1)} subscription. Please check your account dashboard.`,
            currentPlan: currentPlan
          },
          { status: 400 }
        )
      }
    }

    // Get the price ID for monthly billing
    const priceId = STRIPE_PRICE_IDS[plan as keyof typeof STRIPE_PRICE_IDS]

    if (!priceId) {
      return NextResponse.json(
        { error: 'Invalid plan configuration' },
        { status: 400 }
      )
    }

    // Create or get Stripe customer
    let customerId: string

    // Check if user already has a Stripe customer ID
    const { data: customerData } = await supabase
      .from('customers')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .maybeSingle()

    if (customerData?.stripe_customer_id) {
      customerId = customerData.stripe_customer_id
    } else {
      // Create new Stripe customer
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: {
          supabase_user_id: user.id,
        },
      })

      customerId = customer.id

      // Save customer ID to database
      await supabase
        .from('customers')
        .upsert({
          id: user.id,
          stripe_customer_id: customerId,
        })
    }

    // Create checkout session - handle both new subscriptions and upgrades
    let sessionConfig: Stripe.Checkout.SessionCreateParams = {
      customer: customerId,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/pricing?canceled=true`,
      metadata: {
        user_id: user.id,
        plan: plan,
        upgrade_from: currentPlan,
      },
      subscription_data: {
        metadata: {
          user_id: user.id,
          plan: plan,
        },
      },
    }

    const session = await stripe.checkout.sessions.create(sessionConfig)

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 