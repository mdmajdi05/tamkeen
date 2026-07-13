import type { Metadata } from 'next';
import Navbar     from '@/components/sections/Navbar';
import Footer     from '@/components/sections/Footer';
import WhyChoose  from '@/components/sections/WhyChoose';
import Stats      from '@/components/sections/Stats';
import Team       from '@/components/sections/Team';
import Process    from '@/components/sections/Process';
import content    from '@/data/content.json';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Tamkeen Energy Solutions is an Oman-based EPC company delivering engineering solutions to Power, Oil & Gas, Infrastructure, and Renewable Energy sectors across the GCC and Middle East.',
  alternates: { canonical: 'https://tamkeen-es.com/about/' },
  openGraph: {
    title: 'About Us | TAMKEEN',
    description:
      'Oman-based EPC contractor and gas turbine specialist delivering end-to-end engineering solutions across the complete project lifecycle.',
    url: 'https://tamkeen-es.com/about/',
    images: [{ url: '/tamkeen-logo.jpeg', width: 1200, height: 630, alt: 'About TAMKEEN' }],
  },
  twitter: {
    title: 'About Us | TAMKEEN',
    description:
      'Oman-based EPC contractor and gas turbine specialist delivering end-to-end engineering solutions across the complete project lifecycle.',
    images: ['/tamkeen-logo.jpeg'],
  },
};

export default function AboutPage() {
  const { about } = content;

  const paragraphs = about.description.split('\n\n');

  return (
    <main className="bg-white dark:bg-gray-950">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tamkeen-es.com/' },
          { name: 'About Us', url: 'https://tamkeen-es.com/about/' },
        ]}
      />
      <Navbar />

      {/* ── Hero ── */}
      <section id="overview" className="relative overflow-hidden pt-32 pb-20">
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

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
            style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
          >
            Our Story
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
            {about.title}
          </h1>
        </div>
      </section>

      {/* ── About Content ── */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="space-y-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* ── Vision & Mission ── */}
      <section id="vision-mission" className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                label: 'Our Vision',
                text: about.vision,
                icon: (
                  <svg className="h-8 w-8" style={{ color: '#1565C0' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ),
              },
              {
                label: 'Our Mission',
                text: about.mission,
                icon: (
                  <svg className="h-8 w-8" style={{ color: '#22C55E' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-8 transition-all hover:shadow-lg"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(to right,#1565C0,#22C55E)` }}
                />
                <div className="mb-4">
                  {item.icon}
                </div>
                <p
                  className="mb-3 text-xs font-bold uppercase tracking-widest"
                  style={{ color: item.label === 'Our Vision' ? '#1565C0' : '#22C55E' }}
                >
                  {item.label}
                </p>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section id="capabilities" className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
              style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
            >
              What We Do
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              {about.capabilities.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {about.capabilities.items.map((item, i) => (
              <div
                key={i}
                className="group rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all hover:shadow-md hover:border-transparent"
              >
                <div
                  className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
                >
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <WhyChoose />
      <Team />
      <Footer />
    </main>
  );
}
