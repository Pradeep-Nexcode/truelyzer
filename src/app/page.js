import { Navbar, Hero, Portfolio, Process,Testimonials,ContactCTA ,Footer,OurWorks, Blogs} from '@/components';

export default function Home() {
  return (
    <>
      <Hero /> 
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
