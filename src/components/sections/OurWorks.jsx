"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, GraduationCap, Factory, Sparkles, CheckCircle2 } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Aristocrafters",
    category: "Education Platform",
    url: "https://aristocrafters.com/",
    image: "/images/work1.jpg",
    description: "Online tutoring platform with personalized 1-on-1 lessons for Classes 5-10.",
    features: ["Interactive Booking", "6 Subjects", "Progress Tracking"],
    tech: ["Next.js", "React", "Tailwind"],
    metrics: { students: "500+", subjects: "6", rate: "95%" },
    icon: GraduationCap,
    gradient: "from-blue-500 to-purple-500"
  },
  {
    id: 2,
    title: "Thirumala Wiremesh",
    category: "Manufacturing",
    url: "https://thirumalawiremesh.com/",
    image: "/images/work2.jpg",
    description: "Professional website for wire mesh manufacturer with 15+ years of experience.",
    features: ["Product Catalog", "Quality Certs", "Client Portal"],
    tech: ["Next.js", "React", "Tailwind"],
    metrics: { experience: "15+", clients: "200+", products: "Multiple" },
    icon: Factory,
    gradient: "from-orange-500 to-red-500"
  }
]

const OurWorks = () => {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="relative py-20 bg-neutral-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm font-semibold text-emerald-400">
            <Sparkles className="w-4 h-4" />
            Live Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Websites, <span className="text-emerald-400">Real Results</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Check out these live production websites we've built for growing businesses
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon
            const isHovered = hoveredId === project.id

            return (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
              >
                {/* Image Header */}
                <div className="relative h-48 bg-neutral-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-neutral-900/90 border border-neutral-700 rounded-full text-xs font-semibold text-gray-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Live Indicator */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">Live & Active</span>
                  </div>

                  {/* Icon */}
                  <div className={`absolute -bottom-6 right-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center shadow-lg ${isHovered ? 'scale-110' : ''} transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className={`w-5 h-5 text-gray-500 ${isHovered ? 'translate-x-1 -translate-y-1 text-emerald-400' : ''} transition-all duration-300`} />
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                        <span className="text-xs text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-neutral-800">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${project.gradient} mix-blend-soft-light`}></div>
              </motion.a>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to Build Your Website?
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Custom, high-performance websites tailored to your business needs
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
          >
            Start Your Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default OurWorks