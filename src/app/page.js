import {  Hero, Portfolio, Process,Testimonials,ContactCTA ,OurWorks, Blogs} from '@/components';

export default function Home() {
  return (
    <>
      <Hero /> 
      {/* <ContactModal/> */}
      <Portfolio />
      {/* <CursorParticles/> */}
      <Process />
      <OurWorks/>
      <Testimonials/>
      <Blogs />
      <ContactCTA/>
    </>
  );
}
