// 'use client'

// import { motion } from 'framer-motion'

// const Overview = () => {
// return ( <section className="relative bg-white py-24 px-6 sm:px-10 lg:px-20 text-center">
// <motion.div
// initial={{ opacity: 0, y: 40 }}
// whileInView={{ opacity: 1, y: 0 }}
// transition={{ duration: 0.8 }}
// viewport={{ once: true }}
// className="max-w-5xl mx-auto"
// > <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6">
// What We Do </h2> <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
// At Truelyzer, we build web experiences that combine clean design,
// modern technologies, and measurable performance. Our goal is to craft
// digital products that grow your brand and deliver lasting results. </p>

 
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
//       {[
//         {
//           title: 'Custom Web Applications',
//           desc: 'Tailored solutions built to meet your exact business requirements with scalability in mind.',
//         },
//         {
//           title: 'Full-Stack Development',
//           desc: 'Expertise across frontend, backend, and databases for seamless, integrated experiences.',
//         },
//         {
//           title: 'API Integration',
//           desc: 'Connect your app with third-party services and automate workflows efficiently.',
//         },
//         {
//           title: 'CMS & E-commerce Solutions',
//           desc: 'Manage content and sell online with intuitive, powerful, and secure systems.',
//         },
//       ].map((item, i) => (
//         <motion.div
//           key={i}
//           className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all"
//           whileHover={{ y: -5 }}
//         >
//           <h3 className="text-xl font-semibold text-slate-900 mb-3">
//             {item.title}
//           </h3>
//           <p className="text-slate-600 text-sm">{item.desc}</p>
//         </motion.div>
//       ))}
//     </div>
//   </motion.div>
// </section>

// )
// }

// export default Overview

'use client'

import { motion } from 'framer-motion'

const Overview = () => {
return ( <section className="relative py-24 bg-[#0f0f0f] text-white px-6 sm:px-10 lg:px-20"> <div className="max-w-5xl mx-auto text-center">
<motion.h2
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-4xl sm:text-5xl font-bold mb-6"
>
What We Do
</motion.h2>
 
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto mb-12"
    >
      At Truelyzer, we craft digital experiences that blend creativity, technology, 
      and strategy. Our approach focuses on building performance-driven websites 
      that not only look great but deliver measurable results for your business.
    </motion.p>

    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto"
    >
      {[
        '⚡ Custom Web Applications – tailored to your unique business goals.',
        '🧠 Full-Stack Development – seamless front-end and back-end integration.',
        '🔗 API Integration – connect your systems for powerful automation.',
        '🛍️ CMS & E-commerce Solutions – scalable, user-friendly, and secure.',
      ].map((item, index) => (
        <motion.li
          key={index}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 },
          }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 text-slate-300 hover:bg-white/10 transition-all duration-300"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  </div>
</section>
 

)
}

export default Overview
