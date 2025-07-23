"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, FileText, CheckCircle, Play, BarChart3, Wand2, Plus, Minus } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav" // Import MobileNav

export default function JobSuitHomepage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

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
              <Link href="/resume-builder" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">
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
                  className="w-full h-full object-cover"
                  controls
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
                
                {/* Custom Play Button Overlay (optional - you can remove this if you want default controls) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black bg-opacity-50 rounded-full p-4">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
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
                <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden" style={{ height: '547px' }}>
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
                <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden" style={{ height: '547px' }}>
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
                <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden" style={{ height: '547px' }}>
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