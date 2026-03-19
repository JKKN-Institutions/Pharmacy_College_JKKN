import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NAAC A Grade | JKKN College of Pharmacy',
  description: 'JKKN College of Pharmacy awarded NAAC A Grade accreditation. View SSR, peer team report, criteria-wise assessment, quality indicators and institutional excellence achievements.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/naac/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/naac/',
    title: 'NAAC A Grade | JKKN College of Pharmacy',
    description: 'JKKN College of Pharmacy awarded NAAC A Grade accreditation. View SSR, peer team report, criteria-wise assessment, quality indicators and institutional excellence achievements.',
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
    title: 'NAAC A Grade | JKKN College of Pharmacy',
    description: 'JKKN College of Pharmacy awarded NAAC A Grade accreditation. View SSR, peer team report, criteria-wise assessment, quality indicators and institutional excellence achievements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function NAACLayout({
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
