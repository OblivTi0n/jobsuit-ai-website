"use client"

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: {
        sitekey: string
        callback?: (token: string) => void
        'error-callback'?: () => void
        'timeout-callback'?: () => void
        theme?: 'light' | 'dark' | 'auto'
        size?: 'normal' | 'compact'
      }) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
      getResponse: (widgetId?: string) => string | null
    }
    onloadTurnstileCallback?: () => void
  }
}

interface TurnstileProps {
  siteKey: string
  onVerify: (token: string) => void
  onError?: () => void
  onTimeout?: () => void
  theme?: 'light' | 'dark' | 'auto'
  size?: 'normal' | 'compact'
  className?: string
}

export function Turnstile({
  siteKey,
  onVerify,
  onError,
  onTimeout,
  theme = 'light',
  size = 'normal',
  className = ''
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  // Load Turnstile script
  useEffect(() => {
    console.log('🔧 Turnstile component mounting...')
    console.log('🔑 Site key:', siteKey)
    
    if (window.turnstile) {
      console.log('✅ Turnstile script already loaded')
      setIsScriptLoaded(true)
      return
    }

    console.log('📦 Loading Turnstile script...')
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback'
    script.async = true
    script.defer = true

    script.onload = () => {
      console.log('✅ Turnstile script loaded successfully')
    }

    script.onerror = (error) => {
      console.error('❌ Failed to load Turnstile script:', error)
      onError?.()
    }

    window.onloadTurnstileCallback = () => {
      console.log('✅ Turnstile callback executed')
      setIsScriptLoaded(true)
    }

    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  // Render Turnstile widget
  useEffect(() => {
    console.log('🎨 Render effect triggered:', {
      scriptLoaded: isScriptLoaded,
      containerExists: !!containerRef.current,
      turnstileExists: !!window.turnstile,
      alreadyLoaded: isLoaded
    })

    if (!isScriptLoaded || !containerRef.current || !window.turnstile || isLoaded) {
      return
    }

    console.log('🚀 Rendering Turnstile widget...')
    try {
      const widgetId = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => {
          console.log('✅ Turnstile verification completed, token received')
          onVerify(token)
        },
        'error-callback': () => {
          console.error('❌ Turnstile widget error')
          onError?.()
        },
        'timeout-callback': () => {
          console.error('⏰ Turnstile widget timeout')
          onTimeout?.()
        },
        theme,
        size
      })

      console.log('✅ Turnstile widget rendered successfully, widget ID:', widgetId)
      widgetIdRef.current = widgetId
      setIsLoaded(true)
    } catch (error) {
      console.error('❌ Failed to render Turnstile widget:', error)
      onError?.()
    }
  }, [isScriptLoaded, siteKey, onVerify, onError, onTimeout, theme, size, isLoaded])

  // Cleanup
  useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
      }
    }
  }, [])

  const reset = () => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current)
    }
  }

  const getResponse = () => {
    if (widgetIdRef.current && window.turnstile) {
      return window.turnstile.getResponse(widgetIdRef.current)
    }
    return null
  }

  return (
    <div className={className}>
      <div ref={containerRef} />
      {!isScriptLoaded && (
        <div className="flex items-center justify-center h-16 bg-gray-50 rounded border border-gray-200">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-sm text-gray-600">Loading security check...</span>
        </div>
      )}
    </div>
  )
} 