"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'
import { getUserSubscriptionClient, hasActiveSubscription, type UserSubscription } from '@/lib/stripe/subscription-utils-client'

interface AuthContextType {
  user: User | null
  loading: boolean
  subscription: UserSubscription | null
  hasActiveSubscription: boolean
  subscriptionLoading: boolean
  signOut: () => Promise<void>
  refreshSubscription: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [subscription, setSubscription] = useState<UserSubscription | null>(null)
  const [subscriptionLoading, setSubscriptionLoading] = useState(false)

  const fetchSubscription = async (userId: string) => {
    setSubscriptionLoading(true)
    try {
      const sub = await getUserSubscriptionClient(userId)
      setSubscription(sub)
    } catch (error) {
      console.error('Error fetching subscription:', error)
      setSubscription(null)
    } finally {
      setSubscriptionLoading(false)
    }
  }

  const refreshSubscription = async () => {
    if (user) {
      await fetchSubscription(user.id)
    }
  }

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
      
      // Fetch subscription if user is logged in
      if (session?.user) {
        await fetchSubscription(session.user.id)
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription: authSubscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
        
        // Fetch subscription if user is logged in, clear if logged out
        if (session?.user) {
          await fetchSubscription(session.user.id)
        } else {
          setSubscription(null)
        }
      }
    )

    return () => {
      authSubscription.unsubscribe()
    }
  }, [supabase.auth])

  const signOut = async () => {
    await supabase.auth.signOut()
    setSubscription(null)
  }

  const value = {
    user,
    loading,
    subscription,
    hasActiveSubscription: subscription ? hasActiveSubscription(subscription) : false,
    subscriptionLoading,
    signOut,
    refreshSubscription,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 