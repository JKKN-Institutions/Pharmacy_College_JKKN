'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: string;
  image: string;
  alt: string;
  title?: string;
}

interface Props {
  albumName: string;
  albumDescription?: string | null;
  items: CarouselItem[];
}

const PER_PAGE = 3;

export default function GalleryCarousel({ albumName, albumDescription, items }: Props) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(items.length / PER_PAGE);
  const visible = items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div className="mb-12">
      {/* Album heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#002309] mb-2">
        {albumName}
      </h2>
      {albumDescription && (
        <p className="text-sm text-gray-500 mb-4">{albumDescription}</p>
      )}

      {/* Carousel row */}
      <div className="relative flex items-center gap-2 sm:gap-4">
        {/* Prev arrow */}
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-700 hover:bg-gray-900 disabled:bg-gray-300 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Images */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {visible.map((item) => (
            <div key={item.id} className="flex flex-col gap-1">
              {item.title && (
                <p className="text-xs text-gray-500 truncate">{item.title}</p>
              )}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-200">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-700 hover:bg-gray-900 disabled:bg-gray-300 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === page ? 'bg-[#0F6B3E]' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
