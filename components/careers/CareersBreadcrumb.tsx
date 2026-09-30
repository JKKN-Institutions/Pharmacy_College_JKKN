import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import JsonLd from '@/components/careers/JsonLd';
import { SITE_URL } from '@/lib/careers/config';

export interface CareersCrumb {
  name: string;
  /** Site-relative path with trailing slash, e.g. "/careers/". */
  path: string;
}

interface CareersBreadcrumbProps {
  /** Crumbs after Home; the last one is the current page. */
  items: CareersCrumb[];
}

export default function CareersBreadcrumb({ items }: CareersBreadcrumbProps) {
  const crumbs: CareersCrumb[] = [{ name: 'Home', path: '/' }, ...items];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 pb-3">
          <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm">
            {crumbs.map((crumb, index) => (
              <li key={crumb.path} className="flex items-center min-w-0">
                {index > 0 && (
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mx-1.5 sm:mx-2 text-gray-400" aria-hidden="true" />
                )}
                {index === 0 ? (
                  <Link
                    href="/"
                    className="text-[#006837] hover:text-[#7cb983] transition-colors flex items-center gap-1.5"
                  >
                    <Home className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                    <span>{crumb.name}</span>
                  </Link>
                ) : (
                  <span
                    className="text-gray-600 font-medium break-words"
                    aria-current={index === crumbs.length - 1 ? 'page' : undefined}
                  >
                    {crumb.name}
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
