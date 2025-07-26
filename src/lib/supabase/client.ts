import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return document.cookie
            .split(';')
            .map(cookie => cookie.trim().split('='))
            .filter(([name]) => name)
            .map(([name, value]) => ({ name, value: decodeURIComponent(value || '') }))
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            const cookieOptions = {
              ...options,
              domain: '.jobsuit.ai', // Critical for cross-subdomain
              path: '/',
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'lax' as const,
            }
            
            let cookieString = `${name}=${encodeURIComponent(value)}`
            
            if (cookieOptions.domain) cookieString += `; Domain=${cookieOptions.domain}`
            if (cookieOptions.path) cookieString += `; Path=${cookieOptions.path}`
            if (cookieOptions.secure) cookieString += `; Secure`
            if (cookieOptions.sameSite) cookieString += `; SameSite=${cookieOptions.sameSite}`
            if (cookieOptions.maxAge) cookieString += `; Max-Age=${cookieOptions.maxAge}`
            
            document.cookie = cookieString
          })
        }
      }
    }
  )
}

// For backward compatibility, export a default client instance
export const supabase = createClient()