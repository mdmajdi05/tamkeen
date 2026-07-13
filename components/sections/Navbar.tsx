'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import ThemeToggle from '@/components/ui/ThemeToggle';

interface NavChild {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Overview', href: '/about#overview' },
      { label: 'Vision & Mission', href: '/about#vision-mission' },
      { label: 'Capabilities', href: '/about#capabilities' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Power Generation', href: '/services/power-gen' },
      { label: 'Oil & Gas', href: '/services/oil-gas' },
      { label: 'Renewable Energy', href: '/services/ev-solar' },
      { label: 'Industrial Electrical', href: '/services/industrial-electrical' },
      { label: 'Marine & Offshore', href: '/services/marine-auto' },
      { label: 'Turbine Lifecycle', href: '/services/turbine-services' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Turbines & Generators', href: '/products#turbines-generators' },
      { label: 'Switchgear & Panels', href: '/products#switchgear-panels' },
      { label: 'Marine Systems', href: '/products#marine-systems' },
      { label: 'Solar PV & Inverters', href: '/products#solar-pv' },
      { label: 'EV Charging Stations', href: '/products#ev-charging' },
      { label: 'Industrial Valves', href: '/products#industrial-valves' },
      { label: 'PLC & SCADA', href: '/products#plc-scada' },
      { label: 'Turbine Spare Parts', href: '/products#turbine-spares' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenMobileSub(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-md border-b border-gray-100 dark:border-gray-800'
          : 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm'
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-36 overflow-hidden">
            <Image
              src="/tamkeen-logo.jpeg"
              alt="TAMKEEN Logo"
              fill
              className="object-contain object-left"
              priority
              sizes="144px"
            />
          </div>
        </Link>

        {/* ── Desktop links ── */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="relative flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors hover:text-brand-blue dark:hover:text-brand-green"
              >
                {link.label}
                {link.children && (
                  <FaChevronDown
                    className={`text-[10px] transition-transform duration-200 ${
                      openDropdown === link.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
                <span
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-300"
                  style={{
                    background: 'linear-gradient(to right,#1565C0,#22C55E)',
                    opacity: openDropdown === link.label ? 1 : 0,
                  }}
                />
              </Link>

              {/* ── Desktop dropdown ── */}
              {link.children && (
                <div
                  className={`absolute left-0 top-full mt-1 w-56 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg transition-all duration-200 ${
                    openDropdown === link.label
                      ? 'visible translate-y-0 opacity-100'
                      : 'invisible -translate-y-1 opacity-0'
                  }`}
                >
                  <div className="p-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:bg-gradient-to-r hover:from-brand-blue/10 hover:to-brand-green/10 hover:text-brand-blue dark:hover:text-brand-green"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* ── Desktop right actions ── */}
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="btn-brand text-sm"
          >
            Get a Quote
          </Link>
        </div>

        {/* ── Mobile right actions ── */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700
                       text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-green
                       transition-colors"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`overflow-hidden transition-all duration-300 lg:hidden
                    bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800
                    ${menuOpen ? 'max-h-[600px]' : 'max-h-0'}`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.children ? (
                <>
                  <button
                    onClick={() => setOpenMobileSub(openMobileSub === link.label ? null : link.label)}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium
                               text-gray-700 dark:text-gray-200
                               hover:bg-gradient-to-r hover:from-brand-blue/10 hover:to-brand-green/10
                               hover:text-brand-blue dark:hover:text-brand-green transition-all"
                  >
                    {link.label}
                    <FaChevronDown
                      className={`text-[10px] transition-transform duration-200 ${
                        openMobileSub === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openMobileSub === link.label ? 'max-h-80' : 'max-h-0'
                    }`}
                  >
                    <ul className="ml-3 border-l-2 border-gray-100 dark:border-gray-800 pl-3 py-1">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={closeAll}
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 dark:text-gray-400
                                       hover:text-brand-blue dark:hover:text-brand-green transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={closeAll}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium
                             text-gray-700 dark:text-gray-200
                             hover:bg-gradient-to-r hover:from-brand-blue/10 hover:to-brand-green/10
                             hover:text-brand-blue dark:hover:text-brand-green transition-all"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              onClick={closeAll}
              className="btn-brand block text-center text-sm"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
