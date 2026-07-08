import type { Metadata } from 'next';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Navbar      from '@/components/sections/Navbar';
import Footer      from '@/components/sections/Footer';
import ContactForm from '@/components/forms/ContactForm';
import content     from '@/data/content.json';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with TAMKEEN for engineering consultations, project proposals, and 24/7 technical support. Call +968 9524 8296 or email contact@tamkeen-es.com.',
  alternates: { canonical: 'https://tamkeen-es.com/contact/' },
  openGraph: {
    title: 'Contact Us | TAMKEEN',
    description:
      'Reach TAMKEEN for engineering consultations, project proposals, and 24/7 technical support.',
    url: 'https://tamkeen-es.com/contact/',
    images: [{ url: '/tamkeen-logo.jpeg', width: 1200, height: 630, alt: 'Contact TAMKEEN' }],
  },
  twitter: {
    title: 'Contact Us | TAMKEEN',
    description:
      'Reach TAMKEEN for engineering consultations, project proposals, and 24/7 technical support.',
    images: ['/tamkeen-logo.jpeg'],
  },
};

export default function ContactPage() {
  const { footerLinks } = content;
  const mapQuery = encodeURIComponent(footerLinks.address);

  return (
    <main className="bg-white dark:bg-gray-950">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tamkeen-es.com/' },
          { name: 'Contact Us', url: 'https://tamkeen-es.com/contact/' },
        ]}
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(21,101,192,0.06) 0%, rgba(34,197,94,0.06) 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #D1D5DB 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
            style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
          >
            Get In Touch
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Let&apos;s Build Something{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
            >
              Together
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Our engineering team responds within one business day. For emergencies,
            our 24/7 hotline is always available.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pb-24 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

            {/* Left — Form */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg">
              {/* Form top gradient bar */}
              <div
                className="h-1.5"
                style={{ background: 'linear-gradient(to right,#1565C0,#22C55E)' }}
              />
              <div className="p-8 lg:p-10">
                <h2 className="mb-1 text-xl font-extrabold text-gray-900 dark:text-white">
                  Send Us a Message
                </h2>
                <p className="mb-7 text-sm text-gray-400 dark:text-gray-500">
                  Fill out the form and we&apos;ll prepare a technical proposal for you.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Right — Info + Map */}
            <div className="flex flex-col gap-6">
              {/* Contact info card */}
              <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
                <h2 className="mb-6 text-xl font-extrabold text-gray-900 dark:text-white">
                  Contact Information
                </h2>
                <ul className="space-y-5">
                  {[
                    { Icon: FaMapMarkerAlt, label: 'Address',        value: footerLinks.address, href: '#' },
                    { Icon: FaMapMarkerAlt, label: 'Address',        value: footerLinks.address2, href: '#' },
                    { Icon: FaPhone,        label: 'Phone',          value: footerLinks.phone,   href: `tel:${footerLinks.phone}` },
                    { Icon: FaEnvelope,     label: 'Email',          value: footerLinks.email,   href: `mailto:${footerLinks.email}` },
                    { Icon: FaClock,        label: 'Support',        value: '24 / 7 Emergency Hotline',  href: '#' },
                  ].map(({ Icon, label, value, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="flex items-start gap-4 group"
                      >
                        <div
                          className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white"
                          style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
                        >
                          <Icon className="text-sm" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                            {label}
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-brand-blue dark:group-hover:text-brand-green transition-colors">
                            {value}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Embedded map */}
              <div className="flex-1 overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 shadow-md min-h-[240px]">
                <iframe
                  src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '240px', filter: 'saturate(0.8)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TAMKEEN Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
