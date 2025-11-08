'use client'

import { motion } from 'framer-motion'
import { Zap, Code2, MessageSquare, TrendingUp, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

const features = [
  {
    title: 'Lightning-Fast Performance',
    description: 'Our websites load in under 2 seconds with 95+ Google PageSpeed scores. Fast sites = better rankings + higher conversions.',
    icon: Zap,
    gradient: 'from-emerald-400 to-teal-500',
    stats: '<2s load time',
    highlight: 'Core Web Vitals optimized'
  },
  {
    title: 'Full-Stack Mastery',
    description: 'From pixel-perfect UI to scalable backends. We leverage React, Next.js, Node.js, and modern APIs to build robust solutions.',
    icon: Code2,
    gradient: 'from-blue-400 to-cyan-500',
    stats: '10+ technologies',
    highlight: 'Future-proof stack'
  },
  {
    title: 'Crystal Clear Communication',
    description: 'Weekly updates, real-time progress tracking, and direct access to your dev team. No jargon, no surprises—just honest collaboration.',
    icon: MessageSquare,
    gradient: 'from-purple-400 to-pink-500',
    stats: '24/7 support',
    highlight: 'Dedicated project manager'
  },
  {
    title: 'Growth-Focused Strategy',
    description: 'We don\'t just build sites—we craft digital experiences. Integrated SEO, analytics setup, and conversion optimization included.',
    icon: TrendingUp,
    gradient: 'from-orange-400 to-red-500',
    stats: '40% avg traffic boost',
    highlight: 'Built-in analytics'
  },
]

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-trulyzer"
      className="relative bg-neutral-950 py-32 px-6 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">The Trulyzer Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Why Top Brands
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Choose Trulyzer
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We don&apos;t just build websites—we engineer digital experiences that drive real business results.
            <span className="block mt-2 text-gray-500">Modern technology meets proven strategy.</span>
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative h-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-300">
                  {/* Icon Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Stats badge */}
                    <div className="px-3 py-1.5 bg-neutral-800 border border-neutral-700 rounded-full">
                      <span className="text-xs font-semibold text-emerald-400">{feature.stats}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Highlight */}
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-gray-300">{feature.highlight}</span>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/20 rounded-3xl p-12 text-center overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Join 50+ successful businesses who&apos;ve elevated their brands with Trulyzer. 
                Let&apos;s build something extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-all hover:scale-105 shadow-lg shadow-emerald-500/30">
                  <span className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-4 border-2 border-emerald-500/30 text-emerald-400 font-semibold rounded-full hover:bg-emerald-500/10 transition-all">
                  Schedule Free Consultation
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-neutral-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-500">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-500">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-gray-500">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SEO Content */}
      <div className="sr-only">
        <h3>Why Choose Trulyzer for Web Development in Coimbatore</h3>
        <p>
          Professional web development company in Coimbatore offering fast website performance, 
          full-stack development with React and Next.js, transparent communication, SEO optimization, 
          conversion rate optimization, mobile-responsive design, and ongoing website maintenance. 
          Expert UI/UX design, GraphQL APIs, Node.js backend development, and digital marketing services 
          for businesses in Tamil Nadu and across India.
        </p>
      </div>
    </section>
  )
}

export default WhyChooseUs