import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy Colleges in Namakkal District | JKKN College of Pharmacy, Komarapalayam',
  description: "JKKN College of Pharmacy, Komarapalayam: PCI-approved, NAAC 'A' college in Namakkal district. B.Pharm 100, M.Pharm 90, Pharm.D 30 seats; 97 of 124 placed.",
  keywords: [
    'pharmacy college in namakkal',
    'best pharmacy colleges in namakkal',
    'pharmacy colleges in namakkal district',
    'best colleges for pharmacy',
    'pharmacy colleges in namakkal',
    'b pharm college in namakkal',
    'b pharm colleges in namakkal',
    'b pharm colleges in namakkal district',
    'pharm d college namakkal',
    'jkkn pharmacy namakkal',
    'pci approved pharmacy college namakkal',
    'naac pharmacy college namakkal',
    'pharmacy admission namakkal 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/namakkal/',
  },
  openGraph: {
    title: 'Pharmacy Colleges in Namakkal District | JKKN College of Pharmacy, Komarapalayam',
    description: 'PCI-approved, NAAC-accredited (A) pharmacy college in Namakkal district (Komarapalayam). B.Pharm, M.Pharm & Pharm.D with 78% placements (2024-25). Admissions open 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/namakkal/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy, Komarapalayam - pharmacy college in Namakkal district',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy Colleges in Namakkal District | JKKN College of Pharmacy, Komarapalayam',
    description: 'PCI-approved, NAAC-accredited (A) pharmacy college in Namakkal district (Komarapalayam). B.Pharm, M.Pharm & Pharm.D with 78% placements (2024-25).',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function NamakkalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
