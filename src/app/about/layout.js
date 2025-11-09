import React from "react";
 // 🧠 SEO Metadata for /about page
export const metadata = {
  title: "About Trulyzer | Innovative Web Development & Digital Agency in India",
  description:
    "Trulyzer is a creative web development and digital solutions agency based in India. We combine design, technology, and strategy to craft websites, apps, and experiences that help brands grow faster.",
  keywords: [
    "about Trulyzer",
    "Trulyzer team",
    "web development company India",
    "digital agency Coimbatore",
    "UI UX design studio",
    "Next.js development agency",
    "React development company",
    "eCommerce development India",
    "Trulyzer web design",
    "modern digital solutions",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Trulyzer – Crafting the Future of Web & Digital Experiences",
    description:
      "Discover the story behind Trulyzer — a passionate team of developers and designers building next-generation web and mobile solutions for modern businesses.",
    url: "https://trulyzer.com/about",
    siteName: "Trulyzer",
    images: [
      {
        url: "https://trulyzer.com/og-about.jpg", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "About Trulyzer - Web Development Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Trulyzer | Digital Solutions & Web Development Agency",
    description:
      "Meet Trulyzer — a team of creators and technologists delivering impactful, scalable digital experiences for global brands.",
    images: ["https://trulyzer.com/og-about.jpg"], // replace if available
  },
  other: {
    "robots": "index, follow",
  },
};
const layout = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
