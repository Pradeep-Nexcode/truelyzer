import React from "react";
import Link from "next/link";
import Hero from "./_components/Hero";
import Overview from "./_components/Overview";
import CaseStudies from "./_components/CaseStudies";
import TechStack from "./_components/TechStack";
import FAQSection from "./_components/FAQSection";
import services from "@/data/services";

// 🧩 Dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { service } = params || {};
  const serviceData = services.find((s) => s.id === service);

  if (!serviceData) {
    return {
      title: "Service Not Found | Trulyzer",
      description:
        "The service you're looking for is not available. Explore our range of web design, development, and digital solutions at Trulyzer.",
      alternates: { canonical: `/services/${service}` },
      robots: { index: false, follow: true },
    };
  }

  const title = `${serviceData.name} Services | Trulyzer - Expert ${serviceData.name} Solutions`;
  const description =
    serviceData.metaDescription ||
    `Trulyzer provides professional ${serviceData.name.toLowerCase()} services designed to help your business grow. Discover how our team builds modern, high-performance digital solutions.`;

  const image = serviceData.image || "https://trulyzer.com/og-service.jpg";

  return {
    title,
    description,
    keywords: serviceData.keywords || [
      `${serviceData.name.toLowerCase()} services`,
      `${serviceData.name.toLowerCase()} company`,
      `${serviceData.name.toLowerCase()} agency`,
      "Trulyzer",
      "digital solutions",
      "web development",
      "UI UX design",
    ],
    alternates: { canonical: `/services/${service}` },
    openGraph: {
      title,
      description,
      url: `https://trulyzer.com/services/${service}`,
      siteName: "Trulyzer",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${serviceData.name} Services - Trulyzer`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    other: {
      robots: "index, follow",
    },
  };
}

// 🧭 Page component
export default function Page({ params }) {
  const { service } = params || {};
  const serviceData = services.find((s) => s.id === service);

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Service not found</h2>
          <p className="text-gray-400 mt-2">
            We couldn&apos;t find the service &quot;{service}&quot;.
          </p>
          <div className="mt-6">
            <Link
              href="/services"
              className="inline-block px-4 py-2 bg-emerald-500 text-black rounded-md"
            >
              Back to services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero serviceId={service} />
      <Overview serviceId={service} />
      <TechStack serviceId={service} />
      <CaseStudies serviceId={service} />
      <FAQSection serviceId={service} />
    </div>
  );
}
