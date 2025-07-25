"use client"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-provider"
import Link from "next/link"
import { User, LogOut, Settings } from "lucide-react"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

export function UserNav() {
  const { user, loading, signOut } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-20 h-9 bg-gray-200 animate-pulse rounded"></div>
        <div className="w-20 h-9 bg-gray-200 animate-pulse rounded"></div>
      </div>
    )
  }

  if (user) {
    return (
      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-600 hidden sm:block">
          {user.email}
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <User className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="https://editor.jobsuit.ai" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Resume Editor
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                Billing & Usage
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={signOut} className="text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <Link href="/login">
        <Button
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent px-3 sm:px-4 lg:px-6 py-2 text-sm lg:text-base"
        >
          Log in
        </Button>
      </Link>
      <Link href="/signup">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 sm:px-4 lg:px-6 py-2 text-sm lg:text-base">
          Sign up
        </Button>
      </Link>
    </div>
  )
} 