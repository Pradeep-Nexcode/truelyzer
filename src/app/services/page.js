import ServicesHero from "./_components/ServicesHero";
import WhyChooseUs from "./_components/WhyChooseUs";
import CTASection from "./_components/CTASection";
import FAQSection from "./_components/FAQSection";
import OurServices from "./_components/OurServices";

export const metadata = {
  title: "Our Services | Trulyzer - Web Design, Development & Digital Solutions",
  description:
    "Explore Trulyzer’s full range of web development and digital solutions. We design and build high-performance websites, eCommerce platforms, and mobile apps tailored to your business growth.",
  keywords: [
    "web development services",
    "website design company India",
    "eCommerce website development",
    "custom app development",
    "UI UX design agency",
    "Next.js development services",
    "React web development",
    "digital transformation company",
    "Trulyzer services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Trulyzer Services – Build, Design & Scale Your Digital Presence",
    description:
      "We craft websites, apps, and digital platforms that elevate your brand and drive measurable results. Discover what we can build for you.",
    url: "https://trulyzer.com/services",
    siteName: "Trulyzer",
    images: [
      {
        url: "https://trulyzer.com/og-services.jpg", // replace with your real image
        width: 1200,
        height: 630,
        alt: "Trulyzer Web Development Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trulyzer | Full-Stack Web & App Development Services",
    description:
      "Custom web, app, and eCommerce development with modern tech stacks. Let’s turn your ideas into powerful digital products.",
    images: ["https://trulyzer.com/og-services.jpg"], // replace if needed
  },
  other: {
    "robots": "index, follow",
  },
};

export default function Page() {
  return (
    <>
      <ServicesHero />
      <OurServices />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </>
  );
}
