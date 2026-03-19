import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Why Choose JKKN Pharmacy College | Top Reasons & Benefits',
  description: 'Why study at JKKN College of Pharmacy? NAAC A grade, 95% placements (2024-25), experienced faculty, modern infrastructure, research opportunities, industry exposure and holistic development.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/why-jkkn/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/why-jkkn/',
    title: 'Why Choose JKKN Pharmacy College | Top Reasons & Benefits',
    description: 'Why study at JKKN College of Pharmacy? NAAC A grade, 95% placements (2024-25), experienced faculty, modern infrastructure, research opportunities, industry exposure and holistic development.',
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
    title: 'Why Choose JKKN Pharmacy College | Top Reasons & Benefits',
    description: 'Why study at JKKN College of Pharmacy? NAAC A grade, 95% placements (2024-25), experienced faculty, modern infrastructure, research opportunities, industry exposure and holistic development.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function WhyJKKNLayout({
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
