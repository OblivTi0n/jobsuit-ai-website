"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const { user, signOut } = useAuth()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] sm:w-[300px]">
        <nav className="flex flex-col gap-4 py-6">
          <Link
            href="/#resume-builder"
            className="text-lg font-medium text-gray-700 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            AI Resume Builder
          </Link>
          <Link
            href="/#cover-letter"
            className="text-lg font-medium text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            AI Cover Letter Generator
          </Link>
          <Link
            href="/#tailor-resume"
            className="text-lg font-medium text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Tailor Your Resume
          </Link>
          
          <div className="border-t border-gray-200 pt-4">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center justify-between w-full text-lg font-medium text-gray-600 hover:text-gray-900"
            >
              <span>More</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMoreOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-3">
          <Link
            href="/pricing"
                  className="text-base font-medium text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/privacy-policy"
                  className="text-base font-medium text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
                  className="text-base font-medium text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            {user ? (
              <>
                <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded">
                  {user.email}
                </div>
                <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  onClick={() => {
                    signOut()
                    setIsOpen(false)
                  }}
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Sign up
                  </Button>
                </Link>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                    Log in
                  </Button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
