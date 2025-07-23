"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Sparkles, Check, Star, Users, Crown, Zap } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav" // Import MobileNav

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly")

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "Best for students, early job seekers, and casual users",
      buttonText: "Start Today",
      buttonVariant: "outline" as const,
      popular: false,
      icon: Users,
      features: [
        "3 Free Resume Scans",
        "Tailor Resume to 3 jobs/month",
        "Create Resume with AI",
        "Limited Access to AI Chatbot",
        "Free Resume Templates",
        "Up to 5 Fix With AI",
        "Keyword Analysis",
        "Job Tracker",
        "AI Bullet Point Generator",
        "Export to PDF",
      ],
    },
    {
      name: "Pro",
      price: billingCycle === "monthly" ? "$14.99" : "$39.99",
      period: billingCycle === "monthly" ? "/ mo" : "/ quarter",
      description: "Perfect for active job seekers who apply regularly",
      buttonText: "Start Today",
      buttonVariant: "default" as const,
      popular: true,
      icon: Star,
      features: [
        "Unlimited Resume Scans",
        "Tailor Resume to 50 jobs/month",
        "Create Resume with AI",
        "Full Access to AI Chatbot",
        "Premium Resume Templates",
        "Unlimited Fixes with AI",
        "Advanced Keyword Analysis",
        "Job Board Tracker",
        "Unlimited AI Bullet Point Generator",
        "Export to PDF",
        "Priority Email Support",
      ],
    },
    {
      name: "Elite",
      price: billingCycle === "monthly" ? "$29.99" : "$79.99",
      period: billingCycle === "monthly" ? "/ mo" : "/ quarter",
      description: "Best for career changers, power users, and those applying to top jobs",
      buttonText: "Start Today",
      buttonVariant: "outline" as const,
      popular: false,
      icon: Crown,
      features: [
        "Unlimited Resume Scans",
        "Tailor Resume to Unlimited Jobs",
        "Create Resume with AI",
        "Full Access to AI Chatbot",
        "Access To All Resume Templates",
        "Unlimited Fixes with AI",
        "Advanced Keyword Analysis",
        "Job Board Tracker",
        "Unlimited AI Bullet Point Generator",
        "Export to PDF",
        "First Priority Email Support",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/homepage" className="flex items-center">
                <img src="/Logo Jobsuit name.png" alt="JOBSUIT" className="h-8 sm:h-9 lg:h-10 w-auto" />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link href="/" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">
                AI Resume Builder
              </Link>
              <Link href="/cover-letter" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">
                AI Cover Letter Generator
              </Link>
              <Link href="/tailor-resume" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">
                Tailor Your Resume
              </Link>
              <DropdownMenu
                trigger="More"
                items={[
                  { label: "Pricing", href: "/pricing" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Contact", href: "/contact" }
                ]}
              />
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link href="https://editor.jobsuit.ai/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 sm:px-4 lg:px-6 py-2 text-sm lg:text-base">
                  Sign up
                </Button>
              </Link>
              <Link href="https://editor.jobsuit.ai/register">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent px-3 sm:px-4 lg:px-6 py-2 text-sm lg:text-base"
                >
                  Log in
                </Button>
              </Link>
              <MobileNav /> {/* Mobile navigation toggle */}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">PRICING</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Explore Our <span className="text-blue-600">Pricing</span>.
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-12 max-w-3xl mx-auto">
              Choose the plan that fits your job hunt. Whether you're just starting or applying daily, Jobsuit's AI
              tools grow with you.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-full flex">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === "monthly"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("quarterly")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === "quarterly"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Quarterly
                </button>
              </div>
              {billingCycle === "quarterly" && (
                <Badge className="ml-3 bg-green-100 text-green-700 border-green-200">Save 25%</Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
              {plans.map((plan, index) => (
                <div key={index} className="relative">
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-red-500 text-white border-red-500 px-4 py-1 text-xs font-medium">
                        🔥 MOST POPULAR
                      </Badge>
                    </div>
                  )}

                  <Card
                    className={`h-full ${
                      plan.popular
                        ? "bg-gradient-to-b from-teal-700 to-teal-800 text-white border-0 shadow-2xl scale-105"
                        : "bg-white border-gray-200 shadow-lg"
                    } transition-all duration-300 hover:shadow-xl`}
                  >
                    <CardContent className="p-8">
                      {/* Plan Header */}
                      <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              plan.popular ? "bg-white/20" : "bg-blue-100"
                            }`}
                          >
                            <plan.icon className={`w-6 h-6 ${plan.popular ? "text-white" : "text-blue-600"}`} />
                          </div>
                        </div>

                        <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                          {plan.name}
                        </h3>

                        <p className={`text-sm mb-6 ${plan.popular ? "text-teal-100" : "text-gray-600"}`}>
                          {plan.description}
                        </p>

                        <div className="mb-6">
                          <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                            {plan.price}
                          </span>
                          <span className={`text-lg ${plan.popular ? "text-teal-200" : "text-gray-500"}`}>
                            {plan.period}
                          </span>
                        </div>

                        {plan.name !== "Free" && (
                          <p className={`text-sm ${plan.popular ? "text-teal-200" : "text-gray-500"}`}>
                            Pause or cancel anytime.
                          </p>
                        )}

                        {plan.name === "Free" && (
                          <p className={`text-sm ${plan.popular ? "text-teal-200" : "text-gray-500"}`}>
                            Try it out for free
                          </p>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="mb-8">
                        {plan.name === "Free" ? (
                          <Link href="https://editor.jobsuit.ai/register">
                            <Button
                              className={`w-full py-3 text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent`}
                              variant="outline"
                            >
                              {plan.buttonText}
                            </Button>
                          </Link>
                        ) : plan.name === "Pro" ? (
                          <Link href={
                            billingCycle === "monthly" 
                              ? "https://buy.stripe.com/fZu5kDfpO8d20BJ6lNaVa08"
                              : "https://buy.stripe.com/aFa3cvb9y8d20BJcKbaVa09"
                          }>
                            <Button
                              className={`w-full py-3 text-lg font-semibold ${
                                plan.popular
                                  ? "bg-white text-teal-700 hover:bg-gray-100"
                                  : "bg-blue-600 hover:bg-blue-700 text-white"
                              }`}
                              variant={plan.popular ? "default" : "default"}
                            >
                              {plan.buttonText}
                            </Button>
                          </Link>
                        ) : plan.name === "Elite" ? (
                          <Link href={
                            billingCycle === "monthly"
                              ? "https://buy.stripe.com/6oU5kDa5u1OEesz39BaVa07"
                              : "https://buy.stripe.com/eVqfZhelK50QfwDbG7aVa0a"
                          }>
                            <Button
                              className={`w-full py-3 text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent`}
                              variant="outline"
                            >
                              {plan.buttonText}
                            </Button>
                          </Link>
                        ) : null}
                      </div>

                      {/* Features List */}
                      <div className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <Check
                              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                plan.popular ? "text-teal-200" : "text-green-500"
                              }`}
                            />
                            <span className={`text-sm ${plan.popular ? "text-teal-100" : "text-gray-600"}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Everything you need to know about our pricing</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
                  <p className="text-gray-600">
                    Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at
                    your next billing cycle.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600">
                    We accept all major credit cards (Visa, MasterCard, American Express) and PayPal for your
                    convenience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
                  <p className="text-gray-600">
                    Our Free plan gives you access to core features with no time limit. You can upgrade anytime to
                    unlock more powerful features.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
                  <p className="text-gray-600">
                    We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact us for a
                    full refund.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens to my data if I cancel?</h3>
                  <p className="text-gray-600">
                    Your data remains accessible for 30 days after cancellation. You can export your resumes and data
                    anytime during this period.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer student discounts?</h3>
                  <p className="text-gray-600">
                    Yes! Students can get 50% off any paid plan with a valid student email address. Contact support for
                    details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Job Search?</h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've already accelerated their careers with JobSuit AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://editor.jobsuit.ai/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-full">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Today
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/Logo Jobsuit name.png" alt="JOBSUIT" className="h-8 w-auto bg-white rounded-sm" />
            </div>
            <div className="flex items-center space-x-6 text-gray-500">
              <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/pricing" className="hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
