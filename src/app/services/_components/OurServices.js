'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code2, Brush, Rocket, Megaphone, Cpu, Shield, ArrowRight, Sparkles, Star } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, responsive, and SEO-friendly websites built with Next.js, React, and modern tech.",
    href: "/services/web-development",
    gradient: "from-emerald-500 to-teal-600",
    features: ["Next.js 15", "React 19", "TypeScript"],
    popular: true
  },
  {
    icon: Brush,
    title: "UI/UX Design",
    desc: "Clean and intuitive user experiences that elevate your brand's identity and engagement.",
    href: "/services/ui-ux-design",
    gradient: "from-purple-500 to-pink-600",
    features: ["Figma", "Prototyping", "User Research"]
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    desc: "Lightning-fast performance tuning to improve load times and Core Web Vitals.",
    href: "/services/performance-optimization",
    gradient: "from-orange-500 to-red-600",
    features: ["<2s Load", "95+ Score", "CDN Setup"]
  },
  {
    icon: Megaphone,
    title: "SEO & Digital Strategy",
    desc: "Maximize visibility and conversions through data-driven SEO and marketing solutions.",
    href: "/services/seo-digital-marketing",
    gradient: "from-blue-500 to-cyan-600",
    features: ["Technical SEO", "Content", "Analytics"]
  },
  {
    icon: Cpu,
    title: "Automation & Integrations",
    desc: "Streamline workflows using APIs, automation tools, and intelligent systems.",
    href: "/services/automation",
    gradient: "from-yellow-500 to-orange-600",
    features: ["APIs", "Webhooks", "AI Integration"]
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    desc: "Continuous support and updates to keep your digital assets secure and reliable.",
    href: "/services/maintenance",
    gradient: "from-green-500 to-emerald-600",
    features: ["24/7 Support", "Updates", "Monitoring"]
  },
]

const OurServices = () => {
  return (
    <section 
      id="our-services"
      className="relative bg-neutral-950 py-32 px-6 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">What We Offer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Comprehensive Digital
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Solutions for Your Business
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            From ideation to execution, we provide end-to-end services that transform your digital vision into reality.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <Link href={service.href}>
                  <div className="relative h-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer">
                    {/* Popular badge */}
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg">
                        <Star className="w-3 h-3 text-white fill-white" />
                        <span className="text-xs font-bold text-white">Popular</span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Arrow icon that appears on hover */}
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-6 h-6 text-emerald-400" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Features tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-neutral-800/80 border border-neutral-700 rounded-full text-xs text-gray-400"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Learn More link */}
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Bottom gradient line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-1">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-400 text-sm">
                Let&apos;s discuss your unique requirements
              </p>
            </div>
            <Link
              href="/contact"
              className="whitespace-nowrap px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-all hover:scale-105 shadow-lg shadow-emerald-500/30"
            >
              Talk to Our Team
            </Link>
          </div>
        </motion.div>
      </div>

      {/* SEO Content */}
      <div className="sr-only">
        <h3>Professional Web Development Services in Coimbatore - Trulyzer</h3>
        <p>
          Expert web development, UI/UX design, performance optimization, SEO services, 
          automation, and maintenance support in Coimbatore. Custom Next.js development, 
          React applications, responsive design, fast websites, digital marketing, 
          API integrations, and 24/7 technical support for businesses in Tamil Nadu.
        </p>
      </div>
    </section>
  )
}

export default OurServices