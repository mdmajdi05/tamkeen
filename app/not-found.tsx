import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist or has been moved. Return to TAMKEEN homepage.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-950 px-6 text-center">
      <div
        className="mb-6 text-8xl font-extrabold bg-clip-text text-transparent"
        style={{ backgroundImage: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
      >
        404
      </div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Page Not Found</h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500 dark:text-gray-400">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white
                   transition-all hover:scale-105 hover:shadow-lg active:scale-95"
        style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
      >
        Return Home
        <FaArrowRight className="text-xs" />
      </Link>
    </main>
  );
}
