import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NAAC A Grade | JKKN College of Pharmacy',
  description: 'JKKN Pharmacy received NAAC A Grade. SSR, peer report, criteria-wise assessment and quality indicators.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/naac/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/naac/',
    title: 'NAAC A Grade | JKKN College of Pharmacy',
    description: 'JKKN Pharmacy received NAAC A Grade. SSR, peer report, criteria-wise assessment and quality indicators.',
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
    description: 'JKKN Pharmacy received NAAC A Grade. SSR, peer report, criteria-wise assessment and quality indicators.',
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
