import React from "react";
import BlogHero from "./_components/Hero";
import LatestArticlesGrid from "./_components/LatestArticles";
import FeaturedArticle from "./_components/FeaturedArticle";
import BlogCategories from "./_components/BlogCategories";
import NewsletterCTA from "./_components/NewsletterCTA";
import BlogSEOFooter from "./_components/BlogSEOFooter";

export const metadata = {
  title: "Blogs | Trulyzer Insights & Digital Trends",
  description:
    "Explore the latest articles, tutorials, and insights from Trulyzer on web development, design, branding, and digital innovation.",
  keywords: [
    "Trulyzer blog",
    "web development articles",
    "UI UX design tips",
    "digital agency insights",
    "React development tutorials",
    "Next.js guides",
    "branding and design trends",
  ],
  openGraph: {
    title: "Trulyzer Blog | Insights, Tutorials & Digital Trends",
    description:
      "Stay ahead in tech and design with expert insights, case studies, and practical tips from Trulyzer.",
    url: "https://trulyzer.com/blogs",
    siteName: "Trulyzer",
    images: [
      {
        url: "https://trulyzer.com/og-blog.jpg", // replace with your blog OG image
        width: 1200,
        height: 630,
        alt: "Trulyzer Blog - Web & Design Insights",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trulyzer Blog | Insights & Tutorials",
    description:
      "Discover the latest in design, development, and digital strategy from the Trulyzer team.",
    images: ["https://trulyzer.com/og-blog.jpg"], // same OG image
  },
};


const page = () => {
  return (
    <div>
      <BlogHero />
      <FeaturedArticle />
      <LatestArticlesGrid />
      <BlogCategories/>
      <NewsletterCTA/>
      <BlogSEOFooter/>
    </div>
  );
};

export default page;
