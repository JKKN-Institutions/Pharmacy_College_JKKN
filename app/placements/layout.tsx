import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { SpeakableWebPageSchema, FaqSchema } from '@/components/SchemaOrg'
import { PLACEMENT_FAQS } from '@/lib/placement-faqs'

// placementFaqs moved to lib/placement-faqs.ts on 2026-09-18 (single source shared with page.tsx).
// The recruiter ItemList that stood here named 14 companies with no source and is gone.

export const metadata: Metadata = {
  title: 'Placements — JKKN College of Pharmacy | 78% Placed 2024-25, NIRF-filed Medians',
  description: 'JKKN College of Pharmacy placements: 78% of placement-seeking graduates placed in 2024-25 (97 of 124, NIRF 2026 submission), median salaries by programme, training programmes and internships.',
  keywords: [
    'pharmacy college placements tamil nadu',
    'jkkn pharmacy placements',
    'b pharm placement salary',
    'best pharmacy college placements namakkal',
    'pharmacy college placement record',
    'b.pharm placements in tamil nadu',
    'm.pharm placements',
    'pharm.d placements',
    'pharmacy campus recruitment',
    'pharmaceutical company recruitment pharmacy college',
    'pharmacy college highest package tamil nadu',
    'pharmacy graduate salary india',
    'pharmacy placement training',
    'top pharmacy recruiters india',
    'jkkn college placement cell',
    'pharmacy college with best placements',
    'b pharm job opportunities',
    'pharmacy college placements 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/placements/',
  },
  openGraph: {
    title: 'Placements — JKKN College of Pharmacy | 78% Placement Rate 2024-25',
    description: 'JKKN College of Pharmacy placements: 78% of placement-seeking graduates placed in 2024-25 (NIRF 2026 submission), median salaries by programme and training programmes.',
    url: 'https://pharmacy.jkkn.ac.in/placements/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy — Placements & Recruitment',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Placements — JKKN College of Pharmacy | 78% Placement Rate 2024-25',
    description: 'JKKN College of Pharmacy placements: 78% of placement-seeking graduates placed in 2024-25 (NIRF 2026 submission), median salaries by programme and training programmes.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
  other: {
    'last-modified': '2026-03-26',
  },
}

export default function PlacementsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SpeakableWebPageSchema
        name="Placements — JKKN College of Pharmacy"
        description="JKKN College of Pharmacy placements: 97 of 124 placement-seeking graduates placed in 2024-25 (78%), median salaries Rs 4,40,000 (B.Pharm), Rs 6,75,000 (M.Pharm), Rs 4,42,000 (Pharm.D) per the NIRF 2026 submission. Course-wise records, training programmes and internships."
        url="https://pharmacy.jkkn.ac.in/placements/"
        dateModified="2026-03-26"
      />
      <FaqSchema faqs={[...PLACEMENT_FAQS]} />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
