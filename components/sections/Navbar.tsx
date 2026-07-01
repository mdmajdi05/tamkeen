'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Blog',    href: '/blog' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-gray-700 dark:text-gray-200
                           transition-colors hover:text-brand-blue dark:hover:text-brand-green
                           after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0
                           after:rounded-full after:transition-all after:duration-300
                           hover:after:w-full"
                style={{
                  ['--tw-after-bg' as string]: 'linear-gradient(to right, #1565C0, #22C55E)',
                }}
              >
                <span>{link.label}</span>
                <span
                  className="absolute bottom-[-4px] left-0 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ background: 'linear-gradient(to right,#1565C0,#22C55E)' }}
                />
              </Link>
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
        className={`overflow-hidden transition-all duration-300 lg:hidden
                    bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800
                    ${menuOpen ? 'max-h-80' : 'max-h-0'}`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium
                           text-gray-700 dark:text-gray-200
                           hover:bg-gradient-to-r hover:from-brand-blue/10 hover:to-brand-green/10
                           hover:text-brand-blue dark:hover:text-brand-green transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
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
