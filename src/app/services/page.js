"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Brush, Rocket, Megaphone, Cpu, Shield } from "lucide-react";
import ServicesHero from "./_components/ServicesHero";
import WhyChooseUs from "./_components/WhyChooseUs";
import CTASection from "./_components/CTASection";
import FAQSection from "./_components/FAQSection";


const services = [
  {
    icon: <Code2 className="w-8 h-8 text-emerald-500" />,
    title: "Web Development",
    desc: "Fast, responsive, and SEO-friendly websites built with Next.js, React, and modern tech.",
    href: "/services/web-development",
  },
  {
    icon: <Brush className="w-8 h-8 text-emerald-500" />,
    title: "UI / UX Design",
    desc: "Clean and intuitive user experiences that elevate your brand’s identity and engagement.",
    href: "/services/ui-ux-design",
  },
  {
    icon: <Rocket className="w-8 h-8 text-emerald-500" />,
    title: "Performance Optimization",
    desc: "Lightning-fast performance tuning to improve load times and Core Web Vitals.",
    href: "/services/performance-optimization",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-emerald-500" />,
    title: "SEO & Digital Strategy",
    desc: "Maximize visibility and conversions through data-driven SEO and marketing solutions.",
    href: "/services/seo-optimization",
  },
  {
    icon: <Cpu className="w-8 h-8 text-emerald-500" />,
    title: "Automation & Integrations",
    desc: "Streamline workflows using APIs, automation tools, and intelligent systems.",
    href: "/services/automation",
  },
  {
    icon: <Shield className="w-8 h-8 text-emerald-500" />,
    title: "Maintenance & Support",
    desc: "Continuous support and updates to keep your digital assets secure and reliable.",
    href: "/services/maintenance",
  },
];

const page = () => {
  return (
    <>
      <ServicesHero />

      <section className="relative bg-[#0a0a0a] text-white min-h-screen py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Background noise layer */}{" "}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />
        {/* Hero section */}
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
            Our <span className="text-emerald-500">Services</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed">
            Empowering your business with cutting-edge digital solutions
            designed for growth, performance, and aesthetics.
          </p>
        </motion.div>
        {/* Services grid */}
        <motion.div
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6">{service.desc}</p>
              <Link
                href={service.href}
                className="inline-flex items-center text-emerald-400 font-medium group-hover:underline underline-offset-4"
              >
                Learn More
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </>
  );
};
export default page;
