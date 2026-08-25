import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Attur 2026 — Admission Open | JKKN',
  description: 'PCI-approved, NAAC-accredited residential pharmacy college 95 km from Attur via Salem on NH-544. B.Pharm, M.Pharm & Pharm.D with hostel and 78% placements (2024-25). Admissions open 2026-27 — call +91-9345855001.',
  keywords: [
    'pharmacy college near attur',
    'pharmacy college in attur',
    'b pharm college near attur',
    'pharm d college attur',
    'pharmacy colleges in salem district',
    'jkkn pharmacy attur',
    'pharmacy college with hostel salem',
    'pharmacy admission attur 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/attur/',
  },
  openGraph: {
    title: 'Pharmacy College near Attur 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited residential pharmacy college 95 km from Attur via Salem. B.Pharm, M.Pharm & Pharm.D with hostel and 78% placements (2024-25). Admissions open 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/attur/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Attur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Attur 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited residential pharmacy college 95 km from Attur via Salem. B.Pharm, M.Pharm & Pharm.D with hostel and 78% placements (2024-25).',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function AtturLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
