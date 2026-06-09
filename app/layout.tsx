import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deeva Civia - Full Stack & AI Developer",
  description:
    "Informatics graduate specializing in Full Stack web development (Laravel, React.js), AI-powered applications, and Machine Learning. Explore my portfolio and projects.",
  keywords:
    "full stack developer, AI developer, machine learning, back-end developer, front-end developer, Laravel, React.js, Next.js, MySQL, Gemini LLM, Prompt Engineering, CI/CD, software engineer",  authors: [{ name: "Deeva Civia Aulia Lolong" }],
  openGraph: {
    title: "Deeva Civia Aulia Lolong - Full Stack & AI Developer",
    description:
      "Portfolio of Deeva Civia, specializing in Full Stack development, AI engineering, and production-grade applications.",
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
