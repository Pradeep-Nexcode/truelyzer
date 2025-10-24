'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink, TrendingUp, Clock, Award } from 'lucide-react'
import services from '@/data/services'

const ServiceCaseStudies = () => {
  const {
    heading,
    description,
    projects,
    cta,
    gradient,
    showStats
  } = services[0].caseStudies

  return (
    <section className="relative py-32 bg-neutral-950 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: gradient?.primary || 'rgba(16,185,129,0.08)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className={`text-${gradient?.badge || 'emerald'}-500 text-sm font-semibold tracking-wider uppercase`}>
              {heading.badge || 'Portfolio'}
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${gradient?.card || 'from-emerald-500/10 to-teal-500/10'} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Card */}
              <div className="relative h-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden bg-neutral-800">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${gradient?.imagePlaceholder || 'from-emerald-500/20 to-teal-500/20'} flex items-center justify-center`}>
                      <span className="text-6xl opacity-30">{project.icon || '🚀'}</span>
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                  {/* Category Badge */}
                  {project.category && (
                    <div className={`absolute top-4 left-4 px-3 py-1.5 bg-${gradient?.badge || 'emerald'}-500/20 backdrop-blur-sm border border-${gradient?.badge || 'emerald'}-500/30 rounded-full`}>
                      <span className={`text-xs font-semibold text-${gradient?.badge || 'emerald'}-400`}>
                        {project.category}
                      </span>
                    </div>
                  )}

                  {/* View Project Button (appears on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={project.link || '#'}
                      className={`px-6 py-3 bg-${gradient?.badge || 'emerald'}-500 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-${gradient?.badge || 'emerald'}-600 transition-all hover:scale-105 shadow-lg`}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-${gradient?.badge || 'emerald'}-400 transition-colors`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Stats (optional) */}
                  {showStats && project.stats && (
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-neutral-800">
                      {project.stats.map((stat, i) => {
                        const Icon = stat.icon || TrendingUp
                        return (
                          <div key={i} className="flex items-center gap-2">
                            <Icon className={`w-4 h-4 text-${gradient?.badge || 'emerald'}-400`} />
                            <div>
                              <div className="text-white text-sm font-semibold">{stat.value}</div>
                              <div className="text-gray-500 text-xs">{stat.label}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link
              href={cta.link || '/portfolio'}
              className={`group inline-flex items-center gap-3 px-8 py-4 bg-${gradient?.badge || 'emerald'}-500 text-white font-semibold text-lg rounded-full hover:bg-${gradient?.badge || 'emerald'}-600 transition-all hover:scale-105 shadow-lg shadow-${gradient?.badge || 'emerald'}-500/30`}
            >
              {cta.text || 'View All Projects'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ServiceCaseStudies

 
 