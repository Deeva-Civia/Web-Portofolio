"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Calendar, BookOpen, ChevronLeft, ChevronRight, Wrench, Languages, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

export default function Education() {
  // State untuk slider sertifikat
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const { ref: skillsRef, visibleItems: skillsVisible } = useStaggeredAnimation(
    3,
    150
  );

  const education = {
    institution: "Universitas Klabat",
    degree: "Bachelor of Computer Science",
    major: "Informatics",
    gpa: "3.95",
    period: "Aug 2022 - May 2026",
    status: "Graduated",
  };

  const certifications = [
    {
      id: "adobe",
      title: "Adobe Certified Professional",
      provider: "Adobe",
      period: "2024",
      status: "Completed",
      description:
        "Professional certification demonstrating proficiency in Adobe creative design tools and software.",
      image: "/images/certificates/adobe.png",
    },
    {
      id: "alibaba-cloud",
      title: "Alibaba Cloud Certified Developer",
      provider: "Alibaba Cloud",
      period: "2024",
      status: "Completed",
      description:
        "Successfully developed applications with Alibaba Cloud services and achieved certified developer status.",
      image: "/images/certificates/alibaba-cloud.png",
    },
    {
      id: "react-developer",
      title: "React Developer",
      provider: "IDCamp x Dicoding",
      period: "Aug – Dec 2024",
      status: "Completed",
      description:
        "Structured learning program covering web development fundamentals, React development, and AI basics.",
      image: "/images/certificates/dicoding-react.png",
      modules: [
        {
          name: "Web Programming Fundamentals",
          topics: [
            "HTML & CSS",
            "Responsive layouts with Flexbox",
            "Semantic HTML",
          ],
        },
        {
          name: "JavaScript Programming Fundamentals",
          topics: [
            "Core concepts",
            "Object-Oriented Programming",
            "Functional Programming",
            "Asynchronous programming",
            "Code quality",
          ],
        },
        {
          name: "Front-End Web Development",
          topics: ["DOM manipulation", "Interactive elements", "Web Storage"],
        },
        {
          name: "React Web Development",
          topics: [
            "React fundamentals",
            "Component-based architecture",
            "State management",
            "Controlled components",
          ],
        },
        {
          name: "AI Fundamentals",
          topics: [
            "Introduction to AI",
            "Machine learning basics",
            "Deep learning overview",
            "Data in AI",
          ],
        },
      ],
    },
    {
      id: "web-development",
      title: "Web Development",
      provider: "SoloLearn",
      period: "Jul 2024",
      status: "Completed",
      description:
        "Comprehensive web development course covering theoretical and practical understanding.",
      image: "/images/certificates/sololearn-web.png",
    },
    {
      id: "bootstrap",
      title: "Bootstrap CSS Framework",
      provider: "CodePolitan",
      period: "Jul 2024",
      status: "Completed",
      description:
        "Completed Bootstrap CSS Framework course in CodePolitan online learning program.",
      image: "/images/certificates/codepolitan-bootstrap.png",
    },
    {
      id: "cloud-practitioner",
      title: "Cloud Practitioner Essentials",
      provider: "Dicoding",
      period: "Jul 2024",
      status: "Completed",
      description: "AWS Cloud basics and fundamentals certification program.",
      image: "/images/certificates/dicoding-cloud.png",
    },
    {
      id: "javascript",
      title: "JavaScript Programming Fundamentals",
      provider: "Dicoding",
      period: "Dec 2024",
      status: "Completed",
      description: "Basic JavaScript programming concepts and fundamentals.",
      image: "/images/certificates/dicoding-javascript.png",
    },
    {
      id: "frontend",
      title: "Front-End Web Development",
      provider: "Dicoding",
      period: "Dec 2024",
      status: "Completed",
      description:
        "Front-end web development for beginners covering essential concepts.",
      image: "/images/certificates/dicoding-frontend.png",
    },
  ];

  const additionalSkills = [
    "Problem Solving",
    "Analytical Thinking",
    "Leadership",
    "Project Coordination",
    "Mentoring & Coaching",
    "Team Collaboration",
    "Adaptability",
    "Time Management",
  ];

  const languages = [
    { name: "Indonesian", level: "Native" },
    { name: "English", level: "Intermediate" },
  ];

  const tools = [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
    { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-plain.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
  ];

  // Navigasi Slider
  const nextSlide = () => {
    setCurrentCertIndex((prev) =>
      prev === certifications.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentCertIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  const reactDevCert = certifications.find(
    (cert) => cert.id === "react-developer"
  );

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden"
    >
      {/* Background blur circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education & Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My academic journey and professional development
            </p>
          </div>
        </AnimatedSection>

        {/* Education - Lebar sejajar container (w-full) */}
        <div className="w-full mb-16">
          <AnimatedSection animation="fadeInUp" delay={200}>
            <Card className="group hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">
                      {education.degree}
                    </CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {education.institution}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="space-y-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      Major: {education.major}
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      GPA: <span className="text-blue-600 dark:text-blue-400">{education.gpa}</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 hover:scale-105 transition-transform duration-200">
                      {education.status}
                    </Badge>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center gap-1.5 text-sm">
                      <Calendar className="w-4 h-4" />
                      {education.period}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Slider Professional Certifications */}
        <AnimatedSection animation="scaleIn" delay={400}>
          <Card className="mb-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-600" />
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-16 pb-8 relative">
              
              {/* Tombol Navigasi Kiri */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 shadow-md rounded-full z-20 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-200"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Area Slider Utama */}
              <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentCertIndex * 100}%)` }}
                >
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="w-full shrink-0 flex flex-col items-center justify-center pt-8 pb-4"
                    >
                      {cert.image ? (
                        <div className="relative w-full max-w-2xl h-[250px] sm:h-[400px]">
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            className="object-contain drop-shadow-md"
                            priority={cert.id === certifications[0].id}
                          />
                        </div>
                      ) : (
                        <div className="w-full max-w-2xl h-[250px] sm:h-[400px] flex flex-col items-center justify-center p-8 text-center space-y-4">
                          <Award className="w-16 h-16 text-blue-500 opacity-60 mb-2" />
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {cert.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {cert.provider}
                          </p>
                          <Badge variant="outline">{cert.status}</Badge>
                        </div>
                      )}
                      
                      {/* Teks Informasi di bawah gambar */}
                      <div className="mt-6 text-center px-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {cert.provider} • {cert.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tombol Navigasi Kanan */}
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 shadow-md rounded-full z-20 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-200"
                onClick={nextSlide}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              {/* Indikator Bulat-Bulat (Dots) */}
              <div className="flex justify-center gap-2 mt-6">
                {certifications.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCertIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentCertIndex === index
                        ? "w-8 h-2.5 bg-blue-600 dark:bg-blue-500"
                        : "w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                    aria-label={`Go to certificate ${index + 1}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* React Developer Certification Modules */}
        {reactDevCert && reactDevCert.modules && (
          <AnimatedSection animation="fadeInUp" delay={600}>
            <Card className="mb-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  React Developer Certification Modules
                </CardTitle>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2">
                  <Award className="w-4 h-4" />
                  <span>IDCamp x Dicoding • Aug – Dec 2024</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reactDevCert.modules.map((module, index) => (
                    <AnimatedSection
                      key={index}
                      animation="fadeInUp"
                      delay={800 + index * 100}
                    >
                      <div className="space-y-3 group">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {module.name}
                        </h4>
                        <ul className="space-y-1">
                          {module.topics.map((topic, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2 group/item"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200" />
                              <span className="group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors duration-200">
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        )}

        {/* Soft Skills & Languages - Tampilan Unified (Lebih sedikit kotak) */}
        <AnimatedSection animation="fadeInUp" delay={800}>
          <div className="mb-16 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-white/20 dark:border-gray-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Soft Skills Section */}
              <div>
                <div className="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {additionalSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-white dark:bg-gray-900/50 hover:scale-105 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 transition-all duration-300 cursor-default shadow-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Languages Section */}
              <div>
                <div className="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                  <Languages className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Languages</h3>
                </div>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center group bg-white/50 dark:bg-gray-900/30 px-4 py-3 rounded-xl">
                      <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {lang.name}
                      </span>
                      <Badge
                        variant="outline"
                        className="bg-transparent border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                      >
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>

        {/* Tools & Software - Tampilan Grid Icon */}
        <AnimatedSection animation="fadeInUp" delay={1000}>
          <div className="text-center mt-8 mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Tools & Software</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and platforms I use to build, deploy, and manage applications effectively.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-3 group w-[80px] sm:w-[100px]"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center p-4 group-hover:scale-110 group-hover:shadow-md group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-all duration-300">
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300" 
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}