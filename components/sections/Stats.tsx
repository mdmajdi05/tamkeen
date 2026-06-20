'use client';

import { motion } from 'framer-motion';
import { useDataContext } from '@/context/DataContext';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function Stats() {
  const { data } = useDataContext();

  return (
    <section className="relative overflow-hidden py-16">
      {/* Gradient background strip */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg,#1565C0 0%,#22C55E 100%)' }}
      />
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {data.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-md">
                <AnimatedCounter value={stat.value} />
              </span>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-white/40" />
              <span className="mt-2 text-sm font-medium uppercase tracking-widest text-white/80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
