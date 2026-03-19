import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Transport Facilities | College Bus Service | JKKN Pharmacy',
  description: 'Transport facilities at JKKN College of Pharmacy. College bus routes, timings, GPS-enabled buses and safe commute for students across Komarapalayam and surrounding areas.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/transport/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/transport/',
    title: 'Transport Facilities | College Bus Service | JKKN Pharmacy',
    description: 'Transport facilities at JKKN College of Pharmacy. College bus routes, timings, GPS-enabled buses and safe commute for students across Komarapalayam and surrounding areas.',
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
    title: 'Transport Facilities | College Bus Service | JKKN Pharmacy',
    description: 'Transport facilities at JKKN College of Pharmacy. College bus routes, timings, GPS-enabled buses and safe commute for students across Komarapalayam and surrounding areas.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function TransportLayout({
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
