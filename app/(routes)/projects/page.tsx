import type { Metadata } from 'next';
import Navbar           from '@/components/sections/Navbar';
import Stats            from '@/components/sections/Stats';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import Footer           from '@/components/sections/Footer';
import content          from '@/data/content.json';
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
  const { projects } = content;

  return (
    <main className="bg-white dark:bg-gray-950">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tamkeen-es.com/' },
          { name: 'Projects', url: 'https://tamkeen-es.com/projects/' },
        ]}
      />
      <Navbar />

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
            Portfolio
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
            Our Projects
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            Real deployments across the Middle East and beyond. Measurable impact delivered on time, every time.
          </p>
        </div>
      </section>

      {/* Delivery Stats */}
      <section className="pb-10 -mt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm">
            {[
              { value: '240+', label: 'Projects Delivered' },
              { value: '12', label: 'Countries' },
              { value: '99.7%', label: 'On-Time Delivery' },
              { value: '6', label: 'Industry Sectors' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold" style={{ color: '#1565C0' }}>
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Tags */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Delivering Across Sectors
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Power Generation', 'Oil & Gas', 'Solar Energy',
              'Marine & Offshore', 'Industrial Automation', 'Infrastructure',
            ].map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-gray-200 dark:border-gray-700 px-5 py-2 text-sm font-medium
                           text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-950"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ProjectsShowcase />

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Have a project in mind? Talk to our engineering team about your next EPC or infrastructure initiative.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
