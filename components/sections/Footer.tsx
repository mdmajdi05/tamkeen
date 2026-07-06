'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube,
  FaArrowRight, FaCheckCircle,
} from 'react-icons/fa';
import { useDataContext } from '@/context/DataContext';

const navRoutes: Record<string, string> = {
  Home: '/', About: '/about', Services: '/services', Projects: '/', Contact: '/contact',
};

const serviceLinks = [
  { label: 'Power Generation & Distribution', href: '/services/power-gen' },
  { label: 'Marine & Offshore Automation',    href: '/services/marine-auto' },
  { label: 'Industrial Electrical',           href: '/services/industrial-electrical' },
  { label: 'EV Ecosystem & Solar',            href: '/services/ev-solar' },
  { label: 'Oil & Gas Equipment',             href: '/services/oil-gas' },
  { label: 'Turbine Lifecycle Services',      href: '/services/turbine-services' },
];

const certifications = ['ISO 9001:2015', 'ISO 14001', 'API Compliant', 'OSHA Certified'];

const socials = [
  { Icon: FaLinkedin,  href: '#', label: 'LinkedIn' },
  { Icon: FaTwitter,   href: '#', label: 'Twitter' },
  { Icon: FaFacebook,  href: '#', label: 'Facebook' },
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaYoutube,   href: '#', label: 'YouTube' },
];

export default function Footer() {
  const { data } = useDataContext();
  const { site, footerLinks } = data;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  }

  return (
    <footer className="bg-gray-950 text-white">

      {/* ── Newsletter Banner ── */}
      <div
        className="relative overflow-hidden px-6 py-12"
        style={{ background: 'linear-gradient(135deg,#1565C0 0%,#22C55E 100%)' }}
      >
        <div className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Stay Informed
            </p>
            <h3 className="mt-1 text-xl font-extrabold text-white">
              Subscribe to Our Engineering Insights
            </h3>
          </div>
          {subscribed ? (
            <div className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white">
              <FaCheckCircle /> Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-full border-0 bg-white/20 px-5 py-3 text-sm text-white placeholder-white/60
                           outline-none ring-1 ring-white/30 transition focus:ring-white focus:bg-white/30"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold transition-all hover:scale-105 active:scale-95"
                style={{ color: '#1565C0' }}
              >
                Subscribe <FaArrowRight className="text-xs" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/tamkeen-logo.jpeg"
                alt="TAMKEEN Logo"
                width={140}
                height={48}
                className="h-12 w-auto object-contain"
                unoptimized
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              {site.footerDesc}
            </p>

            {/* Certifications */}
            <div className="mt-6 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-gray-700 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-7 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400
                             transition-all duration-300 hover:scale-110 hover:border-transparent hover:text-white"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg,#1565C0,#22C55E)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '';
                  }}
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <div
              className="mb-5 h-0.5 w-10 rounded-full"
              style={{ background: 'linear-gradient(to right,#1565C0,#22C55E)' }}
            />
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((lbl) => (
                <li key={lbl}>
                  <Link
                    href={navRoutes[lbl] ?? '/'}
                    className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white group"
                  >
                    <FaArrowRight
                      className="text-[10px] transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: '#22C55E' }}
                    />
                    {lbl}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Our Services
            </h4>
            <div
              className="mb-5 h-0.5 w-10 rounded-full"
              style={{ background: 'linear-gradient(to right,#1565C0,#22C55E)' }}
            />
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-start gap-2 text-sm text-gray-400 transition-colors hover:text-white group"
                  >
                    <FaArrowRight
                      className="mt-0.5 flex-shrink-0 text-[10px] transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: '#22C55E' }}
                    />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Contact Us
            </h4>
            <div
              className="mb-5 h-0.5 w-10 rounded-full"
              style={{ background: 'linear-gradient(to right,#1565C0,#22C55E)' }}
            />
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <div
                  className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{ background: 'linear-gradient(135deg,rgba(21,101,192,0.3),rgba(34,197,94,0.3))' }}
                >
                  <FaMapMarkerAlt className="text-xs" style={{ color: '#22C55E' }} />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="leading-relaxed">{footerLinks.address}</span>
                  <span className="leading-relaxed text-gray-500">{footerLinks.address2}</span>
                </div>
              </li>
              <li>
                <a
                  href={`tel:${footerLinks.phone}`}
                  className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white group"
                >
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ background: 'linear-gradient(135deg,rgba(21,101,192,0.3),rgba(34,197,94,0.3))' }}
                  >
                    <FaPhone className="text-xs" style={{ color: '#22C55E' }} />
                  </div>
                  {footerLinks.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footerLinks.email}`}
                  className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white group"
                >
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ background: 'linear-gradient(135deg,rgba(21,101,192,0.3),rgba(34,197,94,0.3))' }}
                  >
                    <FaEnvelope className="text-xs" style={{ color: '#22C55E' }} />
                  </div>
                  {footerLinks.email}
                </a>
              </li>
            </ul>

            {/* Business hours */}
            <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900 p-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white">
                Support Hours
              </p>
              <div className="space-y-1 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span className="text-white">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat – Sun</span>
                  <span className="text-white">On Call</span>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full animate-pulse"
                    style={{ background: '#22C55E' }}
                  />
                  <span style={{ color: '#22C55E' }}>24/7 Emergency Hotline Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-gray-300 font-semibold">{site.name}</span>
            . All rights reserved. — {site.tagline}
          </p>
          <div className="flex gap-5 text-xs text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
