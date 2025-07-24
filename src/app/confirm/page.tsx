"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle, ArrowLeft, Home } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ConfirmContent() {
  const searchParams = useSearchParams()
  const message = searchParams.get('message') || 'Please check your email to confirm your account'

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img src="/Logo Jobsuit name.png" alt="JOBSUIT" className="h-8 w-auto" />
            </Link>
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
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
              Check your email
            </h1>
            <p className="text-gray-600">
              We've sent you a confirmation link to complete your signup
            </p>
          </div>

          {/* Confirmation Card */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <Mail className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">Email sent!</span>
                  </div>
                  <p className="text-green-700 text-sm">{message}</p>
                </div>

                <div className="text-sm text-gray-600 space-y-2">
                  <p>Click the link in your email to activate your account.</p>
                  <p>
                    Didn't receive the email? Check your spam folder or{" "}
                    <Link href="/signup" className="text-blue-600 hover:text-blue-800">
                      try signing up again
                    </Link>
                    .
                  </p>
                </div>

                <div className="space-y-3">
                  <Button asChild className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    <Link href="/login">
                      Sign In
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full h-12">
                    <Link href="/">
                      <Home className="w-4 h-4 mr-2" />
                      Back to Home
                    </Link>
                  </Button>
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

export default function ConfirmPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    }>
      <ConfirmContent />
    </Suspense>
  )
} 