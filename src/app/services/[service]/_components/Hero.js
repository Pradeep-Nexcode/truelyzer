'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
return ( <section
   id="webdev-hero"
   className="relative min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-[#0f0f0f] text-center overflow-hidden px-6 sm:px-10 lg:px-20"
 >
{/* Subtle animated background grid */} <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

  {/* Floating glowing shapes */}
  {[...Array(10)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 3 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ))}

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 max-w-4xl"
  >
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6">
      Web <span className="text-emerald-400">Development</span> Services
    </h1>

    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
      Build fast, scalable, and user-focused web experiences that drive
      results and stand out in a digital-first world.
    </p>

    <Link
      href="/contact"
      className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
    >
      Start Your Project 🚀
    </Link>
  </motion.div>

  {/* Hidden SEO snippet */}
  <div className="hidden">
    <h2>Truelyzer Web Development Services</h2>
    <p>
      Truelyzer provides professional web development services, building
      responsive, SEO-friendly, and high-performance websites for modern
      businesses.
    </p>
  </div>
</section>

)
}

export default Hero
