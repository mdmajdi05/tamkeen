'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-950 px-6 text-center">
      <div
        className="mb-6 text-8xl font-extrabold bg-clip-text text-transparent"
        style={{ backgroundImage: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
      >
        Oops!
      </div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500 dark:text-gray-400">
        An unexpected error occurred. Please try again or return home.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white
                     transition-all hover:scale-105 hover:shadow-lg active:scale-95"
          style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-3.5 text-sm font-bold
                     transition-all hover:scale-105 active:scale-95"
          style={{ borderColor: '#1565C0', color: '#1565C0' }}
        >
          Return Home <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </main>
  );
}
