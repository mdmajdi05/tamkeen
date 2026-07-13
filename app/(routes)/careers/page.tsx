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

const benefits = [
  {
    title: 'Competitive Compensation',
    desc: 'Industry-leading salaries, performance bonuses, and comprehensive benefits packages.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: 'Career Growth',
    desc: 'Structured mentorship programs, technical certifications, and clear advancement pathways.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    title: 'Global Exposure',
    desc: 'Work on multi-country EPC projects across the GCC, Middle East, and beyond with leading industry partners.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Safety First Culture',
    desc: 'Industry-leading HSE protocols, regular training, and a workplace that prioritises your wellbeing.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'Cutting-Edge Technology',
    desc: 'Access to the latest engineering tools, simulation software, and digital platforms for smarter project delivery.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: 'Inclusive Environment',
    desc: 'A diverse, collaborative workplace where every voice is heard and every contribution is valued.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

const steps = [
  { step: '01', title: 'Apply Online', desc: 'Submit your CV and cover letter through our careers portal or email.' },
  { step: '02', title: 'Initial Screening', desc: 'Our HR team reviews your profile and contacts you for a phone interview.' },
  { step: '03', title: 'Technical Interview', desc: 'Meet with our engineering leads to discuss your expertise and project experience.' },
  { step: '04', title: 'Offer & Onboarding', desc: 'Receive your offer, complete the joining formalities, and begin your journey.' },
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

      {/* Hero */}
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

      {/* Why Join Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
              style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
            >
              Why TAMKEEN
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              More Than a Job. A Career That Matters.
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Join a team that builds the infrastructure powering industries, cities, and communities across the Middle East.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-6 transition-all hover:shadow-md"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-white"
                  style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
                >
                  {b.icon}
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">{b.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
              style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
            >
              Openings
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Open Positions
            </h2>
          </div>
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 transition-all hover:shadow-md"
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

      {/* Recruitment Process */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
              style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
            >
              How We Hire
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Our Recruitment Process
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.step} className="relative text-center">
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-lg font-extrabold text-white"
                  style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
                >
                  {s.step}
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
