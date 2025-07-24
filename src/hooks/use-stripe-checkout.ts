"use client"

import { useState } from 'react'
import { getStripe } from '@/lib/stripe/config'
import { useAuth } from '@/components/auth-provider'
import { useRouter } from 'next/navigation'

interface UseStripeCheckoutProps {
  plan: 'pro' | 'elite'
}

export function useStripeCheckout({ plan }: UseStripeCheckoutProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { user, hasActiveSubscription } = useAuth()
  const router = useRouter()

  const startCheckout = async () => {
    try {
      setLoading(true)
      setError(null)

      // Check if user is authenticated
      if (!user) {
        router.push('/login?redirect=/pricing')
        return
      }

      // Check if user already has an active subscription
      if (hasActiveSubscription) {
        setError('You already have an active subscription. Please manage your subscription from your account settings.')
        return
      }

      // Create checkout session
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      // Redirect to Stripe Checkout
      const stripe = await getStripe()
      if (!stripe) {
        throw new Error('Stripe failed to load')
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      })

      if (stripeError) {
        throw new Error(stripeError.message)
      }
    } catch (err) {
      console.error('Checkout error:', err)
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return {
    startCheckout,
    loading,
    error,
    isAuthenticated: !!user,
    hasActiveSubscription,
  }
} 