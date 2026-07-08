import type { Metadata } from 'next';
import Navbar       from '@/components/sections/Navbar';
import Footer       from '@/components/sections/Footer';
import ServicesGrid from '@/components/sections/ServicesGrid';
import FAQ          from '@/components/sections/FAQ';
import WhyChoose    from '@/components/sections/WhyChoose';
import ContactSection from '@/components/sections/ContactSection';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Services',
  description:
    "Explore TAMKEEN's six specialized engineering domains — power generation, marine automation, industrial electrical, EV solar, oil gas equipment, and turbine lifecycle services.",
  alternates: { canonical: 'https://tamkeen-es.com/services/' },
  openGraph: {
    title: 'Services | TAMKEEN',
    description:
      "Six specialized engineering domains — power generation, marine automation, industrial electrical, EV solar, oil & gas, and turbine services.",
    url: 'https://tamkeen-es.com/services/',
    images: [{ url: '/tamkeen-logo.jpeg', width: 1200, height: 630, alt: 'TAMKEEN Services' }],
  },
  twitter: {
    title: 'Services | TAMKEEN',
    description:
      "Six specialized engineering domains — power generation, marine automation, industrial electrical, EV solar, oil & gas, and turbine services.",
    images: ['/tamkeen-logo.jpeg'],
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white dark:bg-gray-950">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tamkeen-es.com/' },
          { name: 'Services', url: 'https://tamkeen-es.com/services/' },
        ]}
      />
      <Navbar />

      {/* Page hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(21,101,192,0.06) 0%, rgba(34,197,94,0.06) 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #D1D5DB 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
            style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
          >
            Capabilities
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Six Domains.{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
            >
              One Partner.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            From turbine maintenance to large-scale solar deployments — TAMKEEN covers the full
            spectrum of industrial energy needs under one roof.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <WhyChoose />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}

