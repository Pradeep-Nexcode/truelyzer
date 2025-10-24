import React from "react";
import BlogHero from "./_components/Hero";
import LatestArticlesGrid from "./_components/LatestArticles";
import FeaturedArticle from "./_components/FeaturedArticle";
import BlogCategories from "./_components/BlogCategories";
import NewsletterCTA from "./_components/NewsletterCTA";
import BlogSEOFooter from "./_components/BlogSEOFooter";

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
