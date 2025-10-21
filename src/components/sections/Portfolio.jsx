"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ExternalLink, ArrowRight, Zap, Users, TrendingUp } from "lucide-react"

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      id: 1,
      title: "FreshCart E-Commerce",
      category: "E-Commerce Platform",
      description: "Full-stack online grocery store with real-time inventory, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      color: "from-purple-500 to-pink-500",
      tech: ["Next.js", "Stripe", "MongoDB"],
      metrics: { conversion: "+45%", speed: "1.2s load", users: "10K+" }
    },
    {
      id: 2,
      title: "BuildPro Construction",
      category: "Business Website",
      description: "Modern construction company site with project gallery, quote system, and client testimonials.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      color: "from-blue-500 to-cyan-500",
      tech: ["React", "Tailwind", "Sanity CMS"],
      metrics: { leads: "+120%", bounce: "-35%", ranking: "Top 3 SEO" }
    },
    {
      id: 3,
      title: "FitLife Fitness App",
      category: "Health & Fitness",
      description: "Workout tracking app with custom routines, progress analytics, and social sharing features.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      color: "from-orange-500 to-red-500",
      tech: ["React Native", "Firebase", "Charts"],
      metrics: { retention: "85%", workouts: "50K+", rating: "4.8★" }
    },
    {
      id: 4,
      title: "AgriTrack Farm Manager",
      category: "Agriculture Tech",
      description: "Farm management platform tracking crops, inventory, weather data, and harvest predictions.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      color: "from-emerald-500 to-teal-500",
      tech: ["Vue.js", "PostgreSQL", "APIs"],
      metrics: { farms: "200+", efficiency: "+60%", roi: "3x" }
    },
    {
      id: 5,
      title: "QuickBite Food Delivery",
      category: "Food & Beverage",
      description: "Restaurant ordering platform with live tracking, multiple payments, and loyalty rewards program.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
      color: "from-yellow-500 to-orange-500",
      tech: ["React", "Node.js", "Maps API"],
      metrics: { orders: "15K/mo", delivery: "28 min avg", satisfaction: "94%" }
    },
    {
      id: 6,
      title: "DevFolio Portfolio Builder",
      category: "SaaS Product",
      description: "No-code portfolio builder for developers with templates, hosting, and custom domain support.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      color: "from-indigo-500 to-purple-500",
      tech: ["Next.js", "Vercel", "MDX"],
      metrics: { users: "5K+", templates: "50+", uptime: "99.9%" }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 overflow-hidden py-24 px-4 md:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
              Our Work
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Real Projects, Real <span className="text-emerald-500">Results</span>
          </h2>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From startups to established brands — see how we've transformed ideas into high-performing digital solutions.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                ${index === 3 ? 'lg:col-span-2' : ''}
              `}
              style={{
                height: index === 0 ? '600px' : index === 3 ? '400px' : '300px'
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent group-hover:from-black/80 group-hover:via-black/70 transition-all duration-500"></div>
              </div>

              {/* Gradient border effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${project.color} p-[2px] rounded-2xl`}>
                <div className="w-full h-full bg-slate-900/0 rounded-2xl"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 md:p-8 z-10">
                {/* Top: Category & Tech Stack */}
                <div className="flex items-start justify-between">
                  <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white backdrop-blur-sm`}>
                    {project.category}
                  </span>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-2"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Bottom: Project Details */}
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                    {project.title}
                  </h3>

                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: hoveredIndex === index ? 'auto' : 0,
                      opacity: hoveredIndex === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-300 text-sm mb-4 overflow-hidden line-clamp-2"
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack Pills */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-xs text-white border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* Metrics */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="grid grid-cols-3 gap-3 mb-4"
                  >
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2">
                        <div className="text-emerald-400 text-xs font-semibold mb-0.5 capitalize">{key}</div>
                        <div className="text-white text-sm font-bold">{value}</div>
                      </div>
                    ))}
                  </motion.div>

                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${project.color} text-white font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 w-fit group/btn`}
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${project.color} blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: Zap, label: "Average Load Time", value: "< 2 seconds", color: "text-yellow-400" },
            { icon: Users, label: "Combined User Base", value: "50K+ Users", color: "text-blue-400" },
            { icon: TrendingUp, label: "Avg. Conversion Increase", value: "+67%", color: "text-emerald-400" }
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300">
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Want to see detailed case studies with metrics, challenges, and solutions?
          </p>
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
            <span>View Full Portfolio</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio