/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors extracted from TAMKEEN logo (Blue → Green gradient)
        'brand-blue':       '#1565C0',
        'brand-blue-dark':  '#0D47A1',
        'brand-blue-light': '#42A5F5',
        'brand-green':      '#22C55E',
        'brand-green-dark': '#15803D',
        'brand-green-light':'#4ADE80',

        // Semantic surface tokens (light / dark)
        background:        '#FFFFFF',
        surface:           '#F8F9FA',
        'surface-alt':     '#EFF2F7',
        'border-subtle':   '#E5E7EB',
        'text-primary':    '#111827',
        'text-secondary':  '#4B5563',
        'text-muted':      '#9CA3AF',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient':      'linear-gradient(135deg, #1565C0 0%, #22C55E 100%)',
        'brand-gradient-r':    'linear-gradient(to right, #1565C0, #22C55E)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(21,101,192,0.08) 0%, rgba(34,197,94,0.08) 100%)',
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'slide-up':   'slideUp 0.7s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
