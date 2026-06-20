import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import { DataProvider } from '@/context/DataContext';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'TAMKEEN | Energy Solutions & General Trading',
    template: '%s | TAMKEEN',
  },
  description:
    'TAMKEEN is a premier engineering solutions provider specializing in power distribution, marine automation, and industrial infrastructure. Serving 12 countries with 15+ years of excellence.',
  keywords: [
    'energy solutions', 'power distribution', 'marine automation',
    'turbine services', 'industrial electrical', 'EV charging',
    'solar integration', 'oil gas equipment', 'TAMKEEN',
  ],
  openGraph: {
    title: 'TAMKEEN | Energy Solutions & General Trading',
    description: 'Turnkey industrial solutions with uncompromised safety and precision.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TAMKEEN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAMKEEN | Energy Solutions & General Trading',
    description: 'Turnkey industrial solutions with uncompromised safety and precision.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <Script src="/config.js" strategy="beforeInteractive" />
        <ThemeProvider>
          <DataProvider>
            {children}
          </DataProvider>
        </ThemeProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
