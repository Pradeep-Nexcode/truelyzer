"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, Palette, Code, Rocket } from "lucide-react";
import Link from 'next/link';

const steps = [
  {
    title: "Discover",
    description:
      "Deep-dive into your business goals, target audience, and competitive landscape. We map out user journeys and define success metrics.",
    icon: Lightbulb,
    color: "from-emerald-400 to-emerald-500",
    duration: "1-2 weeks",
    deliverables: ["Project brief", "User personas", "Competitive analysis"]
  },
  {
    title: "Design",
    description:
      "Transform insights into stunning, conversion-focused designs. We iterate with you through wireframes to high-fidelity prototypes.",
    icon: Palette,
    color: "from-emerald-500 to-emerald-600",
    duration: "2-3 weeks",
    deliverables: ["Wireframes", "UI mockups", "Design system"]
  },
  {
    title: "Develop",
    description:
      "Build with cutting-edge tech stacks. Every line of code is optimized for performance, accessibility, and scalability.",
    icon: Code,
    color: "from-emerald-600 to-emerald-700",
    duration: "3-6 weeks",
    deliverables: ["Responsive code", "API integration", "Admin dashboard"]
  },
  {
    title: "Deliver",
    description:
      "Launch with confidence. Comprehensive testing, SEO optimization, and 30 days of post-launch support included.",
    icon: Rocket,
    color: "from-emerald-700 to-emerald-800",
    duration: "1 week",
    deliverables: ["Live deployment", "Documentation", "Training"]
  },
];

const Process = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="process"
      className="relative min-h-screen w-full bg-neutral-950 py-24 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-emerald-500 text-sm font-semibold tracking-wider uppercase">
              How We Work
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            From Concept to <span className="text-emerald-500">Launch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A proven 4-step methodology that turns your vision into a high-performing digital product. Transparent timelines, clear deliverables.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Step card */}
                <div className="relative z-10 h-full">
                  {/* Gradient border effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>
                  
                  <div className="relative bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 h-full hover:border-emerald-500/50 transition-all duration-300">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Step number badge */}
                    <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                      <span className="text-emerald-500 font-bold text-sm">{index + 1}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Duration tag */}
                    <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
                      <span className="text-emerald-400 text-xs font-medium">{step.duration}</span>
                    </div>

                    {/* Deliverables */}
                    <div className="pt-4 border-t border-neutral-800">
                      <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wider">Key Deliverables</p>
                      <ul className="space-y-1">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="text-xs text-gray-400 flex items-center">
                            <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Average project timeline: <span className="text-white font-semibold">6-10 weeks</span> from kickoff to launch
          </p>
          <Link 
            href="#contact"
           className="px-8 py-4 cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/20">
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;