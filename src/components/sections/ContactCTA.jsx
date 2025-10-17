"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white overflow-hidden"
    >
      {/* Subtle glowing shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -top-40 -left-40 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          Ready to Transform <br className="hidden md:block" /> Your Online Presence?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
        >
          Let’s bring your business online with a stunning, high-performance website that gets real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {/* WhatsApp button */}
          <Link
            href="https://wa.me/918610737186?text=Hi!%20I%20visited%20Truelyzer%20and%20want%20to%20know%20more%20about%20your%20website%20services."
            target="_blank"
            className="flex items-center gap-2 bg-white text-emerald-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Let’s Talk on WhatsApp <FaArrowRight size={18} />
          </Link>

          {/* Email/Contact option */}
          <Link
            href="mailto:contact@truelyzer.com"
            className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Send Email
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
