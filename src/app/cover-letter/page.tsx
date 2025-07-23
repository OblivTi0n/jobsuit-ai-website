"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import {
  Sparkles,
  FileText,
  Wand2,
  Eye,
  Star,
  Clock,
  Users,
  Target,
  Upload,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Download,
  Copy,
  Edit3,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav" // Import MobileNav

export default function CoverLetterGenerator() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    resume: "",
  })

  const stats = [
    { icon: Users, value: "1,500+", label: "Cover Letters Created" },
    { icon: Star, value: "4.8/5", label: "Early User Rating" },
    { icon: Clock, value: "30 sec", label: "Generation Time" },
    { icon: Target, value: "65%", label: "Response Rate" },
  ]



  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
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
              <a href="#" className="text-sm lg:text-base text-gray-700 hover:text-gray-900 font-medium">
                AI Cover Letter Generator
              </a>
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
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent px-3 sm:px-4 lg:px-6 py-2 text-sm lg:text-base"
              >
                Log in
              </Button>
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
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                AI COVER LETTER GENERATOR
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-8">
              A Smarter, Faster Way to Write <span className="text-blue-600">Cover Letters</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-12 max-w-3xl mx-auto">
              Create personalized, ATS-friendly cover letters that get you noticed. Our AI analyzes job descriptions and
              tailors your cover letter to match exactly what employers are looking for.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="https://editor.jobsuit.ai/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-full">
                  <Wand2 className="w-5 h-5 mr-2" />
                  Generate a Cover Letter for Free
                </Button>
              </Link>
              <Link href="https://editor.jobsuit.ai/register">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full bg-transparent"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View Examples
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
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
        </div>
      </section>

      {/* Three Steps Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Create professional cover letters in minutes with our AI-powered process</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-blue-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tailor your message to the role</h3>
                <p className="text-gray-600 leading-relaxed">Tell us the position. You can either fill out the form or upload a job description. Our AI will analyze the role and tailor your cover letter to the specific requirements.</p>
              </div>
              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200 shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Work smarter, not longer</h3>
                <p className="text-gray-600 leading-relaxed">Use the Cover Letter Generator to speed up your process without sacrificing quality or personality. Our AI creates personalized content that reflects your unique experience.</p>
              </div>
              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-green-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200 shadow-lg">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Give your application more polish</h3>
                <p className="text-gray-600 leading-relaxed">Download your cover letter as a PDF or Word document. Our templates are professionally designed and ATS-friendly to ensure your application stands out.</p>
              </div>
            </div>
            {/* Connection Lines */}
            <div className="hidden md:block relative mt-8">
              <div className="absolute top-1/2 left-1/3 w-1/3 h-px bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-1/3 w-1/3 h-px bg-gradient-to-r from-purple-300 to-green-300 transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600">
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
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-full">
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

      {/* How It Works Section with Videos */}
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



      {/* Features Section */}
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

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've already transformed their job search with AI-powered cover letters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="https://editor.jobsuit.ai/register">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg rounded-full">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Creating Now
                </Button>
              </Link>
              <Link href="https://editor.jobsuit.ai/register">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full bg-transparent"
                >
                  View Examples
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-blue-100">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-200 mr-2" />
                Free to try
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-200 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-200 mr-2" />
                Professional templates
              </div>
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
