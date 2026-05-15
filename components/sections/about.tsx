"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Trophy, BookOpen } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";

export default function About() {
  const { ref: highlightsRef, visibleItems } = useStaggeredAnimation(4, 150);

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Full Stack Development",
      description:
        "Building production-grade web systems from scratch using Laravel, React.js, and MySQL.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "AI Integration & ML",
      description:
        "Integrating Google Gemini API for smart reporting and building ResNet-50 models for image classification.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-orange-600" />,
      title: "DevOps & Server",
      description:
        "Configuring Ubuntu servers, cron jobs, and establishing CI/CD pipelines using Jenkins.",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Leadership & Mentoring",
      description:
        "Coordinating university events and mentoring 30+ students in Python and JavaScript bootcamps.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-gray-800 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden"
    >
      {/* Background blur circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-blue-200/20 dark:from-purple-600/10 dark:to-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-pink-200/20 dark:from-blue-600/10 dark:to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Computer Science graduate specializing in production-grade Full Stack development and AI integration. 
              I am driven by the challenge of building intelligent, scalable web systems that solve complex, real-world business problems.
            </p>
          </div>
        </AnimatedSection>

        <div
          ref={highlightsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                visibleItems.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <AnimatedSection animation="fadeInUp" delay={600}>
          <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-gray-900/80 dark:to-purple-900/20 rounded-2xl p-8 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <AnimatedSection animation="fadeInLeft" delay={800}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    My Journey
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    As a Computer Science graduate from Universitas Klabat, 
                    my journey is driven by the desire to build systems that solve real-world problems. 
                    I transitioned from learning basic programming to architecting enterprise-scale applications independently during my internship at Manado Independent School.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    I don't just write code, I look at the bigger picture. 
                    Whether it's optimizing server analytics, automating database updates with schedulers, or integrating Large Language Models (LLM) to accelerate business processes, 
                    I focus on delivering scalable, clean, and efficient solutions.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInRight" delay={1000}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      3.96
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Cumulative GPA
                    </div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      30+
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Students Mentored
                    </div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">
                      98%
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      ML Model Accuracy
                    </div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300">
                      100%
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      From Scratch Dev
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
