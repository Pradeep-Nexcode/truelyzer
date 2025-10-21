'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const ServicesHero = () => {
return ( <section
   id="services-hero"
   className="relative min-h-[90vh] flex flex-col justify-center items-center text-center bg-[#0b0b0b] overflow-hidden px-6 sm:px-8"
 >
{/* Background gradient + noise */} <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-black to-emerald-950/20"></div> <div className="absolute inset-0 backdrop-blur-[1px] bg-[url('/noise.png')] opacity-40 mix-blend-overlay"></div>

  {/* Floating shapes */}
  {[...Array(10)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-emerald-400/20 rounded-full"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ))}

  <motion.div
    className="relative z-10 max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6">
      <span className="block">Empowering Brands</span>
      <span className="block bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
        Through Digital Innovation
      </span>
    </h1>

    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
      We build high-performing, scalable web experiences designed to grow your business and strengthen your brand online.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link
        href="#our-services"
        className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 transition-all"
      >
        Explore Services
      </Link>
      <Link
        href="/contact"
        className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-full font-semibold hover:bg-emerald-400 hover:text-white transition-all"
      >
        Get in Touch
      </Link>
    </div>
  </motion.div>

  {/* SEO-friendly hidden tags */}
  <div className="hidden">
    <h2>Web Development Services | Truelyzer</h2>
    <p>Next.js, React, Web Design, Full-stack Development, SEO Optimization</p>
  </div>
</section>

)
}

export default ServicesHero
