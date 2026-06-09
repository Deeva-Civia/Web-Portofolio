"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Zap,
  Database,
  Smartphone,
  FileText,
  ChevronLeft,
  ChevronRight,
  X,
  Image as ImageIcon,
  Globe,
  Server 
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "MISmart - AI-Powered Registration System",
      period: "Jan 2026 - May 2026",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      images: [
        "/images/projects/MISmart.png",
        "/images/projects/MISmart2.png", 
        "/images/projects/MISmart3.png",
        "/images/projects/MISmart4.png"
      ],
      description:
        "An intelligent Natural Language to SQL (NL2SQL) module integrated into an enterprise-grade student registration system built entirely from scratch. It empowers administrators to generate dynamic data reports and daily recaps using natural language, eliminating manual spreadsheet processes and accelerating data-driven decision-making.",
      technologies: [
        "Laravel",
        "React.js",
        "MySQL",
        "Gemini 2.5 Flash",
        "Prompt Engineering", 
        "Schema Linking", 
      ],
      features: [
        "Automated daily registration recaps via low-latency hybrid routing",        
        "Dynamic Text-to-SQL generation (Schema Linking & Few-Shot) across 20+ tables",        
        "Multi-layered AI security (Regex validation & Read-Only user)",
        "Automated raw SQL to human-readable narrative interpretation",
        "Dynamic client-side Excel matrix generation using React",
        "Auto-generated smart conversation titles"
      ],
      highlights: [
        "AI Engineering (NL2SQL)",
        "Advanced System Security",
        "Business Automation",
        "Complex Backend Logic",
        "Frontend Data Processing",
        "Performance Optimization"
      ],
      category: "AI & Full Stack Development",
      showLiveDemo: false, 
      showSourceCode: true,
      liveLink: null,
      sourceLink: "https://github.com/Deeva-Civia/Sistem-Informasi-Registrasi-Siswa",
    },
    {
      title: "Poverty Classification via Satellite Imagery",
      period: "Jan 2026 – May 2026",
      icon: <Globe className="w-8 h-8 text-emerald-600" />,
      images: [
        "/images/projects/poverty-classification2.png",
        "/images/projects/poverty-classification1.png"
      ],
      description:
        "A research-grade deep learning initiative aligned with UN SDG 1 (No Poverty) to map socio-economic levels in La Paz, Bolivia. By leveraging complex spatial features from satellite imagery, this Computer Vision model provides a scalable, automated solution to identify impoverished regions, assisting policymakers in targeted resource distribution.",
      technologies: [
        "Python",
        "ResNet-50",
        "Computer Vision",
        "Transfer Learning",
        "Data Augmentation"
      ],
      features: [
        "Multi-class spatial feature classification from satellite imagery",
        "Transfer learning implementation using ResNet-50 CNN",
        "Overfitting prevention via Global Average Pooling, Dropout, and Class Weighting",
        "End-to-end data pipeline with dynamic image augmentation",
        "High-reliability performance (98.67% Accuracy, 0.99 F1-Score)",
        "Direct alignment with UN SDG 1 (No Poverty)"
      ],
      highlights: [
        "UN SDG 1 Alignment",
        "Computer Vision",
        "98.67% Accuracy",
        "Deep Learning"
      ],
      category: "Machine Learning",
      showLiveDemo: false, 
      showSourceCode: true,
      liveLink: null,
      sourceLink: "https://github.com/Deeva-Civia/poverty-classification-resnet50",
    },
    {
      title: "DevOps CI/CD & AI SecOps Monitoring",
      period: "Jan 2026 – May 2026",
      icon: <Server className="w-8 h-8 text-slate-700 dark:text-slate-300" />,
      images: [
        "/images/projects/devops-architecture.png", 
        "/images/projects/jenkins-pipeline.png",    
        "/images/projects/wa-alert.png",            
      ],
      description:
        "A robust DevOps infrastructure setup featuring a fail-safe CI/CD pipeline and an innovative AI-driven server monitoring system. It automates testing, deployments, and database backups while leveraging LLMs to detect and report server intrusions in real-time via WhatsApp.",
      technologies: [
        "Jenkins",
        "Ubuntu Server",
        "Apache",
        "Gemini 2.5 Flash",
        "Bash Scripting",
        "Fonnte API"
      ],
      features: [
        "Fail-safe CI/CD pipeline using Jenkins triggered by GitHub webhooks",
        "Automated pre-deployment testing for React and Laravel",
        "7-day rolling retention policy for automated database backups",
        "Real-time server log analysis using Gemini 2.5 Flash AI",
        "Instant WhatsApp security alerts via Fonnte Gateway",
        "Ubuntu Apache server hardening (UFW, SSL, strict .htaccess)"
      ],
      highlights: [
        "CI/CD Pipeline",
        "AI SecOps",
        "Server Hardening",
        "Automated Testing"
      ],
      category: "DevOps & Security",
      showLiveDemo: false, 
      showSourceCode: true,
      liveLink: null,
      sourceLink: "https://github.com/Deeva-Civia/DevOps-Monitoring",
    },
    {
      title: "Attendance Web System",
      period: "Jan – May 2025",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      images: [
        "/images/projects/attendance-web.png"
      ],
      description:
        "A comprehensive multi-role web application for managing attendance with admin dashboard and statistics. The system was successfully deployed on the domain serenitystack.site using IDCloudHost as the hosting provider. Since the hosting subscription has expired, the project is now showcased through documentation and screenshots only.",
      technologies: ["PHP", "MySQL", "HTML", "Bootstrap", "Hosting"],
      features: [
        "Multi-role login system (admin, lecturer, student)",
        "Session-based authentication",
        "CRUD features for attendance, lecturers, and students",
        "Admin dashboard with statistics and summary",
        "Responsive UI using Bootstrap framework",
        "Deployed to public domain with manual hosting setup",
      ],
      highlights: ["Public Deployment", "Multi-Role System", "Real Statistics"],
      category: "Web Development",
      showLiveDemo: false,
      showSourceCode: true,
      liveLink: "https://serenitystack.site/finalProject/aimvc/public",
      sourceLink: "https://github.com/Deeva-Civia/Attendance-Web-System",
    },
    {
      title: "Notes Web App",
      period: "Aug - Dec 2024",
      icon: <FileText className="w-8 h-8 text-indigo-600" />,
      images: [
        "/images/projects/note-web-app.png"
      ],
      description:
        "A simple and intuitive note-taking application developed using React JS with Vite, offering fast performance and modern development experience.",
      technologies: ["React JS", "Vite", "CSS"],
      features: [
        "Create new notes with title and body content",
        "Character limit indicator for titles",
        "Search notes using built-in search feature",
        "Archive notes for decluttering without deletion",
        "Delete unwanted notes permanently",
        "Live character counter for title length",
        "Clean and responsive user interface",
      ],
      highlights: ["React Development", "Modern UI/UX", "Fast Performance"],
      category: "Web Development",
      showLiveDemo: true,
      showSourceCode: true,
      liveLink: "https://notes-web-app-theta.vercel.app/",
      sourceLink: "https://github.com/Deeva-Civia/Notes-Web-App",
    },
    {
      title: "SafetyCity – AI Web App",
      period: "Jan – May 2025",
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      images: [
        "/images/projects/safetycity.png"
      ],
      description:
        "A rapid prototype web application for infrastructure damage detection. Built utilizing Lovable AI for AI-assisted development (vibe coding), this project demonstrates the ability to architect system logic, engineer effective prompts, and integrate third-party APIs to deliver a functional MVP (Minimum Viable Product) in record time.",
      technologies: [
        "Lovable AI",
        "PHP",
        "Gemini 2.0 Flash API",
        "WhatsApp Gateway",
        "Fonnte API",
        "Rapid Prototyping"
      ],
      features: [
        "AI-assisted rapid prototyping using Lovable AI",
        "Real-time infrastructure damage detection via Gemini Vision",
        "Automated stakeholder notifications via WhatsApp Gateway",
        "Direct real-time camera capture integration",
        "Streamlined automated reporting workflows"
      ],
      highlights: [
        "AI-Assisted Development",
        "API Integration",
        "Rapid Prototyping",
        "System Architecture"
      ],
      category: "AI & Web Development",
      showLiveDemo: true,
      showSourceCode: true,
      liveLink: "https://preview-510ed91e--infrastruktur-vision-mina.lovable.app/",
      sourceLink: "https://github.com/Deeva-Civia/SafetyCity-Web",
    },
    {
      title: "FiNotes – Student Notes App",
      period: "Jan – May 2025",
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      images: [
        "/images/projects/finotes.png"
      ],
      description:
        "Mobile application for Computer Science students to organize and manage course notes efficiently.",
      technologies: ["React Native", "Firebase Firestore", "Firebase Auth"],
      features: [
        "Note-taking functionality for CS students",
        "Course category organization",
        "Cloud storage with Firebase Firestore",
        "User authentication with Firebase Auth",
        "Cross-platform mobile support",
        "Real-time data synchronization",
      ],
      highlights: [
        "Project Management",
        "Mobile Development",
        "Cloud Integration",
      ],
      category: "Mobile Development",
      showLiveDemo: false,
      showSourceCode: true,
      liveLink: null,
      sourceLink: "https://github.com/Deeva-Civia/FiNotes",
    },
  ];

  const { ref: projectListRef, visibleItems } = useStaggeredAnimation(projects.length, 150);

  // Handler untuk Lightbox Navigasi
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === projects[selectedProject].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? projects[selectedProject].images.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-gray-800 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden"
    >
      {/* Background blur circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A showcase of my development projects
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Project List */}
          <div ref={projectListRef} className="lg:col-span-5 space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-out ${
                  visibleItems.includes(index)
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
              >
                <AnimatedSection animation="fadeInLeft">
                  <Card
                    className={`cursor-pointer transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-[1.02] ${
                      selectedProject === index
                        ? "ring-2 ring-blue-600 shadow-lg"
                        : "hover:shadow-md"
                    }`}
                    onClick={() => {
                      setSelectedProject(index);
                      setCurrentImageIndex(0); 
                    }}
                    style={{ minHeight: "120px" }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="transform transition-transform duration-300 hover:scale-110 flex-shrink-0">
                          {project.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-base leading-tight mb-1">
                            {project.title}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                            {project.period}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-7">
            <AnimatedSection animation="fadeInRight">
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="transform transition-transform duration-300 hover:scale-110">
                      {projects[selectedProject].icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900 dark:text-white">
                        {projects[selectedProject].title}
                      </CardTitle>
                      <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {projects[selectedProject].period}
                      </p>
                    </div>
                  </div>

                  {/* Project Image - Clickable for Lightbox */}
                  <div 
                    className="mb-6 rounded-lg overflow-hidden group relative cursor-pointer"
                    onClick={() => {
                      setCurrentImageIndex(0);
                      setIsLightboxOpen(true);
                    }}
                  >
                    <Image
                      src={projects[selectedProject].images[0] || "/placeholder.svg"}
                      alt={projects[selectedProject].title}
                      width={800}
                      height={500}
                      className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 font-medium">
                        <ImageIcon className="w-5 h-5" />
                        View Gallery ({projects[selectedProject].images.length})
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400">
                    {projects[selectedProject].description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].technologies.map(
                        (tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="hover:scale-105 transition-transform duration-200"
                          >
                            {tech}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                      {projects[selectedProject].features.map(
                        (feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-400 group"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                            <span className="group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200 text-sm">
                              {feature}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Project Highlights */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Project Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].highlights.map(
                        (highlight, index) => (
                          <Badge
                            key={index}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition-transform duration-200"
                          >
                            {highlight}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {(projects[selectedProject].showLiveDemo ||
                    projects[selectedProject].showSourceCode) && (
                    <div className="flex gap-4 pt-4">
                      {projects[selectedProject].showLiveDemo && (
                        <Button
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300"
                          onClick={() => {
                            if (projects[selectedProject].liveLink) {
                              window.open(
                                projects[selectedProject].liveLink,
                                "_blank"
                              );
                            }
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      )}
                      {projects[selectedProject].showSourceCode && (
                        <Button
                          variant="outline"
                          className="transform hover:scale-105 transition-all duration-300"
                          onClick={() => {
                            if (projects[selectedProject].sourceLink) {
                              window.open(
                                projects[selectedProject].sourceLink,
                                "_blank"
                              );
                            }
                          }}
                        >
                          <Github className="w-4 h-4 mr-2" />
                            {projects[selectedProject].title === "DevOps CI/CD & AI SecOps Monitoring" 
                              ? "Monitoring Script" 
                              : "Source Code"}
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* LIGHTBOX OVERLAY */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setIsLightboxOpen(false)} // Klik background untuk tutup
        >
          {/* Tombol Close */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Tombol Kiri & Kanan (Hanya tampil jika foto lebih dari 1) */}
          {projects[selectedProject].images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-10 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full hover:scale-110"
              >
                <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-10 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full hover:scale-110"
              >
                <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
              </button>
            </>
          )}

          {/* Foto Utama Lightbox */}
          <div 
            className="relative max-w-5xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Mencegah foto ditutup saat diklik
          >
            <img
              src={projects[selectedProject].images[currentImageIndex]}
              alt={`${projects[selectedProject].title} - Image ${currentImageIndex + 1}`}
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            
            {/* Indikator Nomor Halaman */}
            {projects[selectedProject].images.length > 1 && (
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 font-medium tracking-widest bg-black/50 px-4 py-1 rounded-full">
                {currentImageIndex + 1} / {projects[selectedProject].images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}