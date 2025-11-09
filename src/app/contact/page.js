"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const page = () => {
  return (
    <section className="relative bg-[#0f0f0f] text-white min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-24">
      {/* 🌟 Background grid + soft noise */}{" "}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20 pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* ✨ Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl font-extrabold mb-6"
        >
          Let’s <span className="text-emerald-400">Build Something</span> Great
          Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Have a project in mind? Whether you’re launching a new product or
          improving an existing one, Trulyzer helps bring your digital vision to
          life with strategy, design, and development excellence.
        </motion.p>

        {/* 📨 Contact Info Cards */}
        <div className="grid sm:grid-cols-3 gap-8 mt-10">
          {[
            {
              title: "Email",
              value: "hello@trulyzer.com",
              href: "mailto:hello@trulyzer.com",
              icon: "✉️",
            },
            {
              title: "Phone",
              value: "+91 98765 43210",
              href: "tel:+919876543210",
              icon: "📞",
            },
            {
              title: "Location",
              value: "Coimbatore, India",
              href: "https://maps.google.com",
              icon: "📍",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-emerald-400/40 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-1 text-emerald-400">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm">{item.value}</p>
            </motion.a>
          ))}
        </div>

        {/* 📬 Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-20 max-w-3xl mx-auto text-left bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-slate-300 text-sm mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white border border-white/10 focus:border-emerald-400 focus:ring-emerald-400/40 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white border border-white/10 focus:border-emerald-400 focus:ring-emerald-400/40 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell us about your project..."
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white border border-white/10 focus:border-emerald-400 focus:ring-emerald-400/40 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* 🌐 Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 text-sm">
            Prefer a quick chat?{" "}
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              className="text-emerald-400 hover:underline"
            >
              Message us on WhatsApp
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default page;
