import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  FaBolt, FaShip, FaMicrochip, FaSolarPanel, FaOilCan, FaCogs,
  FaArrowLeft, FaCheckCircle, FaPhoneAlt,
} from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import Navbar  from '@/components/sections/Navbar';
import Footer  from '@/components/sections/Footer';
import content from '@/data/content.json';
import type { Service } from '@/lib/types';
import { BreadcrumbSchema, ServiceSchema } from '@/components/JsonLd';

const iconMap: Record<string, React.ElementType> = {
  FaBolt, FaShip, FaMicrochip, FaSolarPanel, FaOilCan, FaCogs,
};

const detailMap: Record<string, { headline: string; bullets: string[] }> = {
  'power-gen': {
    headline: 'Reliable Power, Grid-Scale Precision',
    bullets: [
      'High-grade turbine supply (gas, steam, hydro) up to 500MW capacity',
      'MV/HV switchgear panels and protection relay programming',
      'Load flow studies and harmonic analysis for stable grid synchronization',
      'Transformer supply, factory acceptance testing, and commissioning services',
      'Emergency power backup systems and UPS integration',
    ],
  },
  'marine-auto': {
    headline: 'Offshore-Grade Automation, Zero Tolerance for Failure',
    bullets: [
      'Dynamic Positioning (DP) system installation and class certification',
      'Ruggedized navigation displays and ECDIS integration',
      'Marine power management systems (PMS) for vessels and rigs',
      'Ballast water treatment system (BWTS) supply and commissioning',
      'Fire and gas detection system upgrades to SOLAS compliance',
    ],
  },
  'industrial-electrical': {
    headline: 'Factory-Floor Intelligence, Industrial-Scale Reliability',
    bullets: [
      'PLC and SCADA system design, programming, and commissioning',
      'Motor control centers (MCC) and VFD drive panels',
      'Energy audit and power factor correction for industrial plants',
      'Hazardous area (ATEX/IECEx) electrical installations',
      'Cable management, tray installation, and HV termination services',
    ],
  },
  'ev-solar': {
    headline: 'The Green Energy Infrastructure of Tomorrow, Built Today',
    bullets: [
      'DC fast chargers: 50kW, 120kW, and 240kW configurations',
      'Utility-scale solar PV design, supply, and EPC contracting',
      'Battery Energy Storage Systems (BESS) up to 100MWh capacity',
      'Bi-directional EV charger integration with V2G capability',
      'Remote monitoring and diagnostics platform integration',
    ],
  },
  'oil-gas': {
    headline: 'Upstream to Downstream — Every Component, Sourced Right',
    bullets: [
      'API 6A wellhead and X-mas tree equipment supply',
      'High-pressure valves: gate, ball, check, and control valves',
      'Separation and processing vessel equipment packages',
      'Pipeline inspection tools and intelligent pigging equipment',
      'Refinery instrument calibration and spare parts management',
    ],
  },
  'turbine-services': {
    headline: 'Maximum Uptime. Minimum Downtime. Guaranteed.',
    bullets: [
      'Hot section inspections and combustor liner replacements',
      'Rotor balancing, blade repair, and tip clearance restoration',
      'Control system upgrades from legacy to modern PLC platforms',
      'Performance testing and efficiency tuning post-overhaul',
      'Rapid OEM-equivalent spare parts via 2-week express sourcing channel',
    ],
  },
};

export async function generateStaticParams() {
  return content.services.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const service = content.services.find((s) => s.id === params.id);
  if (!service) return { title: 'Service Not Found' };
  const url = `https://tamkeen-es.com/services/${service.id}/`;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | TAMKEEN`,
      description: service.description,
      url,
      images: [{ url: '/tamkeen-logo.jpeg', width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      title: `${service.title} | TAMKEEN`,
      description: service.description,
      images: ['/tamkeen-logo.jpeg'],
    },
    robots: { index: true, follow: true },
  };
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = content.services.find((s) => s.id === params.id) as Service | undefined;
  if (!service) notFound();

  const Icon   = iconMap[service.icon] || FaBolt;
  const detail = detailMap[service.id];

  const related = content.services
    .filter((s) => s.id !== service.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <main className="bg-white dark:bg-gray-950">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tamkeen-es.com/' },
          { name: 'Services', url: 'https://tamkeen-es.com/services/' },
          { name: service.title, url: `https://tamkeen-es.com/services/${service.id}/` },
        ]}
      />
      <ServiceSchema
        name={service.title}
        description={service.description}
        url={`https://tamkeen-es.com/services/${service.id}/`}
      />
      <Navbar />

      {/* ── Hero banner ── */}
      <section className="relative overflow-hidden pt-24">
        {/* Hero image */}
        <div className="relative h-72 w-full sm:h-96">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

          {/* Back link */}
          <div className="absolute top-6 left-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm
                         transition-all hover:bg-white/30"
            >
              <FaArrowLeft className="text-[10px]" />
              All Services
            </Link>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-8 left-6 right-6 lg:left-12">
            <div className="flex items-center gap-4">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
              >
                <Icon className="text-2xl" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  TAMKEEN Services
                </p>
                <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                  {service.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Detail content ── */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

            {/* Left — scope */}
            <div className="lg:col-span-3">
              <p
                className="mb-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: '#1565C0' }}
              >
                Scope of Services
              </p>
              <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {detail?.headline ?? 'What We Deliver'}
              </h2>

              <p className="mb-8 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {service.description}
              </p>

              <ul className="space-y-4">
                {(detail?.bullets ?? []).map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle
                      className="mt-0.5 flex-shrink-0 text-base"
                      style={{ color: '#22C55E' }}
                    />
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — CTA card */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-lg">
                {/* Top gradient */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: 'linear-gradient(to right,#1565C0,#22C55E)' }}
                />
                <div className="p-8">
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 mb-6">
                    Our specialists are available 24/7 to discuss your project requirements and
                    deliver a detailed technical proposal at no cost.
                  </p>

                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white
                               transition-all hover:scale-[1.02] hover:shadow-lg mb-3"
                    style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
                  >
                    Request a Proposal
                    <FaArrowRight className="text-xs" />
                  </Link>

                  <a
                    href="tel:+917011123269"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 py-3.5 text-sm font-semibold text-gray-700 dark:text-gray-300
                               transition-all hover:border-brand-blue hover:text-brand-blue dark:hover:text-brand-green"
                  >
                    <FaPhoneAlt className="text-xs" />
                    Call +91 7011123269
                  </a>

                  <ul className="mt-6 space-y-2 text-xs text-gray-400 dark:text-gray-500">
                    {[
                      'ISO 9001:2015 certified processes',
                      '24/7 engineering hotline',
                      'Global OEM sourcing network',
                      'Free project consultation',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <FaCheckCircle className="text-[10px]" style={{ color: '#22C55E' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related services ── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Related Services
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((rel) => {
              const RelIcon = iconMap[rel.icon] || FaBolt;
              return (
                <Link
                  key={rel.id}
                  href={`/services/${rel.id}`}
                  className="group relative overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950
                             transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div
                      className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg text-white shadow"
                      style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
                    >
                      <RelIcon className="text-sm" />
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-green transition-colors">
                      {rel.title}
                    </p>
                  </div>
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: 'linear-gradient(to right,#1565C0,#22C55E)' }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
