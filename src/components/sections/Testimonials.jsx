"use client"
import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa";
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Aarav Patel",
    role: "Founder, FreshMart",
    quote:
      "Truelyzer transformed our business website into something fast, modern, and impactful. The communication was excellent throughout!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sneha Sharma",
    role: "CEO, Purple Haze Beauty Lounge",
    quote:
      "They captured exactly what we wanted — a stylish, responsive site that our customers love. Highly recommend Truelyzer!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "Vikram Rao",
    role: "Marketing Head, GoDecor",
    quote:
      "From design to deployment, everything was handled so smoothly. Truelyzer is our go-to team for web projects.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-gray-50 via-purple-50/30 to-white overflow-hidden">
      {/* Subtle gradient light effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-3xl -top-40 -left-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We’ve helped startups, local businesses, and brands bring their ideas to life with stunning, high-performing websites.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center"
            >
              <Image
                src={t.image}
                alt={t.name}
                width={80}
                height={80}
                className="rounded-full object-cover mb-4"
              />
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <FaStar key={s} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm italic mb-4 leading-relaxed">“{t.quote}”</p>
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
              <span className="text-xs text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
