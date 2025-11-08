'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, CheckCircle2, Zap, Users, Award, Clock } from 'lucide-react'

const CTASection = () => {
  const benefits = [
    { icon: Zap, text: 'Fast Delivery' },
    { icon: Users, text: 'Dedicated Team' },
    { icon: Award, text: 'Quality Guaranteed' },
    { icon: Clock, text: '24/7 Support' },
  ]

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '<2s', label: 'Avg Load Time' },
  ]

  return (
    <section
      id="cta"
      className="relative py-32 px-6 bg-neutral-950 overflow-hidden"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ 
            y: [0, -30, 0], 
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 1] 
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 rounded-3xl blur-3xl opacity-20"></div>

          {/* Main Box */}
          <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            {/* Sparkle Icon */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-8 right-8 text-emerald-400/20"
            >
              <Sparkles className="w-24 h-24" />
            </motion.div>

            <div className="relative z-10 text-center">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-400">Limited Slots Available</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              >
                Ready to Launch Your
                <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                  Dream Project?
                </span>
              </motion.h2>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
              >
                Join <span className="text-white font-semibold">50+ successful businesses</span> who&apos;ve transformed their digital presence with Trulyzer.
                <span className="block mt-2 text-gray-500">Let&apos;s build something extraordinary together.</span>
              </motion.p>

              {/* Benefits Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10"
              >
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50 hover:border-emerald-500/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-gray-300 font-medium">{benefit.text}</span>
                    </div>
                  )
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60"
                >
                  <span className="relative flex items-center gap-2">
                    Start Your Project Now
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </Link>

                <Link
                  href="/portfolio"
                  className="px-10 py-5 border-2 border-emerald-500/40 text-emerald-400 font-bold text-lg rounded-full hover:bg-emerald-500/10 hover:border-emerald-400 transition-all"
                >
                  View Our Work
                </Link>
              </motion.div>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap justify-center gap-8 pt-8 border-t border-neutral-800"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Trust Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center justify-center gap-2 mt-8 text-gray-500 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free consultation • No commitment required • Quick response guaranteed</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Mini CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">
            Not ready yet? No problem!
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            <span>Explore our blog for free insights</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* SEO Content */}
      <div className="sr-only">
        <h3>Start Your Web Development Project with Trulyzer - Coimbatore</h3>
        <p>
          Ready to build your website? Contact Trulyzer for professional web development services in Coimbatore. 
          Expert React and Next.js development, fast delivery, dedicated support team, quality guaranteed. 
          Get a free consultation for your custom website, e-commerce platform, or web application project. 
          Serving businesses in Tamil Nadu with high-performance, SEO-optimized digital solutions.
        </p>
      </div>
    </section>
  )
}

export default CTASection