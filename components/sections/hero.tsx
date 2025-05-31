"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Web Developer & Tech Enthusiast";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const typeWriter = () => {
      if (!isDeleting && index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else if (isDeleting && index >= 0) {
        setText(fullText.slice(0, index));
        index--;
      }

      if (index === fullText.length + 1) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000); // Pause before deleting
      }

      if (isDeleting && index === 0) {
        isDeleting = false;
      }
    };

    const timer = setInterval(typeWriter, isDeleting ? 50 : 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20" />

      {/* Multiple floating blur circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-purple-300/40 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-300/40 to-pink-300/40 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-blue-200/30 dark:from-pink-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-blue-200/30 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <AnimatedSection animation="fadeInLeft">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Deeva Civia
                </span>
                <br />
                <span className="text-gray-700 dark:text-gray-300">
                  Aulia Lolong
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div className="h-8 mb-8">
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
                  {text}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={400}>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl lg:max-w-none">
                Informatics student passionate about technology and web
                development. Experienced in building web systems and leading
                development teams.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transform hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get In Touch
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={800}>
              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href="mailto:deevacivia@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-110"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/deevacivia/"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/Deeva-Civia"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right side - Profile image */}
          <AnimatedSection animation="fadeInRight" delay={300}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative background circles */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-xl scale-105 animate-pulse"></div>

                {/* Profile image container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-700/50 shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/deeva-photo.png"
                    alt="Deeva Civia Aulia Lolong"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating elements around the image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-bounce delay-2000"></div>
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection animation="fadeIn" delay={1000}>
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce hover:scale-110"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </AnimatedSection>
    </section>
  );
}
