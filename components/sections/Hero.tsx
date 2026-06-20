'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import { useDataContext } from '@/context/DataContext';

const AUTOPLAY_MS = 5500;

export default function Hero() {
  const { data } = useDataContext();
  const slides = data.heroSlides;
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ─── Background images (cross-fade) ─── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      </AnimatePresence>

      {/* ─── Gradient overlay ─── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* ─── Slide content ─── */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + '-text'}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              {/* Tag badge */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
                style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />
                {slide.tag}
              </motion.span>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {slide.headline}
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
              >
                {slide.subheadline}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.55 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  href={slide.href}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white
                             transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                  style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
                >
                  {slide.cta}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5
                             text-sm font-bold text-white backdrop-blur-sm
                             transition-all duration-300 hover:bg-white/15 hover:border-white active:scale-95"
                >
                  <FaPlay className="text-xs" />
                  Talk to an Expert
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ─── Arrow navigation ─── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center
                   rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm
                   transition-all duration-200 hover:scale-110 sm:left-6"
        style={{ ['--hover-bg' as string]: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg,#1565C0,#22C55E)';
          (e.currentTarget as HTMLButtonElement).style.border = 'transparent';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)';
          (e.currentTarget as HTMLButtonElement).style.border = '1px solid rgba(255,255,255,0.3)';
        }}
      >
        <FaChevronLeft className="text-sm" />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center
                   rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm
                   transition-all duration-200 hover:scale-110 sm:right-6"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg,#1565C0,#22C55E)';
          (e.currentTarget as HTMLButtonElement).style.border = 'transparent';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)';
          (e.currentTarget as HTMLButtonElement).style.border = '1px solid rgba(255,255,255,0.3)';
        }}
      >
        <FaChevronRight className="text-sm" />
      </button>

      {/* ─── Dot indicators ─── */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-2.5 overflow-hidden rounded-full transition-all duration-400"
            style={{
              width: i === current ? '2.5rem' : '0.625rem',
              background: i === current
                ? 'linear-gradient(to right,#1565C0,#22C55E)'
                : 'rgba(255,255,255,0.4)',
            }}
          >
            {i === current && (
              <span
                className="absolute inset-0 origin-left animate-[grow_5.5s_linear_forwards]"
                style={{ background: 'rgba(255,255,255,0.3)' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ─── Slide counter ─── */}
      <div className="absolute bottom-8 right-6 z-20 font-mono text-xs text-white/50">
        <span className="text-white font-bold">{String(current + 1).padStart(2, '0')}</span>
        {' / '}
        {String(slides.length).padStart(2, '0')}
      </div>

      {/* ─── Scroll cue ─── */}
      <div className="absolute bottom-8 left-6 z-20 hidden flex-col items-center gap-2 sm:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40 rotate-90 origin-center mb-6">
          Scroll
        </span>
        <span
          className="h-10 w-px animate-pulse"
          style={{ background: 'linear-gradient(to bottom,rgba(255,255,255,0.5),transparent)' }}
        />
      </div>
    </section>
  );
}
