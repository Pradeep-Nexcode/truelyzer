
// 'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative bg-neutral-950 text-white min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-12 py-24"
//     >

//       <motion.div
//         className="absolute hidden md:flex text-5xl text-emerald-300 bottom-40 left-32"
//         animate={{ scale: [1, 1.8, 1], rotate: [0, -15, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//       >
//         ✺
//       </motion.div>  <motion.div
//         className="absolute hidden md:flex text-5xl text-emerald-300 top-50 right-32"
//         animate={{ scale: [1, 1.8, 1], rotate: [0, -15, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//       >
//         ✺
//       </motion.div>
//       {/* 🌌 Background layers */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_60%)]"></div>
//       <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>

//       {/* ✨ Floating Particles */}
//       {[...Array(15)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-30"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{ y: [0, -40, 0], opacity: [0, 0.4, 0] }}
//           transition={{
//             duration: 3 + Math.random() * 3,
//             repeat: Infinity,
//             delay: Math.random() * 2,
//           }}
//         />
//       ))}

//       {/* 🌐 Content */}
//       <div className="relative z-10 max-w-6xl w-full mx-auto text-center">
//         {/* Badge */}
//         <motion.div
//           className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-400/20 backdrop-blur-sm mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <motion.div
//             className="w-2 h-2 rounded-full bg-emerald-400"
//             animate={{
//               boxShadow: [
//                 '0 0 0 0 rgba(16,185,129,0.5)',
//                 '0 0 0 10px rgba(16,185,129,0)',
//               ],
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//           <span className="text-sm font-medium text-emerald-300">
//             Crafting Digital Excellence
//           </span>
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <span className="block text-white mb-2">Transform Your</span>
//           <span className="block bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
//             Business Online
//           </span>
//         </motion.h1>

//         {/* Subheading */}
//         <motion.p
//           className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           Build fast, elegant, and scalable web experiences that drive results.
//           <span className="block mt-2 text-gray-500">
//             Modern design meets powerful performance.
//           </span>
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <Link
//             href="#contact"
//             className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-emerald-500 text-white overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             <span className="relative flex items-center gap-2">
//               Start Your Project
//               <motion.svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 animate={{ x: [0, 5, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M13 7l5 5m0 0l-5 5m5-5H6"
//                 />
//               </motion.svg>
//             </span>
//           </Link>

//           <a
//             href="#portfolio"
//             className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-emerald-500/40 text-gray-200 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
//           >
//             View Portfolio
//           </a>
//         </motion.div>


//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         animate={{ y: [0, 12, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <div className="w-8 h-12 border-2 border-emerald-500/40 rounded-full flex justify-center p-2">
//           <motion.div
//             className="w-1.5 h-3 bg-emerald-400 rounded-full"
//             animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;


// 'use client';

// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative bg-neutral-950 text-white min-h-screen flex items-center justify-center px-6"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_60%)]" />
//       <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5" />

//       {/* Content */}
//       <div className="relative z-10 max-w-3xl text-center">
//         {/* Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="inline-block px-5 py-2 mb-6 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-sm"
//         >
//           Simple • Fast • Affordable
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4"
//         >
//           Simple Websites for
//           <span className="block text-emerald-400 mt-2">
//             Small Businesses
//           </span>
//         </motion.h1>

//         {/* Subheading */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-lg text-gray-400 mb-8"
//         >
//           Get a clean, mobile-friendly website in
//           <span className="text-white font-semibold"> 2–3 days</span>.
//           <br />
//           Perfect for shops, services & local businesses.
//         </motion.p>

//         {/* CTA */}
//         <motion.a
//           href="https://wa.me/918754043874"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-500 text-black font-semibold text-lg"
//         >
//           WhatsApp Me
//         </motion.a>

//         {/* Price hint */}
//         <p className="mt-4 text-sm text-gray-500">
//           Basic website starting from ₹1,000
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;




'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-neutral-950 text-white min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-12 py-24"
    >

      {/* <motion.div
        className="absolute hidden md:flex text-5xl text-emerald-300 bottom-40 left-32"
        animate={{ scale: [1, 1.8, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✺
      </motion.div>  <motion.div
        className="absolute hidden md:flex text-5xl text-emerald-300 top-50 right-32"
        animate={{ scale: [1, 1.8, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✺
      </motion.div> */}
      {/* 🌌 Background layers */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>

      {/* ✨ Floating Particles */}
      {/* {[...Array(15)].map((_, i) => (
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
      ))} */}

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
            Simple • Fast • Affordable
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4"
        >
          Simple Websites for
          <span className="block text-emerald-400 mt-2">
            Small Businesses
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400 mb-8"
        >
          Get a clean, mobile-friendly website in
          <span className="text-white font-semibold"> 2–3 days</span>.
          <br />
          Perfect for shops, services & local businesses.
        </motion.p>

        {/* CTA Buttons */}
        {/* <motion.div
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

          <a
            href="#portfolio"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-emerald-500/40 text-gray-200 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
          >
            View Portfolio
          </a>
        </motion.div> */}

        {/* CTA */}
        <motion.a
          href="https://wa.me/918754043874"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-500 text-black font-semibold text-lg"
        >
          WhatsApp Me
        </motion.a>

        {/* Price hint */}
        <p className="mt-4 text-sm text-gray-500">
          Basic website starting from ₹1,000
        </p>

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
    </section >
  );
};

export default Hero;