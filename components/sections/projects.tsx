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
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const { ref: projectListRef, visibleItems } = useStaggeredAnimation(5, 150);

  const projects = [
    {
      title: "Notes Web App",
      period: "2024",
      icon: <FileText className="w-8 h-8 text-indigo-600" />,
      image: "/images/projects/note-web-app.png",
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
      title: "Attendance Web System",
      period: "Jan – May 2025",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      image: "/images/projects/attendance-web.png",
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
      showLiveDemo: true,
      showSourceCode: true,
      liveLink: "https://serenitystack.site/finalProject/aimvc/public",
      sourceLink: "https://github.com/Deeva-Civia/Attendance-Web-System",
    },
    {
      title: "SafetyCity – AI Web App",
      period: "Jan – May 2025",
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      image: "/images/projects/safetycity.png",
      description:
        "AI-powered web application for infrastructure damage detection and automated reporting system.",
      technologies: [
        "PHP",
        "Gemini 2.0 Flash",
        "WhatsApp Gateway",
        "Fonnte API",
      ],
      features: [
        "AI-based infrastructure damage detection",
        "Real-time image analysis using Gemini 2.0 Flash",
        "Automated WhatsApp notifications via Fonnte API",
        "Real-time camera integration",
        "Automatic reporting system",
        "Direct notification system for stakeholders",
      ],
      highlights: ["AI Integration", "Real-time Analysis", "Team Leadership"],
      category: "AI & Machine Learning",
      showLiveDemo: true,
      showSourceCode: true,
      liveLink:
        "https://preview-510ed91e--infrastruktur-vision-mina.lovable.app/",
      sourceLink: "https://github.com/Deeva-Civia/SafetyCity-Web",
    },
    {
      title: "FiNotes – Student Notes App",
      period: "Jan – May 2025",
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      image: "/images/projects/finotes.png",
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
    {
      title: "JavaScript Bootcamp",
      period: "Jan – May 2025",
      icon: <Users className="w-8 h-8 text-orange-600" />,
      image: "/images/projects/bootcamp.png",
      description:
        "Comprehensive JavaScript programming course designed and taught for university students.",
      technologies: [
        "JavaScript",
        "Async/Await",
        "Fetch API",
        "Project-based Learning",
      ],
      features: [
        "Curriculum design from basic to advanced JavaScript",
        "Asynchronous programming concepts",
        "Hands-on coding exercises",
        "Final project: ticket ordering system simulation",
        "Student assessment and evaluation",
        "Interactive learning sessions",
      ],
      highlights: ["Course Design", "Teaching Excellence", "Student Mentoring"],
      category: "Education & Training",
      showLiveDemo: false,
      showSourceCode: false,
      liveLink: null,
      sourceLink: null,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-gray-800 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden"
    >
      {/* Background blur circles */}
      <div className="absolute inset-0 overflow-hidden">
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
              A showcase of my development projects and technical leadership
              experience
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
                    onClick={() => setSelectedProject(index)}
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

                  {/* Project Image */}
                  <div className="mb-6 rounded-lg overflow-hidden group">
                    <Image
                      src={
                        projects[selectedProject].image || "/placeholder.svg"
                      }
                      alt={projects[selectedProject].title}
                      width={500}
                      height={300}
                      className="w-full h-60 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
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
                    <ul className="space-y-2 max-h-48 overflow-y-auto">
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
                          Source Code
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
    </section>
  );
}
