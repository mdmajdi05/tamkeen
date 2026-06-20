'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaGlobeAsia, FaHeadset, FaProjectDiagram } from 'react-icons/fa';
import { useDataContext } from '@/context/DataContext';
import SectionHeader from '@/components/ui/SectionHeader';

const icons   = [FaShieldAlt, FaGlobeAsia, FaHeadset, FaProjectDiagram];
const bgBlobs = [
  'from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30',
  'from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30',
  'from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30',
  'from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30',
];

export default function WhyChoose() {
  const { data } = useDataContext();

  return (
    <section className="section-padding bg-white dark:bg-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why TAMKEEN"
          title="Principles That"
          titleHighlight="Never Bend"
          subtitle="Every decision we make is governed by safety, precision, and your operational continuity."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.whyChoose.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${bgBlobs[i]}
                            border border-gray-100 dark:border-gray-800 p-8 text-center
                            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                {/* Glow blob */}
                <div
                  className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(135deg,rgba(21,101,192,0.3),rgba(34,197,94,0.3))' }}
                />

                {/* Icon */}
                <div
                  className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md
                             transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
                >
                  <Icon className="text-2xl" />
                </div>

                <h3 className="mb-3 text-base font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
