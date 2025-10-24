"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Brush, Rocket, Megaphone, Cpu, Shield } from "lucide-react";
import ServicesHero from "./_components/ServicesHero";
import WhyChooseUs from "./_components/WhyChooseUs";
import CTASection from "./_components/CTASection";
import FAQSection from "./_components/FAQSection";
import OurServices from "./_components/OurServices";



const page = () => {
  return (
    <>
      <ServicesHero />

  <OurServices/>

      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </>
  );
};
export default page;
