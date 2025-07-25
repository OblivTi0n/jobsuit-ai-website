"use client"

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ExternalLink, Loader2 } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [redirecting, setRedirecting] = useState(false)
  useEffect(() => {
    // Auto-redirect after 2.5 seconds
    const redirectTimeout = setTimeout(() => {
      setRedirecting(true)
      // Redirect to editor.jobsuit.ai
      window.location.href = 'https://editor.jobsuit.ai'
    }, 2500)

    return () => clearTimeout(redirectTimeout)
  }, [])

  const handleRedirectNow = () => {
    setRedirecting(true)
    window.location.href = 'https://editor.jobsuit.ai'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center">
            <Link href="/" className="flex items-center">
              <img src="/Logo Jobsuit name.png" alt="JOBSUIT" className="h-8 w-auto" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
        <div className="w-full max-w-md">
          {/* Success Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Payment Successful!
            </h1>
            <p className="text-gray-600">
              Thank you for upgrading to Jobsuit Pro
            </p>
          </div>

          {/* Success Card */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">Subscription Active!</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Your Pro plan is now active and ready to use.
                  </p>
                </div>

                {!redirecting ? (
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Redirecting to Jobsuit Editor...
                    </p>
                    
                    <Button 
                      onClick={handleRedirectNow}
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Go to Editor Now
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <Loader2 className="w-5 h-5 animate-spin text-blue-600 mr-2" />
                      <span className="text-gray-600">Redirecting to Jobsuit Editor...</span>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">
                    You can also access these from your dashboard:
                  </p>
                  <div className="space-y-2">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/dashboard">
                        View Dashboard
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Need help?{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-800">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 