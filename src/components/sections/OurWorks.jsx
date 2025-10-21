"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, GraduationCap, Factory, ArrowUpRight, Sparkles, CheckCircle } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Aristocrafters",
    subtitle: "Online Tutoring Platform",
    category: "Education Technology",
    url: "https://aristocrafters.com/",
    image: "/images/work1.jpg",
    description: "A comprehensive online tutoring platform offering 1-on-1 personalized lessons for students in Classes 5-10, covering Tamil, English, Maths, Science, and Social Science.",
    features: [
      "Interactive booking system",
      "Subject-wise course pages",
      "Testimonial showcase",
      "Custom learning plans",
      "Progress tracking system"
    ],
    tech: ["Next.js", "React", "Tailwind CSS"],
    results: {
      metric1: { label: "Student Enrollment", value: "500+ Students" },
      metric2: { label: "Course Subjects", value: "6 Subjects" },
      metric3: { label: "Pass Rate", value: "95%+" }
    },
    icon: GraduationCap,
    bgGradient: "from-blue-500/10 via-purple-500/10 to-pink-500/10",
    accentColor: "blue"
  },
  {
    id: 2,
    title: "Thirumala Wiremesh",
    subtitle: "Manufacturing Business Website",
    category: "Industrial Manufacturing",
    url: "https://thirumalawiremesh.com/",
    image: "/images/work2.jpg",
    description: "Professional website for a leading wire mesh manufacturer with 15+ years of experience, showcasing products like crimped wire mesh and vibrating screens for industrial applications.",
    features: [
      "Product catalog showcase",
      "Company credentials",
      "Client testimonials",
      "Quality certifications",
      "Contact & inquiry forms"
    ],
    tech: ["Next.js", "React", "Tailwind CSS"],
    results: {
      metric1: { label: "Years Experience", value: "15+ Years" },
      metric2: { label: "Happy Clients", value: "200+ Clients" },
      metric3: { label: "Product Range", value: "Multiple Types" }
    },
    icon: Factory,
    bgGradient: "from-orange-500/10 via-red-500/10 to-yellow-500/10",
    accentColor: "orange"
  }
];

const accentColors = {
  blue: {
    primary: "text-blue-500",
    bg: "bg-blue-500",
    border: "border-blue-500",
    glow: "shadow-blue-500/20",
    hoverGlow: "hover:shadow-blue-500/40"
  },
  orange: {
    primary: "text-orange-500",
    bg: "bg-orange-500",
    border: "border-orange-500",
    glow: "shadow-orange-500/20",
    hoverGlow: "hover:shadow-orange-500/40"
  }
};

const OurWorks = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="works" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 text-sm font-semibold">Live Projects</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Real Websites, <span className="text-emerald-500">Real Results</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Check out these live production websites we've built for growing businesses. Click to visit and explore the features.
          </motion.p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = accentColors[project.accentColor];
            const isHovered = hoveredId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group"
              >
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className={`relative bg-gradient-to-br ${project.bgGradient} border border-neutral-800 rounded-3xl overflow-hidden transition-all duration-500 ${isHovered ? `${colors.glow} shadow-2xl scale-[1.02]` : ''}`}>
                    
                    <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                      {/* Left: Content */}
                      <div className="flex flex-col justify-between space-y-6">
                        {/* Header */}
                        <div>
                          <div className="flex items-start gap-4 mb-6">
                            <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center flex-shrink-0 ${isHovered ? 'scale-110' : ''} transition-transform duration-300`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className={`text-2xl md:text-3xl font-bold text-white ${isHovered ? colors.primary : ''} transition-colors duration-300`}>
                                  {project.title}
                                </h3>
                                <ArrowUpRight className={`w-6 h-6 ${colors.primary} ${isHovered ? 'translate-x-1 -translate-y-1' : ''} transition-transform duration-300`} />
                              </div>
                              <p className="text-gray-400 text-sm font-medium">{project.subtitle}</p>
                            </div>
                          </div>

                          {/* Category Badge */}
                          <div className="inline-block mb-6">
                            <span className="px-4 py-2 bg-neutral-900/80 border border-neutral-700 rounded-full text-xs font-semibold text-gray-300">
                              {project.category}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-gray-400 leading-relaxed mb-6">
                            {project.description}
                          </p>

                          {/* Features */}
                          <div className="space-y-3 mb-6">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Key Features</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {project.features.slice(0, 3).map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                  <CheckCircle className={`w-4 h-4 ${colors.primary} flex-shrink-0`} />
                                  <span className="text-sm text-gray-400">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Section */}
                        <div>
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-gray-300 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <div className={`inline-flex items-center gap-3 px-6 py-3 ${colors.bg} text-white font-semibold rounded-full ${colors.hoverGlow} transition-all duration-300`}>
                            <span>Visit Live Site</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Right: Metrics & Preview */}
                      <div className="space-y-6">
                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 gap-4">
                          {Object.values(project.results).map((result, i) => (
                            <div 
                              key={i}
                              className="p-5 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-colors"
                            >
                              <div className={`text-2xl font-bold ${colors.primary} mb-1`}>
                                {result.value}
                              </div>
                              <div className="text-sm text-gray-500">{result.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Image Preview Placeholder */}
                        <div className="relative h-64 bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden group-hover:border-neutral-700 transition-colors">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-2 text-white text-sm font-medium">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                              <span>Live & Active</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-3xl">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Want a Website Like These?
              </h3>
              <p className="text-gray-400 max-w-md">
                We build custom, high-performance websites tailored to your business needs. Fast, beautiful, and results-driven.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-lg rounded-full hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWorks;