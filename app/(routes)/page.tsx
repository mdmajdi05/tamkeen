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
import { FaqSchema, BreadcrumbSchema } from '@/components/JsonLd';
import content from '@/data/content.json';

export const metadata: Metadata = {
  title: { absolute: 'TAMKEEN | Energy Solutions & General Trading' },
  description:
    'TAMKEEN is a premier engineering solutions provider — power generation, marine automation, solar EV infrastructure, turbine services. Serving 12 countries.',
  openGraph: {
    title: 'TAMKEEN | Energy Solutions & General Trading',
    description:
      'Turnkey industrial energy solutions — power generation, marine automation, solar EV infrastructure, and turbine lifecycle services.',
    url: 'https://tamkeen-es.com',
    images: [{ url: '/tamkeen-logo-footer.png', width: 1200, height: 630, alt: 'TAMKEEN Home' }],
  },
  twitter: {
    title: 'TAMKEEN | Energy Solutions & General Trading',
    description:
      'Turnkey industrial energy solutions — power generation, marine automation, solar EV infrastructure, and turbine lifecycle services.',
    images: ['/tamkeen-logo-footer.png'],
  },
};

export default function HomePage() {
  return (
    <main>
      <FaqSchema faqs={content.faqs} />
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
