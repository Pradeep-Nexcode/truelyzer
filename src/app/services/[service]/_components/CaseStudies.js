'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const CaseStudies = () => {
const projects = [
{
title: 'E-commerce Redefined',
description: 'Built a blazing-fast online shopping experience with Next.js, Tailwind, and GraphQL for a global brand.',
image: '/images/work1.jpg',
},
{
title: 'SaaS Dashboard Platform',
description: 'Developed a secure, scalable dashboard for a B2B SaaS company with real-time analytics and API integrations.',
image: '/images/work2.jpg',
},
{
title: 'Creative Agency Website',
description: 'Delivered a minimal yet interactive website that boosted engagement and conversions for a digital agency.',
image: '/images/work3.jpg',
},
]

return ( <section className="relative py-24 bg-[#0f0f0f] text-white px-6 sm:px-10 lg:px-20"> <div className="max-w-6xl mx-auto text-center">
<motion.h2
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-4xl sm:text-5xl font-bold mb-6"
>
Our Work
</motion.h2>
 
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto mb-12"
    >
      Explore how Truelyzer has helped businesses grow with modern, performance-first web solutions.
    </motion.p>

    <div className="grid md:grid-cols-3 gap-10">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
        >
          <div className="relative w-full h-56 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 text-left">
            <h3 className="text-xl font-semibold mb-2 text-emerald-400">{project.title}</h3>
            <p className="text-slate-400 text-sm">{project.description}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="mt-16"
    >
      <Link
        href="/portfolio"
        className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
      >
        View All Projects
      </Link>
    </motion.div>
  </div>
</section>

)
}

export default CaseStudies
