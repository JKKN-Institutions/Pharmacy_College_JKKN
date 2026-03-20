import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Institutional Distinctiveness | JKKN Pharmacy',
  description: 'Institutional distinctiveness of JKKN College of Pharmacy. Unique features, distinctive characteristics.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/institutional-distinctiveness/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/institutional-distinctiveness/',
    title: 'Institutional Distinctiveness | JKKN Pharmacy',
    description: 'Institutional distinctiveness of JKKN College of Pharmacy. Unique features, distinctive characteristics.',
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
    title: 'Institutional Distinctiveness | JKKN Pharmacy',
    description: 'Institutional distinctiveness of JKKN College of Pharmacy. Unique features, distinctive characteristics.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function InstitutionalDistinctivenessLayout({
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
