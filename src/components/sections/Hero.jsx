// // 'use client';

// // import { motion } from 'framer-motion';
// // import Link from 'next/link';

// // const Hero = () => {
// //   return (
// //     <section
// //       id="home"
// //       className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-amber-50 px-6 sm:px-8 lg:px-12 py-24"
// //     >
// //       {/* Decorative Lines / Stars */}
// //       <motion.svg
// //         xmlns="http://www.w3.org/2000/svg"
// //         viewBox="0 0 400 400"
// //         className="absolute opacity-10 w-[600px] h-[600px] -top-20 -left-20"
// //         animate={{ rotate: [0, 10, 0] }}
// //         transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
// //       >
// //         <path
// //           d="M50,200 Q200,50 350,200 T650,200"
// //           stroke="url(#grad1)"
// //           strokeWidth="2"
// //           fill="none"
// //         />
// //         <defs>
// //           <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
// //             <stop offset="0%" stopColor="#6366f1" />
// //             <stop offset="100%" stopColor="#ec4899" />
// //           </linearGradient>
// //         </defs>
// //       </motion.svg>

// //       {/* Little animated stars */}
// //       <motion.div
// //         className="absolute text-4xl text-yellow-400 top-20 right-32"
// //         animate={{ scale: [1, 1.3, 1], rotate: [0, 20, 0] }}
// //         transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
// //       >
// //         ✦
// //       </motion.div>
// //       <motion.div
// //         className="absolute text-5xl text-pink-400 bottom-20 left-32"
// //         animate={{ scale: [1, 1.5, 1], rotate: [0, -15, 0] }}
// //         transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
// //       >
// //         ✺
// //       </motion.div>

// //       {/* Content container for consistent max width & padding */}
// //       <div className="max-w-5xl w-full mx-auto">
// //       {/* Tagline */}
// //       <motion.div
// //         className="inline-flex items-center px-5 p-2 flex rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6"
// //         initial={{ opacity: 0, y: 10 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //       >
// //         <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
// //        <p> Build your digital presence with <span className="ml-1 font-semibold">Truelyzer</span> </p>
// //       </motion.div>

// //       {/* Heading */}
// //       <motion.h1
// //         className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-gray-900 mb-4"
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8, delay: 0.2 }}
// //       >
// //         Modern Websites
// //         <br />
// //         <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
// //           for Small Businesses
// //         </span>
// //       </motion.h1>

// //       {/* Subheading */}
// //       <motion.p
// //         className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
// //         initial={{ opacity: 0, y: 10 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8, delay: 0.4 }}
// //       >
// //         I help small businesses turn their offline reputation into a strong online presence — 
// //         with fast, mobile-friendly websites.
// //       </motion.p>

// //       {/* CTA Button */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 10 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8, delay: 0.6 }}
// //       >
// //         <Link
// //           href="#contact"
// //           className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 shadow-md hover:shadow-lg transition-all duration-300"
// //         >
// //           Get Started
// //         </Link>
// //       </motion.div>
// //       </div>

// //       {/* Scroll Indicator */}
// //       <motion.div
// //         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
// //         animate={{ y: [0, 8, 0] }}
// //         transition={{ duration: 2, repeat: Infinity }}
// //       >
// //         <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
// //           <motion.div
// //             className="w-1 h-3 bg-gray-400 rounded-full mt-2"
// //             animate={{ opacity: [0.3, 1, 0.3] }}
// //             transition={{ duration: 2, repeat: Infinity }}
// //           />
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default Hero;

 
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-neutral-950 text-white min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-12 py-24"
    >

      <motion.div
         className="absolute text-5xl text-emerald-300 bottom-40 left-32"
         animate={{ scale: [1, 1.8, 1], rotate: [0, -15, 0] }}
         transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
       >
         ✺
       </motion.div>  <motion.div
         className="absolute text-5xl text-emerald-300 top-50 right-32"
         animate={{ scale: [1, 1.8, 1], rotate: [0, -15, 0] }}
         transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
       >
         ✺
       </motion.div>
      {/* 🌌 Background layers */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>

      {/* ✨ Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-30"
          style={{
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

      {/* 🌐 Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-400/20 backdrop-blur-sm mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-emerald-400"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(16,185,129,0.5)',
                '0 0 0 10px rgba(16,185,129,0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-emerald-300">
            Crafting Digital Excellence
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-white mb-2">Transform Your</span>
          <span className="block bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Business Online
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Build fast, elegant, and scalable web experiences that drive results.
          <span className="block mt-2 text-gray-500">
            Modern design meets powerful performance.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-emerald-500 text-white overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <span className="relative flex items-center gap-2">
              Start Your Project
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </span>
          </Link>

          <Link
            href="#portfolio"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-emerald-500/40 text-gray-200 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
          >
            View Portfolio
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div key={index} className="relative group" whileHover={{ scale: 1.05 }}>
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-neutral-900/60 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6 shadow-inner">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-emerald-500/40 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1.5 h-3 bg-emerald-400 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
