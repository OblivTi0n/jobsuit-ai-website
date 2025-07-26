import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              // Configure cookies for cross-subdomain sharing
              const crossDomainOptions = {
                ...options,
                domain: '.jobsuit.ai', // Share across jobsuit.ai and editor.jobsuit.ai
                path: '/',
                secure: process.env.NODE_ENV === 'production', // HTTPS required in production
                httpOnly: true, // Prevent XSS attacks
                sameSite: 'lax' as const // CSRF protection while allowing cross-subdomain
              }
              cookieStore.set(name, value, crossDomainOptions)
            })
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        }
      }
    }
  )
} 