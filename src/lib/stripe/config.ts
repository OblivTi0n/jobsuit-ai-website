import { loadStripe, Stripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null>

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
}

export const STRIPE_PRICE_IDS = {
  pro: 'price_1RoP7QFVUWA4GIC5bCPu9F9q',
  elite: 'price_1Ro64ZFVUWA4GIC52U8YU4FR'
} as const

export type PricingPlan = 'pro' | 'elite'
export type BillingInterval = 'monthly' | 'quarterly' 