import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy Colleges in Salem 2026 — Admission Open | JKKN',
  description: 'PCI-approved, NAAC-accredited pharmacy college 58 km from Salem via NH-544. B.Pharm, M.Pharm & Pharm.D with 78% placements (2024-25). Admissions open 2026-27 — call +91-9345855001.',
  keywords: [
    'pharmacy colleges in salem',
    'best colleges for pharmacy',
    'pharmacy college in salem',
    'pharmacy college in salem district',
    'b pharm college in salem',
    'pharm d college salem',
    'jkkn pharmacy salem',
    'pci approved pharmacy college salem',
    'pharmacy admission salem 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/salem/',
  },
  openGraph: {
    title: 'Pharmacy Colleges in Salem 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college 58 km from Salem via NH-544. B.Pharm, M.Pharm & Pharm.D with 78% placements (2024-25). Admissions open 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/salem/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Salem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy Colleges in Salem 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college 58 km from Salem via NH-544. B.Pharm, M.Pharm & Pharm.D with 78% placements (2024-25).',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function SalemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
