import { Hero, Portfolio, Process, Testimonials, ContactCTA, OurWorks, Blogs ,OurServices} from '@/components';

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      {/* <ContactModal/> */}
      <Portfolio />
      {/* <CursorParticles/> */}
      <Process />
      <OurWorks />
      <Testimonials />
      <Blogs />
      <ContactCTA />
    </>
  );
}
