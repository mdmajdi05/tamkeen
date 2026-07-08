'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { useDataContext } from '@/context/DataContext';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Testimonials() {
  const { data } = useDataContext();
  const testimonials = data.testimonials;
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="section-padding bg-white dark:bg-gray-900 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Voices"
          title="Trusted by"
          titleHighlight="Industry Leaders"
          subtitle="Our performance is measured by the uptime of your operations and the satisfaction of your teams."
        />

        <div className="relative">
          {/* Background decorative quote */}
          <div
            className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 text-[8rem] font-extrabold leading-none select-none opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(135deg,#1565C0,#22C55E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            &ldquo;
          </div>

          {/* Card */}
          <div
            className="relative overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-8 md:p-12"
          >
            {/* Top gradient accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{ background: 'linear-gradient(to right,#1565C0,#22C55E)' }}
            />

            <FaQuoteLeft
              className="mb-6 text-3xl"
              style={{ color: '#1565C0', opacity: 0.4 }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="min-h-[140px]"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <FaStar key={i} className="text-sm text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 md:text-xl">
                  &ldquo;{testimonials[active].text}&rdquo;
                </p>

                <div className="mt-7 flex items-center gap-4">
                  {/* Avatar initial */}
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white"
                    style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
                  >
                    {testimonials[active].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {testimonials[active].name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonials[active].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? '2rem' : '0.5rem',
                      background: i === active ? 'linear-gradient(to right,#1565C0,#22C55E)' : '#D1D5DB',
                    }}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700
                             text-gray-500 dark:text-gray-400 transition-all hover:scale-110"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg,#1565C0,#22C55E)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'white';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'transparent';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = '';
                    (e.currentTarget as HTMLButtonElement).style.color = '';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '';
                  }}
                >
                  <FaChevronLeft className="text-xs" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700
                             text-gray-500 dark:text-gray-400 transition-all hover:scale-110"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg,#1565C0,#22C55E)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'white';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'transparent';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = '';
                    (e.currentTarget as HTMLButtonElement).style.color = '';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '';
                  }}
                >
                  <FaChevronRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
