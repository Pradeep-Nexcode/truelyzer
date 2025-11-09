import { blogs } from "@/data/blogs";
import React from "react";

export async function generateMetadata({ params }) {
  const post = blogs.find((blog) => blog.slug === params.blog);

  if (!post) {
    return {
      title: "Blog Post Not Found | Trulyzer",
      description: "This blog post could not be found on Trulyzer.",
    };
  }

  const url = `https://trulyzer.com/blog/${post.slug}`;
  const image = post.image || "https://trulyzer.com/og-blog.jpg"; // fallback OG image

  return {
    title: `${post.title} | Trulyzer Blog`,
    description:
      post.metaDescription ||
      post.excerpt ||
      "Read this insightful post from Trulyzer.",
    keywords: post.tags || ["Trulyzer", "blog", "web development", "design"],
    openGraph: {
      title: `${post.title} | Trulyzer Blog`,
      description:
        post.metaDescription ||
        post.excerpt ||
        "Explore this insightful Trulyzer article.",
      url,
      siteName: "Trulyzer",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
      authors: [post.author?.name || "Trulyzer Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Trulyzer`,
      description: post.metaDescription || post.excerpt,
      images: [image],
      creator: "@trulyzer",
    },
  };
}
const layout = ({ children }) => {

  return <div>{children}</div>;
};

export default layout;
