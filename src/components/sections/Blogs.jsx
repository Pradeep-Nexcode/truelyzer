"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, TrendingUp, Code, Zap, User } from "lucide-react";
import Image from "next/image";
import { blogs } from "@/data/blogs";

const blogPosts = [
  {
    id: 1,
    title: "Building Lightning-Fast E-Commerce Sites with Next.js 15",
    date: "October 12, 2024",
    readTime: "8 min read",
    excerpt: "Learn how to leverage Next.js 15's new features for building high-performance e-commerce platforms. Covers App Router, Server Components, and optimization strategies.",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    category: "Development",
    author: "Priya Menon",
    tags: ["Next.js", "E-Commerce", "Performance"],
    icon: Code,
    color: "emerald"
  },
  {
    id: 2,
    title: "React Server Components: A Game Changer for Web Performance",
    date: "September 28, 2024",
    readTime: "6 min read",
    excerpt: "Discover how React Server Components revolutionize frontend architecture by reducing bundle sizes and improving load times. Real benchmarks included.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    category: "React",
    author: "Arjun Kumar",
    tags: ["React", "Performance", "Architecture"],
    icon: TrendingUp,
    color: "blue"
  },
  {
    id: 3,
    title: "From 4s to 0.8s: A Complete Website Speed Optimization Case Study",
    date: "September 15, 2024",
    readTime: "10 min read",
    excerpt: "Step-by-step breakdown of how we reduced a client's load time by 80%. Includes image optimization, code splitting, caching strategies, and CDN setup.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    category: "Optimization",
    author: "Neha Reddy",
    tags: ["Performance", "SEO", "Web Vitals"],
    icon: Zap,
    color: "orange"
  },
];

const slugs = ["how-to-optimize-nextjs-performance", "complete-beginners-guide-to-web-development-2025", "the-future-of-frontend-development-what-to-expect-in-2026"];

const my_blogs = blogs.filter(blog => slugs.includes(blog.slug));


const colorVariants = {
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-500",
    gradient: "from-emerald-500 to-teal-500",
    hover: "group-hover:border-emerald-500/60"
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-500",
    gradient: "from-blue-500 to-cyan-500",
    hover: "group-hover:border-blue-500/60"
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-500",
    gradient: "from-orange-500 to-red-500",
    hover: "group-hover:border-orange-500/60"
  }
};

const Blogs = () => {
  return (
    <section className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-emerald-500 text-sm font-semibold tracking-wider uppercase">
              Knowledge Base
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Latest <span className="text-emerald-500">Insights</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            In-depth tutorials, real-world case studies, and industry insights to help you build better web experiences.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {my_blogs.map((post, index) => {
             const Icon = post.icon || Code;
            const colors = colorVariants[post.color] || colorVariants.emerald;

            console.log(Icon, "Icon")

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative bg-neutral-900 border ${colors?.border} ${colors?.hover} rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-${post.color}-500/10 h-full flex flex-col`}>

                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1.5 ${colors?.bg} backdrop-blur-sm border ${colors?.border} rounded-full`}>
                      <span className={`text-xs font-semibold ${colors?.text}`}>{post.category}</span>
                    </div>

                    {/* Icon Badge */}
                    <div className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-br ${colors?.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold text-white mb-3 group-hover:${colors?.text} transition-colors duration-300 line-clamp-2`}>
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-md text-xs text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-gray-400" />
                        </div>
                        <span className="text-xs text-gray-500">{post.author.name}</span>
                      </div>

                      <Link
                        href={`/blogs/${post.id}`}
                        className={`inline-flex items-center gap-2 ${colors?.text} font-semibold text-sm group/link`}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${colors?.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
              </motion.article>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="relative bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Want More Web Dev Tips?
              </h3>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                Join 5,000+ developers and get weekly insights on React, Next.js, performance optimization, and more.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 bg-neutral-900 border border-neutral-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  Subscribe Free
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                No spam. Unsubscribe anytime. 100% free forever.
              </p>
            </div>
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 border border-neutral-800 text-white font-semibold text-lg rounded-full hover:border-emerald-500/50 hover:bg-neutral-800 transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;