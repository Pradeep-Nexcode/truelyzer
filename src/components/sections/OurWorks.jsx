"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "KPN Fresh",
    category: "E-Commerce Website",
    image: "/images/work1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Buildly",
    category: "Construction Company",
    image: "/images/work2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "ZenFit",
    category: "Fitness App",
    image: "/images/work3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "FarmX",
    category: "Farm Management",
    image: "/images/work4.jpg",
    link: "#",
  },
]

const OurWorks = () => {
  return (
    <section id="works" className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Our <span className="text-orange-500">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Explore some of our featured projects — from elegant websites to modern apps that deliver real results.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{project.category}</p>
                <a
                  href={project.link}
                  className="inline-block mt-4 text-sm font-medium text-orange-500 hover:text-orange-600"
                >
                  View Project →
                </a>
              </div>

              {/* Overlay hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}

export default OurWorks
