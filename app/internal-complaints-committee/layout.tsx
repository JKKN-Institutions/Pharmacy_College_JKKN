import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'ICC - Women Safety & Harassment Prevention | JKKN Pharmacy',
  description: 'Internal Complaints Committee (ICC) for prevention of sexual harassment at JKKN College of Pharmacy.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/internal-complaints-committee/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/internal-complaints-committee/',
    title: 'ICC - Women Safety & Harassment Prevention | JKKN Pharmacy',
    description: 'Internal Complaints Committee (ICC) for prevention of sexual harassment at JKKN College of Pharmacy.',
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
    title: 'ICC - Women Safety & Harassment Prevention | JKKN Pharmacy',
    description: 'Internal Complaints Committee (ICC) for prevention of sexual harassment at JKKN College of Pharmacy.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function InternalComplaintsCommitteeLayout({
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
