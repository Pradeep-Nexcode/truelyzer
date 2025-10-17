"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
      color: "from-indigo-500 to-purple-500"
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
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase">
              Portfolio
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Our Creative
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Masterpieces
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that captivate, engage, and deliver exceptional results for our clients.
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
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent group-hover:from-black/70 group-hover:via-black/60 transition-all duration-500"></div>
              </div>

              {/* Gradient border effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${project.color} p-[2px] rounded-2xl`}>
                <div className="w-full h-full bg-slate-900 rounded-2xl"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 z-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: hoveredIndex === index ? 0 : 20,
                    opacity: hoveredIndex === index ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
                    {project.category}
                  </span>
                </motion.div>

                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {project.title}
                </h3>

                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredIndex === index ? 'auto' : 0,
                    opacity: hoveredIndex === index ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-slate-300 text-sm md:text-base mb-4 overflow-hidden"
                >
                  A cutting-edge solution that combines elegant design with powerful functionality to deliver exceptional user experiences.
                </motion.p>

                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: hoveredIndex === index ? 0 : 20,
                    opacity: hoveredIndex === index ? 1 : 0 
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${project.color} text-white font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 w-fit group/btn`}
                >
                  View Project
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${project.color} blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
            <span>View All Projects</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio