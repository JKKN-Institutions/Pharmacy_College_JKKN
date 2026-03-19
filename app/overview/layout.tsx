import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'About JKKN Pharmacy College | History & Vision',
  description: 'Learn about JKKN College of Pharmacy — history, vision, mission, values, achievements, infrastructure. Commitment to pharmaceutical education excellence in Tamil Nadu since 1985.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/overview/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/overview/',
    title: 'About JKKN Pharmacy College | History & Vision',
    description: 'Learn about JKKN College of Pharmacy — history, vision, mission, values, achievements, infrastructure. Commitment to pharmaceutical education excellence in Tamil Nadu since 1985.',
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
    title: 'About JKKN Pharmacy College | History & Vision',
    description: 'Learn about JKKN College of Pharmacy — history, vision, mission, values, achievements, infrastructure. Commitment to pharmaceutical education excellence in Tamil Nadu since 1985.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function OverviewLayout({
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
