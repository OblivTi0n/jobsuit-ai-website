import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
})

export async function POST(request: NextRequest) {
  try {
    // Get the authenticated user
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    let stripeCustomerId: string | null = null

    // First, try to get the customer ID from the subscription (new method)
    const { data: subscription } = await supabase
      .from('subscriptions')
      .select('customer_id')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .maybeSingle()

    if (subscription?.customer_id) {
      stripeCustomerId = subscription.customer_id
    } else {
      // Fallback: try to get it from the customers table
      const { data: customerData } = await supabase
        .from('customers')
        .select('stripe_customer_id')
        .eq('id', user.id)
        .maybeSingle()

      if (customerData?.stripe_customer_id) {
        stripeCustomerId = customerData.stripe_customer_id
      }
    }

    if (!stripeCustomerId) {
      return NextResponse.json(
        { error: 'No active subscription found' },
        { status: 404 }
      )
    }

    // Create the portal session
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: `${request.nextUrl.origin}/dashboard`,
    })

    return NextResponse.json({ url: portalSession.url })
  } catch (error) {
    console.error('Error creating portal session:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 