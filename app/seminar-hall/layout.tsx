import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Seminar Hall & Auditorium | Event Venues | JKKN Pharmacy',
  description: 'Seminar hall and auditorium facilities at JKKN College of Pharmacy. Conference hall, symposium venue, guest lectures, workshops and academic events infrastructure.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/seminar-hall/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/seminar-hall/',
    title: 'Seminar Hall & Auditorium | Event Venues | JKKN Pharmacy',
    description: 'Seminar hall and auditorium facilities at JKKN College of Pharmacy. Conference hall, symposium venue, guest lectures, workshops and academic events infrastructure.',
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
    title: 'Seminar Hall & Auditorium | Event Venues | JKKN Pharmacy',
    description: 'Seminar hall and auditorium facilities at JKKN College of Pharmacy. Conference hall, symposium venue, guest lectures, workshops and academic events infrastructure.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function SeminarHallLayout({
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
