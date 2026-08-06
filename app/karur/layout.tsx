import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Karur 2026 — Admission Open | JKKN',
  description: 'PCI-approved, NAAC-accredited residential pharmacy college 80 km from Karur in Komarapalayam near Erode. B.Pharm, M.Pharm & Pharm.D with hostel and 95%+ placements. Admissions open 2026-27 — call +91-9345855001.',
  keywords: [
    'pharmacy college near karur',
    'pharmacy college in karur',
    'b pharm colleges in karur',
    'pharm d college karur',
    'pharmacy college with hostel karur',
    'jkkn pharmacy karur',
    'pci approved pharmacy college near karur',
    'pharmacy admission karur 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/karur/',
  },
  openGraph: {
    title: 'Pharmacy College near Karur 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited residential pharmacy college 80 km from Karur. B.Pharm, M.Pharm & Pharm.D with hostel and 95%+ placements. Admissions open 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/karur/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Karur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Karur 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited residential pharmacy college 80 km from Karur. B.Pharm, M.Pharm & Pharm.D with hostel and 95%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function KarurLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
