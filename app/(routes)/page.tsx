import type { Metadata } from 'next';
import Navbar           from '@/components/sections/Navbar';
import Hero             from '@/components/sections/Hero';
import Stats            from '@/components/sections/Stats';
import ServicesGrid     from '@/components/sections/ServicesGrid';
import AboutPreview     from '@/components/sections/AboutPreview';
import Process          from '@/components/sections/Process';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import WhyChoose        from '@/components/sections/WhyChoose';
import Team             from '@/components/sections/Team';
import Testimonials     from '@/components/sections/Testimonials';
import FAQ              from '@/components/sections/FAQ';
import ContactSection   from '@/components/sections/ContactSection';
import Footer           from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'TAMKEEN | Energy Solutions & General Trading',
};

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <ServicesGrid />
      <AboutPreview />
      <Process />
      <ProjectsShowcase />
      <WhyChoose />
      <Team />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}
