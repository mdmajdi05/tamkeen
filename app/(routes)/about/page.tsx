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
  const [first, ...rest] = paragraphs;

  return (
    <main className="bg-white dark:bg-gray-950">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tamkeen-es.com/' },
          { name: 'About Us', url: 'https://tamkeen-es.com/about/' },
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
            Our Story
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
            {about.title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            {first}
          </p>
        </div>
      </section>

      {/* Full About Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-5 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            {rest.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                label: 'Our Mission',
                text: about.mission,
                color: '#1565C0',
              },
              {
                label: 'Our Vision',
                text: about.vision,
                color: '#22C55E',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-8"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(to right,#1565C0,#22C55E)` }}
                />
                <p
                  className="mb-3 text-xs font-bold uppercase tracking-widest"
                  style={{ color: item.color }}
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

      {/* Capabilities */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
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
                className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"
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
