import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'PCI Approval | Pharmacy Council of India | JKKN College',
  description: 'JKKN College of Pharmacy PCI (Pharmacy Council of India) approval details. Compliance, inspection reports.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmacy-council/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/pharmacy-council/',
    title: 'PCI Approval | Pharmacy Council of India | JKKN College',
    description: 'JKKN College of Pharmacy PCI (Pharmacy Council of India) approval details. Compliance, inspection reports.',
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
    title: 'PCI Approval | Pharmacy Council of India | JKKN College',
    description: 'JKKN College of Pharmacy PCI (Pharmacy Council of India) approval details. Compliance, inspection reports.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function PharmacyCouncilLayout({
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
