import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deeva Civia - Full Stack Developer & AI Enthusiast",
  description:
    "Informatics graduate specializing in Full Stack web development (Laravel, React.js), AI integration, and server automation. Explore my portfolio and projects.",
  keywords:
    "full stack developer, back-end developer, front-end developer, Laravel, React.js, Next.js, MySQL, AI integration, Gemini LLM, CI/CD, DevOps, software engineer, informatics graduate",
  authors: [{ name: "Deeva Civia Aulia Lolong" }],
  openGraph: {
    title: "Deeva Civia Aulia Lolong - Full Stack Developer",
    description:
      "Portfolio of Deeva Civia, specializing in Full Stack development, AI integration, and production-grade applications.",
    type: "website",
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
