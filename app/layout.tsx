import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import { DataProvider } from '@/context/DataContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { OrganizationSchema, LocalBusinessSchema } from '@/components/JsonLd';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tamkeen-es.com'),
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
    'engineering Oman', 'industrial infrastructure', 'PLC SCADA',
  ],
  authors: [{ name: 'TAMKEEN' }],
  creator: 'TAMKEEN',
  publisher: 'TAMKEEN',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: 'TAMKEEN | Energy Solutions & General Trading',
    description: 'Turnkey industrial solutions with uncompromised safety and precision — power distribution, marine automation, EV infrastructure.',
    url: 'https://tamkeen-es.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'TAMKEEN',
      images: [
        {
          url: '/tamkeen-logo.jpeg',
          width: 1200,
          height: 630,
          alt: 'TAMKEEN — Energy Solutions & General Trading',
        },
      ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAMKEEN | Energy Solutions & General Trading',
    description: 'Turnkey industrial solutions with uncompromised safety and precision — power distribution, marine automation, EV infrastructure.',
    site: '@tamkeenes',
    creator: '@tamkeenes',
    images: ['/tamkeen-logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tamkeen-es.com',
  },
  icons: {
    icon: [
      { url: '/tamkeen-logo.jpeg', sizes: 'any', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/tamkeen-logo.jpeg', sizes: '180x180', type: 'image/jpeg' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  other: {
    'msapplication-TileColor': '#1565C0',
    'theme-color': '#1565C0',
  },
  category: 'engineering',
  classification: 'Industrial Engineering & Energy Solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <OrganizationSchema />
        <LocalBusinessSchema />
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
