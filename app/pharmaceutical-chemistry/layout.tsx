import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Pharmaceutical Chemistry Colleges in Tamilnadu | JKKN',
  description: 'Explore pharmaceutical chemistry colleges in Tamilnadu. JKKN offers M.Pharm in Pharmaceutical Chemistry — drug design & research labs. Admissions 2026-27!',
  keywords: [
    'pharmaceutical chemistry colleges in tamilnadu',
    'pharmaceutical courses in tamilnadu',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmaceutical-chemistry',
  },
  openGraph: {
    title: 'Pharmaceutical Chemistry Colleges in Tamilnadu | JKKN',
    description: 'Explore pharmaceutical chemistry colleges in Tamilnadu. JKKN offers M.Pharm in Pharmaceutical Chemistry — drug design & research labs. Admissions 2026-27!',
    url: 'https://pharmacy.jkkn.ac.in/pharmaceutical-chemistry',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JKKN - M.Pharm Pharmaceutical Chemistry Programme',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmaceutical Chemistry Colleges in Tamilnadu | JKKN',
    description: 'Explore pharmaceutical chemistry colleges in Tamilnadu. JKKN offers M.Pharm in Pharmaceutical Chemistry — drug design & research labs. Admissions 2026-27!',
    images: ['/og-image.jpg'],
  },
}

export default function PharmaceuticalChemistryLayout({
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
