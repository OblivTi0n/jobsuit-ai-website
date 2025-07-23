"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import {
  Sparkles,
  Zap,
  Brain,
  FileText,
  MessageCircle,
  AlertCircle,
  Users,
  Star,
  Clock,
  Target,
  CheckCircle,
  ArrowRight,
  Shield,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav" // Import MobileNav

export default function AIResumeBuilder() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      company: "Tech Startup",
      content:
        "The conversational AI helped me rewrite my entire resume in 30 minutes. Got 3 interviews in the first week!",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Software Engineer",
      company: "Fortune 500",
      content: "Finally, an AI that actually understands context. The chat feature made resume building feel natural.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Project Manager",
      company: "Consulting Firm",
      content:
        "The three-panel interface is genius. I could see my resume improve in real-time as I chatted with the AI.",
      rating: 5,
    },
  ]

  const stats = [
    { icon: Users, value: "1,000+", label: "Resumes Created" },
    { icon: Star, value: "4.9/5", label: "Early Beta Rating" },
    { icon: Clock, value: "10 min", label: "Creation Time" },
    { icon: Target, value: "85%", label: "Clarity Improvement" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img src="/Logo Jobsuit name.png" alt="JOBSUIT" className="h-8 sm:h-9 lg:h-10 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link href="/resume-builder" className="text-sm lg:text-base text-gray-700 hover:text-gray-900 font-medium">
                AI Resume Builder
              </Link>
              <Link href="/cover-letter" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">
                AI Cover Letter Generator
              </Link>
              <Link href="/tailor-resume" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">
                Tailor Your Resume
              </Link>
              <Link href="/pricing" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <Badge className="bg-blue-50 text-blue-600 border-blue-200 text-xs sm:text-sm font-medium">
                  Interactive AI Resume Builder
                </Badge>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-3xl">
                  Chat Your Way to the Perfect Resume
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                  The first conversational AI resume builder. Chat back and forth with AI to craft your perfect resume -
                  like having a personal career coach.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      Interactive AI Conversations
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Chat naturally with AI to build and refine your resume in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Smart Resume Analysis</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Get detailed feedback on every section with actionable improvements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Live Resume Updates</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Watch your resume improve instantly as you chat with the AI.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="https://editor.jobsuit.ai/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full w-full sm:w-auto">
                  Start chatting with AI
                </Button>
              </Link>
            </div>

            {/* Right Visual - Larger Interface Screenshot */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SDFSMfb3BkFiEwxKTfySWFB0uaHEYD.png"
                  alt="JobSuit AI Resume Builder Interface"
                  className="w-full h-auto rounded-lg shadow-2xl border border-gray-200 max-w-none lg:max-w-2xl xl:max-w-3xl"
                />

                {/* Floating Enhancement Cards - Responsive */}
                <Card className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-green-500 text-white p-2 sm:p-3 shadow-lg transform -rotate-3 z-20">
                  <div className="text-center">
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mx-auto mb-1" />
                    <div className="text-xs font-medium">Live Chat</div>
                  </div>
                </Card>

                <Card className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 bg-white p-2 sm:p-3 shadow-lg border-2 border-blue-200 z-20">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">AI Analyzing...</span>
                  </div>
                </Card>

                <Card className="absolute bottom-4 sm:bottom-6 lg:bottom-8 -right-4 sm:-right-6 lg:-right-8 bg-white p-2 sm:p-3 shadow-lg border-2 border-purple-200 z-20">
                  <div className="text-center">
                    <div className="text-sm sm:text-base lg:text-lg font-bold text-purple-600">3-Panel</div>
                    <div className="text-xs text-gray-600">Interface</div>
                  </div>
                </Card>
              </div>

              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-6 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-50 rounded-full mb-2 sm:mb-3">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <Badge className="bg-blue-50 text-blue-600 border-blue-200 text-xs sm:text-sm font-medium">
                  Interactive Resume Building
                </Badge>

                {/* Changed text from "Like Cursor" */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Build Your Resume with Intelligent AI Guidance
                </h2>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Experience a new way to craft your resume. Our AI acts as your personal career coach, guiding you
                  through the process with natural conversations. Ask questions, get instant suggestions, and watch your
                  resume transform in real-time across three powerful panels.
                </p>
              </div>

              <Link href="https://editor.jobsuit.ai/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full w-full sm:w-auto">
                  Try interactive building
                </Button>
              </Link>
            </div>

            {/* Right Visual - Three Panel Breakdown */}
            <div className="relative mt-8 lg:mt-0">
              <div className="space-y-3 sm:space-y-4">
                {/* Panel 1 */}
                <Card className="bg-white shadow-lg border-0 p-3 sm:p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">Smart Analysis Panel</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Real-time feedback on every section</p>
                    </div>
                  </div>
                </Card>

                {/* Panel 2 */}
                <Card className="bg-white shadow-lg border-0 p-3 sm:p-4 ml-4 sm:ml-6 lg:ml-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">Interactive Chat</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Natural conversation with AI coach</p>
                    </div>
                  </div>
                </Card>

                {/* Panel 3 */}
                <Card className="bg-white shadow-lg border-0 p-3 sm:p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">Live Resume Preview</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Watch changes happen instantly</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Connection Lines */}
              <div className="absolute top-6 sm:top-8 left-3 sm:left-4 w-px h-12 sm:h-16 bg-gray-300"></div>
              <div className="absolute top-18 sm:top-24 left-7 sm:left-10 lg:left-12 w-px h-12 sm:h-16 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-50 text-blue-600 border-blue-200 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Conversational AI
            </Badge>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              Your personal AI career coach
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Unlike other AI resume builders that just give you suggestions, our AI has real conversations with you to
              understand your unique career story.
            </p>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Natural Conversations</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Chat naturally with AI like you would with a career counselor. Ask questions, get clarifications.
                </p>
              </div>

              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Real-time Collaboration</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Watch your resume update instantly as you chat. See changes happen in real-time.
                </p>
              </div>

              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Detailed Analysis</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Get comprehensive feedback on every section with actionable improvement suggestions.
                </p>
              </div>
            </div>

            <Link href="https://editor.jobsuit.ai/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full w-full sm:w-auto">
                Start your conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              What our users are saying
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of professionals who've transformed their careers with conversational AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why choose conversational AI?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference of having a real conversation about your career.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">ATS Optimized</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Ensure your resume passes applicant tracking systems with AI-optimized formatting.
              </p>
            </div>

            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">Save Time</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Build a professional resume in minutes, not hours. Let AI handle the heavy lifting.
              </p>
            </div>

            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">Better Results</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Users report 3x more interview callbacks with AI-optimized resumes.
              </p>
            </div>

            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange-600" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">Privacy First</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Your data is secure and never shared. Complete privacy guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to transform your career?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've already discovered the power of conversational AI resume building.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
              <Link href="https://editor.jobsuit.ai/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Start Building Now
                </Button>
              </Link>
              <Link href="https://www.youtube.com/watch?v=GhzEjXF4OM0&t=86s" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-gray-200 text-gray-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full bg-transparent"
                >
                  Watch Demo
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                Free to try
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                Instant results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/Logo Jobsuit name.png" alt="JOBSUIT" className="h-8 w-auto bg-white rounded-sm" />
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 text-sm sm:text-base text-gray-500">
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