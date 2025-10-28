import React from "react";
import Link from "next/link";
import Hero from "./_components/Hero";
import Overview from "./_components/Overview";
import CaseStudies from "./_components/CaseStudies";
import TechStack from "./_components/TechStack";
import FAQSection from "./_components/FAQSection";
import services from "@/data/services";

export default function Page({ params }) {
  const { service } = params || {};
  const serviceData = services.find((s) => s.id === service);

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Service not found</h2>
          <p className="text-gray-400 mt-2">
            We couldn't find the service "{service}".
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
