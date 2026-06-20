'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn('mb-14', align === 'center' ? 'text-center' : 'text-left', className)}
    >
      {eyebrow && (
        <motion.p
          variants={item}
          className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
          style={{ color: '#1565C0' }}
        >
          <span
            className="inline-block h-0.5 w-6 rounded-full"
            style={{ background: 'linear-gradient(to right,#1565C0,#22C55E)' }}
          />
          {eyebrow}
          <span
            className="inline-block h-0.5 w-6 rounded-full"
            style={{ background: 'linear-gradient(to right,#22C55E,#1565C0)' }}
          />
        </motion.p>
      )}

      <motion.h2
        variants={item}
        className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
      >
        {title}{' '}
        {titleHighlight && (
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
          >
            {titleHighlight}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={item}
          className={cn(
            'mt-4 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-gray-400 lg:text-lg',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
