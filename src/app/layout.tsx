import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobSuit AI - AI Resume Builder & Cover Letter Generator | Beat ATS Systems",
  description: "Create ATS-friendly resumes and cover letters with AI. JobSuit's conversational AI helps you build, analyze, and tailor your resume to any job with intelligent keyword suggestions. Free AI resume builder.",
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
    title: "JobSuit AI - AI Resume Builder & Cover Letter Generator",
    description: "Create ATS-friendly resumes and cover letters with AI. Beat the hiring system with intelligent keyword suggestions and conversational AI guidance.",
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
    title: "JobSuit AI - AI Resume Builder & Cover Letter Generator",
    description: "Create ATS-friendly resumes and cover letters with AI. Beat the hiring system with intelligent keyword suggestions.",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/Logo Jobsuit name.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
