"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Calendar, Award } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";

export default function Experience() {
  const { ref: experiencesRef, visibleItems } = useStaggeredAnimation(4, 200);

  const experiences = [
    {
      title: "BEM & Education Division",
      organization: "Computer Science Student Association",
      period: "Aug 2024 – Present",
      icon: <Building className="w-6 h-6 text-blue-600" />,
      responsibilities: [
        "Taught Computer Programming tutoring using Python to 36 students",
        "Designed and instructed JavaScript bootcamp program",
        "Managed information dissemination to batch members",
        "Coordinated attendance during faculty student forums",
      ],
      highlights: [
        "36 Students Taught",
        "Curriculum Design",
        "Program Leadership",
      ],
    },
    {
      title: "Workshop PIC & Floor Crew",
      organization: "FX-Media Exhibition",
      period: "Apr 2025",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      responsibilities: [
        "Managed and led a group of 90 students",
        "Conducted attendance and distributed equipment",
        "Served as Workshop PIC ensuring smooth coordination",
        "Executed workshop sessions and managed logistics",
      ],
      highlights: [
        "90 Students Managed",
        "Workshop Leadership",
        "Event Coordination",
      ],
    },
    {
      title: "Group PIC",
      organization: "Filkom Day Committee",
      period: "Aug – Sep 2024",
      icon: <Award className="w-6 h-6 text-green-600" />,
      responsibilities: [
        "Managed and led a group of 40+ students",
        "Conducted regular attendance tracking",
        "Distributed event supplies and coordinated logistics",
        "Ensured successful event execution and team coordination",
      ],
      highlights: ["40+ Team Members", "Event Success", "Team Coordination"],
    },
    {
      title: "JavaScript Bootcamp Instructor",
      organization: "University Teaching Role",
      period: "Jan – May 2025",
      icon: <Building className="w-6 h-6 text-orange-600" />,
      responsibilities: [
        "Designed comprehensive JavaScript curriculum",
        "Taught async/await and fetch functions",
        "Guided students through practical programming concepts",
        "Evaluated final projects including ticket ordering system simulation",
      ],
      highlights: [
        "Curriculum Design",
        "Technical Teaching",
        "Project Assessment",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 relative overflow-hidden"
    >
      {/* Background blur circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My journey in leadership, education, and community engagement
            </p>
          </div>
        </AnimatedSection>

        <div ref={experiencesRef} className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                visibleItems.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-300">
                        {exp.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </CardTitle>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
                          {exp.organization}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-400 group/item"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200" />
                            <span className="group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors duration-200">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Highlights
                      </h4>
                      <div className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="w-full justify-center hover:scale-105 transition-transform duration-200"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
