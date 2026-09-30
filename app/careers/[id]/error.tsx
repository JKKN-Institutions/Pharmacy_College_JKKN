'use client';

import Link from 'next/link';
import Header from '@/components/Header';

interface CareerDetailErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function CareerDetailError({ reset }: CareerDetailErrorProps) {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="mb-3 text-2xl md:text-3xl font-bold text-[#006837]">We couldn&apos;t load this opening</h1>
        <p className="mb-8 text-[#002309]">
          The job listing service is not responding right now. Please try again in a few minutes.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-[44px] items-center rounded-lg bg-[#7cb983] px-6 font-semibold text-white transition-colors hover:bg-[#6ba872]"
          >
            Try again
          </button>
          <Link
            href="/careers/"
            className="inline-flex min-h-[44px] items-center font-semibold text-[#006837] hover:underline"
          >
            All current openings
          </Link>
        </div>
      </div>
    </div>
  );
}
