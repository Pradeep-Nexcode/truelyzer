"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project duration varies by complexity. Most websites are completed within 4–8 weeks, including design, development, and revisions.",
  },
  {
    question: "Do you provide both design and development?",
    answer:
      "Yes! Truelyzer handles everything from UI/UX design to full-stack development using React, Next.js, and GraphQL for seamless results.",
  },
  {
    question: "Can you help with SEO and performance optimization?",
    answer:
      "Absolutely. Every site we build is optimized for speed, Core Web Vitals, and SEO best practices to help you rank higher on Google.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide ongoing maintenance, analytics tracking, and performance monitoring after launch to ensure long-term success.",
  },
  {
    question: "What if I already have a design or backend?",
    answer:
      "No problem. We can integrate with your existing design, backend, or CMS setup — ensuring smooth collaboration and efficient delivery.",
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
      className="relative bg-[#0b0b0b] py-24 px-6 sm:px-8 lg:px-12 text-center overflow-hidden"
    >
      {/* Background accent */}{" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none"></div>
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Frequently Asked <span className="text-emerald-400">Questions</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Everything you need to know before working with{" "}
          <span className="text-white font-medium">Truelyzer</span>.
        </p>
      </motion.div>
      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-6 text-left">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-[#111] to-[#0b0b0b] border border-emerald-900/40 rounded-2xl p-6 cursor-pointer hover:border-emerald-500/40 transition-all duration-300"
            onClick={() => toggleFAQ(i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-emerald-400 transition-transform duration-300 ${
                  activeIndex === i ? "rotate-180" : ""
                }`}
              />
            </div>
            <AnimatePresence initial={false}>
              {activeIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-slate-400 mt-4 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      {/* Hidden SEO Keywords for Rich Snippets */}
      <div className="hidden">
        <h3>Truelyzer FAQ | Web Development | SEO | Design | Support</h3>
        <p>
          Common Truelyzer questions about web design, app development, SEO
          optimization, timelines, and support services.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
