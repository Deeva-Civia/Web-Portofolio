"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Wrench } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("programming");
  const { ref: conceptsRef, visibleItems } = useStaggeredAnimation(10, 100);

  const skillCategories = {
    programming: {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "SQL", level: 80 },
        { name: "PHP", level: 85 },
      ],
    },
    database: {
      icon: <Database className="w-6 h-6" />,
      title: "Database & Backend",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "REST API", level: 85 },
        { name: "CRUD Operations", level: 85 },
        { name: "Authentication", level: 85 },
      ],
    },
    web: {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "React", level: 80 },
        { name: "Firebase", level: 80 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    tools: {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Frameworks",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "XAMPP", level: 90 },
        { name: "Postman", level: 90 },
        { name: "Git", level: 85 },
      ],
    },
  };

  const concepts = [
    "REST API",
    "CRUD",
    "Authentication",
    "MVC",
    "Asynchronous Programming",
    "URL Routing",
    "Session Management",
    "Database Design",
    "Server Deployment",
    "Version Control",
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden"
    >
      {/* Background blur circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A comprehensive overview of my technical expertise and proficiency
              levels
            </p>
          </div>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:shadow-md backdrop-blur-sm"
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Display */}
        <AnimatedSection animation="scaleIn" delay={400}>
          <Card className="mb-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {
                  skillCategories[
                    activeCategory as keyof typeof skillCategories
                  ].title
                }
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories[
                  activeCategory as keyof typeof skillCategories
                ].skills.map((skill, index) => (
                  <div key={index} className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-y-110"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Concepts & Technologies */}
        <AnimatedSection animation="fadeInUp" delay={600}>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Concepts & Technologies
            </h3>
            <div
              ref={conceptsRef}
              className="flex flex-wrap justify-center gap-3"
            >
              {concepts.map((concept, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-out ${
                    visibleItems.includes(index)
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-4 opacity-0 scale-95"
                  }`}
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-white/80 dark:bg-gray-800/80 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 cursor-default backdrop-blur-sm hover:scale-105 hover:shadow-md"
                  >
                    {concept}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
