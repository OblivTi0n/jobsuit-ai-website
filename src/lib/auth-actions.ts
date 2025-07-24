'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

async function verifyTurnstileToken(token: string, ip?: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY
  
  console.log('🔍 Turnstile Debug Info:')
  console.log('- Secret Key configured:', !!secretKey)
  console.log('- Token received:', !!token, token?.substring(0, 20) + '...')
  console.log('- IP:', ip)
  
  if (!secretKey) {
    console.error('❌ TURNSTILE_SECRET_KEY not configured - using default test key')
    // Use test secret key as fallback
    const testSecretKey = '1x0000000000000000000000000000000AA'
    console.log('✅ Using test secret key for development')
    
    try {
      const formData = new FormData()
      formData.append('secret', testSecretKey)
      formData.append('response', token)
      if (ip) {
        formData.append('remoteip', ip)
      }

      console.log('📤 Sending verification request to Cloudflare...')
      const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()
      console.log('📥 Cloudflare response:', result)
      return result.success === true
    } catch (error) {
      console.error('❌ Turnstile verification failed with test key:', error)
      return false
    }
  }

  try {
    const formData = new FormData()
    formData.append('secret', secretKey)
    formData.append('response', token)
    if (ip) {
      formData.append('remoteip', ip)
    }

    console.log('📤 Sending verification request to Cloudflare...')
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    })

    const result = await response.json()
    console.log('📥 Cloudflare response:', result)
    return result.success === true
  } catch (error) {
    console.error('❌ Turnstile verification failed:', error)
    return false
  }
}

export async function login(formData: FormData) {
  const supabase = await createClient()

  // Verify Turnstile token
  const turnstileToken = formData.get('cf-turnstile-response') as string
  if (!turnstileToken) {
    redirect('/error?message=' + encodeURIComponent('Security verification required'))
  }

  const isValidTurnstile = await verifyTurnstileToken(turnstileToken)
  if (!isValidTurnstile) {
    redirect('/error?message=' + encodeURIComponent('Security verification failed. Please try again.'))
  }

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error?message=' + encodeURIComponent(error.message))
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  console.log('🚀 Signup attempt started')
  
  // Debug: Log all form data
  const allFormData = Object.fromEntries(formData.entries())
  console.log('📝 Form data received:', {
    email: allFormData.email,
    hasPassword: !!allFormData.password,
    hasTurnstileToken: !!allFormData['cf-turnstile-response']
  })

  // Verify Turnstile token
  const turnstileToken = formData.get('cf-turnstile-response') as string
  if (!turnstileToken) {
    console.error('❌ No Turnstile token found in form data')
    redirect('/error?message=' + encodeURIComponent('Security verification required - no token found'))
  }

  console.log('🔐 Verifying Turnstile token...')
  const isValidTurnstile = await verifyTurnstileToken(turnstileToken)
  if (!isValidTurnstile) {
    console.error('❌ Turnstile verification failed')
    redirect('/error?message=' + encodeURIComponent('Security verification failed. Please try again.'))
  }
  
  console.log('✅ Turnstile verification successful')

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error?message=' + encodeURIComponent(error.message))
  }

  revalidatePath('/', 'layout')
  redirect('/auth/confirm?message=' + encodeURIComponent('Check your email to confirm your account'))
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/')
} 