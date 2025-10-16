'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-amber-50 px-6 sm:px-8 lg:px-12 py-24"
    >
      {/* Decorative Lines / Stars */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        className="absolute opacity-10 w-[600px] h-[600px] -top-20 -left-20"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          d="M50,200 Q200,50 350,200 T650,200"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
        />
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Little animated stars */}
      <motion.div
        className="absolute text-4xl text-yellow-400 top-20 right-32"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute text-5xl text-pink-400 bottom-20 left-32"
        animate={{ scale: [1, 1.5, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✺
      </motion.div>

      {/* Content container for consistent max width & padding */}
      <div className="max-w-5xl w-full mx-auto">
      {/* Tagline */}
      <motion.div
        className="inline-flex items-center px-5 p-2 flex rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
       <p> Build your digital presence with <span className="ml-1 font-semibold">Truelyzer</span> </p>
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Modern Websites
        <br />
        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          for Small Businesses
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I help small businesses turn their offline reputation into a strong online presence — 
        with fast, mobile-friendly websites.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 shadow-md hover:shadow-lg transition-all duration-300"
        >
          Get Started
        </Link>
      </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
