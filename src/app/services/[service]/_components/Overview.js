'use client'

import services from '@/data/services'
import { motion } from 'framer-motion'

const ServiceOverview = () => {
  const {
    heading,
    description,
    highlights,
    gradient
  } = services[0].overview

  return (
    <section className="relative py-32 bg-neutral-950 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl`}
          style={{ backgroundColor: gradient?.primary || 'rgba(16,185,129,0.1)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className={`absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl`}
          style={{ backgroundColor: gradient?.secondary || 'rgba(59,130,246,0.1)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className={`text-${gradient?.badge || 'emerald'}-500 text-sm font-semibold tracking-wider uppercase`}>
              {heading.badge || 'What We Offer'}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {heading.title}
            {heading.highlight && (
              <span className={`block mt-2 bg-gradient-to-r ${gradient?.text || 'from-emerald-400 to-teal-400'} bg-clip-text text-transparent`}>
                {heading.highlight}
              </span>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${gradient?.card || 'from-emerald-500/10 to-teal-500/10'} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className={`relative h-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-${gradient?.badge || 'emerald'}-500/50 transition-all duration-300`}>
                {/* Icon */}
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${gradient?.icon || 'from-emerald-500 to-teal-600'} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-${gradient?.badge || 'emerald'}-400 transition-colors`}>
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceOverview
   