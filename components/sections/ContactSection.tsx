'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { useDataContext } from '@/context/DataContext';

export default function ContactSection() {
  const { data } = useDataContext();
  const { footerLinks } = data;

  return (
    <section className="section-padding bg-white dark:bg-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-14"
          style={{ background: 'linear-gradient(135deg,#1565C0 0%,#22C55E 100%)' }}
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute top-1/2 left-1/3 h-32 w-32 -translate-y-1/2 rounded-full bg-white/5" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative text-sm font-semibold uppercase tracking-widest text-white/70"
          >
            Start Your Project Today
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Ready to Power Your Next
            <br className="hidden sm:block" /> Big Project?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80"
          >
            Our engineering team is available 24/7 to discuss your requirements and deliver a
            detailed technical proposal — at no cost.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold
                         transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ color: '#1565C0' }}
            >
              Get a Free Proposal
              <FaArrowRight className="text-xs" />
            </Link>
            <a
              href={`tel:${footerLinks.phone}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-8 py-3.5 text-sm font-bold text-white
                         transition-all duration-300 hover:bg-white/15 hover:border-white active:scale-95"
            >
              <FaPhone className="text-xs" />
              {footerLinks.phone}
            </a>
          </motion.div>
        </motion.div>

        {/* Quick contact info strip */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { Icon: FaPhone,         label: 'Call Us',       value: footerLinks.phone,   href: `tel:${footerLinks.phone}` },
            { Icon: FaEnvelope,      label: 'Email Us',      value: footerLinks.email,   href: `mailto:${footerLinks.email}` },
            { Icon: FaMapMarkerAlt,  label: 'Visit Us',      value: footerLinks.address, href: '#' },
          ].map(({ Icon, label, value, href }) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4 rounded-xl border border-gray-100 dark:border-gray-800
                         bg-gray-50 dark:bg-gray-950 px-6 py-5
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
            >
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white"
                style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
              >
                <Icon className="text-sm" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                  {label}
                </p>
                <p className="mt-0.5 text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-brand-blue dark:group-hover:text-brand-green transition-colors">
                  {value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
