import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Tiruchengode 2026 — Admission Open | JKKN',
  description: 'PCI-approved, NAAC-accredited pharmacy college 20 km from Tiruchengode in Komarapalayam, Namakkal district. B.Pharm, M.Pharm & Pharm.D with 95%+ placements. Admissions open 2026-27 — call +91-9345855001.',
  keywords: [
    'pharmacy college near tiruchengode',
    'pharmacy college in tiruchengode',
    'b pharm college near tiruchengode',
    'pharm d college tiruchengode',
    'pharmacy colleges in namakkal district',
    'jkkn pharmacy tiruchengode',
    'pci approved pharmacy college namakkal',
    'pharmacy admission tiruchengode 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/tiruchengode/',
  },
  openGraph: {
    title: 'Pharmacy College near Tiruchengode 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college 20 km from Tiruchengode in Komarapalayam. B.Pharm, M.Pharm & Pharm.D with 95%+ placements. Admissions open 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/tiruchengode/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Tiruchengode',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Tiruchengode 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college 20 km from Tiruchengode in Komarapalayam. B.Pharm, M.Pharm & Pharm.D with 95%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function TiruchengodeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
