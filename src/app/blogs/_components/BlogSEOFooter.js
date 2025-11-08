// "use client";

// const BlogSEOFooter = () => {
//   return (
//     <section className="py-12 bg-black border-t border-white/10">
//       <div className="max-w-5xl mx-auto text-center px-6">
//         <p className="text-gray-400 text-sm leading-relaxed">
//           <strong className="text-white">Trulyzer’s Blog</strong> covers expert insights on{" "}
//           <span className="text-emerald-400 font-medium">Next.js</span>,{" "}
//           <span className="text-emerald-400 font-medium">React</span>,{" "}
//           full-stack development, and modern{" "}
//           <span className="text-emerald-400 font-medium">digital design trends</span>{" "}
//           that empower businesses to build faster, smarter, and more scalable online experiences.
//           Explore guides, tutorials, and thought pieces crafted by the Trulyzer team to help you
//           stay ahead in the evolving tech landscape.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default BlogSEOFooter;


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Code, Palette, TrendingUp, Zap, Users, ArrowRight } from "lucide-react";

const BlogSEOFooter = () => {
  const topics = [
    { name: "Next.js", icon: Code, count: 24 },
    { name: "React", icon: Zap, count: 32 },
    { name: "UI/UX Design", icon: Palette, count: 18 },
    { name: "Performance", icon: TrendingUp, count: 15 },
  ];

  const popularTags = [
    "JavaScript", "TypeScript", "Web Development", "Frontend", 
    "Backend", "Full-Stack", "API Design", "SEO", "Mobile-First",
    "Accessibility", "Testing", "DevOps"
  ];

  return (
    <section className="relative py-20 bg-neutral-950 border-t border-neutral-800 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Trulyzer Blog</h3>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Expert insights on <span className="text-emerald-400 font-semibold">Next.js</span>,{" "}
              <span className="text-emerald-400 font-semibold">React</span>, full-stack development, and modern{" "}
              <span className="text-emerald-400 font-semibold">digital design trends</span> that empower businesses to build faster, smarter, and more scalable online experiences.
            </p>

            <p className="text-gray-500 text-sm leading-relaxed">
              Explore guides, tutorials, and thought pieces crafted by the Trulyzer team to help you stay ahead in the evolving tech landscape. From beginner-friendly introductions to advanced techniques, we cover it all.
            </p>
          </motion.div>

          {/* Topics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Popular Topics</h4>
            <div className="space-y-3">
              {topics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <Link
                    key={index}
                    href={`/blog/category/${topic.name.toLowerCase()}`}
                    className="group flex items-center justify-between p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-emerald-500/50 hover:bg-neutral-800 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-emerald-400 transition-colors">
                        {topic.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-600">{topic.count}</span>
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Tags Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-12 border-t border-neutral-800"
        >
          <h4 className="text-lg font-bold text-white mb-6 text-center">Explore by Tags</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-neutral-800 transition-all"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-12 border-t border-neutral-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Articles Published", icon: BookOpen },
              { value: "10K+", label: "Monthly Readers", icon: Users },
              { value: "15+", label: "Topics Covered", icon: TrendingUp },
              { value: "Weekly", label: "New Content", icon: Zap },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* SEO Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Trulyzer is a web development agency specializing in Next.js, React, TypeScript, and modern web technologies. 
            Our blog provides free tutorials, guides, and insights for developers looking to build high-performance web applications. 
            Topics include frontend development, backend architecture, UI/UX design, SEO optimization, performance tuning, and digital strategy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSEOFooter;