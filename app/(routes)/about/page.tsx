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

const values = [
  {
    title: 'Safety',
    desc: 'Every operation, every shift, every site — safety is the foundation we build on. We adhere to ISO, OHSAS, and international HSE standards across all projects.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'Quality',
    desc: 'We deliver to the highest international standards — ISO 9001:2015 certified processes, OEM-grade materials, and rigorous testing at every stage.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    desc: 'From digital twin integration to AI-driven predictive maintenance, we continuously adopt emerging technologies to optimize asset performance.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    desc: 'Transparent partnerships, ethical supply chains, and honest communication — we earn trust by doing what we say, every time.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const { about, testimonials } = content;
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

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
              style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
            >
              Our DNA
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Driven by Safety, Quality, Innovation & Integrity
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 text-center transition-all hover:shadow-md"
              >
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl text-white"
                  style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
                >
                  {v.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
                className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-6"
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
              style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
            >
              Client Voices
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"
              >
                <svg className="mb-4 h-6 w-6" style={{ color: '#1565C0' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.404-.655-2.917-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.404-.655-2.917-1.179Z" />
                </svg>
                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />
      <Footer />
    </main>
  );
}
