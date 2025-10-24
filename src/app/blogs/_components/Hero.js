'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, TrendingUp, BookOpen, Sparkles, ArrowRight, Calendar, User } from 'lucide-react';

const BlogHero = () => {
  const categories = [
    { name: 'Web Dev', icon: '💻', count: 24 },
    { name: 'Design', icon: '🎨', count: 18 },
    { name: 'Performance', icon: '⚡', count: 12 },
    { name: 'SEO', icon: '🚀', count: 15 }
  ];

  const featuredPost = {
    title: "Building Lightning-Fast E-Commerce Sites with Next.js 15",
    excerpt: "Learn how to leverage Next.js 15's new features for high-performance platforms...",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Development",
    author: "Priya Menon"
  };

  return (
    <section className="relative bg-neutral-950 text-white min-h-screen flex flex-col justify-center overflow-hidden px-6 py-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Floating Icons */}
      {['📚', '✍️', '💡', '🎯'].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Knowledge Hub</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-white block">Insights That</span>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                Inspire Action
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-400 mb-8 leading-relaxed"
            >
              Deep dives into web development, design patterns, performance optimization, and everything that powers modern digital experiences.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-8 mb-10"
            >
              <div>
                <div className="text-3xl font-bold text-emerald-400">50+</div>
                <div className="text-sm text-gray-500">Articles</div>
              </div>
              <div className="w-px h-12 bg-neutral-800"></div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">10K+</div>
                <div className="text-sm text-gray-500">Readers</div>
              </div>
              <div className="w-px h-12 bg-neutral-800"></div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">Weekly</div>
                <div className="text-sm text-gray-500">Updates</div>
              </div>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative mb-8"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 bg-neutral-900/80 border border-neutral-800 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm text-gray-500 mb-3">Popular Topics:</p>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat, index) => (
                  <Link
                    key={index}
                    href={`#${cat.name.toLowerCase()}`}
                    className="group flex items-center gap-2 px-4 py-2 bg-neutral-900/80 border border-neutral-800 rounded-full hover:border-emerald-500/50 hover:bg-neutral-800 transition-all"
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <span className="text-sm text-gray-300 group-hover:text-emerald-400 transition-colors">
                      {cat.name}
                    </span>
                    <span className="text-xs text-gray-600">({cat.count})</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Featured Post Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Card */}
            <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              {/* Featured Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-400">Featured Post</span>
                </div>
                <div className="px-3 py-1.5 bg-neutral-800 rounded-full">
                  <span className="text-xs text-gray-400">{featuredPost.category}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors line-clamp-2">
                {featuredPost.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 mb-6 line-clamp-3">
                {featuredPost.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="text-emerald-400">
                  {featuredPost.readTime}
                </div>
              </div>

              {/* Read Button */}
              <Link
                href="#"
                className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-all hover:scale-105 shadow-lg shadow-emerald-500/30"
              >
                Read Article
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="relative bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Never Miss an Update
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Join 5,000+ developers getting weekly insights
                  </p>
                </div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-all hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-emerald-500/30 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-emerald-400 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogHero;