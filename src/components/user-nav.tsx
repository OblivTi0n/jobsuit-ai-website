"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient, supabase } from "@/lib/supabase/client"
import { User, LogOut, Settings } from "lucide-react"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { useState, useEffect } from "react"

export function UserNav() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    
    // Get initial user
    const getInitialUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    getInitialUser()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    console.log("🔐 [UserNav] Starting logout process...");
    try {
      const supabase = createClient()
      console.log("🔐 [UserNav] Calling supabase.auth.signOut()");
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error("🔐 [UserNav] Supabase signOut error:", error);
        throw error;
      }
      
      console.log("🔐 [UserNav] Successfully signed out from Supabase");
      console.log("🔐 [UserNav] Removing userEmail from localStorage");
      localStorage.removeItem('userEmail');
      console.log("🔐 [UserNav] Redirecting to login page...");
      router.push('/login');
      console.log("🔐 [UserNav] Logout process completed");
    } catch (error) {
      console.error("🔐 [UserNav] Error during logout:", error);
    }
  };

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
            <DropdownMenuItem onClick={handleLogout} className="text-red-600">
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