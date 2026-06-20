'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

function parseValue(raw: string): { num: number; prefix: string; suffix: string } {
  const match = raw.match(/^([^0-9]*)([0-9.]+)([^0-9]*)$/);
  if (!match) return { num: 0, prefix: '', suffix: raw };
  return {
    prefix: match[1] || '',
    num: parseFloat(match[2]),
    suffix: match[3] || '',
  };
}

export default function AnimatedCounter({ value, duration = 2000 }: AnimatedCounterProps) {
  const { num, prefix, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const isFloat = num % 1 !== 0;
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = eased * num;
      setDisplay(isFloat ? parseFloat(currentVal.toFixed(1)) : Math.floor(currentVal));
      if (current >= steps) {
        clearInterval(timer);
        setDisplay(num);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [inView, num, duration]);

  const formatted = num % 1 !== 0 ? display.toFixed(1) : display.toString();

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
