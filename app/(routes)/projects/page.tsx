import type { Metadata } from 'next';
import Navbar           from '@/components/sections/Navbar';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import Footer           from '@/components/sections/Footer';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore TAMKEEN\'s portfolio of EPC projects across power generation, solar energy, marine automation, and industrial infrastructure in the GCC and Middle East.',
  alternates: { canonical: 'https://tamkeen-es.com/projects/' },
  openGraph: {
    title: 'Projects | TAMKEEN',
    description:
      'Real deployments. Measurable impact. Delivered on time — explore our project portfolio.',
    url: 'https://tamkeen-es.com/projects/',
    images: [{ url: '/tamkeen-logo.jpeg', width: 1200, height: 630, alt: 'TAMKEEN Projects' }],
  },
  twitter: {
    title: 'Projects | TAMKEEN',
    description:
      'Real deployments. Measurable impact. Delivered on time — explore our project portfolio.',
    images: ['/tamkeen-logo.jpeg'],
  },
};

export default function ProjectsPage() {
  return (
    <main className="bg-white dark:bg-gray-950">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tamkeen-es.com/' },
          { name: 'Projects', url: 'https://tamkeen-es.com/projects/' },
        ]}
      />
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-16">
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
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
            Our Projects
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            Real deployments across the Middle East and beyond. Measurable impact delivered on time, every time.
          </p>
        </div>
      </section>

      <ProjectsShowcase />
      <Footer />
    </main>
  );
}
