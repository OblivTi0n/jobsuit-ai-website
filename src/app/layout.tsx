import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JobSuit AI - AI-Powered Resume Builder",
  description: "Build, analyze, and tailor your resume with AI. Get personalized feedback and ATS-optimized suggestions to beat the hiring system.",
  keywords: "resume builder, AI resume, ATS optimization, job application, career tools",
  authors: [{ name: "JobSuit AI" }],
  creator: "JobSuit AI",
  publisher: "JobSuit AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jobsuit.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "JobSuit AI - AI-Powered Resume Builder",
    description: "Build, analyze, and tailor your resume with AI. Get personalized feedback and ATS-optimized suggestions to beat the hiring system.",
    url: 'https://jobsuit.ai',
    siteName: 'JobSuit AI',
    images: [
      {
        url: '/hey-jobsuit.png',
        width: 1200,
        height: 630,
        alt: 'JobSuit AI - AI-Powered Resume Builder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "JobSuit AI - AI-Powered Resume Builder",
    description: "Build, analyze, and tailor your resume with AI. Get personalized feedback and ATS-optimized suggestions to beat the hiring system.",
    images: ['/hey-jobsuit.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
