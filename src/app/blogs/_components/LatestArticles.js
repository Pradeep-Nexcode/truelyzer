"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Tag, ArrowRight, Clock, Eye, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Modern Web Development with Next.js 15",
    date: "Oct 5, 2025",
    readTime: "8 min",
    views: "2.4K",
    excerpt:
      "Explore the latest features in Next.js 15 that help you build faster, more scalable, and SEO-optimized applications effortlessly.",
    tag: "Web Development",
    tagColor: "emerald",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
    trending: true
  },
  {
    id: 2,
    title: "UX Tips That Convert Visitors Into Customers",
    date: "Sep 22, 2025",
    readTime: "6 min",
    views: "1.8K",
    excerpt:
      "Learn essential UI/UX principles that increase engagement and improve conversion rates for your web projects.",
    tag: "Design",
    tagColor: "purple",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "How We Improved Site Performance by 85%",
    date: "Aug 28, 2025",
    readTime: "10 min",
    views: "3.2K",
    excerpt:
      "A full breakdown of real performance optimization strategies—from image compression to caching and code splitting.",
    tag: "Performance",
    tagColor: "orange",
    image:
      "https://images.pexels.com/photos/6476580/pexels-photo-6476580.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "Building APIs with GraphQL and Node.js",
    date: "Aug 10, 2025",
    readTime: "12 min",
    views: "1.5K",
    excerpt:
      "Discover how GraphQL simplifies data fetching and creates more flexible APIs for modern full-stack web development.",
    tag: "Development",
    tagColor: "blue",
    image:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    title: "Mastering Tailwind CSS: Advanced Techniques",
    date: "Jul 15, 2025",
    readTime: "7 min",
    views: "2.1K",
    excerpt:
      "Deep dive into advanced Tailwind CSS patterns, custom configurations, and performance optimization techniques.",
    tag: "Web Development",
    tagColor: "emerald",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    title: "Color Theory for Modern Web Interfaces",
    date: "Jul 2, 2025",
    readTime: "5 min",
    views: "1.6K",
    excerpt:
      "Understanding color psychology and implementing effective color schemes that enhance user experience.",
    tag: "Design",
    tagColor: "purple",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const categories = ["All", "Web Development", "Design", "Performance", "Development"];

const categoryIcons = {
  "All": Sparkles,
  "Web Development": TrendingUp,
  "Design": Tag,
  "Performance": ArrowRight,
  "Development": Clock,
};

export default function LatestArticlesGrid() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All" ? posts : posts.filter((p) => p.tag === selected);

  return (
    <section className="relative py-32 bg-neutral-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">Fresh Content</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Insights, tutorials, and industry trends from the Truelyzer team.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const Icon = categoryIcons[cat] || Tag;
            const isSelected = selected === cat;
            
            return (
              <motion.button
                key={cat}
                onClick={() => setSelected(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  isSelected
                    ? "bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/30"
                    : "bg-neutral-900/80 text-gray-400 border-neutral-800 hover:border-emerald-500/40 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {cat}
                </span>
                {isSelected && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <p className="text-gray-500 text-sm">
            Showing <span className="text-emerald-400 font-semibold">{filtered.length}</span> {filtered.length === 1 ? 'article' : 'articles'}
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${post.tagColor}-500/10 to-${post.tagColor}-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Card */}
                <div className="relative h-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                    {/* Trending Badge */}
                    {post.trending && (
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-orange-500/90 backdrop-blur-sm rounded-full flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-white" />
                        <span className="text-xs font-bold text-white">Trending</span>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1.5 bg-${post.tagColor}-500/20 backdrop-blur-sm border border-${post.tagColor}-500/30 rounded-full`}>
                      <span className={`text-xs font-semibold text-${post.tagColor}-400`}>
                        {post.tag}
                      </span>
                    </div>

                    {/* Views */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900/80 backdrop-blur-sm rounded-full">
                      <Eye className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-xs text-gray-400">{post.views}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-emerald-400">{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${post.id}`}
                      className="group/link inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className={`h-1 bg-gradient-to-r from-${post.tagColor}-500 to-${post.tagColor}-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="group px-8 py-4 bg-neutral-900 border border-neutral-800 text-white font-semibold rounded-full hover:border-emerald-500/50 hover:bg-neutral-800 transition-all duration-300">
            <span className="flex items-center gap-2">
              Load More Articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}