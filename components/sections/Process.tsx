'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaDraftingCompass, FaTools, FaHeadset } from 'react-icons/fa';
import { useDataContext } from '@/context/DataContext';
import SectionHeader from '@/components/ui/SectionHeader';

const stepIcons = [FaSearch, FaDraftingCompass, FaTools, FaHeadset];

export default function Process() {
  const { data } = useDataContext();

  return (
    <section className="section-padding bg-white dark:bg-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="How We Work"
          title="Our Proven"
          titleHighlight="4-Step Process"
          subtitle="From first consultation to final commissioning — a seamless, transparent workflow built on decades of engineering excellence."
        />

        <div className="relative">
          {/* Connecting dashed line (desktop) */}
          <div
            className="absolute top-10 left-[12.5%] right-[12.5%] hidden h-0.5 lg:block"
            style={{
              background:
                'repeating-linear-gradient(to right,#1565C0 0,#1565C0 12px,transparent 12px,transparent 24px)',
              opacity: 0.25,
            }}
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {data.process.map((p, i) => {
              const Icon = stepIcons[i % stepIcons.length];
              return (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className="relative mb-6">
                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg
                                 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
                    >
                      <Icon className="text-2xl" />
                    </div>
                    {/* Step number badge */}
                    <span
                      className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full
                                 border-2 border-white dark:border-gray-900 text-xs font-extrabold text-white"
                      style={{ background: '#1565C0' }}
                    >
                      {p.step}
                    </span>
                  </div>

                  <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
