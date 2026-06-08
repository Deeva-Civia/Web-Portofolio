"use client";

import { useState } from "react"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Calendar, Award, Briefcase, Server, Code, Database, X, ImageIcon } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

export default function Experience() {
  const { ref: experiencesRef, visibleItems } = useStaggeredAnimation(4, 200);
  
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const experiences = [
    {
      title: "Full Stack Developer",
      organization: "Manado Independent School",
      period: "July 2025 – December 2025",
      icon: <Briefcase className="w-6 h-6 text-sky-600" />, 
      isInternship: true, 
      showPrivacyNote: true, 
      techStack: [
        { name: "Laravel", icon: <Code className="w-3 h-3" />, info: "Backend & API (100% build)" },
        { name: "React.js", icon: <Code className="w-3 h-3" />, info: "Frontend Integration & Features" },
        { name: "MySQL", icon: <Database className="w-3 h-3" />, info: "Querying (Schema by team)" },
        { name: "Ubuntu Server", icon: <Server className="w-3 h-3" />, info: "Deployment & Cron Jobs" },
        { name: "Postman", icon: <Users className="w-3 h-3" />, info: "API Testing" },
      ],
      responsibilities: [
        "Executed the full SDLC of a Student Registration System entirely from scratch within a 6-person team, utilizing Kanban methodology from stakeholder brainstorming to final deployment.",        
        "Engineered backend infrastructure with Laravel, writing complex database queries and business logic, and integrated React.js frontend components with a strict Role-Based Access Control (RBAC).",        
        "Optimized dashboard performance and accelerated enrollment by implementing intelligent Laravel Caching for automated cache invalidation and an auto-fill data history feature.",        
        "Automated student enrollment status updates based on the academic year by configuring Ubuntu Cron Jobs seamlessly linked to Laravel Scheduler.",
        "Acted as the primary code merger via GitHub to resolve merge conflicts, conducted Postman testing, and troubleshot real-world production bugs reported by users to deploy rapid hotfixes on an Ubuntu server."
      ],
      highlights: [
        "Full SDLC Experience",
        "Backend Architecture",
        "System Optimization",
        "Server Management"
      ],
      images: [
        { src: "/images/experience/mis-team.jpeg", alt: "Work collaboration with team" },
        { src: "/images/experience/mis-user.jpeg", alt: "Presenting the final system to the end-users" },
        { src: "/images/experience/certificate-intern.jpg", alt: "Internship Certificate" },
        { src: "/images/experience/login-page.png", alt: "Registration System - Login Page" },
        { src: "/images/experience/system-dashboard.png", alt: "Registration System - Dashboard" },
      ]
    },
    {
      title: "BEM Education & Senate Batch 2022",
      organization: "Computer Science Student Association",
      period: "Aug 2024 – Dec 2025",
      icon: <Building className="w-6 h-6 text-blue-600" />,
      responsibilities: [
        "Tutored 20+ students in an intensive Computer Programming study program, specializing in teaching Python fundamentals, logic structures, and problem-solving methodologies.",
        "Designed and instructed a semester-long JavaScript Mini Bootcamp for 10 students, focusing on asynchronous programming (Async/Await), Fetch API, and foundational web development.",
        "Evaluated student progress through practical programming assignments and a final capstone project simulating a ticket ordering system.",
        "Managed the delivery of student feedback and bridged the information flow between the dean's office and hundreds of students from the Class of 2022.",
        "Coordinated attendance and logistics during faculty-student forums."
      ],
      highlights: [
        "Curriculum Design",
        "Technical Mentoring",
        "Program Leadership",
        "Student Advocacy"
      ],
      images: [
        { src: "/images/experience/deeva-pendidikan.jpeg", alt: "Profile" },
        { src: "/images/experience/bem-pendidikan.jpeg", alt: "BEM Pendidikan" },
        { src: "/images/experience/senat-angkatan.jpeg", alt: "Senat Angkatan" },
        { src: "/images/experience/bootcamp.jpeg", alt: "Teaching JavaScript Bootcamp"},
        { src: "/images/experience/bootcamp2.jpeg", alt: "Teaching JavaScript Bootcamp"},
        { src: "/images/experience/deeva-tutor.jpeg", alt: "Teaching Computer Programming - Python" },
        { src: "/images/experience/cssa.jpeg", alt: "CSSA 2024/2025" },
        { src: "/images/experience/chapel.jpeg", alt: "Student Forum" },
        { src: "/images/experience/certificate-cssa1.jpeg", alt: "Certificate 2024/2025" },
        { src: "/images/experience/certificate-cssa2.jpeg", alt: "Certificate Extended 2025" },
      ]
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
      ],
      images: [
        { src: "/images/experience/fxmedia-exhibition.jpeg", alt: "FX Media Exhibition 2025" },
        { src: "/images/experience/workshop.jpeg", alt: "Managing Workshop" },
        { src: "/images/experience/certificate-fxmedia.jpeg", alt: "Certificate" },
      ]
    },
    {
      title: "Group PIC",
      organization: "Filkom Day 2024 Committee",
      period: "Aug – Sep 2024",
      icon: <Award className="w-6 h-6 text-green-600" />,
      responsibilities: [
        "Managed and led a group of 40+ students",
        "Conducted regular attendance tracking",
        "Distributed event supplies and coordinated logistics",
        "Ensured successful event execution and team coordination",
      ],
      highlights: ["40+ Team Members", "Event Success", "Team Coordination"],
      images: [
         { src: "/images/experience/filkomday1.jpeg", alt: "Filkom Day Committee" },
         { src: "/images/experience/filkomday2.jpeg", alt: "Filkom Day Committee" },
      ]
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
              My professional journey, technical roles, and leadership experience
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
              <Card className="group hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:-translate-y-1 overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {exp.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {exp.title}
                            </CardTitle>
                            {exp.isInternship && (
                                <Badge className="bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300 border-none text-xs">Internship</Badge>
                            )}
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
                          {exp.organization}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Bagian Tech Stack Khusus Magang */}
                  {exp.isInternship && exp.techStack && (
                    <div className="border-t border-b border-gray-100 dark:border-gray-700 py-4 mb-4 bg-gray-50/50 dark:bg-gray-900/50 rounded-lg px-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm flex items-center gap-2">
                            <Code className="w-4 h-4 text-gray-500"/> Technical Environment
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech, idx) => (
                                <Badge key={idx} variant="outline" className="flex items-center gap-1.5 py-1 px-2.5 dark:bg-gray-800 bg-white hover:border-sky-300 dark:hover:border-sky-700 transition-colors cursor-help" title={tech.info}>
                                  <span className="text-sky-600 dark:text-sky-400"> {tech.icon}</span>
                                    {tech.name}
                                </Badge>
                            ))}
                        </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        {exp.isInternship ? "Key Contributions & Responsibilities" : "Key Responsibilities"}
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-gray-600 dark:text-gray-400 group/item"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200" />
                            <span className="group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors duration-200 text-sm leading-relaxed">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                                Highlights
                            </h4>
                            <div className="space-y-2">
                                {exp.highlights.map((highlight, idx) => (
                                <Badge
                                    key={idx}
                                    variant="secondary"
                                    className="w-full justify-center hover:scale-105 transition-transform duration-200 bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950 border border-gray-100 dark:border-gray-700"
                                >
                                    {highlight}
                                </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                  </div>

                  {/* --- GALERI GAMBAR UNTUK SEMUA PENGALAMAN --- */}
                  {exp.images && exp.images.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <ImageIcon className="w-5 h-5 text-amber-500" /> Activity Documentation
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {exp.images.map((image, imgIdx) => (
                          <div 
                            key={imgIdx} 
                            className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 group/img cursor-pointer bg-gray-100 dark:bg-gray-800"
                            onClick={() => setSelectedImg(image.src)} 
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 15vw"
                              className="object-cover transition-transform duration-300 group-hover/img:scale-110"
                            />
                            {/* Overlay hover */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 text-center">
                                <p className="text-xs text-white font-medium">{image.alt}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {exp.showPrivacyNote && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 italic">
                          * Note: GitHub repository links are omitted to maintain data privacy and comply with company policies.
                        </p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL VIEW GAMBAR --- */}
      {selectedImg && (
        <div 
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
            onClick={() => setSelectedImg(null)}
        >
            <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-lg shadow-2xl">
                <button 
                    className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                    onClick={() => setSelectedImg(null)}
                >
                    <X className="w-5 h-5" />
                </button>
                <img 
                    src={selectedImg} 
                    alt="Enlarged documentation" 
                    className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
            </div>
        </div>
      )}
    </section>
  );
}