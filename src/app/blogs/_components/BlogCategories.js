"use client";

import { Code, Palette, Cpu, Briefcase } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    icon: <Code className="w-6 h-6 text-emerald-400" />,
    title: "Web Development",
    description: "Tips, frameworks, and trends in modern web apps.",
    href: "/blog/category/web-development",
  },
  {
    icon: <Palette className="w-6 h-6 text-emerald-400" />,
    title: "UI/UX Design",
    description: "Design principles and user experience insights.",
    href: "/blog/category/ui-ux-design",
  },
  {
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    title: "Tech Insights",
    description: "Exploring the latest in software and innovation.",
    href: "/blog/category/tech-insights",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
    title: "Freelancing Tips",
    description: "Guides for developers growing their freelance career.",
    href: "/blog/category/freelancing-tips",
  },
];

const BlogCategories = () => {
  return (
    <section className="py-20 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore by Category
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Dive into focused insights — from development to design and beyond.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <Link
              href={cat.href}
              key={index}
              className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-emerald-400/50 transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-emerald-400 transition">
                  {cat.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;

// "use client";

// import { motion } from "framer-motion";
// import { Code, Palette, Cpu, Briefcase, ArrowRight, FileText, Layers } from "lucide-react";
// import Link from "next/link";

// const categories = [
//   {
//     icon: Code,
//     title: "Web Development",
//     description: "Tips, frameworks, and trends in modern web apps.",
//     href: "/blog/category/web-development",
//     count: 24,
//     gradient: "from-emerald-500 to-teal-600",
//     color: "emerald",
//     bgGradient: "from-emerald-500/10 to-teal-500/10"
//   },
//   {
//     icon: Palette,
//     title: "UI/UX Design",
//     description: "Design principles and user experience insights.",
//     href: "/blog/category/ui-ux-design",
//     count: 18,
//     gradient: "from-purple-500 to-pink-600",
//     color: "purple",
//     bgGradient: "from-purple-500/10 to-pink-500/10"
//   },
//   {
//     icon: Cpu,
//     title: "Tech Insights",
//     description: "Exploring the latest in software and innovation.",
//     href: "/blog/category/tech-insights",
//     count: 15,
//     gradient: "from-blue-500 to-cyan-600",
//     color: "blue",
//     bgGradient: "from-blue-500/10 to-cyan-500/10"
//   },
//   {
//     icon: Briefcase,
//     title: "Freelancing Tips",
//     description: "Guides for developers growing their freelance career.",
//     href: "/blog/category/freelancing-tips",
//     count: 12,
//     gradient: "from-orange-500 to-red-600",
//     color: "orange",
//     bgGradient: "from-orange-500/10 to-red-500/10"
//   },
// ];

// const BlogCategories = () => {
//   return (
//     <section className="relative py-32 bg-neutral-950 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-1/3 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{ duration: 8, repeat: Infinity }}
//         />
//       </div>

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
//           >
//             <Layers className="w-4 h-4 text-emerald-400" />
//             <span className="text-sm font-medium text-emerald-400">Browse Topics</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl font-bold text-white mb-4"
//           >
//             Explore by <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Category</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-gray-400 max-w-2xl mx-auto text-lg"
//           >
//             Dive into focused insights — from development to design and beyond.
//           </motion.p>
//         </div>

//         {/* Categories Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {categories.map((cat, index) => {
//             const Icon = cat.icon;
            
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 {/* Glow Effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

//                 {/* Card */}
//                 <Link href={cat.href}>
//                   <div className={`relative h-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 hover:border-${cat.color}-500/50 transition-all duration-300 cursor-pointer`}>
//                     {/* Icon */}
//                     <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                       <Icon className="w-8 h-8 text-white" />
//                     </div>

//                     {/* Count Badge */}
//                     <div className="absolute top-6 right-6 px-3 py-1.5 bg-neutral-800 border border-neutral-700 rounded-full">
//                       <div className="flex items-center gap-1.5">
//                         <FileText className="w-3.5 h-3.5 text-gray-400" />
//                         <span className="text-xs font-semibold text-gray-400">{cat.count}</span>
//                       </div>
//                     </div>

//                     {/* Title */}
//                     <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-${cat.color}-400 transition-colors`}>
//                       {cat.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-gray-400 text-sm leading-relaxed mb-6">
//                       {cat.description}
//                     </p>

//                     {/* Arrow Link */}
//                     <div className={`flex items-center gap-2 text-${cat.color}-400 font-semibold text-sm group-hover:gap-3 transition-all`}>
//                       <span>Explore</span>
//                       <ArrowRight className="w-4 h-4" />
//                     </div>

//                     {/* Bottom Gradient Line */}
//                     <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
//                   </div>
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="mt-16 text-center"
//         >
//           <div className="relative inline-block">
//             <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl opacity-30"></div>
//             <div className="relative bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm">
//               <p className="text-gray-400 mb-4">
//                 Can't find what you're looking for?
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link
//                   href="/blog/search"
//                   className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-all hover:scale-105 shadow-lg shadow-emerald-500/30"
//                 >
//                   Search All Articles
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="px-6 py-3 border-2 border-emerald-500/30 text-emerald-400 font-semibold rounded-full hover:bg-emerald-500/10 transition-all"
//                 >
//                   Request a Topic
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BlogCategories;