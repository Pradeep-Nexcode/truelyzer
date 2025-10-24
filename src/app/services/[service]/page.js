import React from "react";
import Hero from "./_components/Hero";
import Overview from "./_components/Overview";
import CaseStudies from "./_components/CaseStudies";
import TechStack from "./_components/TechStack";
import FAQSection from "./_components/FAQSection";

const page = () => {
  return (
    <div>
      <Hero />

       <Overview />

      <TechStack /> 

      <CaseStudies />

      <FAQSection/>
    </div>
  );
};

export default page;
