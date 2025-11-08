"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, TrendingUp, Clock, Users } from "lucide-react"

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      id: 1,
      title: "FreshCart E-Commerce",
      category: "E-Commerce",
      description: "Full-stack grocery store with real-time inventory and payment integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      gradient: "from-purple-500 to-pink-500",
      tech: ["Next.js", "Stripe", "MongoDB"],
      liveUrl: "https://freshcart-demo.vercel.app",
      githubUrl: "https://github.com/username/freshcart",
      metrics: { users: "10K+", speed: "1.2s", conversion: "+45%" }
    },
    {
      id: 2,
      title: "BuildPro Construction",
      category: "Business",
      description: "Modern construction site with project gallery and quote system.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      gradient: "from-blue-500 to-cyan-500",
      tech: ["React", "Tailwind", "Sanity"],
      liveUrl: "https://buildpro-demo.vercel.app",
      githubUrl: "https://github.com/username/buildpro",
      metrics: { leads: "+120%", bounce: "-35%", seo: "Top 3" }
    },
    {
      id: 3,
      title: "FitLife Fitness App",
      category: "Health",
      description: "Workout tracking with custom routines and progress analytics.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      gradient: "from-orange-500 to-red-500",
      tech: ["React Native", "Firebase"],
      liveUrl: "https://fitlife-demo.vercel.app",
      githubUrl: "https://github.com/username/fitlife",
      metrics: { retention: "85%", workouts: "50K+", rating: "4.8★" }
    },
    {
      id: 4,
      title: "AgriTrack Manager",
      category: "Agriculture",
      description: "Farm management platform with crop tracking and weather data.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad649?w=800&q=80",
      gradient: "from-emerald-500 to-teal-500",
      tech: ["Vue.js", "PostgreSQL"],
      liveUrl: "https://agritrack-demo.vercel.app",
      githubUrl: "https://github.com/username/agritrack",
      metrics: { farms: "200+", efficiency: "+60%", roi: "3x" }
    },
    {
      id: 5,
      title: "QuickBite Delivery",
      category: "Food & Beverage",
      description: "Restaurant ordering with live tracking and loyalty rewards.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
      gradient: "from-yellow-500 to-orange-500",
      tech: ["React", "Node.js", "Maps"],
      liveUrl: "https://quickbite-demo.vercel.app",
      githubUrl: "https://github.com/username/quickbite",
      metrics: { orders: "15K/mo", delivery: "28min", satisfaction: "94%" }
    },
    {
      id: 6,
      title: "DevFolio Builder",
      category: "SaaS",
      description: "No-code portfolio builder with templates and custom domains.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      gradient: "from-indigo-500 to-purple-500",
      tech: ["Next.js", "Vercel", "MDX"],
      liveUrl: "https://devfolio-demo.vercel.app",
      githubUrl: "https://github.com/username/devfolio",
      metrics: { users: "5K+", templates: "50+", uptime: "99.9%" }
    }
  ]

  return (
    <section
      id="portfolio"
      className="relative min-h-screen bg-neutral-950 text-white py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Effects - Matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>

      {/* Floating Particles - Matching Hero */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -40, 0], opacity: [0, 0.4, 0] }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${project.gradient} rounded-full`}>
                    {project.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : -10
                  }}
                  className="absolute top-4 right-4 flex gap-2"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 hover:bg-white rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 text-slate-900" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 hover:bg-white rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4 text-slate-900" />
                  </a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs text-slate-300 bg-slate-700/50 rounded border border-slate-600/50">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                {/* <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-700/50">
                  {Object.entries(project.metrics).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-emerald-400 text-sm font-bold">{value}</div>
                      <div className="text-slate-500 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div> */}
              </div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${project.gradient} mix-blend-soft-light`}></div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { icon: Clock, label: "Avg Load Time", value: "< 2s", color: "text-yellow-400" },
            { icon: Users, label: "Total Users", value: "50K+", color: "text-blue-400" },
            { icon: TrendingUp, label: "Avg Growth", value: "+67%", color: "text-emerald-400" }
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="flex items-center gap-4 p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                <div className={`p-3 rounded-lg bg-slate-700/50`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio