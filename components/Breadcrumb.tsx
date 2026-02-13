'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  name: string
  url?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  // Generate BreadcrumbList JSON-LD schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url && { "item": `https://pharmacy.jkkn.ac.in${item.url}` })
    }))
  };

  return (
    <>
      {/* JSON-LD Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visible Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 pb-3">
          <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mx-1.5 sm:mx-2 text-gray-400" />
                )}
                {index === 0 && item.url ? (
                  <Link
                    href={item.url}
                    className="text-[#006837] hover:text-[#7cb983] transition-colors flex items-center gap-1.5"
                  >
                    <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <span className="text-gray-600 font-medium flex items-center gap-1.5">
                    {index === 0 && <Home className="w-3 h-3 sm:w-4 sm:h-4" />}
                    <span>{item.name}</span>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
