"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import {
  Sparkles,
  Target,
  CheckCircle,
  XCircle,
  Wand2,
  Eye,
  Plus,
  Edit3,
  MessageSquare,
  Award,
  Clock,
  Users,
  Star,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav" // Import MobileNav

export default function TailorResumePage() {
  const [activeStrategy, setActiveStrategy] = useState("addition")

  const stats = [
    { icon: Users, value: "800+", label: "Resumes Tailored" },
    { icon: Star, value: "4.9/5", label: "Early Beta Rating" },
    { icon: Clock, value: "<2 min", label: "Tailoring Time" },
    { icon: Target, value: "90%", label: "Keyword Match Accuracy" },
  ]

  const strategies = [
    {
      id: "addition",
      name: "Addition",
      icon: Plus,
      color: "bg-green-100 text-green-600 border-green-200",
      description: "Add new bullet points that naturally incorporate missing keywords",
      example:
        "Added: 'Conducted product demos during client presentations, showcasing key features to prospective customers'",
    },
    {
      id: "modification",
      name: "Modification",
      icon: Edit3,
      color: "bg-blue-100 text-blue-600 border-blue-200",
      description: "Enhance existing bullet points by weaving in relevant keywords",
      example:
        "Modified: 'Led sales presentations' → 'Led sales presentations and product demos, contributing to 15% increase in client engagement'",
    },
    {
      id: "contextual",
      name: "Contextual Match",
      icon: MessageSquare,
      color: "bg-orange-100 text-orange-600 border-orange-200",
      description: "AI asks clarifying questions to understand your experience before suggesting changes",
      example:
        "Question: 'Did you make outbound calls as part of your sponsorship role? This would help us add the 'Cold Calling' keyword naturally.'",
    },
    {
      id: "skills",
      name: "Skills Reinforcement",
      icon: Award,
      color: "bg-purple-100 text-purple-600 border-purple-200",
      description: "Strengthen existing skills mentions and add related competencies",
      example:
        "Enhanced: 'Excel proficiency' → 'Advanced Excel proficiency including pivot tables, VLOOKUP, and data visualization'",
    },
    {
      id: "notapplicable",
      name: "Not Applicable",
      icon: XCircle,
      color: "bg-red-100 text-red-600 border-red-200",
      description:
        "AI identifies keywords you don't have experience with, but you can chat with AI to add them if you do",
      example:
        "AI: 'No Salesforce experience found.' You: 'Actually, I used Salesforce in my internship.' AI: 'Great! Let me help you add that naturally.'",
    },
  ]

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
              <Link href="/cover-letter" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">
                AI Cover Letter Generator
              </Link>
              <a href="#" className="text-sm lg:text-base text-gray-700 hover:text-gray-900 font-medium">
                Tailor Your Resume
              </a>
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
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-sm font-medium mb-4 lg:mb-6">
                INTELLIGENT RESUME TAILORING
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 lg:mb-8">
                Smart Keyword Integration
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  You Control Every Change
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 lg:mb-12 max-w-4xl mx-auto">
                Our AI analyzes job descriptions, identifies critical keywords, and suggests natural ways to integrate
                them into your resume. Accept or reject each suggestion with a single click.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 lg:mb-16">
                <Link href="https://editor.jobsuit.ai/register">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Start Tailoring Now
                  </Button>
                </Link>
                <Link href="https://editor.jobsuit.ai/register">
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full bg-white shadow-sm"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    See How It Works
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-md mb-2 sm:mb-3">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-600" />
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Accurate Interface Demo */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-white">
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

      {/* AI Strategies Section */}
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

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Land Your Dream Job?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've already transformed their job search with AI-powered resume
            tailoring.
          </p>
          <Link href="https://editor.jobsuit.ai/register">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg rounded-full">
              Start Tailoring Now
            </Button>
          </Link>
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
