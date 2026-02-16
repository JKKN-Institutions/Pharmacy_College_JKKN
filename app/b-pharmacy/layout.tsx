import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Best B Pharm Colleges in Tamilnadu | JKKN Pharmacy College',
  description: 'Searching for the best B Pharm colleges in Tamilnadu? JKKN is a top B.Pharm college — PCI approved, NAAC A Grade & 95% placements. Admissions 2026-27!',
  keywords: [
    'best b pharm colleges in tamilnadu',
    'b pharm colleges in tamilnadu',
    'top 10 b pharm colleges in tamilnadu',
    'b pharm course available colleges in tamilnadu',
    'b pharm best colleges in tamilnadu',
    'b pharm course details in tamil nadu',
    'b pharm course colleges in tamilnadu',
    'best college for b pharm in tamilnadu',
    'b pharm college in tamil nadu',
    'b pharm course in tamilnadu',
    'top b pharm colleges in tamilnadu',
    'b pharm distance education in tamilnadu',
    'b pharm lateral entry colleges in tamilnadu',
    'b pharm private colleges in tamilnadu',
    'top b pharm college in tamilnadu',
    'top colleges in tamilnadu for b pharm',
    'b pharm top colleges in tamilnadu',
    'top colleges for b pharm in tamilnadu',
    'top b pharmacy colleges in tamilnadu',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/b-pharmacy',
  },
  openGraph: {
    title: 'Best B Pharm Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'Searching for the best B Pharm colleges in Tamilnadu? JKKN is a top B.Pharm college — PCI approved, NAAC A Grade & 95% placements. Admissions 2026-27!',
    url: 'https://pharmacy.jkkn.ac.in/b-pharmacy',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Best B.Pharm College in Tamilnadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best B Pharm Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'Searching for the best B Pharm colleges in Tamilnadu? JKKN is a top B.Pharm college — PCI approved, NAAC A Grade & 95% placements. Admissions 2026-27!',
    images: ['/og-image.jpg'],
  },
}

export default function BPharmacyLayout({
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
