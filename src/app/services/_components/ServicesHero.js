'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code2, Palette, ShoppingCart, Search, Smartphone, Layers, TrendingUp, Shield } from 'lucide-react'

const ServicesHero = () => {
  const services = [
    { icon: Code2, name: 'Web Development', color: 'emerald' },
    { icon: ShoppingCart, name: 'E-Commerce', color: 'blue' },
    { icon: Palette, name: 'UI/UX Design', color: 'purple' },
    { icon: Search, name: 'SEO & Marketing', color: 'orange' },
    { icon: Smartphone, name: 'Mobile Apps', color: 'pink' },
    { icon: Layers, name: 'CMS Solutions', color: 'cyan' },
    { icon: TrendingUp, name: 'Analytics', color: 'yellow' },
    { icon: Shield, name: 'Security', color: 'red' },
  ]

  return (
    <section className="relative min-h-screen bg-neutral-950 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-gray-500 mb-8"
        >
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-emerald-400">Services</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-400">Full-Stack Solutions</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-white block mb-2">We Build</span>
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Transform your business with premium web solutions built on cutting-edge technology. 
                <span className="block mt-2 text-gray-500">Fast. Scalable. Stunning.</span>
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-10">
                {[
                  'Lightning-fast performance (<2s load)',
                  '100% mobile-responsive design',
                  'SEO-optimized from day one',
                  'Ongoing support & maintenance'
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#our-services"
                  className="group relative px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full overflow-hidden transition-all hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
                >
                  <span className="relative flex items-center gap-2">
                    View All Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-emerald-500/30 text-emerald-400 font-semibold rounded-full hover:bg-emerald-500/10 transition-all"
                >
                  Get Free Consultation
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 mt-10 pt-10 border-t border-neutral-800">
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-500">Projects Delivered</div>
                </div>
                <div className="w-px h-12 bg-neutral-800"></div>
                <div>
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-sm text-gray-500">Client Satisfaction</div>
                </div>
                <div className="w-px h-12 bg-neutral-800"></div>
                <div>
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Floating Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] hidden lg:block"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              const angle = (index / services.length) * 2 * Math.PI
              const radius = 200
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    x: x,
                    y: y,
                  }}
                  animate={{
                    y: [y, y - 10, y],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                >
                  <div className="group relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Card */}
                    <div className="relative w-24 h-24 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl flex flex-col items-center justify-center gap-2 group-hover:border-emerald-500/50 transition-all cursor-pointer">
                      <Icon className="w-8 h-8 text-emerald-400" />
                      <span className="text-[10px] text-gray-400 text-center px-2 leading-tight">
                        {service.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Center Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-emerald-500/30 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-emerald-400 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      {/* SEO Content */}
      <div className="sr-only">
        <h2>Professional Web Development Services in Coimbatore | Truelyzer</h2>
        <p>
          Expert web development, e-commerce solutions, UI/UX design, mobile app development,
          SEO optimization, and digital marketing services in Coimbatore, Tamil Nadu.
          Custom web applications, CMS solutions, and full-stack development services.
        </p>
      </div>
    </section>
  )
}

export default ServicesHero