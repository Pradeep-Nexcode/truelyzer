"use client";

import Image from "next/image";
import Link from "next/link";
const motion = dynamic(() => import("framer-motion"), { ssr: false });

import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  TrendingUp,
  Bookmark,
  Share2,
} from "lucide-react";

const FeaturedArticle = () => {
  const article = {
    title: "Building Future-Ready Web Experiences",
    excerpt:
      "Discover how Trulyzer blends design precision with performance-driven development to create digital products that scale and inspire. From concept to launch, we build web experiences that make a real impact.",
    date: "October 20, 2025",
    readTime: "5 min read",
    author: "Priya Menon",
    category: "Web Development",
    image: "/images/blog-featured.jpg",
    tags: ["Next.js", "Performance", "Design"],
    views: "2.5K",
  };

  return (
    <section className="relative bg-neutral-950 text-white py-32 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">
              Featured Story
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Must-Read Article
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Our most popular article this week—packed with insights, tutorials,
            and real-world examples.
          </motion.p>
        </div>

        {/* Featured Article Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Main Card */}
          <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-emerald-500/20 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-[400px] lg:h-full overflow-hidden">
                {/* Image */}
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-emerald-500/90 backdrop-blur-sm rounded-full">
                  <span className="text-sm font-semibold text-white">
                    {article.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-6 right-6 flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 flex items-center justify-center hover:bg-neutral-800 hover:border-emerald-500/50 transition-all">
                    <Bookmark className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 flex items-center justify-center hover:bg-neutral-800 hover:border-emerald-500/50 transition-all">
                    <Share2 className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                {/* Views Badge */}
                <div className="absolute bottom-6 left-6 px-3 py-1.5 bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 rounded-full">
                  <span className="text-xs font-medium text-gray-400">
                    {article.views} views
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-emerald-400 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-8 mb-8 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-emerald-400">{article.readTime}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/blog/building-future-ready-web-experiences"
                  className="group/btn inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-all hover:scale-105 shadow-lg shadow-emerald-500/30 w-full sm:w-auto"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {[
            { label: "Average Read Time", value: "6 min" },
            { label: "Articles Published", value: "50+" },
            { label: "Monthly Readers", value: "10K+" },
            { label: "Topics Covered", value: "15+" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
