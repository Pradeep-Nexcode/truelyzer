'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import services from '@/data/services'

const ServiceFAQ = ({ data }) => {
  const {
    heading,
    description,
    faqs,
    gradient,
    cta
  } = services[1].faq


  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-32 bg-neutral-950 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full blur-3xl"
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

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <HelpCircle className="w-4 h-4 text-emerald-400" />
              <span className={`text-sm font-semibold text-${gradient?.badge || 'emerald'}-400`}>
                {heading.badge || 'FAQ'}
              </span>
            </div>
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

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const Icon = faq.icon || MessageCircle

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow effect when open */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${gradient?.card || 'from-emerald-500/10 to-teal-500/10'} rounded-2xl blur-xl opacity-0 transition-opacity duration-500 ${
                    isOpen ? 'opacity-20' : 'group-hover:opacity-10'
                  }`}
                ></div>

                {/* FAQ Card */}
                <div
                  className={`relative bg-neutral-900/80 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? `border-${gradient?.badge || 'emerald'}-500/50 shadow-lg shadow-${gradient?.badge || 'emerald'}-500/10` 
                      : `border-neutral-800 hover:border-${gradient?.badge || 'emerald'}-500/30`
                  }`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-start gap-4 p-6 text-left transition-all duration-200"
                  >
                    {/* Icon */}
                    {faq.icon && (
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${gradient?.icon || 'from-emerald-500 to-teal-600'} flex items-center justify-center shadow-lg transition-transform duration-300 ${
                        isOpen ? 'scale-110' : 'group-hover:scale-105'
                      }`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    )}

                    {/* Question Text */}
                    <div className="flex-1">
                      <h3 className={`text-lg md:text-xl font-semibold transition-colors ${
                        isOpen ? `text-${gradient?.badge || 'emerald'}-400` : 'text-white group-hover:text-emerald-400'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className={`w-6 h-6 text-${gradient?.badge || 'emerald'}-400`} />
                    </motion.div>
                  </button>

                  {/* Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className={`px-6 pb-6 ${faq.icon ? 'pl-[88px]' : ''}`}>
                          <div className={`border-l-2 border-${gradient?.badge || 'emerald'}-500/30 pl-6`}>
                            <p className="text-gray-400 leading-relaxed">
                              {faq.answer}
                            </p>
                            {faq.link && (
                              <Link
                                href={faq.link.url}
                                className={`inline-flex items-center gap-2 mt-4 text-${gradient?.badge || 'emerald'}-400 hover:text-${gradient?.badge || 'emerald'}-300 transition-colors text-sm font-medium`}
                              >
                                {faq.link.text}
                                <ChevronDown className="w-4 h-4 -rotate-90" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom gradient indicator when open */}
                  {isOpen && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className={`h-1 bg-gradient-to-r ${gradient?.bottomBar || 'from-emerald-500 to-teal-600'}`}
                    />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="relative inline-block">
              <div className={`absolute inset-0 bg-gradient-to-r ${gradient?.card || 'from-emerald-500/10 to-teal-500/10'} rounded-2xl blur-xl opacity-30`}></div>
              <div className={`relative bg-gradient-to-r ${gradient?.card || 'from-emerald-500/10 to-teal-500/10'} border border-${gradient?.badge || 'emerald'}-500/20 rounded-2xl p-8 backdrop-blur-sm`}>
                <MessageCircle className={`w-8 h-8 text-${gradient?.badge || 'emerald'}-400 mx-auto mb-4`} />
                <h3 className="text-2xl font-bold text-white mb-3">
                  {cta.title || 'Still Have Questions?'}
                </h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  {cta.description || "Our team is ready to help. Get in touch for a free consultation."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={cta.primaryLink || '/contact'}
                    className={`px-8 py-4 bg-${gradient?.badge || 'emerald'}-500 text-white font-semibold rounded-full hover:bg-${gradient?.badge || 'emerald'}-600 transition-all hover:scale-105 shadow-lg shadow-${gradient?.badge || 'emerald'}-500/30`}
                  >
                    {cta.primaryText || 'Contact Us'}
                  </Link>
                  {cta.secondaryText && (
                    <Link
                      href={cta.secondaryLink || '#'}
                      className={`px-8 py-4 border-2 border-${gradient?.badge || 'emerald'}-500/30 text-${gradient?.badge || 'emerald'}-400 font-semibold rounded-full hover:bg-${gradient?.badge || 'emerald'}-500/10 transition-all`}
                    >
                      {cta.secondaryText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ServiceFAQ 