 

"use client";

import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Share2,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Calendar,
  Clock,
  User,
  Tag,
  BookOpen,
  Facebook,
  Copy,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { blogs } from "@/data/blogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


 




const BlogPostPage = () => {
  const router = useRouter();
  const params = useParams();
  const [copied, setCopied] = useState(false);

  // Find the blog post that matches the slug from the URL
  const post = blogs.find((blog) => blog.slug === params.blog);

  // If no matching blog post is found, show error or redirect
  if (!post) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => router.push("/blogs")}
            className="text-emerald-400 hover:text-emerald-300"
          >
            Return to Blogs
          </button>
        </div>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedPosts = [
    {
      id: 1,
      title: "Next.js Animations: A Complete Guide",
      excerpt:
        "Master animation techniques in Next.js with Framer Motion and CSS animations.",
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Development",
      readTime: "6 min",
    },
    {
      id: 2,
      title: "Improving SEO in React Applications",
      excerpt:
        "Best practices for optimizing your React apps for search engines.",
      image:
        "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "SEO",
      readTime: "7 min",
    },
    {
      id: 3,
      title: "Building Modern APIs with GraphQL",
      excerpt:
        "Learn how GraphQL simplifies data fetching in modern applications.",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Backend",
      readTime: "10 min",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="fixed top-24 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-full text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </motion.button>

        {/* Hero Image */}
        <div className="relative w-full h-[60vh] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative -mt-40 z-10">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full mb-6">
                <Tag className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm text-emerald-400">
                    {post.readTime}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm">{post.views} views</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 p-6 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/30">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {post.author.name}
                  </p>
                  <p className="text-gray-400 text-sm">{post.author.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Main Content */}

      <article className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg prose-invert prose-emerald max-w-none"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]} // allows <code> and inline HTML
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  className="text-4xl font-bold text-white mt-12 mb-6"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="text-3xl font-bold text-white mt-12 mb-6"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="text-2xl font-semibold text-white mt-8 mb-4"
                  {...props}
                />
              ),
              code: ({ node, inline, ...props }) =>
                inline ? (
                  <code
                    className="bg-neutral-800 px-1 rounded text-emerald-400"
                    {...props}
                  />
                ) : (
                  <pre className="bg-neutral-900 p-4 rounded-xl overflow-x-auto">
                    <code {...props} />
                  </pre>
                ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-neutral-800"
        >
          <p className="text-gray-500 text-sm mb-4">Tags:</p>
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog/tag/${tag.toLowerCase()}`}
                className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </motion.div>
      </article>
      {/* Author Bio Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-500/30 flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xl font-bold text-white mb-2">
                About {post.author.name}
              </p>
              <p className="text-gray-400 mb-4">{post.author.bio}</p>
              <div className="flex gap-3">
                <button className="p-2 bg-neutral-800 rounded-lg hover:bg-emerald-500/20 transition-all">
                  <Twitter className="w-4 h-4 text-gray-400" />
                </button>
                <button className="p-2 bg-neutral-800 rounded-lg hover:bg-emerald-500/20 transition-all">
                  <Linkedin className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Share Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-neutral-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Share this article
          </h3>
          <div className="flex justify-center gap-4">
            <button className="group p-4 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/10 transition-all">
              <Twitter className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
            </button>
            <button className="group p-4 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-blue-600/50 hover:bg-blue-600/10 transition-all">
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
            </button>
            <button className="group p-4 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-blue-700/50 hover:bg-blue-700/10 transition-all">
              <Facebook className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
            </button>
            <button
              onClick={handleCopyLink}
              className="group p-4 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
            >
              {copied ? (
                <Check className="w-5 h-5 text-emerald-400" />
              ) : (
                <Copy className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" />
              )}
            </button>
          </div>
        </motion.div>
      </section>
      {/* Related Posts */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-neutral-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Related <span className="text-emerald-400">Articles</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>

                    {/* Category */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full">
                      <span className="text-xs font-semibold text-emerald-400">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {relatedPost.readTime}
                      </span>
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="text-emerald-400 text-sm font-semibold hover:gap-2 flex items-center gap-1 transition-all"
                      >
                        Read More
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPostPage;
