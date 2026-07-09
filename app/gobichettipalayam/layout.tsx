import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Gobichettipalayam 2026 — Admission | JKKN',
  description: 'PCI-approved, NAAC-accredited pharmacy college 33 km from Gobichettipalayam via Bhavani. B.Pharm, M.Pharm & Pharm.D with 95%+ placements. Admissions open 2026-27 — call +91-9345855001.',
  keywords: [
    'pharmacy college near gobichettipalayam',
    'pharmacy college in gobichettipalayam',
    'pharmacy college near gobi',
    'b pharm college near gobichettipalayam',
    'pharm d college gobichettipalayam',
    'pharmacy colleges in erode district',
    'jkkn pharmacy gobichettipalayam',
    'pharmacy admission gobichettipalayam 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/gobichettipalayam/',
  },
  openGraph: {
    title: 'Pharmacy College near Gobichettipalayam 2026 — Admission | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college 33 km from Gobichettipalayam via Bhavani. B.Pharm, M.Pharm & Pharm.D with 95%+ placements. Admissions open 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/gobichettipalayam/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Gobichettipalayam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Gobichettipalayam 2026 — Admission | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college 33 km from Gobichettipalayam via Bhavani. B.Pharm, M.Pharm & Pharm.D with 95%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function GobichettipalayamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
