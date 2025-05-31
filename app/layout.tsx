import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Deeva Civia Aulia Lolong - Back-End Developer",
  description:
    "Informatics student passionate about back-end development, experienced in PHP, MySQL, JavaScript, and project management. Currently pursuing Computer Science at Universitas Klabat.",
  keywords: "back-end developer, PHP, MySQL, JavaScript, web development, informatics student, project management",
  authors: [{ name: "Deeva Civia Aulia Lolong" }],
  openGraph: {
    title: "Deeva Civia Aulia Lolong - Back-End Developer",
    description: "Informatics student passionate about back-end development and project management",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
