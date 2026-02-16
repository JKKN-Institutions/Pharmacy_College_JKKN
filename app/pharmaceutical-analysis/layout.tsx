import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Pharmaceutical Courses in Tamilnadu | JKKN Pharmacy College',
  description: 'Explore pharmaceutical courses in Tamilnadu at JKKN. M.Pharm Pharmaceutical Analysis — HPLC, GC-MS & quality control training. Admissions Open 2026-27!',
  keywords: [
    'pharmaceutical courses in tamilnadu',
    'pharmaceutical colleges in tamilnadu',
    'm pharm pharmaceutical analysis',
    'pharmaceutical analysis colleges tamil nadu',
    'quality control courses pharmacy',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmaceutical-analysis',
  },
  openGraph: {
    title: 'Pharmaceutical Courses in Tamilnadu | JKKN Pharmacy College',
    description: 'Explore pharmaceutical courses in Tamilnadu at JKKN. M.Pharm Pharmaceutical Analysis — HPLC, GC-MS & quality control training. Admissions Open 2026-27!',
    url: 'https://pharmacy.jkkn.ac.in/pharmaceutical-analysis',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JKKN - M.Pharm Pharmaceutical Analysis Programme',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmaceutical Courses in Tamilnadu | JKKN Pharmacy College',
    description: 'Explore pharmaceutical courses in Tamilnadu at JKKN. M.Pharm Pharmaceutical Analysis — HPLC, GC-MS & quality control training. Admissions Open 2026-27!',
    images: ['/og-image.jpg'],
  },
}

export default function PharmaceuticalAnalysisLayout({
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
