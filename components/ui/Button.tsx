'use client';

import React, { useRef, useState, MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  magnetic = false,
  className,
  children,
  onMouseMove,
  onMouseLeave,
  style,
  ...props
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLButtonElement>) {
    if (!magnetic || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.25,
    });
    onMouseMove?.(e);
  }

  function handleMouseLeave(e: MouseEvent<HTMLButtonElement>) {
    setOffset({ x: 0, y: 0 });
    onMouseLeave?.(e);
  }

  const base =
    'relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 active:scale-95';

  const variants = {
    primary: 'text-white hover:scale-105 hover:shadow-lg',
    outline: 'border-2 text-brand-blue border-brand-blue hover:text-white hover:border-transparent hover:scale-105',
    ghost:   'text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-brand-blue hover:text-brand-blue dark:hover:text-brand-green',
  };

  const sizes = {
    sm: 'text-sm px-5 py-2.5',
    md: 'text-sm px-7 py-3.5',
    lg: 'text-base px-9 py-4',
  };

  const gradientStyle =
    variant === 'primary'
      ? { background: 'linear-gradient(135deg,#1565C0,#22C55E)' }
      : variant === 'outline'
      ? {}
      : {};

  return (
    <button
      ref={btnRef}
      className={cn(base, variants[variant], sizes[size], className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...gradientStyle,
        transform: magnetic ? `translate(${offset.x}px, ${offset.y}px)` : undefined,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
