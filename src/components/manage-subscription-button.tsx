"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { CreditCard, Loader2, ArrowUpRight } from "lucide-react"
import { useRouter } from 'next/navigation'

interface ManageSubscriptionButtonProps {
  plan: 'free' | 'pro'
}

export function ManageSubscriptionButton({ plan }: ManageSubscriptionButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleClick = async () => {
    if (plan === 'free') {
      // Redirect to pricing page for free users
      router.push('/pricing')
      return
    }

    // Handle subscription management for pro users
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/api/stripe/create-portal-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create portal session')
      }

      // Redirect to Stripe customer portal
      window.location.href = data.url
    } catch (err) {
      console.error('Portal session error:', err)
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
      setLoading(false)
    }
  }

  if (plan === 'free') {
    return (
      <Button 
        className="bg-green-600 hover:bg-green-700" 
        onClick={handleClick}
      >
        <ArrowUpRight className="w-4 h-4 mr-2" />
        Upgrade Plan
      </Button>
    )
  }

  return (
    <div>
      <Button 
        className="bg-blue-600 hover:bg-blue-700" 
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <CreditCard className="w-4 h-4 mr-2" />
        )}
        {loading ? 'Loading...' : 'Manage Subscription'}
      </Button>
      {error && (
        <p className="text-sm text-red-600 mt-2">{error}</p>
      )}
    </div>
  )
} 