"use client";
import services from "@/data/services";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Zap,
  Database,
  Cloud,
  Lock,
  Smartphone,
  Globe,
  Layers,
  Package,
  GitBranch,
  Settings,
} from "lucide-react";

const ServiceTechStack = ({ data, serviceId }) => {
  const src = data || services.find((s) => s.id === serviceId) || services[0];
  const { heading, description, technologies, gradient, layout, bottomNote } = src.techStack;

  // Dynamic grid columns based on number of items
  const getGridCols = () => {
    const count = technologies.length;
    if (count <= 3) return "md:grid-cols-3";
    if (count <= 4) return "md:grid-cols-4";
    if (count <= 6) return "md:grid-cols-6";
    return "md:grid-cols-6";
  };

  return (
    <section className="relative py-32 bg-neutral-950 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl"
          style={{
            backgroundColor: gradient?.primary || "rgba(16,185,129,0.08)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span
              className={`text-${
                gradient?.badge || "emerald"
              }-500 text-sm font-semibold tracking-wider uppercase`}
            >
              {heading.badge || "Our Technology"}
            </span>
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
              <span
                className={`block mt-2 bg-gradient-to-r ${
                  gradient?.text || "from-emerald-400 to-teal-400"
                } bg-clip-text text-transparent`}
              >
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

        {/* Tech Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className={`grid grid-cols-2 sm:grid-cols-3 ${getGridCols()} gap-6`}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${
                    tech.color || gradient?.primary || "#10b981"
                  }, transparent)`,
                }}
              ></div>

              {/* Card */}
              <div className="relative h-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-emerald-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl"
                  style={{
                    background:
                      tech.iconBg ||
                      `linear-gradient(135deg, ${tech.color || "#10b981"}, ${
                        tech.colorAlt || "#14b8a6"
                      })`,
                  }}
                >
                  {tech.icon ? (
                    <span className="text-3xl">{tech.icon}</span>
                  ) : (
                    <span className="text-white text-3xl">
                      {tech.emoji || "⚡"}
                    </span>
                  )}
                </div>

                {/* Name */}
                <div className="text-center">
                  <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-emerald-400 transition-colors">
                    {tech.name}
                  </h3>
                  {tech.description && (
                    <p className="text-gray-500 text-xs">{tech.description}</p>
                  )}
                </div>

                {/* Badge (optional) */}
                {tech.badge && (
                  <div
                    className={`absolute top-3 right-3 px-2 py-1 bg-${
                      gradient?.badge || "emerald"
                    }-500/20 border border-${
                      gradient?.badge || "emerald"
                    }-500/30 rounded-full`}
                  >
                    <span
                      className={`text-xs font-semibold text-${
                        gradient?.badge || "emerald"
                      }-400`}
                    >
                      {tech.badge}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note (optional) */}
        {bottomNote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500">{bottomNote}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServiceTechStack;

// ====================================
// EXAMPLE USAGE - E-commerce Page
// ====================================
/*
const ecommerceTechStack = {
  heading: {
    badge: "E-commerce Stack",
    title: "Powerful E-commerce",
    highlight: "Platform & Tools"
  },
  description: "We build robust e-commerce platforms using the best tools and technologies for payments, inventory, shipping, and customer management.",
  technologies: [
    {
      name: "Shopify",
      emoji: "🛍️",
      color: "#96BF48",
      colorAlt: "#AAD05D",
      description: "E-commerce Platform"
    },
    {
      name: "Stripe",
      emoji: "💳",
      color: "#635BFF",
      colorAlt: "#7B73FF",
      description: "Payments"
    },
    {
      name: "WooCommerce",
      emoji: "🛒",
      color: "#96588A",
      colorAlt: "#A9699B",
      description: "WordPress Shop"
    },
    {
      name: "PayPal",
      emoji: "💰",
      color: "#003087",
      colorAlt: "#0070BA",
      description: "Payment Gateway"
    },
    {
      name: "Razorpay",
      emoji: "💸",
      color: "#3395FF",
      colorAlt: "#4FA5FF",
      description: "Indian Payments"
    },
    {
      name: "Shiprocket",
      emoji: "📦",
      color: "#FF5722",
      colorAlt: "#FF7043",
      description: "Shipping"
    }
  ],
  gradient: {
    primary: "rgba(249,115,22,0.08)",
    badge: "orange",
    text: "from-orange-400 to-red-600"
  },
  bottomNote: "Full integration with major payment gateways and shipping providers in India."
}
*/
