"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: "", // Honeypot field
  });

  // State untuk menangani proses pengiriman
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const { ref: contactInfoRef, visibleItems } = useStaggeredAnimation(4, 150);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Proteksi Spam: Jika bot mengisi field honeypot yang disembunyikan, hentikan proses.
    if (formData.botcheck) {
      console.warn("Spam detected!");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!ACCESS_KEY) {
      console.error("Web3Forms Access Key is missing in .env.local file");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "", botcheck: "" });
        
        // Reset pesan sukses setelah 5 detik
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-12">
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

        {/* Membungkus form dan contact info dalam container max-w-3xl agar lebarnya sama dan rapi di tengah */}
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          
          {/* Contact Form (Di atas) */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white text-center sm:text-left">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot Field - Disembunyikan dari user manusia via CSS */}
                  <input 
                    type="checkbox" 
                    name="botcheck" 
                    className="hidden" 
                    style={{ display: "none" }}
                    checked={Boolean(formData.botcheck)}
                    onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked ? "checked" : "" })}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                      className="transition-all duration-300 focus:scale-105 resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg animate-in fade-in slide-in-from-bottom-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg animate-in fade-in slide-in-from-bottom-2">
                      <AlertCircle className="w-5 h-5" />
                      <p className="text-sm font-medium">Something went wrong. Please try emailing me directly.</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Information (Di bawah) */}
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-white/20 dark:border-gray-700/50">
              <div className="text-center sm:text-left mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Let's Connect
                </h3>
                {/* Teks diubah sesuai role Anda */}
                <p className="text-gray-600 dark:text-gray-400">
                  Whether you're looking for a dedicated Full Stack Developer, need help integrating AI into your system, or want to collaborate on something amazing, I'd love to hear from you.
                </p>
              </div>

              <div ref={contactInfoRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ease-out ${
                      visibleItems.includes(index)
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <Card className="group hover:shadow-md transition-all duration-300 bg-white/90 dark:bg-gray-800/90 hover:-translate-y-1 h-full">
                      <CardContent className="p-4 flex items-center gap-4">
                        <a
                          href={info.link}
                          target={info.label === "LinkedIn" ? "_blank" : "_self"}
                          rel={info.label === "LinkedIn" ? "noopener noreferrer" : ""}
                          className="flex items-center gap-4 w-full group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                        >
                          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            {info.icon}
                          </div>
                          <div className="overflow-hidden">
                            <p className="font-medium text-gray-900 dark:text-white">
                              {info.label}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm truncate">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700/50 flex justify-center sm:justify-start">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Currently Available for Opportunities
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}