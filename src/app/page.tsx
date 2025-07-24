"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, FileText, CheckCircle, Play, BarChart3, Wand2, Plus, Minus, MessageCircle, Brain, Zap, Target, Eye, XCircle, Edit3, MessageSquare, Award, Clock, Users, Star, TrendingUp, Shield, ArrowRight, FileText as FileTextIcon, Upload, Download, Copy, AlertCircle, Volume2, VolumeX } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav" // Import MobileNav
import { UserNav } from "@/components/user-nav"

export default function JobSuitHomepage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeStrategy, setActiveStrategy] = useState("addition")
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const faqs = [
    {
      question: "What is Jobsuit AI?",
      answer:
        "Jobsuit AI is an interactive resume and cover letter builder that helps you create, improve, and tailor your resume using AI-powered feedback. It offers personalized, section-based suggestions, keyword optimization, and job-specific tailoring — all with full control over every edit. You can also generate cover letters and track job applications in one place.",
    },
    {
      question: "How does Jobsuit tailor my resume?",
      answer:
        "Jobsuit analyzes your target job description, identifies the most important ATS keywords, and shows you exactly how to tailor your resume with them — naturally and accurately. Every suggestion is personalized based on your actual experience, so you can accept, modify, or reject with full control. No keyword stuffing. Just smart, AI-powered resume optimization built to help you stand out.",
    },
    {
      question: "Can I edit my resume with AI?",
      answer:
        "Yes! Jobsuit's AI editor lets you revise each section of your resume with targeted, personalized feedback. Instead of making random changes, our AI asks smart, guided questions to better understand your experience — helping you rewrite bullet points using strong action verbs, measurable impact, and recruiter-friendly language. It's like having a resume coach built into the platform.",
    },
    {
      question: "Is Jobsuit ATS-friendly?",
      answer:
        "Absolutely. Jobsuit is built with Applicant Tracking Systems (ATS) in mind. It helps you optimize your resume by highlighting relevant job-specific keywords, avoiding formatting issues that ATS tools can't read, and structuring your content to match recruiter expectations. All keyword suggestions are experience-based — no stuffing, just strategic tailoring.",
    },
    {
      question: "Do I need a job description to start?",
      answer:
        "No — you can build or improve your resume at any time using Jobsuit's AI resume builder. But if you want to tailor your resume for a specific job, simply paste in the job description and our AI will analyze it, extract the most important keywords, and guide you through personalized edits to align your resume with the role.",
    },
    {
      question: "Is Jobsuit free to use?",
      answer:
        "Yes! Jobsuit offers a free version where you can create, edit, and tailor your resume with AI-powered suggestions. You'll be able to access core features like resume analysis, keyword suggestions, and basic tailoring. Premium plans may be introduced in the future for advanced features, but you can get started for free.",
    },
    {
      question: "Can I download my resume?",
      answer:
        "Yes — once you've finished editing or tailoring your resume, you can instantly download it in a clean, ATS-friendly, professional format. Your resume will be ready to apply to jobs right away, no extra formatting needed.",
    },
    {
      question: "How is Jobsuit different from ChatGPT or other AI tools?",
      answer:
        "Jobsuit is built specifically for resume editing and job targeting — not as a general writing assistant. Unlike ChatGPT or other AI tools that rewrite your resume blindly and often add keywords you don't actually have experience with, Jobsuit takes a transparent, step-by-step approach. You'll see every keyword suggestion clearly, along with a specific explanation of how it can be integrated into your resume. You choose whether to accept, edit, or reject each change — giving you full control over the final version. This means no keyword stuffing, no generic edits, and no rewriting your resume with content that doesn't reflect your real experience. Jobsuit also offers a free trial so you can test all the core features and see how it works. Once your trial usage limit is reached, you can choose a paid plan if you want to continue tailoring and editing with AI.",
    },
  ]

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth"
    }
  }, [])

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
              <Link href="/#resume-builder" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">
                AI Resume Builder
              </Link>
              <Link href="/#cover-letter" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">
                AI Cover Letter Generator
              </Link>
              <Link href="/#tailor-resume" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">
                Tailor Your Resume
              </Link>
              <Link href="/pricing" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <UserNav />
              <MobileNav /> {/* Mobile navigation toggle */}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">CREATE YOUR RESUME</span>
            </div>

            {/* Optimized for 2 lines on desktop */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-8 max-w-6xl mx-auto">
              The AI That Helps Your <span className="text-blue-600">Resume Beat</span> The Hiring System
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-12 max-w-3xl mx-auto">
              Jobsuit is your interactive AI resume builder that helps you build, analyze, and tailor your resume to any
              job — with ATS-friendly keyword suggestions that will help you beat the hiring system
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://www.youtube.com/watch?v=GhzEjXF4OM0&t=86s" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-full">
                  Watch Demo
                </Button>
              </Link>
              <Link href="https://editor.jobsuit.ai/register">
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full bg-white shadow-sm"
                >
                  Sign Up For Free
                </Button>
              </Link>
            </div>

            {/* Video Demonstration Section */}
            <div className="mt-16 sm:mt-20 lg:mt-24">
              <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-xl">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/hey-jobsuit.png"
                >
                  <source src="/company-demo.mp4" type="video/mp4" />
                  <p className="text-white p-4">
                    Your browser doesn't support video playback. 
                    <a href="/company-demo.mp4" className="text-blue-400 underline ml-1">
                      Download the video instead
                    </a>
                  </p>
                </video>
                
                {/* Unmute Button */}
                <div className="absolute bottom-4 right-4">
                  <Button
                    onClick={toggleMute}
                    className="bg-black hover:bg-gray-800 text-white border-0 rounded-full p-3 transition-all duration-200"
                    size="sm"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Step Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">BENEFITS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Get Personalized <span className="text-blue-600">Resume</span> Feedback
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                And Tailor To Any Job In Seconds
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Step 1 - Create */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Create Your Resume</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build a ATS Friendly Resume Fast With Our AI Resume Builder
                </p>
              </div>

              {/* Step 2 - Analyze */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Analyze Your Resume</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI Resume Analysis with Instant Feedback on ATS, Keywords, and Content
                </p>
              </div>

              {/* Step 3 - Tailor */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wand2 className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Tailor Your Resume</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tailor Your Resume to Any Job Description — With AI Keyword Suggestions
                </p>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="hidden md:block relative mt-8">
              <div className="absolute top-1/2 left-1/3 w-1/3 h-px bg-gray-300 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-1/3 w-1/3 h-px bg-gray-300 transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ATS-Optimized Resume Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-blue-50 text-blue-600 border-blue-200 text-xs sm:text-sm font-medium">
                    CRAFT YOUR RESUME
                  </Badge>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Build An ATS-Optimized <span className="text-blue-600">Resume</span> With AI
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Professional AI Resume Builder That Aligns With You</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">ATS-Friendly Templates and Formatting</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Get Resume Facts from AI That Align You the Right Questions</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Quick to Write Automated Tailored AI Best Resume Summaries</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Fast, Relevant, and ATS for Suggestions — All in One Place</p>
                    </div>
                  </div>
                </div>

                <Link href="https://editor.jobsuit.ai/register">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-full">
                    Create Your Resume
                  </Button>
                </Link>
              </div>

              {/* Right Visual - Create Resume Video */}
              <div className="relative">
                <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden" style={{ height: 'min(547px, 60vh)' }}>
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/create-resume-video.mp4" type="video/mp4" />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
                      <div className="relative z-10 text-center">
                        <Play className="w-12 h-12 text-white mx-auto mb-3 opacity-80" />
                        <p className="text-white text-base font-medium">Create Resume Video</p>
                        <p className="text-blue-200 text-sm mt-1">Your browser doesn't support video</p>
                      </div>
                    </div>
                  </video>
                </div>

                {/* Badge */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-white mr-2" />
                    <span className="text-white font-semibold text-sm uppercase tracking-wide">
                      CREATE YOUR RESUME
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Analysis Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Visual - Analyze Resume Video */}
              <div className="relative order-2 lg:order-1">
                <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden" style={{ height: 'min(547px, 60vh)' }}>
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/analyze-resume-video.mp4" type="video/mp4" />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900"></div>
                      <div className="relative z-10 text-center">
                        <Play className="w-12 h-12 text-white mx-auto mb-3 opacity-80" />
                        <p className="text-white text-base font-medium">Analyze Resume Video</p>
                        <p className="text-green-200 text-sm mt-1">Your browser doesn't support video</p>
                      </div>
                    </div>
                  </video>
                </div>

                {/* Badge */}
                <div className="absolute -top-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-white mr-2" />
                    <span className="text-white font-semibold text-sm uppercase tracking-wide">
                      ANALYZE YOUR RESUME
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <div className="space-y-6">
                  <Badge className="bg-green-50 text-green-600 border-green-200 text-xs sm:text-sm font-medium">
                    ANALYZE YOUR RESUME
                  </Badge>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Analyze Your <span className="text-blue-600">Resume</span> And Get AI Feedback In Seconds
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Get Personalized Feedback for Every Section of Your Resume</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Compare Your Resume Against Top Candidates and Industry Standards</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        Identify Missing Metrics, Keywords, and Key Achievements Instantly
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Fix Weak Language with Real Impactful Verbs</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Answer Questions and Rewrite Your Resume Effortlessly</p>
                    </div>
                  </div>
                </div>

                <Link href="https://editor.jobsuit.ai/register">
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg rounded-full">
                    Start Your Resume
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Tailoring Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-purple-50 text-purple-600 border-purple-200 text-xs sm:text-sm font-medium">
                    TAILOR YOUR RESUME
                  </Badge>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Tailor Your Resume To Any Job With AI
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Paste Any Job Description — Instantly See Key Keywords</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Get Smart Suggestions for Modifying or Adding Bullet Points</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Accept or Reject Keyword Suggestions Instantly</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">AI Asks First — Explain Your Experience Before It Edits Anything</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Tailor Every Section With Clarity, Speed, and Full Transparency</p>
                    </div>
                  </div>
                </div>

                <Link href="https://editor.jobsuit.ai/register">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-full">
                    Start Tailoring Now
                  </Button>
                </Link>
              </div>

              {/* Right Visual - Tailor Resume Video */}
              <div className="relative">
                <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden" style={{ height: 'min(547px, 60vh)' }}>
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/tailor-resume-video.mp4" type="video/mp4" />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-purple-900"></div>
                      <div className="relative z-10 text-center">
                        <Play className="w-12 h-12 text-white mx-auto mb-3 opacity-80" />
                        <p className="text-white text-base font-medium">Tailor Resume Video</p>
                        <p className="text-purple-200 text-sm mt-1">Your browser doesn't support video</p>
                      </div>
                    </div>
                  </video>
                </div>

                {/* Badge */}
                <div className="absolute -top-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-white mr-2" />
                    <span className="text-white font-semibold text-sm uppercase tracking-wide">
                      TAILOR YOUR RESUME
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Your Way to the Perfect Resume Section */}
      <section id="resume-builder" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <Badge className="bg-blue-50 text-blue-600 border-blue-200 text-xs sm:text-sm font-medium">
                  Interactive Resume Building
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-3xl">
                  Chat your way to the perfect resume
                </h2>
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
              <Link href="#resume-builder">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full w-full sm:w-auto">
                  Try interactive building
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

      {/* Why Choose Conversational AI Section */}
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

      {/* See Every Keyword Suggestion Section */}
      <section id="tailor-resume" className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                See Every Keyword Suggestion
                <br />
                <span className="text-blue-600">Accept or Reject in One Click</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                No black box AI. Every suggestion is transparent, explained, and completely under your control.
              </p>
            </div>

            {/* Actual Interface Demo */}
            <div className="bg-gray-50 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-xl">
              {/* Header with Progress */}
              <div className="mb-6 lg:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3" />
                    Job Matching
                  </h3>
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">
                    Tailor to another job
                  </Button>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Keywords Integrated:</span>
                    <span>(6/13)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "46%" }}></div>
                  </div>
                </div>

                <div className="flex space-x-4 sm:space-x-6 border-b border-gray-200 overflow-x-auto">
                  <button className="pb-2 border-b-2 border-blue-500 text-blue-600 font-medium whitespace-nowrap text-sm sm:text-base">
                    Active 7
                  </button>
                  <button className="pb-2 text-gray-500 whitespace-nowrap text-sm sm:text-base">
                    Already Matched 6
                  </button>
                  <button className="pb-2 text-gray-500 whitespace-nowrap text-sm sm:text-base">Rejected 0</button>
                </div>
              </div>

              {/* Keyword Suggestions */}
              <div className="space-y-4 sm:space-y-6">
                {/* Contextual Match Example */}
                <div className="bg-white rounded-lg lg:rounded-xl border-l-4 border-orange-400 p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-3">
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1">
                        KEYWORDS PENDING CONFIRMATION
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <span className="font-semibold text-gray-900 text-sm sm:text-base">Product Management</span>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">PLACEMENT: Product Manager – Google</div>
                    </div>
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 flex items-center self-start lg:self-center text-xs sm:text-sm">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      CONTEXTUAL MATCH
                    </Badge>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-3 sm:p-4 mb-4">
                    <div className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Clarifying Question:</div>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">
                      Did you manage product roadmaps, coordinate with engineering teams, or make product decisions in
                      your previous roles? If not, do you have any other experience with product management?
                    </p>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Answer:</label>
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg resize-none text-sm sm:text-base"
                        rows={3}
                        placeholder="Please provide details about your experience with these keywords..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-600 bg-transparent text-sm sm:text-base"
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                      <div className="flex-1"></div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base">Yes</Button>
                    </div>
                  </div>
                </div>

                {/* Modification Example */}
                <div className="bg-white rounded-lg lg:rounded-xl border-l-4 border-blue-400 p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-3">
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1">
                        KEYWORDS MODIFIED
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="font-semibold text-gray-900 text-sm sm:text-base">Machine Learning</span>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">PLACEMENT: Software Engineer – Amazon</div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200 flex items-center self-start lg:self-center text-xs sm:text-sm">
                      <Edit3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      MODIFICATION
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Original Bullet:</div>
                      <div className="bg-gray-50 p-3 rounded-lg text-gray-700 text-sm sm:text-base">
                        Developed predictive algorithms to analyze user behavior patterns and improve recommendation
                        systems for e-commerce platform.
                      </div>
                    </div>

                    <div>
                      <div className="font-medium text-gray-900 mb-2 flex items-center text-blue-600 text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Modified Bullet
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg text-gray-700 border border-blue-200 text-sm sm:text-base">
                        Developed machine learning algorithms to analyze user behavior patterns and improve
                        recommendation systems for e-commerce platform.
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <div className="font-medium text-gray-900 mb-2 text-sm sm:text-base">REASONING:</div>
                      <p className="text-gray-700 text-sm">
                        The original bullet mentions 'predictive algorithms,' which directly relates to machine
                        learning. Modifying to include 'machine learning algorithms' makes this connection explicit and
                        aligns perfectly with the job requirements.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-600 bg-transparent text-sm sm:text-base"
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                      <div className="flex-1"></div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base">
                          Accept Revision
                        </Button>
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm sm:text-base">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Not Applicable Example */}
                <div className="bg-white rounded-lg lg:rounded-xl border-l-4 border-red-400 p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-3">
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1">
                        KEYWORDS NOT APPLICABLE
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <span className="font-semibold text-gray-900 text-sm sm:text-base">
                          Kubernetes, Docker, DevOps
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Integration Strategy: <span className="text-red-600">✕ Not Applicable</span>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Placement: N/A</div>
                    </div>
                    <Badge className="bg-red-100 text-red-700 border-red-200 flex items-center self-start lg:self-center text-xs sm:text-sm">
                      <XCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      NOT APPLICABLE
                    </Badge>
                  </div>

                  <div className="bg-red-50 p-3 sm:p-4 rounded-lg mb-4">
                    <div className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Reasoning:</div>
                    <p className="text-gray-700 text-sm">
                      These DevOps technologies are not mentioned or implied anywhere in the resume, including work
                      experience, skills, or education sections.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-600 bg-transparent text-sm sm:text-base"
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                    <div className="flex-1"></div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base">
                      <Wand2 className="w-4 h-4 mr-1" />
                      Fix with AI
                    </Button>
                  </div>
                </div>

                {/* Addition/Modification Combined Example */}
                <div className="bg-white rounded-lg lg:rounded-xl border-l-4 border-purple-400 p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-3">
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1">
                        ADDITION/MODIFICATION
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        <span className="font-semibold text-gray-900 text-sm sm:text-base">Data Analysis, SQL</span>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">PLACEMENT: Data Scientist – Microsoft</div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-700 border-purple-200 flex items-center self-start lg:self-center text-xs sm:text-sm">
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      ADDITION/MODIFICATION
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {/* Modification Section */}
                    <div className="border border-blue-200 rounded-lg p-3 sm:p-4 bg-blue-50">
                      <div className="flex items-center mb-3">
                        <Edit3 className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="font-medium text-blue-800 text-sm sm:text-base">Modification</span>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-1">Original Bullet:</div>
                          <div className="bg-white p-3 rounded text-sm text-gray-700">
                            Analyzed customer feedback and market trends to identify opportunities for product
                            improvements and feature enhancements.
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-blue-700 mb-1 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Modified Bullet
                          </div>
                          <div className="bg-blue-100 p-3 rounded text-sm text-gray-700 border border-blue-300">
                            Performed comprehensive data analysis using SQL to analyze customer feedback and market
                            trends, identifying opportunities for product improvements and feature enhancements.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Addition Section */}
                    <div className="border border-green-200 rounded-lg p-3 sm:p-4 bg-green-50">
                      <div className="flex items-center mb-3">
                        <Plus className="w-4 h-4 text-green-600 mr-2" />
                        <span className="font-medium text-green-800 text-sm sm:text-base">Addition</span>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-green-700 mb-1">+ New Bullet Point</div>
                        <div className="bg-green-100 p-3 rounded text-sm text-gray-700 border border-green-300">
                          Leveraged advanced SQL queries and data analysis techniques to extract insights from large
                          datasets, supporting data-driven decision making across multiple business units.
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-600 bg-transparent text-sm sm:text-base"
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                      <div className="flex-1"></div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base">
                          Accept Modification
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base">
                          Accept Addition
                        </Button>
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm sm:text-base">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Intelligent Integration Strategies Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                5 Intelligent Integration Strategies
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Our AI chooses the best approach for each keyword based on your existing experience and the job
                requirements.
              </p>
            </div>

            {/* Strategy Tabs */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
              <button
                onClick={() => setActiveStrategy("addition")}
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                  activeStrategy === "addition"
                    ? "bg-green-100 text-green-700 border-2 border-green-200"
                    : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300"
                }`}
              >
                <Plus className="w-4 h-4 mr-2" />
                Addition
              </button>
              <button
                onClick={() => setActiveStrategy("modification")}
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                  activeStrategy === "modification"
                    ? "bg-blue-100 text-blue-700 border-2 border-blue-200"
                    : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300"
                }`}
              >
                <Edit3 className="w-4 h-4 mr-2" />
                Modification
              </button>
              <button
                onClick={() => setActiveStrategy("contextual")}
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                  activeStrategy === "contextual"
                    ? "bg-orange-100 text-orange-700 border-2 border-orange-200"
                    : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300"
                }`}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Contextual Match
              </button>
              <button
                onClick={() => setActiveStrategy("skills")}
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                  activeStrategy === "skills"
                    ? "bg-purple-100 text-purple-700 border-2 border-purple-200"
                    : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300"
                }`}
              >
                <Award className="w-4 h-4 mr-2" />
                Skills Reinforcement
              </button>
              <button
                onClick={() => setActiveStrategy("notapplicable")}
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                  activeStrategy === "notapplicable"
                    ? "bg-red-100 text-red-700 border-2 border-red-200"
                    : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300"
                }`}
              >
                <XCircle className="w-4 h-4 mr-2" />
                Not Applicable
              </button>
            </div>

            {/* Strategy Content Card */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white border border-gray-200 shadow-lg p-8 sm:p-12">
                {activeStrategy === "addition" && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Plus className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Addition Strategy</h3>
                    <p className="text-lg text-gray-600 mb-8">
                      Add new bullet points that naturally incorporate missing keywords
                    </p>
                    <div className="text-left bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Example:</h4>
                      <p className="text-gray-700 italic">
                        Added: 'Conducted product demos during client presentations, showcasing key features to
                        prospective customers'
                      </p>
                    </div>
                  </div>
                )}

                {activeStrategy === "modification" && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Edit3 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Modification Strategy</h3>
                    <p className="text-lg text-gray-600 mb-8">
                      Enhance existing bullet points by weaving in relevant keywords
                    </p>
                    <div className="text-left bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Example:</h4>
                      <p className="text-gray-700 italic">
                        Modified: 'Led sales presentations' → 'Led sales presentations and product demos, contributing
                        to 15% increase in client engagement'
                      </p>
                    </div>
                  </div>
                )}

                {activeStrategy === "contextual" && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageSquare className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Contextual Match Strategy</h3>
                    <p className="text-lg text-gray-600 mb-8">
                      AI asks clarifying questions to understand your experience before suggesting changes
                    </p>
                    <div className="text-left bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Example:</h4>
                      <p className="text-gray-700 italic">
                        Question: 'Did you make outbound calls as part of your sponsorship role? This would help us add
                        the 'Cold Calling' keyword naturally.'
                      </p>
                    </div>
                  </div>
                )}

                {activeStrategy === "skills" && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Skills Reinforcement Strategy</h3>
                    <p className="text-lg text-gray-600 mb-8">
                      Strengthen existing skills mentions and add related competencies
                    </p>
                    <div className="text-left bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Example:</h4>
                      <p className="text-gray-700 italic">
                        Enhanced: 'Excel proficiency' → 'Advanced Excel proficiency including pivot tables, VLOOKUP, and
                        data visualization'
                      </p>
                    </div>
                  </div>
                )}

                {activeStrategy === "notapplicable" && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <XCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Not Applicable Strategy</h3>
                    <p className="text-lg text-gray-600 mb-8">
                      AI identifies keywords you don't have experience with, but you can chat with AI to add them if you
                      do
                    </p>
                    <div className="text-left bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Example:</h4>
                      <p className="text-gray-700 italic">
                        AI: 'No Salesforce experience found.' You: 'Actually, I used Salesforce in my internship.' AI:
                        'Great! Let me help you add that naturally.'
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Take Your Cover Letters to the Next Level with AI Section */}
      <section id="cover-letter" className="py-12 sm:py-16 lg:py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Take Your Cover Letters to the Next Level with AI
                  </h2>

                  <p className="text-lg text-blue-100 leading-relaxed">
                    Create cover letters that don't just get interviews. This intelligent cover letters speak directly
                    to the job you want and makes you the best choice for the role.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                      <p className="text-blue-100">
                        <strong className="text-white">Personalized content:</strong> Our AI analyzes your experience
                        and the job requirements to create tailored content that highlights your best qualifications.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                      <p className="text-blue-100">
                        <strong className="text-white">No boilerplate:</strong> No basic pages, just a personalized
                        cover for why you belong in this role.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="https://editor.jobsuit.ai/register">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg rounded-full border border-blue-600">
                    Write a cover letter with AI
                  </Button>
                </Link>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <Card className="bg-white shadow-2xl border-0 p-8 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-semibold text-gray-900">Cover Letter Preview</span>
                    </div>

                    <div className="space-y-3 text-sm text-gray-700">
                      <p className="font-medium">Dear Hiring Manager,</p>
                      <p>
                        I am writing to express my strong interest in the Senior Software Engineer position at TechCorp.
                        With my 5+ years of experience in full-stack development and proven track record of delivering
                        scalable solutions...
                      </p>
                      <p>
                        In my previous role at StartupXYZ, I successfully led a team of 4 developers to build a
                        microservices architecture that improved system performance by 40%...
                      </p>
                      <p>
                        I am particularly excited about TechCorp's commitment to innovation and would love to contribute
                        to your mission of revolutionizing the industry...
                      </p>
                      <p className="font-medium">
                        Sincerely,
                        <br />
                        John Smith
                      </p>
                    </div>

                    <div className="flex space-x-2 pt-4 border-t">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit3 className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  AI Generated
                </div>
                <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                  ATS Friendly
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works – Generate Professional Cover Letters Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How it works</h2>     
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Generate professional cover letters in minutes with our AI-powered tool
              </p>
            </div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Name Your Cover Letter</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">Start by giving your cover letter a descriptive name to keep it organized and easy to find later.</p>
                </div>
                <div>
                  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/cover letter 1.mp4" type="video/mp4" />
                      <div className="w-full h-full bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center">
                        <p className="text-white">Video not supported</p>
                      </div>
                    </video>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="lg:order-2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Select Which Job You're Applying For</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">Choose the specific job position you're applying for or add a new job description to tailor your letter.</p>
                </div>
                <div className="lg:order-1">
                  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/cover letter 2.mp4" type="video/mp4" />
                      <div className="w-full h-full bg-gradient-to-br from-purple-800 to-purple-900 flex items-center justify-center">
                        <p className="text-white">Video not supported</p>
                      </div>
                    </video>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Select Which Resume You Want To Use</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">Choose from your saved resumes or upload a new one to match your cover letter with your experience.</p>
                </div>
                <div>
                  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/cover letter 3.mp4" type="video/mp4" />
                      <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center">
                        <p className="text-white">Video not supported</p>
                      </div>
                    </video>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="lg:order-2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Generate Your Cover Letter</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">Let our AI create a personalized, professional cover letter tailored to your job and experience.</p>
                </div>
                <div className="lg:order-1">
                  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/cover letter 4.mp4" type="video/mp4" />
                      <div className="w-full h-full bg-gradient-to-br from-orange-800 to-orange-900 flex items-center justify-center">
                        <p className="text-white">Video not supported</p>
                      </div>
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Cover Letter Generator Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Cover Letter Generator?</h2>
              <p className="text-lg text-gray-600">Powered by advanced AI to give you the competitive edge</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">AI-Powered Intelligence</h3>
                <p className="text-gray-600">
                  Our advanced AI analyzes job descriptions and tailors your cover letter to match specific requirements
                  and keywords.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600">
                  Generate professional cover letters in under 2 minutes. No more spending hours crafting the perfect
                  letter.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">ATS Optimized</h3>
                <p className="text-gray-600">
                  All cover letters are optimized for Applicant Tracking Systems to ensure they pass initial screenings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">Everything you need to know about JobSuit AI Resume Builder</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-md transition-all duration-200">
                  <CardContent className="p-0">
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {openFAQ === index ? (
                        <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to beat the hiring system?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've already transformed their careers with JobSuit AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="https://editor.jobsuit.ai/register">
                <Button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-4 text-lg rounded-full">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Started Free
                </Button>
              </Link>
              <Link href="https://www.youtube.com/watch?v=GhzEjXF4OM0&t=86s" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full bg-transparent"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-blue-100">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-200 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-200 mr-2" />
                Free forever plan
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-200 mr-2" />
                ATS-optimized templates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 sm:py-20 bg-white border-t border-gray-200">
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