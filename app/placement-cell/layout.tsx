import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Placements | 95% Record 2024-25 | JKKN Pharmacy',
  description: 'JKKN College of Pharmacy achieves 95% placements. Top pharmaceutical recruiters, salary packages, training and student success stories.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/placement-cell/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/placement-cell/',
    title: 'Placements | 95% Record 2024-25 | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy achieves 95% placements. Top pharmaceutical recruiters, salary packages, training and student success stories.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Placements | 95% Record 2024-25 | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy achieves 95% placements. Top pharmaceutical recruiters, salary packages, training and student success stories.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function PlacementCellLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
