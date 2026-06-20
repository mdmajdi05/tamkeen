'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaBolt, FaShip, FaMicrochip, FaSolarPanel, FaOilCan, FaCogs,
} from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import { useDataContext } from '@/context/DataContext';
import SectionHeader from '@/components/ui/SectionHeader';
import type { Service } from '@/lib/types';

const iconMap: Record<string, React.ElementType> = {
  FaBolt, FaShip, FaMicrochip, FaSolarPanel, FaOilCan, FaCogs,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] || FaBolt;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <Link href={`/services/${service.id}`} className="group block h-full">
        <div
          className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100
                     dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm
                     transition-all duration-350 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Top gradient border on hover */}
          <span
            className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 rounded-full
                       transition-transform duration-500 group-hover:scale-x-100"
            style={{ background: 'linear-gradient(to right,#1565C0,#22C55E)' }}
          />

          {/* ── Service image ── */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-350 group-hover:opacity-100" />

            {/* Icon badge */}
            <div
              className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg"
              style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
            >
              <Icon className="text-lg" />
            </div>
          </div>

          {/* ── Card body ── */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white transition-colors group-hover:text-brand-blue dark:group-hover:text-brand-green">
              {service.title}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {service.description}
            </p>

            <div
              className="mt-5 flex items-center gap-2 text-sm font-semibold transition-colors group-hover:gap-3"
              style={{ color: '#1565C0' }}
            >
              <span>Learn More</span>
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesGrid() {
  const { data } = useDataContext();

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Comprehensive Industrial"
          titleHighlight="Energy Solutions"
          subtitle="Six specialized domains. One integrated partner. Zero compromise on quality or safety."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/services" className="btn-brand inline-flex">
            View All Services
            <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
