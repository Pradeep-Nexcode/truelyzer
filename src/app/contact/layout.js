import React from "react";
export const metadata = {
  title: "Contact | Trulyzer",
  description:
    "Get in touch with Trulyzer. Let's collaborate to build modern, fast, and impactful digital experiences that help your brand grow.",
  keywords: [
    "Trulyzer contact",
    "Trulyzer web development",
    "Trulyzer agency",
    "contact Trulyzer",
    "hire Trulyzer",
    "web design agency India",
  ],
  openGraph: {
    title: "Contact Trulyzer | Let's Build Something Great Together",
    description:
      "Have a project idea? Reach out to the Trulyzer team for web, app, and brand solutions.",
    url: "https://trulyzer.com/contact",
    siteName: "Trulyzer",
    images: [
      {
        url: "https://trulyzer.com/og-image.jpg", // change to your real OG image
        width: 1200,
        height: 630,
        alt: "Trulyzer - Contact Page",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Trulyzer",
    description:
      "Let's build something great together. Contact Trulyzer for your next digital project.",
    images: ["https://trulyzer.com/og-image.jpg"], // same as OG
  },
};
const layout = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
