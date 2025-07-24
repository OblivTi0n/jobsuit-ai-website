import { createClient } from '@/lib/supabase/client'

export interface UserSubscription {
  id: string | null
  status: 'trialing' | 'active' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'past_due' | 'unpaid' | null
  price_id: string | null
  cancel_at_period_end: boolean | null
  current_period_end: string | null
}

export async function getUserSubscriptionClient(userId: string): Promise<UserSubscription> {
  const supabase = createClient()
  
  const { data: subscription, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle()

  if (error) {
    console.error('Error fetching subscription:', error)
    return {
      id: null,
      status: null,
      price_id: null,
      cancel_at_period_end: null,
      current_period_end: null
    }
  }

  return {
    id: subscription?.id || null,
    status: subscription?.status || null,
    price_id: subscription?.price_id || null,
    cancel_at_period_end: subscription?.cancel_at_period_end || null,
    current_period_end: subscription?.current_period_end || null
  }
}

export function hasActiveSubscription(subscription: UserSubscription): boolean {
  return subscription.status === 'active' || subscription.status === 'trialing'
}

export function isSubscriptionCanceled(subscription: UserSubscription): boolean {
  return subscription.status === 'canceled' || subscription.cancel_at_period_end === true
}

export async function getSubscriptionPlan(priceId: string | null): Promise<'free' | 'pro' | 'elite' | 'unknown'> {
  if (!priceId) return 'free'
  
  const supabase = createClient()
  
  // Get the product that matches this price_id
  const { data: product, error } = await supabase
    .from('products')
    .select('metadata')
    .eq('price_id', priceId)
    .maybeSingle()
    
  if (error || !product) {
    console.error('Error fetching product for price_id:', priceId, error)
    return 'unknown'
  }
  
  // Extract plan from metadata
  const metadata = product.metadata as any
  const plan = metadata?.plan
  
  if (plan === 'pro' || plan === 'elite') {
    return plan
  }
  
  return 'unknown'
} 