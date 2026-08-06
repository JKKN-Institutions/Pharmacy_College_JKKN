import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy Colleges in Erode 2026 — Admission Open | JKKN',
  description: 'PCI-approved, NAAC-accredited pharmacy college 22 km from Erode via NH-544. B.Pharm, M.Pharm & Pharm.D with 95%+ placements. Admissions open 2026-27 — call +91-9345855001.',
  keywords: [
    'pharmacy college in erode',
    'best colleges for pharmacy',
    'pharmacy colleges in erode',
    'pharmacy college erode',
    'top pharmacy colleges in erode',
    'b pharm college in erode',
    'pharm d college erode',
    'jkkn pharmacy erode',
    'pci approved pharmacy college erode',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/erode/',
  },
  openGraph: {
    title: 'Pharmacy Colleges in Erode 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college 22 km from Erode via NH-544. B.Pharm, M.Pharm & Pharm.D with 95%+ placements. Admissions open 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/erode/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Top Pharmacy College in Erode',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy Colleges in Erode 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college 22 km from Erode via NH-544. B.Pharm, M.Pharm & Pharm.D with 95%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function ErodeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
