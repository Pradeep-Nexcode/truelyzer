'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const features = [
{
title: 'Performance-First Design',
description:
'Our websites are built to be lightning-fast, mobile-responsive, and SEO-optimized — helping you rank higher and convert better.',
iconColor: 'text-emerald-400',
},
{
title: 'Full-Stack Expertise',
description:
'From intuitive UI/UX to powerful backend architecture, our team covers every layer of web development using React, Next.js, and GraphQL.',
iconColor: 'text-emerald-400',
},
{
title: 'Transparent Communication',
description:
'We keep you updated at every milestone. Expect clear timelines, honest feedback, and no hidden surprises — ever.',
iconColor: 'text-emerald-400',
},
{
title: 'End-to-End Digital Growth',
description:
'Beyond development, we assist with branding, analytics, and ongoing optimization — ensuring long-term success.',
iconColor: 'text-emerald-400',
},
]

const WhyChooseUs = () => {
return ( <section
   id="why-choose-truelyzer"
   className="relative bg-[#0b0b0b] py-24 px-6 sm:px-8 lg:px-12 text-center overflow-hidden"
 >
{/* Subtle background glow */} <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none"></div>
  {/* Section Heading */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-3xl mx-auto mb-16"
  >
    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
      Why Choose <span className="text-emerald-400">Truelyzer</span>
    </h2>
    <p className="text-slate-400 text-lg">
      We combine <span className="text-white font-medium">modern technology</span>,
      <span className="text-white font-medium"> clean design</span>, and
      <span className="text-white font-medium"> transparent process</span> to deliver results that stand out.
    </p>
  </motion.div>

  {/* Features Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {features.map((feature, i) => (
      <motion.div
        key={i}
        className="group relative bg-gradient-to-b from-[#111] to-[#0b0b0b] border border-emerald-900/40 rounded-2xl p-8 shadow-lg hover:shadow-emerald-500/10 transition-all duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.15 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-6">
          <CheckCircle
            className={`w-10 h-10 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}
          />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">
          {feature.title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-sm">
          {feature.description}
        </p>
      </motion.div>
    ))}
  </div>

  {/* SEO Keywords (hidden) */}
  <div className="hidden">
    <h3>Truelyzer Web Development | React | Next.js | SEO | Branding</h3>
    <p>
      Fast web design, custom Next.js apps, SEO-friendly websites, performance optimization, UI/UX design, scalable backend development.
    </p>
  </div>
</section>

)
}

export default WhyChooseUs
