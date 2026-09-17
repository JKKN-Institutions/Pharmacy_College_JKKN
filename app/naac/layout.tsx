import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NAAC A Grade | JKKN College of Pharmacy',
  description: 'JKKN Pharmacy holds NAAC A Grade in Cycle 2, and was graded A in Cycle 1 as well. SSR, peer report, criteria-wise assessment and quality indicators.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/naac/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/naac/',
    title: 'NAAC A Grade | JKKN College of Pharmacy',
    description: 'JKKN Pharmacy holds NAAC A Grade in Cycle 2, and was graded A in Cycle 1 as well. SSR, peer report, criteria-wise assessment and quality indicators.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAAC A Grade | JKKN College of Pharmacy',
    description: 'JKKN Pharmacy holds NAAC A Grade in Cycle 2, and was graded A in Cycle 1 as well. SSR, peer report, criteria-wise assessment and quality indicators.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
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
