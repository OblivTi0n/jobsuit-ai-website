import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jobsuit – Free AI Resume Builder | Tailor Your Resume with AI",
  description: "Create, analyze, and tailor unlimited resumes for free with AI. Optimize for ATS, match keywords, and get real-time help from Jobsuit AI assistant to land interviews.",
  keywords: [
    "AI resume builder",
    "ATS friendly resume",
    "cover letter generator",
    "resume optimization",
    "job application",
    "career tools",
    "resume writing",
    "AI cover letter",
    "resume keywords",
    "job search",
    "resume template",
    "professional resume",
    "resume analysis",
    "resume tailoring"
  ],
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
    title: "Jobsuit – Free AI Resume Builder | Tailor Your Resume with AI",
    description: "Create, analyze, and tailor unlimited resumes for free with AI. Optimize for ATS, match keywords, and get real-time help from Jobsuit AI assistant to land interviews.",
    url: 'https://jobsuit.ai',
    siteName: 'JobSuit AI',
    images: [
      {
        url: '/Logo Jobsuit name.png',
        width: 1200,
        height: 630,
        alt: 'JobSuit AI - AI Resume Builder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jobsuit – Free AI Resume Builder | Tailor Your Resume with AI",
    description: "Create, analyze, and tailor unlimited resumes for free with AI. Optimize for ATS, match keywords, and get real-time help from Jobsuit AI assistant to land interviews.",
    images: ['/Logo Jobsuit name.png'],
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
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo_4k (1).png" />
        <link rel="apple-touch-icon" href="/logo_4k (1).png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>      </body>
    </html>
  );
}
