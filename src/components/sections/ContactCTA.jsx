"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Mail, Phone, ArrowRight, Zap, Clock, CheckCircle } from "lucide-react";

const ContactCTA = () => {
  const features = [
    { icon: Zap, text: "Free 30-min consultation" },
    { icon: Clock, text: "Response within 24 hours" },
    { icon: CheckCircle, text: "No obligation quote" }
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -top-40 -left-40 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-emerald-100 text-sm font-semibold tracking-wider uppercase">
              Let's Work Together
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Ready to Scale Your <br className="hidden md:block" />
            <span className="text-emerald-100">Online Business?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-emerald-50/90 max-w-2xl mx-auto mb-8"
          >
            Partner with us to build a high-converting, lightning-fast website that drives real growth. Start with a free consultation — no strings attached.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
                >
                  <Icon className="w-4 h-4 text-emerald-100" />
                  <span className="text-sm font-medium text-emerald-50">{feature.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* WhatsApp button - Primary */}
            <Link
              href="https://wa.me/918754043874?text=Hi!%20I%20visited%20Trueyzer%20and%20want%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-white text-emerald-700 font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-emerald-50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              
              <MessageCircle className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Chat on WhatsApp</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Email button - Secondary */}
            <Link
              href="mailto:contact@trulyzer.com"
              className="group inline-flex items-center gap-3 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </Link>
          </motion.div>
        </div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {/* WhatsApp Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 text-center group">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-emerald-50/80 text-sm mb-3">Quick responses, instant updates</p>
            <Link
              href="https://wa.me/918754043874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all"
            >
              +91 87540 43874
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Email Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 text-center group">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-emerald-50/80 text-sm mb-3">Detailed inquiries welcome</p>
            <Link
              href="mailto:contact@trulyzer.com"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all"
            >
              contact@trulyzer.com
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Phone Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 text-center group">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
            <p className="text-emerald-50/80 text-sm mb-3">Mon-Sat, 9 AM - 7 PM IST</p>
            <Link
              href="tel:+918754043874"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all"
            >
              +91 87540 43874
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-emerald-50/70 text-sm">
            Based in Coimbatore, Tamil Nadu • Serving clients worldwide 🌍
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;