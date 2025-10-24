'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import services from '../../../../data/services'

const ServiceHero = () => {
  const data = services[0]

  return (
    <section
      id="service-hero"
      className="relative min-h-screen flex flex-col justify-center items-center bg-neutral-950 overflow-hidden px-6 sm:px-8 lg:px-12 py-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,${data.gradient?.primary || 'rgba(16,185,129,0.08)'},transparent_60%)]`}></div>
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>

      {/* Animated Stars */}
      <motion.div
        className={`absolute text-5xl top-32 right-32`}
        style={{ color: data.gradient?.accent || '#6ee7b7' }}
        animate={{ scale: [1, 1.8, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✺
      </motion.div>
      <motion.div
        className={`absolute text-5xl bottom-40 left-32`}
        style={{ color: data.gradient?.accent || '#6ee7b7' }}
        animate={{ scale: [1, 1.8, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✺
      </motion.div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-30"
          style={{ 
            backgroundColor: data.gradient?.accent || '#10b981',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -40, 0], opacity: [0, 0.4, 0] }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto text-center">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8"
        >
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-emerald-400">{data.title}</span>
        </motion.div>

        {/* Badge */}
        {data.badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-${data.gradient?.badge || 'emerald'}-500/10 border border-${data.gradient?.badge || 'emerald'}-400/20 backdrop-blur-sm`}>
              <motion.div
                className={`w-2 h-2 rounded-full bg-${data.gradient?.badge || 'emerald'}-400`}
                animate={{
                  boxShadow: [
                    `0 0 0 0 ${data.gradient?.badgeShadow || 'rgba(16,185,129,0.5)'}`,
                    `0 0 0 10px ${data.gradient?.badgeShadow || 'rgba(16,185,129,0)'}`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {data.badge.icon && <span className="text-xl">{data.badge.icon}</span>}
              <span className={`text-sm font-medium text-${data.gradient?.badge || 'emerald'}-300`}>
                {data.badge.text}
              </span>
            </div>
          </motion.div>
        )}

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          <span className="block text-white mb-2">{data.title}</span>
          <span className={`block bg-gradient-to-r ${data.gradient?.text || 'from-emerald-400 to-emerald-600'} bg-clip-text text-transparent`}>
            {data.titleHighlight}
          </span>
        </motion.h1>

        {/* Subtitle */}  
        {data.subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4"
          >
            {data.subtitle}
          </motion.p>
        )}

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          {data.description}
        </motion.p>

        {/* Features List */}
        {data.features && data.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {data.features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 bg-neutral-900/60 border border-${data.gradient?.badge || 'emerald'}-500/20 rounded-full backdrop-blur-sm`}
              >
                <CheckCircle2 className={`w-4 h-4 text-${data.gradient?.badge || 'emerald'}-400`} />
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href={data.ctaLink || '/contact'}
            className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-${data.gradient?.badge || 'emerald'}-500 text-white overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg shadow-${data.gradient?.badge || 'emerald'}-500/20`}
          >
            <span className="relative flex items-center gap-2">
              {data.ctaText || 'Get Started'}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </Link>

          {data.secondaryCta && (
            <Link
              href={data.secondaryCta.link}
              className={`group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-${data.gradient?.badge || 'emerald'}-500/40 text-gray-200 hover:border-${data.gradient?.badge || 'emerald'}-400 hover:bg-${data.gradient?.badge || 'emerald'}-500/10 transition-all duration-300`}
            >
              {data.secondaryCta.text}
            </Link>
          )}
        </motion.div>

        {/* Stats */}
        {data.stats && data.stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {data.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`absolute inset-0 bg-${data.gradient?.badge || 'emerald'}-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all`}></div>
                <div className={`relative bg-neutral-900/60 backdrop-blur-md border border-${data.gradient?.badge || 'emerald'}-500/20 rounded-2xl p-6 shadow-inner text-center`}>
                  <div className={`text-3xl md:text-4xl font-bold text-${data.gradient?.badge || 'emerald'}-400 mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={`w-8 h-12 border-2 border-${data.gradient?.badge || 'emerald'}-500/40 rounded-full flex justify-center p-2`}>
          <motion.div
            className={`w-1.5 h-3 bg-${data.gradient?.badge || 'emerald'}-400 rounded-full`}
            animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* SEO Content */}
      {data.seo && (
        <div className="sr-only">
          <h2>{data.seo.title}</h2>
          <p>{data.seo.description}</p>
          {data.seo.keywords && <p>Keywords: {data.seo.keywords}</p>}
        </div>
      )}
    </section>
  )
}

export default ServiceHero

// ====================================
// EXAMPLE USAGE - Web Development Page
// ====================================
/*
import ServiceHero from '@/components/ServiceHero'

const webDevData = {
  title: "Web Development",
  titleHighlight: "Services",
  subtitle: "Build Your Digital Future",
  description: "Create fast, scalable, and user-focused web experiences that drive results and stand out in a digital-first world.",
  ctaText: "Start Your Project 🚀",
  ctaLink: "/contact",
  secondaryCta: {
    text: "View Portfolio",
    link: "/portfolio"
  },
  badge: {
    icon: "💻",
    text: "Professional Web Development"
  },
  features: [
    "Next.js & React",
    "Mobile Responsive",
    "SEO Optimized",
    "Lightning Fast"
  ],
  stats: [
    { number: "50+", label: "Projects Delivered" },
    { number: "<2s", label: "Average Load Time" },
    { number: "98%", label: "Client Satisfaction" }
  ],
  gradient: {
    primary: "rgba(16,185,129,0.08)",
    accent: "#6ee7b7",
    badge: "emerald",
    badgeShadow: "rgba(16,185,129,0.5)",
    text: "from-emerald-400 to-emerald-600"
  },
  seo: {
    title: "Professional Web Development Services in Coimbatore | Truelyzer",
    description: "Expert web development services using Next.js, React, and modern technologies. Build fast, scalable websites in Coimbatore, Tamil Nadu.",
    keywords: "web development, Next.js, React, Coimbatore, Tamil Nadu"
  }
}

export default function WebDevelopmentPage() {
  return <ServiceHero data={webDevData} />
}
*/

// ====================================
// EXAMPLE USAGE - UI/UX Design Page
// ====================================
/*
const uiuxData = {
  title: "UI/UX Design",
  titleHighlight: "Services",
  subtitle: "Design That Converts",
  description: "Create stunning, intuitive user experiences that elevate your brand and drive engagement through data-driven design decisions.",
  ctaText: "Start Design Project",
  ctaLink: "/contact",
  secondaryCta: {
    text: "See Our Designs",
    link: "/portfolio"
  },
  badge: {
    icon: "🎨",
    text: "Award-Winning Design"
  },
  features: [
    "User Research",
    "Prototyping",
    "Figma Expert",
    "Mobile First"
  ],
  stats: [
    { number: "100+", label: "Designs Created" },
    { number: "40%", label: "Avg Conversion Boost" },
    { number: "5★", label: "Client Rating" }
  ],
  gradient: {
    primary: "rgba(168,85,247,0.08)",
    accent: "#c084fc",
    badge: "purple",
    badgeShadow: "rgba(168,85,247,0.5)",
    text: "from-purple-400 to-pink-600"
  },
  seo: {
    title: "Professional UI/UX Design Services | Truelyzer",
    description: "Expert UI/UX design services creating beautiful, user-centered experiences. Figma, prototyping, user research in Coimbatore.",
    keywords: "UI design, UX design, Figma, prototyping, user experience"
  }
}
*/

// ====================================
// EXAMPLE USAGE - SEO Services Page
// ====================================
/*
const seoData = {
  title: "SEO & Digital Marketing",
  titleHighlight: "Services",
  subtitle: "Rank Higher, Grow Faster",
  description: "Maximize your online visibility with data-driven SEO strategies that deliver measurable results and sustainable growth.",
  ctaText: "Boost Your Rankings 📈",
  ctaLink: "/contact",
  secondaryCta: {
    text: "Free SEO Audit",
    link: "/seo-audit"
  },
  badge: {
    icon: "🚀",
    text: "Proven SEO Results"
  },
  features: [
    "Technical SEO",
    "Content Strategy",
    "Link Building",
    "Analytics"
  ],
  stats: [
    { number: "150%", label: "Avg Traffic Increase" },
    { number: "#1", label: "Page Rankings" },
    { number: "6mo", label: "To See Results" }
  ],
  gradient: {
    primary: "rgba(59,130,246,0.08)",
    accent: "#60a5fa",
    badge: "blue",
    badgeShadow: "rgba(59,130,246,0.5)",
    text: "from-blue-400 to-cyan-600"
  },
  seo: {
    title: "SEO & Digital Marketing Services in Coimbatore | Truelyzer",
    description: "Professional SEO services to improve rankings and drive organic traffic. Technical SEO, content marketing in Tamil Nadu.",
    keywords: "SEO services, digital marketing, search engine optimization, Coimbatore"
  }
}
*/