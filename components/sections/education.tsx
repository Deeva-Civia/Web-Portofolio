"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Calendar, BookOpen, Eye, X } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

export default function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );
  const { ref: certificationsRef, visibleItems } = useStaggeredAnimation(
    8,
    100
  );
  const { ref: skillsRef, visibleItems: skillsVisible } = useStaggeredAnimation(
    3,
    150
  );

  const education = {
    institution: "Universitas Klabat",
    degree: "Bachelor of Computer Science",
    major: "Informatics",
    period: "Aug 2022 - Present",
    status: "Current Student",
  };

  const certifications = [
    {
      id: "aws-backend",
      title: "AWS Backend Academy",
      provider: "AWS x Dicoding",
      period: "May 2025 - Present",
      status: "In Progress",
      description:
        "Comprehensive backend development program focusing on AWS cloud services and modern backend architectures.",
      image: null,
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
    "Leadership",
    "Teamwork",
    "Communication",
    "Time Management",
    "Problem Solving",
    "Adaptability",
  ];

  const languages = [
    { name: "Indonesian", level: "Native" },
    { name: "English", level: "Intermediate" },
  ];

  const tools = [
    "Microsoft Office",
    "Canva",
    "Figma",
    "Visual Studio Code",
    "Postman",
    "GitHub",
    "XAMPP",
  ];

  // Debug function untuk melihat certificate yang dipilih
  const handleViewCertificate = (certId: string) => {
    const cert = certifications.find((c) => c.id === certId);
    setSelectedCertificate(certId);
  };

  const selectedCert = certifications.find(
    (cert) => cert.id === selectedCertificate
  );

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden"
    >
      {/* Background blur circles */}
      <div className="absolute inset-0 overflow-hidden">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <Card className="group hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {education.degree}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400">
                      {education.institution}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Major: {education.major}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {education.period}
                    </p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 hover:scale-105 transition-transform duration-200">
                    {education.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Latest Certification */}
          <AnimatedSection animation="fadeInRight" delay={400}>
            <Card className="group hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {certifications[0].title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400">
                      {certifications[0].provider}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {certifications[0].period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {certifications[0].description}
                  </p>
                  <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 hover:scale-105 transition-transform duration-200">
                    {certifications[0].status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* All Certifications */}
        <AnimatedSection animation="scaleIn" delay={600}>
          <Card className="mb-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-600" />
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                ref={certificationsRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {certifications.map((cert, index) => (
                  <div
                    key={cert.id}
                    className={`transition-all duration-500 ease-out ${
                      visibleItems.includes(index)
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-4 opacity-0 scale-95"
                    }`}
                  >
                    <Card className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {cert.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                              {cert.provider}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500">
                              {cert.period}
                            </p>
                          </div>
                          {cert.image && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleViewCertificate(cert.id)}
                              className="p-1 h-auto hover:scale-110 transition-transform duration-200"
                              title={`View ${cert.title} certificate`}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                          {cert.description}
                        </p>
                        <Badge
                          variant="outline"
                          className={`text-xs hover:scale-105 transition-transform duration-200 ${
                            cert.status === "Completed"
                              ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400"
                              : "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400"
                          }`}
                        >
                          {cert.status}
                        </Badge>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* React Developer Certification Details */}
        <AnimatedSection animation="fadeInUp" delay={800}>
          <Card className="mb-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                React Developer Certification Modules
              </CardTitle>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Award className="w-4 h-4" />
                <span>IDCamp x Dicoding • Aug – Dec 2024</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications[2].modules?.map((module, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fadeInUp"
                    delay={1000 + index * 100}
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

        {/* Additional Skills & Languages */}
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`transition-all duration-700 ease-out ${
              skillsVisible.includes(0)
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {additionalSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="hover:scale-105 transition-transform duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            className={`transition-all duration-700 ease-out ${
              skillsVisible.includes(1)
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center group"
                    >
                      <span className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {lang.name}
                      </span>
                      <Badge
                        variant="outline"
                        className="hover:scale-105 transition-transform duration-200"
                      >
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            className={`transition-all duration-700 ease-out ${
              skillsVisible.includes(2)
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  Tools & Software
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="hover:scale-105 transition-transform duration-200"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Certificate Modal - PERBAIKAN UTAMA */}
      {selectedCertificate && selectedCert && selectedCert.image && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl max-h-[90vh] overflow-auto transform transition-all duration-300 scale-100 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-800">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedCert.provider} • {selectedCert.period}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCertificate(null)}
                className="hover:scale-110 transition-transform duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="p-4">
              <Image
                src={selectedCert.image}
                alt={`${selectedCert.title} Certificate`}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
