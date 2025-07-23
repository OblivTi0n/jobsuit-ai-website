"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Sparkles, Mail, MessageCircle, Clock, Send, HelpCircle, Bug, Lightbulb } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const inquiryTypes = [
    {
      id: "general",
      label: "General Inquiry",
      icon: MessageCircle,
      description: "General questions about JobSuit",
    },
    {
      id: "support",
      label: "Technical Support",
      icon: HelpCircle,
      description: "Need help with the platform",
    },
    {
      id: "bug",
      label: "Bug Report",
      icon: Bug,
      description: "Report a technical issue",
    },
    {
      id: "feature",
      label: "Feature Request",
      icon: Lightbulb,
      description: "Suggest a new feature",
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
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Mail className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">CONTACT US</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Get in <span className="text-blue-600">Touch</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Have questions about JobSuit? Need help with your resume? We're here to help you succeed in your job
              search journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">Get in touch via email for detailed inquiries</p>
                  <a
                    href="mailto:team@jobsuit.ai"
                    className="text-blue-600 hover:text-blue-800 font-medium inline-block"
                  >
                    team@jobsuit.ai
                  </a>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Response Time</h3>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                  <span className="text-green-600 font-medium">&lt; 24 hours</span>
                </CardContent>
              </Card>

              {/* Support Hours */}
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Support Hours</h3>
                  <p className="text-gray-600">Available Monday to Friday</p>
                  <span className="text-purple-600 font-medium">9 AM - 6 PM AEST</span>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="flex justify-center">
              {/* Form */}
              <div className="w-full max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Send us a message</h2>

                <Card className="shadow-xl border-0">
                  <CardContent className="p-6 sm:p-8">
                    <div className="space-y-6">
                      {/* Inquiry Type */}
                      <div>
                        <Label className="text-base font-medium text-gray-900 mb-4 block">
                          What can we help you with?
                        </Label>
                        <div className="grid grid-cols-2 gap-3">
                          {inquiryTypes.map((type) => (
                            <button
                              key={type.id}
                              onClick={() => handleInputChange("inquiryType", type.id)}
                              className={`p-3 rounded-lg border-2 text-left transition-all ${
                                formData.inquiryType === type.id
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              <div className="flex items-center space-x-2 mb-1">
                                <type.icon
                                  className={`w-4 h-4 ${
                                    formData.inquiryType === type.id ? "text-blue-600" : "text-gray-500"
                                  }`}
                                />
                                <span
                                  className={`text-sm font-medium ${
                                    formData.inquiryType === type.id ? "text-blue-900" : "text-gray-900"
                                  }`}
                                >
                                  {type.label}
                                </span>
                              </div>
                              <p
                                className={`text-xs ${
                                  formData.inquiryType === type.id ? "text-blue-700" : "text-gray-600"
                                }`}
                              >
                                {type.description}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name and Email */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-base font-medium text-gray-900">
                            Name *
                          </Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            className="mt-2"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-base font-medium text-gray-900">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            className="mt-2"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <Label htmlFor="subject" className="text-base font-medium text-gray-900">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Brief description of your inquiry"
                          className="mt-2"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          required
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message" className="text-base font-medium text-gray-900">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide as much detail as possible..."
                          rows={6}
                          className="mt-2"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        We'll get back to you within 24 hours during business days.
                      </p>
                    </div>
                  </CardContent>
                </Card>
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
