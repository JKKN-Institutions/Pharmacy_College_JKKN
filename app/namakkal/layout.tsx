import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy Colleges in Namakkal District | JKKN College of Pharmacy, Komarapalayam',
  description: "JKKN College of Pharmacy, Komarapalayam - a PCI-approved pharmacy college in Namakkal district, 65 km from Namakkal Bus Stand on the Tiruchengode road. B.Pharm (100 seats), M.Pharm (5 specialisations, 60 seats), Pharm.D. 97 of 124 placed in 2024-25 (NIRF). Admissions 2026-27 open.",
  keywords: [
    'pharmacy college in namakkal',
    'best pharmacy colleges in namakkal',
    'pharmacy colleges in namakkal district',
    'best colleges for pharmacy',
    'pharmacy colleges in namakkal',
    'b pharm college in namakkal',
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
    description: 'PCI-approved, NAAC-accredited pharmacy college in Namakkal district (Komarapalayam). B.Pharm, M.Pharm & Pharm.D with 78% placements (2024-25). Admissions open 2026-27.',
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
    description: 'PCI-approved, NAAC-accredited pharmacy college in Namakkal district (Komarapalayam). B.Pharm, M.Pharm & Pharm.D with 78% placements (2024-25).',
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
