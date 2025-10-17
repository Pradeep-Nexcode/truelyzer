"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    title: "Discover",
    description:
      "We start by understanding your goals, audience, and challenges to define a clear project vision.",
    color: "from-emerald-400 to-emerald-500",
  },
  {
    title: "Design",
    description:
      "Our creative team crafts intuitive, aesthetic, and user-focused designs that make your brand stand out.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Develop",
    description:
      "We bring designs to life with clean, scalable, and high-performance code using modern technologies.",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    title: "Deliver",
    description:
      "After rigorous testing, we deploy and provide ongoing support for a smooth launch experience.",
    color: "from-emerald-700 to-emerald-800",
  },
];

const Process = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="process"
      className="relative min-h-screen w-full bg-neutral-950 py-24 overflow-hidden"
    >
      {/* 🌌 Background layers */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-4xl font-bold mb-4 text-white"
        >
          Our <span className="text-emerald-500">Process</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto mb-16"
        >
          Every project follows a streamlined workflow — ensuring creativity, speed, and quality at every stage.
        </motion.p>

        {/* Steps Grid */}
        <div className="relative grid md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center"
            >
              {/* Connector line */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-[2px] bg-gradient-to-r from-gray-200 to-gray-300 translate-x-1/2"></div>
              )}

              {/* Step card */}
              <div
                className={`relative z-10 bg-gradient-to-br ${step.color} p-[2px] rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="bg-neutral-950 rounded-3xl p-8 h-full">
                  <div className="text-5xl font-black text-white mb-4">{index + 1}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
