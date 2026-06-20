'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { useDataContext } from '@/context/DataContext';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ProjectsShowcase() {
  const { data } = useDataContext();

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Projects That"
          titleHighlight="Moved Industries"
          subtitle="Real deployments. Measurable impact. Delivered on time, every time."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {data.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900
                         border border-gray-100 dark:border-gray-800 shadow-sm
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Location pill */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 dark:bg-gray-900/90 px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200 backdrop-blur-sm">
                  <FaMapMarkerAlt
                    className="text-[10px]"
                    style={{ color: '#22C55E' }}
                  />
                  {project.location}
                </div>

                {/* Number badge */}
                <span
                  className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full text-sm font-extrabold text-white"
                  style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>

                <div
                  className="mt-5 flex items-center gap-2 text-xs font-semibold transition-all group-hover:gap-3"
                  style={{ color: '#1565C0' }}
                >
                  <span>View Details</span>
                  <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Bottom gradient bar */}
              <span
                className="block h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: 'linear-gradient(to right,#1565C0,#22C55E)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
