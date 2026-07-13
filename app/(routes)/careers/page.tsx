import type { Metadata } from 'next';
import Link    from 'next/link';
import Navbar  from '@/components/sections/Navbar';
import Footer  from '@/components/sections/Footer';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join TAMKEEN and build a career in engineering, energy, and industrial innovation across Oman and the GCC.',
  alternates: { canonical: 'https://tamkeen-es.com/careers/' },
  openGraph: {
    title: 'Careers | TAMKEEN',
    description:
      'Join TAMKEEN and build a career in engineering, energy, and industrial innovation across Oman and the GCC.',
    url: 'https://tamkeen-es.com/careers/',
    images: [{ url: '/tamkeen-logo.jpeg', width: 1200, height: 630, alt: 'Careers at TAMKEEN' }],
  },
  twitter: {
    title: 'Careers | TAMKEEN',
    description:
      'Join TAMKEEN and build a career in engineering, energy, and industrial innovation across Oman and the GCC.',
    images: ['/tamkeen-logo.jpeg'],
  },
};

const openings = [
  { title: 'Senior Electrical Engineer', location: 'Muscat, Oman', type: 'Full-time' },
  { title: 'Project Manager — EPC', location: 'Muscat, Oman', type: 'Full-time' },
  { title: 'Gas Turbine Specialist', location: 'Duqm, Oman', type: 'Full-time' },
  { title: 'PLC / SCADA Engineer', location: 'Muscat, Oman', type: 'Full-time' },
  { title: 'Business Development Manager', location: 'Muscat, Oman', type: 'Full-time' },
  { title: 'HSE Officer', location: 'Muscat, Oman', type: 'Full-time' },
];

export default function CareersPage() {
  return (
    <main className="bg-white dark:bg-gray-950">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tamkeen-es.com/' },
          { name: 'Careers', url: 'https://tamkeen-es.com/careers/' },
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
            Join Our Team
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
            Careers at TAMKEEN
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            Build the future of energy and infrastructure with us. We are always looking for talented engineers, project managers, and technical specialists.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white text-center">
            Open Positions
          </h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-5 transition-all hover:shadow-md"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {job.location} &middot; {job.type}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
            Don&apos;t see a matching role? Send your CV to{' '}
            <a href="mailto:careers@tamkeen-es.com" className="font-medium" style={{ color: '#1565C0' }}>
              careers@tamkeen-es.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
