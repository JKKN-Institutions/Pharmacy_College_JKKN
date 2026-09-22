import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Erode (18 km) | JKKN College of Pharmacy',
  description: 'JKKN College of Pharmacy, Komarapalayam - PCI-approved pharmacy college 18 km from Erode Bus Stand on NH-544 (about 30 minutes). B.Pharm, M.Pharm (6 specialisations, 90 seats), Pharm.D. 97 of 124 placed in 2024-25 (NIRF). Admissions 2026-27 open.',
  keywords: [
    'pharmacy college near erode',
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
    title: 'Pharmacy College near Erode (18 km) | JKKN College of Pharmacy',
    description: 'JKKN College of Pharmacy, Komarapalayam - PCI-approved pharmacy college 18 km from Erode on NH-544. B.Pharm, M.Pharm (90 seats), Pharm.D. 97 of 124 placed in 2024-25 (NIRF). Admissions 2026-27 open.',
    url: 'https://pharmacy.jkkn.ac.in/erode/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy, Komarapalayam - pharmacy college 18 km from Erode',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Erode (18 km) | JKKN College of Pharmacy',
    description: 'PCI-approved pharmacy college 18 km from Erode on NH-544. B.Pharm, M.Pharm (90 seats), Pharm.D. 97 of 124 placed in 2024-25 (NIRF).',
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
