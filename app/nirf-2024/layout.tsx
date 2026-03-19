import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NIRF 2024 Data | Ranking Submission | JKKN Pharmacy College',
  description: 'NIRF 2024 (National Institutional Ranking Framework) data submission of JKKN College of Pharmacy. Performance parameters, ranking metrics and institutional achievements for 2024.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nirf-2024/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/nirf-2024/',
    title: 'NIRF 2024 Data | Ranking Submission | JKKN Pharmacy College',
    description: 'NIRF 2024 (National Institutional Ranking Framework) data submission of JKKN College of Pharmacy. Performance parameters, ranking metrics and institutional achievements for 2024.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIRF 2024 Data | Ranking Submission | JKKN Pharmacy College',
    description: 'NIRF 2024 (National Institutional Ranking Framework) data submission of JKKN College of Pharmacy. Performance parameters, ranking metrics and institutional achievements for 2024.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function NIRF2024Layout({
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
