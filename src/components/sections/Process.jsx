"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const steps = [
  {
    title: "Discover",
    description: "We start by understanding your goals, audience, and challenges to define a clear project vision.",
    color: "from-orange-400 to-pink-500",
  },
  {
    title: "Design",
    description: "Our creative team crafts intuitive, aesthetic, and user-focused designs that make your brand stand out.",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Develop",
    description: "We bring designs to life with clean, scalable, and high-performance code using modern technologies.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Deliver",
    description: "After rigorous testing, we deploy and provide ongoing support for a smooth launch experience.",
    color: "from-indigo-500 to-blue-500",
  },
]

const Process = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      id="process"
      className="relative min-h-screen w-full bg-gradient-to-b from-orange-50 to-white py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-4xl font-bold mb-4 text-gray-900"
        >
          Our <span className="text-orange-500">Process</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-600 max-w-2xl mx-auto mb-16"
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
                className={`relative z-10 bg-gradient-to-br ${step.color} p-[2px] rounded-3xl shadow-lg`}
              >
                <div className="bg-white rounded-3xl p-8 h-full">
                  <div className="text-5xl font-black text-gray-200 mb-4">{index + 1}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
