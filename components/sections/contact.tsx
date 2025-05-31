"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { ref: contactInfoRef, visibleItems } = useStaggeredAnimation(4, 150);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "deevacivia@gmail.com",
      link: "mailto:deevacivia@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+62 813 4438 8067",
      link: "tel:+6281344388067",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/deevacivia/",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "North Minahasa, Indonesia",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden"
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
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a conversation about technology and
              development.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {/* Contact Form */}
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <div>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          Your Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="transition-all duration-300 focus:scale-105"
                          required
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="transition-all duration-300 focus:scale-105"
                          required
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello..."
                        rows={6}
                        className="transition-all duration-300 focus:scale-105"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection animation="fadeInRight" delay={400}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Whether you're looking for a dedicated back-end developer,
                  need help with a project, or want to collaborate on something
                  amazing, I'd love to hear from you.
                </p>
              </div>

              <div ref={contactInfoRef} className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ease-out ${
                      visibleItems.includes(index)
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
                    }`}
                  >
                    <Card className="group hover:shadow-md transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:-translate-y-1">
                      <CardContent className="p-4">
                        <a
                          href={info.link}
                          className="flex items-center gap-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                        >
                          <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            {info.icon}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {info.label}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              <AnimatedSection animation="fadeInLeft" delay={800}>
                <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-gray-800/80 dark:to-purple-900/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Currently Available
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Open to new opportunities and exciting projects. Let's build
                    something amazing together!
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>

        {/* Quick Contact CTA */}
        <AnimatedSection animation="fadeInUp" delay={600}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm passionate about creating efficient, scalable solutions and
                would love to contribute to your next project. Let's discuss how
                we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() =>
                    (window.location.href = "mailto:deevacivia@gmail.com")
                  }
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me Directly
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
