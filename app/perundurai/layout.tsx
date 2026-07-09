import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Perundurai 2026 — Admission Open | JKKN',
  description: 'PCI-approved, NAAC-accredited pharmacy college 25 km from Perundurai in Komarapalayam near Erode. B.Pharm, M.Pharm & Pharm.D with 95%+ placements. Admissions open 2026-27 — call +91-9345855001.',
  keywords: [
    'pharmacy college near perundurai',
    'pharmacy college in perundurai',
    'b pharm college near perundurai',
    'pharm d college perundurai',
    'pharmacy colleges in erode district',
    'jkkn pharmacy perundurai',
    'pci approved pharmacy college erode',
    'pharmacy admission perundurai 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/perundurai/',
  },
  openGraph: {
    title: 'Pharmacy College near Perundurai 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college 25 km from Perundurai in Komarapalayam near Erode. B.Pharm, M.Pharm & Pharm.D with 95%+ placements. Admissions open 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/perundurai/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Perundurai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Perundurai 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college 25 km from Perundurai in Komarapalayam near Erode. B.Pharm, M.Pharm & Pharm.D with 95%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function PerunduraiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
