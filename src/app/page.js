import { Navbar, Hero, Portfolio, Process,Testimonials,ContactCTA ,Footer,OurWorks} from '@/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <Portfolio />
      {/* <CursorParticles/> */}
      <Process />
      <OurWorks/>
      <Testimonials/>
      <ContactCTA/>
      <Footer />
    </>
  );
}
