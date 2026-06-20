'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useDataContext } from '@/context/DataContext';
import SectionHeader from '@/components/ui/SectionHeader';

export default function FAQ() {
  const { data } = useDataContext();
  const faqs = data.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Common"
          titleHighlight="Questions Answered"
          subtitle="Straight answers to what our clients ask most. No jargon, no runaround."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`overflow-hidden rounded-xl border transition-all duration-200
                ${openIndex === i
                  ? 'border-transparent shadow-md'
                  : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'
                }`}
              style={openIndex === i ? {
                background: 'white',
                borderImage: 'linear-gradient(135deg,#1565C0,#22C55E) 1',
                boxShadow: '0 4px 24px rgba(21,101,192,0.10)',
              } : {}}
            >
              {/* When open, wrap in a div with gradient border */}
              <div
                className={`rounded-xl`}
                style={openIndex === i
                  ? { background: 'white', boxShadow: 'inset 0 0 0 1.5px #1565C0' }
                  : {}}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  className="flex w-full items-center justify-between px-6 py-5 text-left
                             bg-white dark:bg-gray-900 rounded-xl"
                >
                  <span className="pr-4 text-sm font-semibold text-gray-900 dark:text-white sm:text-base">
                    {faq.q}
                  </span>
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white transition-all duration-300"
                    style={{
                      background: openIndex === i
                        ? 'linear-gradient(135deg,#1565C0,#22C55E)'
                        : '#E5E7EB',
                      color: openIndex === i ? 'white' : '#6B7280',
                    }}
                  >
                    {openIndex === i
                      ? <FaMinus className="text-xs" />
                      : <FaPlus className="text-xs" />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-xl px-6 pb-5 pt-4">
                        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
