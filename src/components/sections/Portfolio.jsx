"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const Portfolio = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Map scroll progress to horizontal movement (0 → -100%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"])

  return (
    <section ref={sectionRef} className="relative h-[450vh] bg-neutral- bg-gradient-to-br from-emerald-100 via-emerald-300 to-emerald-950  ">
         {/* 🌌 Background layers */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>

       {/* Heading */}
        <div className="text-center pt-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-black"
          >
            Our <span className="text-emerald-800">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-700 mt-4 max-w-2xl mx-auto"
          >
            Explore some of our featured projects — from elegant websites to modern apps that deliver real results.
          </motion.p>
        </div>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          style={{ x }}
          className="flex gap-16 px-20"
        >

          <div
            className="w-[550px] h-[350px] relative shrink-0 rounded-xl overflow-hidden"
          >
          </div>

          <div
            className="w-[550px] h-[350px] relative shrink-0 rounded-xl overflow-hidden"
          >
          </div>
          <div
            className="w-[550px] h-[350px] relative shrink-0 rounded-xl overflow-hidden"
          >
          </div>
  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((project) => (
            <div
              key={project}
              className="w-[550px] h-[350px] relative shrink-0 rounded-xl overflow-hidden shadow-lg group"
            >
              <Image
                src="https://cdn.pixabay.com/photo/2020/08/11/15/23/tree-5480239_1280.jpg"
                alt={`Project ${project}`}
                fill
                className="object-cover group-hover:opacity-60 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-white text-2xl font-semibold mb-4">Project {project}</h4>
                <p className="text-white text-center mb-4 px-6">
                  This is a brief description of the project, highlighting its main features and the problem it solved.
                </p>
                <button className="bg-emerald-500 text-white py-2 px-6 rounded-full hover:bg-emerald-600 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
 