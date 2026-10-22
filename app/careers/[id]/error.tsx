'use client';

import { startTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

interface CareerDetailErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function CareerDetailError({ reset }: CareerDetailErrorProps) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="mb-3 text-2xl md:text-3xl font-bold text-[#0b6d41]">We couldn&apos;t load this opening</h1>
        <p className="mb-8 text-[#032816]">
          The job listing service is not responding right now. Please try again in a few minutes.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() =>
              startTransition(() => {
                router.refresh();
                reset();
              })
            }
            className="inline-flex min-h-[44px] items-center rounded-lg bg-[#0b6d41] px-6 font-semibold text-white transition-colors hover:bg-[#085032]"
          >
            Try again
          </button>
          <Link
            href="/careers/"
            className="inline-flex min-h-[44px] items-center font-semibold text-[#0b6d41] hover:underline"
          >
            All current openings
          </Link>
        </div>
      </div>
    </div>
  );
}
