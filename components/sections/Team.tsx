'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useDataContext } from '@/context/DataContext';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Team() {
  const { data } = useDataContext();

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our People"
          title="The Experts Behind"
          titleHighlight="Every Project"
          subtitle="A team of seasoned engineers, procurement specialists, and project managers united by one goal — your operational success."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900
                         border border-gray-100 dark:border-gray-800 shadow-sm
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Top gradient bar */}
              <span
                className="block h-1 w-full"
                style={{ background: 'linear-gradient(to right,#1565C0,#22C55E)' }}
              />

              {/* Photo */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Social overlay on hover */}
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-transparent to-transparent
                                opacity-0 transition-opacity duration-300 group-hover:opacity-100 pb-4 gap-3">
                  <a
                    href={member.linkedin}
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm
                               transition-all hover:bg-brand-blue hover:scale-110"
                  >
                    <FaLinkedin className="text-sm" />
                  </a>
                  <a
                    href={`mailto:contact@tamkeen.com`}
                    aria-label="Email"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm
                               transition-all hover:bg-brand-green hover:scale-110"
                  >
                    <FaEnvelope className="text-sm" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p
                  className="mt-0.5 text-xs font-semibold uppercase tracking-wide"
                  style={{ color: '#1565C0' }}
                >
                  {member.role}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
