import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Top M Pharm Colleges in Tamilnadu | JKKN Pharmacy College',
  description: 'Explore top M Pharm colleges in Tamilnadu. JKKN offers 5 M.Pharm specialisations — PCI approved, NAAC A Grade, research-focused. Admissions Open 2026-27!',
  keywords: [
    'top m pharm colleges in tamilnadu',
    'm pharm colleges in tamilnadu',
    'top 10 m pharmacy colleges in tamilnadu',
    'm pharm best colleges in tamilnadu',
    'best m pharm colleges in tamilnadu',
    'JKKN m pharmacy',
    'm pharmacy komarapalayam',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/m-pharmacy',
  },
  openGraph: {
    title: 'Top M Pharm Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'Explore top M Pharm colleges in Tamilnadu. JKKN offers 5 M.Pharm specialisations — PCI approved, NAAC A Grade, research-focused. Admissions Open 2026-27!',
    url: 'https://pharmacy.jkkn.ac.in/m-pharmacy',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Top M.Pharm College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top M Pharm Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'Explore top M Pharm colleges in Tamilnadu. JKKN offers 5 M.Pharm specialisations — PCI approved, NAAC A Grade, research-focused. Admissions Open 2026-27!',
    images: ['/og-image.jpg'],
  },
}

export default function MPharmacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
