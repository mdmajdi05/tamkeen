'use client';

import { useTheme } from '@/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="relative flex h-9 w-16 items-center rounded-full border border-gray-200 dark:border-gray-700
                 bg-gray-100 dark:bg-gray-800 p-1 transition-all duration-300
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
    >
      {/* Track fill */}
      <span
        className="absolute inset-0 rounded-full transition-all duration-300"
        style={{
          background:
            theme === 'dark'
              ? 'linear-gradient(135deg, #1565C0 0%, #22C55E 100%)'
              : 'transparent',
          opacity: theme === 'dark' ? 0.15 : 0,
        }}
      />
      {/* Knob */}
      <span
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full shadow-sm
                    transition-all duration-300
                    ${theme === 'dark'
                      ? 'translate-x-7 bg-gradient-to-br from-brand-blue to-brand-green text-white'
                      : 'translate-x-0 bg-white text-yellow-500'
                    }`}
      >
        {theme === 'dark' ? <FaMoon className="text-xs" /> : <FaSun className="text-xs" />}
      </span>
    </button>
  );
}
