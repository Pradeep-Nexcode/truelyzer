'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CTASection = () => {
return ( <section
   id="cta"
   className="relative py-28 px-6 sm:px-10 lg:px-20 bg-[#0b0b0b] overflow-hidden text-center"
 >
{/* Subtle glowing background accent */} <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_70%)] pointer-events-none"></div>

  {/* Animated Heading */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-3xl mx-auto"
  >
    <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
      Ready to Build Something <span className="text-emerald-400">Amazing</span>?
    </h2>

    <p className="text-slate-400 text-lg sm:text-xl mb-10">
      Partner with <span className="text-white font-medium">Truelyzer</span> to craft high-performance web experiences built with precision, creativity, and speed.
    </p>

    <Link
      href="/contact"
      className="inline-block bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
    >
      Start Your Project 🚀
    </Link>
  </motion.div>

  {/* Decorative grid overlay */}
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

  {/* Hidden SEO snippet */}
  <div className="hidden">
    <h3>Truelyzer Web Design CTA | Start Your Project | Contact Truelyzer</h3>
    <p>Work with Truelyzer for expert web design, app development, and performance-focused solutions.</p>
  </div>
</section>

)
}

export default CTASection
