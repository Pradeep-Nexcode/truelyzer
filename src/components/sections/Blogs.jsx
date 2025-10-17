"use client"
import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "How to Build a Modern Portfolio Website in 2025: A Complete Guide",
    date: "September 12, 2025",
    excerpt: "A step-by-step tutorial for creating a personal or business portfolio using the latest technologies like React, Next.js, and Tailwind CSS.",
    image: "https://cdn.pixabay.com/photo/2020/07/28/07/56/sea-5445140_1280.jpg",
  },
  {
    id: 2,
    title: "Why React is the Best Framework for 2025 (And Beyond)",
    date: "August 21, 2025",
    excerpt: "Why React is still one of the best frameworks to use in 2025, backed by real-world examples from the industry.",
    image: "https://cdn.pixabay.com/photo/2016/11/29/11/51/coffee-1869306_1280.jpg",
  },
  {
    id: 3,
    title: "Optimizing Your Website’s Performance in 2025: Speed is Everything",
    date: "July 5, 2025",
    excerpt: "Learn how to speed up your website with techniques like image optimization, lazy loading, and server-side rendering.",
    image: "https://cdn.pixabay.com/photo/2020/06/01/14/09/web-5240431_1280.jpg",
  },
];

const Blogs = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Web Development <span class = "text-emerald-300"> Insights </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 mb-12"
        >
          Stay up-to-date with the latest trends, tutorials, and best practices in web development.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-neutral-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-left"
            >
              <img
                src={"https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg"}
                alt={post.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
                <p className="text-sm text-emerald-500 mb-4">{post.date}</p>
                <p className="text-gray-400 mb-6">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="text-emerald-600 font-semibold hover:underline">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12">
          <Link
            href="/blog/page/2"
            className="inline-block py-2 px-6 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
          >
            Next Page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
