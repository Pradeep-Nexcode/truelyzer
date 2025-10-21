'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How long does a typical web development project take?',
    answer: 'Most projects take between 4 to 12 weeks depending on the complexity and requirements of the project.'
  },
  {
    question: 'Do you provide ongoing support after the project?',
    answer: 'Yes! We offer post-launch support and maintenance packages to keep your website updated and secure.'
  },
  {
    question: 'Can you integrate my existing APIs or tools?',
    answer: 'Absolutely. We specialize in full-stack development and can integrate third-party APIs, payment gateways, and custom tools.'
  },
  {
    question: 'What technologies do you use for web development?',
    answer: 'We primarily use React, Next.js, Node.js, GraphQL, Tailwind CSS, and other modern web technologies to build fast and scalable applications.'
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-24 px-6 sm:px-10 lg:px-20 bg-[#0f0f0f] text-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 max-w-3xl mx-auto text-lg"
        >
          Answers to common questions about our web development services. We aim to make your project smooth and transparent.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left text-white font-medium hover:bg-white/10 transition-all duration-200"
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-slate-300 text-sm">
                {faq.answer}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
