'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { useDataContext } from '@/context/DataContext';

const highlights = [
  'ISO 9001:2015 & ISO 14001 Certified',
  '15+ Years of Industry Excellence',
  'Global OEM Sourcing Network',
  '24 / 7 Engineering Support Hotline',
];

export default function AboutPreview() {
  const { data } = useDataContext();
  const { title, description } = data.about;

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

          {/* ── Left: image collage ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Primary image */}
            <div className="relative h-80 overflow-hidden rounded-3xl shadow-2xl sm:h-96">
              <Image
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=900&q=80"
                alt="TAMKEEN engineering operations"
                fill
                className="object-cover"
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/30 to-transparent" />
            </div>

            {/* Secondary floating image */}
            <div
              className="absolute -bottom-6 -right-6 h-40 w-52 overflow-hidden rounded-2xl border-4 border-white dark:border-gray-900 shadow-xl sm:h-48 sm:w-64"
            >
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80"
                alt="Solar energy project"
                fill
                className="object-cover"
                unoptimized
                sizes="256px"
              />
            </div>

            {/* Experience badge */}
            <div
              className="absolute -top-5 -left-5 flex h-24 w-24 flex-col items-center justify-center rounded-2xl text-white shadow-xl"
              style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
            >
              <span className="text-2xl font-extrabold leading-none">15+</span>
              <span className="mt-1 text-center text-[9px] font-semibold uppercase leading-tight tracking-wide">
                Years<br />of Trust
              </span>
            </div>
          </motion.div>

          {/* ── Right: text ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: '#1565C0' }}
            >
              Who We Are
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl leading-tight">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {description}
            </p>

            {/* Highlights */}
            <ul className="mt-7 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <FaCheckCircle
                    className="flex-shrink-0 text-base"
                    style={{ color: '#22C55E' }}
                  />
                  {h}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/about" className="btn-brand">
                Our Story
                <FaArrowRight className="text-xs" />
              </Link>
              <Link href="/services" className="btn-outline-brand">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
