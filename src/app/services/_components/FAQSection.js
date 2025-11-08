"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Clock, Palette, TrendingUp, Headphones, Code, MessageCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project duration varies by complexity. Most websites are completed within 4–8 weeks, including design, development, and revisions. We provide detailed timelines during our initial consultation.",
    icon: Clock,
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    question: "Do you provide both design and development?",
    answer:
      "Yes! Trulyzer handles everything from UI/UX design to full-stack development using React, Next.js, and GraphQL for seamless results. You get a complete end-to-end solution.",
    icon: Palette,
    gradient: "from-purple-400 to-pink-500"
  },
  {
    question: "Can you help with SEO and performance optimization?",
    answer:
      "Absolutely. Every site we build is optimized for speed, Core Web Vitals, and SEO best practices to help you rank higher on Google. We aim for 95+ PageSpeed scores and sub-2 second load times.",
    icon: TrendingUp,
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide ongoing maintenance, analytics tracking, and performance monitoring after launch to ensure long-term success. Our support includes bug fixes, updates, and 24/7 emergency assistance.",
    icon: Headphones,
    gradient: "from-orange-400 to-red-500"
  },
  {
    question: "What if I already have a design or backend?",
    answer:
      "No problem. We can integrate with your existing design, backend, or CMS setup — ensuring smooth collaboration and efficient delivery. We work with any tech stack.",
    icon: Code,
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    question: "What's your pricing structure?",
    answer:
      "We offer flexible pricing based on project scope. Simple websites start at ₹25,000, while complex web applications are custom quoted. We provide transparent estimates with no hidden fees.",
    icon: MessageCircle,
    gradient: "from-green-400 to-emerald-500"
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-neutral-950 py-32 px-6 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">Got Questions?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Frequently Asked
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to know about working with Trulyzer.
            <span className="block mt-2 text-gray-500">Can&apos;t find your answer? We&apos;re here to help.</span>
          </motion.p>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-6">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow effect when active */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${faq.gradient} rounded-2xl blur-xl opacity-0 transition-opacity duration-500 ${
                    isActive ? 'opacity-20' : 'group-hover:opacity-10'
                  }`}
                ></div>

                {/* FAQ Card */}
                <div
                  className={`relative bg-neutral-900/80 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/10' 
                      : 'border-neutral-800 hover:border-emerald-500/30'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Question Header */}
                  <div className="flex items-start gap-4 p-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${faq.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-105'
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Question Text */}
                    <div className="flex-1">
                      <h3 className={`text-lg md:text-xl font-semibold transition-colors ${
                        isActive ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-emerald-400" />
                    </motion.div>
                  </div>

                  {/* Answer Content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-[88px]">
                          <div className="border-l-2 border-emerald-500/30 pl-6">
                            <p className="text-gray-400 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom gradient indicator when active */}
                  {isActive && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className={`h-1 bg-gradient-to-r ${faq.gradient}`}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Still Have Questions?
              </h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Our team is ready to help. Schedule a free 30-minute consultation to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-all hover:scale-105 shadow-lg shadow-emerald-500/30"
                >
                  Book Free Consultation
                </a>
                <a
                  href="mailto:hello@trulyzer.com"
                  className="px-8 py-4 border-2 border-emerald-500/30 text-emerald-400 font-semibold rounded-full hover:bg-emerald-500/10 transition-all"
                >
                  Email Us Directly
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SEO Content */}
      <div className="sr-only">
        <h3>Trulyzer FAQ - Web Development Services in Coimbatore</h3>
        <p>
          Frequently asked questions about Trulyzer&apos;s web development services, pricing, 
          timelines, SEO optimization, UI/UX design, post-launch support, and technical capabilities. 
          Learn about our React and Next.js development process, project duration, maintenance services, 
          and how we help businesses in Coimbatore and Tamil Nadu build high-performance websites.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;