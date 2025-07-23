"use client"
import { Sparkles, Mail, Shield, Eye, Lock, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { MobileNav } from "@/components/mobile-nav" // Import MobileNav

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center">
                <img src="/Logo Jobsuit name.png" alt="JOBSUIT" className="h-8 sm:h-9 lg:h-10 w-auto" />
              </Link>
            </div>

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
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">PRIVACY POLICY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Our Commitment to <span className="text-blue-600">Privacy</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information when you use JobSuit.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. To better protect your privacy, this notice explains our online
                  information practices and the choices you can make about the way your information is collected,
                  stored, and used. Jobsuit is committed to handling personal information in accordance with the Privacy
                  Act 1988 (Cth) and the Australian Privacy Principles (APPs).
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">The Information We Collect</h2>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  This notice applies to all information collected or submitted on our website (www.jobsuit.ai) or
                  related services. On some pages, you can register, submit forms, or request information. The types of
                  personal information we may collect include:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Contact details</li>
                  <li>Employment-related information (e.g. resume content)</li>
                  <li>Any additional information you choose to provide when using our platform</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mt-4">
                  We may also collect non-identifying data, such as aggregated usage data, to help improve our platform.
                </p>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Sparkles className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">The Way We Use Information</h2>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">We use the information you provide to:</p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                  <li>Deliver our services, including resume analysis, tailoring, and support</li>
                  <li>Respond to your requests or enquiries</li>
                  <li>Provide updates or marketing communications if you have opted in</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not share your personal information with external parties except:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                  <li>
                    Where necessary to provide our services (e.g. third-party service providers supporting Jobsuit
                    operations)
                  </li>
                  <li>Where required by law</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Return email addresses are used only to respond to enquiries and are not shared or used for unrelated
                  purposes. You can opt-in to receive newsletters or product updates, and you can opt-out at any time.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  We may use aggregated, de-identified data to improve our services and website without identifying
                  individuals.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We do not use or share your personally identifiable information in ways unrelated to the above without
                  giving you an opportunity to opt out.
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Lock className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Data Security</h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Jobsuit takes reasonable steps to protect personal information from misuse, interference, loss,
                  unauthorised access, modification, or disclosure. We use appropriate physical, electronic, and
                  managerial safeguards to secure your data.
                </p>
              </div>

              {/* Access and Correction */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">How You Can Access or Correct Your Information</h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  You may contact us at{" "}
                  <a href="mailto:team@jobsuit.ai" className="text-blue-600 hover:text-blue-800 underline">
                    team@jobsuit.ai
                  </a>{" "}
                  to request access to, correction of, or deletion of your personal information we hold. We will take
                  reasonable steps to verify your identity before actioning such requests to protect your privacy.
                </p>
              </div>

              {/* International Data Transfers */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">International Data Transfers</h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Jobsuit stores and processes personal data primarily in Australia. However, in some cases, data may be
                  transferred to or stored in other countries where our service providers are located. We take
                  reasonable steps to ensure that any overseas recipients handle your personal information in a manner
                  consistent with the Privacy Act 1988 (Cth).
                </p>
              </div>

              {/* Contact Us */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions or concerns about this privacy policy or the way we handle your personal
                  information, please contact us at:
                </p>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <a href="mailto:team@jobsuit.ai" className="text-blue-600 hover:text-blue-800 font-medium text-lg">
                      team@jobsuit.ai
                    </a>
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="border-t border-gray-200 pt-8">
                <p className="text-sm text-gray-500">
                  This privacy policy was last updated on January 21, 2025. We may update this policy from time to time
                  to reflect changes in our practices or legal requirements.
                </p>
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
