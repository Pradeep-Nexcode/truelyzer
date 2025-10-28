"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import services from "@/data/services";

const ServiceHero = ({ data, serviceId }) => {
  const srv = data || services.find((s) => s.id === serviceId) || services[0];

  return (
    <section
      id="service-hero"
      className="relative min-h-screen flex flex-col justify-center items-center bg-neutral-950 overflow-hidden px-6 sm:px-8 lg:px-12 py-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,${
          srv.gradient?.primary || "rgba(16,185,129,0.08)"
        },transparent_60%)]`}
      ></div>
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>

      {/* Animated Stars */}
      <motion.div
        className={`absolute text-5xl top-32 right-32`}
        style={{ color: srv.gradient?.accent || "#6ee7b7" }}
        animate={{ scale: [1, 1.8, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ✺
      </motion.div>
      <motion.div
        className={`absolute text-5xl bottom-40 left-32`}
        style={{ color: srv.gradient?.accent || "#6ee7b7" }}
        animate={{ scale: [1, 1.8, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        ✺
      </motion.div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-30"
          style={{
            backgroundColor: srv.gradient?.accent || "#10b981",
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
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/services"
            className="hover:text-emerald-400 transition-colors"
          >
            Services
          </Link>
          <span>/</span>
          <span className="text-emerald-400">{srv.title}</span>
        </motion.div>

        {/* Badge */}
        {srv.badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-${srv.gradient?.badge || "emerald"}-500/10 border border-${srv.gradient?.badge || "emerald"}-400/20 backdrop-blur-sm`}
            >
              <motion.div
                className={`w-2 h-2 rounded-full bg-${srv.gradient?.badge || "emerald"}-400`}
                animate={{
                  boxShadow: [
                    `0 0 0 0 ${srv.gradient?.badgeShadow || "rgba(16,185,129,0.5)"}`,
                    `0 0 0 10px ${srv.gradient?.badgeShadow || "rgba(16,185,129,0)"}`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {srv.badge.icon && <span className="text-xl">{srv.badge.icon}</span>}
              <span className={`text-sm font-medium text-${srv.gradient?.badge || "emerald"}-300`}>{srv.badge.text}</span>
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
          <span className="block text-white mb-2">{srv.title}</span>
          <span
            className={`block bg-gradient-to-r ${
              srv.gradient?.text || "from-emerald-400 to-emerald-600"
            } bg-clip-text text-transparent`}
          >
            {srv.titleHighlight}
          </span>
        </motion.h1>

        {/* Subtitle */}
        {srv.subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4"
          >
            {srv.subtitle}
          </motion.p>
        )}

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          {srv.description}
        </motion.p>

        {/* Features List */}
        {srv.features && srv.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {srv.features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 bg-neutral-900/60 border border-${srv.gradient?.badge || "emerald"}-500/20 rounded-full backdrop-blur-sm`}
              >
                <CheckCircle2
                  className={`w-4 h-4 text-${srv.gradient?.badge || "emerald"}-400`}
                />
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
            href={srv.ctaLink || "/contact"}
            className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-${
              srv.gradient?.badge || "emerald"
            }-500 text-white overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg shadow-${
              srv.gradient?.badge || "emerald"
            }-500/20`}
          >
            <span className="relative flex items-center gap-2">
              {srv.ctaText || "Get Started"}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </Link>

          {srv.secondaryCta && (
            <Link
              href={srv.secondaryCta.link}
              className={`group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-${srv.gradient?.badge || "emerald"}-500/40 text-gray-200 hover:border-${srv.gradient?.badge || "emerald"}-400 hover:bg-${srv.gradient?.badge || "emerald"}-500/10 transition-all duration-300`}
            >
              {srv.secondaryCta.text}
            </Link>
          )}
        </motion.div>

        {/* Stats */}
        {srv.stats && srv.stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {srv.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`absolute inset-0 bg-${srv.gradient?.badge || "emerald"}-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all`}></div>
                <div className={`relative bg-neutral-900/60 backdrop-blur-md border border-${srv.gradient?.badge || "emerald"}-500/20 rounded-2xl p-6 shadow-inner text-center`}>
                  <div className={`text-3xl md:text-4xl font-bold text-${srv.gradient?.badge || "emerald"}-400 mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}

            <motion.div className={`w-1.5 h-3 bg-${srv.gradient?.badge || "emerald"}-400 rounded-full`}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div
                className={`w-8 h-12 border-2 border-${srv.gradient?.badge || "emerald"}-500/40 rounded-full flex justify-center p-2`}
              >
                <motion.div
                  className={`w-1.5 h-3 bg-${srv.gradient?.badge || "emerald"}-400 rounded-full`}
                  animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* SEO Content */}
        {srv.seo && (
          <div className="sr-only">
            <h2>{srv.seo.title}</h2>
            <p>{srv.seo.description}</p>
            {srv.seo.keywords && <p>Keywords: {srv.seo.keywords}</p>}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceHero;
