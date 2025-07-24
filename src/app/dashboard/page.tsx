import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, CreditCard, Download, ExternalLink, TrendingUp, Zap, Clock, DollarSign, BarChart3, Sparkles, MessageCircle } from "lucide-react"
import Link from "next/link"
import { ManageSubscriptionButton } from "@/components/manage-subscription-button"
import { SignOutButton } from "@/components/sign-out-button"

// Define token limits for each plan
const TOKEN_LIMITS = {
  free: {
    analysis_token: 3,
    tailoring_token: 3,
    chat_token: 15
  },
  pro: {
    analysis_token: 100,
    tailoring_token: 100,
    chat_token: 350
  }
}

interface UserData {
  plan: 'free' | 'pro'
  tokens: {
    analysis_token: number
    tailoring_token: number
    chat_token: number
  }
  subscription?: any
}

async function getUserData(userId: string): Promise<UserData> {
  const supabase = await createClient()

  // Get user's subscription
  const { data: subscription, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'active')
    .maybeSingle()

  if (error) {
    console.error('Error fetching subscription:', error)
  }

  // Determine plan and tokens
  if (subscription) {
    // User has an active subscription
    const plan = subscription.plan === 'pro' ? 'pro' : 'free'
    return {
      plan,
      tokens: {
        analysis_token: subscription.analysis_token || 0,
        tailoring_token: subscription.tailoring_token || 0,
        chat_token: subscription.chat_token || 0
      },
      subscription
    }
  } else {
    // Free user - check if they have any free tokens left in a profile/usage table
    // For now, assuming free users start with full limits
    return {
      plan: 'free',
      tokens: {
        analysis_token: TOKEN_LIMITS.free.analysis_token,
        tailoring_token: TOKEN_LIMITS.free.tailoring_token,
        chat_token: TOKEN_LIMITS.free.chat_token
      }
    }
  }
}

function calculateUsage(plan: 'free' | 'pro', remainingTokens: number, tokenType: keyof typeof TOKEN_LIMITS.free) {
  const maxTokens = TOKEN_LIMITS[plan][tokenType]
  const usedTokens = Math.max(0, maxTokens - remainingTokens)
  const usagePercentage = Math.min(100, (usedTokens / maxTokens) * 100)
  
  return {
    used: usedTokens,
    remaining: remainingTokens,
    max: maxTokens,
    percentage: usagePercentage
  }
}

function TokenUsageCard({ 
  title, 
  icon: Icon, 
  usage, 
  description, 
  colorClass 
}: {
  title: string
  icon: any
  usage: ReturnType<typeof calculateUsage>
  description: string
  colorClass: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <div className={`p-2 ${colorClass}-50 rounded-lg mr-3`}>
          <Icon className={`w-5 h-5 ${colorClass}-600`} />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
      
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-2xl font-bold text-gray-900">{usage.remaining}</span>
        <span className="text-sm text-gray-500">of {usage.max}</span>
      </div>
      
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div 
          className={`${colorClass}-500 h-2 rounded-full transition-all duration-300`}
          style={{ width: `${(usage.remaining / usage.max) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  const user = data.user
  const userData = await getUserData(user.id)

  // Calculate usage for each token type
  const analysisUsage = calculateUsage(userData.plan, userData.tokens.analysis_token, 'analysis_token')
  const tailoringUsage = calculateUsage(userData.plan, userData.tokens.tailoring_token, 'tailoring_token')
  const chatUsage = calculateUsage(userData.plan, userData.tokens.chat_token, 'chat_token')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img src="/Logo Jobsuit name.png" alt="JOBSUIT" className="h-8 w-auto" />
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Home
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Pricing
              </Link>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <SignOutButton />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* User Info & Plan Overview */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                {user.email}
              </h1>
              <Badge className={userData.plan === 'pro' ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-blue-100 text-blue-800 hover:bg-blue-100"}>
                {userData.plan === 'pro' ? 'Pro Plan' : 'Free Plan'}
              </Badge>
            </div>
            <ManageSubscriptionButton plan={userData.plan} />
          </div>
        </div>

        {/* Billing Info for Pro Users */}
        {userData.plan === 'pro' && userData.subscription && (
          <div className="mb-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Current Period</p>
                  <div className="flex items-baseline">
                    <span className="text-lg font-semibold text-gray-900">
                      {new Date(userData.subscription.current_period_start).toLocaleDateString()} - {' '}
                      {new Date(userData.subscription.current_period_end).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Status</p>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    {userData.subscription.status}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Token Usage */}
        <div className="mb-8">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Token Usage This Month</h2>
              <span className="text-sm text-gray-500">
                {userData.plan === 'pro' ? 'Pro Plan Limits' : 'Free Plan Limits'}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TokenUsageCard
              title="Analysis Tokens"
              icon={BarChart3}
              usage={analysisUsage}
              description="Resume analysis & feedback"
              colorClass="bg-blue"
            />
            
            <TokenUsageCard
              title="Tailoring Tokens"
              icon={Sparkles}
              usage={tailoringUsage}
              description="Job-specific customization"
              colorClass="bg-green"
            />
            
            <TokenUsageCard
              title="Chat Tokens"
              icon={MessageCircle}
              usage={chatUsage}
              description="AI chat interactions"
              colorClass="bg-purple"
            />
          </div>
        </div>

        {/* Upgrade CTA for Free Users */}
        {userData.plan === 'free' && (
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Need more tokens?
                  </h3>
                  <p className="text-gray-600">
                    Upgrade to Pro for {TOKEN_LIMITS.pro.analysis_token} analysis tokens, {TOKEN_LIMITS.pro.tailoring_token} tailoring tokens, and {TOKEN_LIMITS.pro.chat_token} chat tokens per month.
                  </p>
                </div>
                <Link href="/pricing">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Upgrade Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

  

        {/* Token Refresh Info */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Token Information</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">How Tokens Work</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Analysis tokens are used for resume scanning and feedback</li>
                  <li>• Tailoring tokens are used for job-specific resume customization</li>
                  <li>• Chat tokens are used for AI chatbot interactions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Token Refresh</h3>
                <p className="text-sm text-gray-600">
                  {userData.plan === 'pro' 
                    ? 'Pro plan tokens refresh monthly on your billing cycle.'
                    : 'Free plan tokens refresh monthly on the 1st of each month.'
                  }
                </p>
                {userData.plan === 'pro' && userData.subscription && (
                  <p className="text-sm text-gray-500 mt-1">
                    Next refresh: {new Date(userData.subscription.current_period_end).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 