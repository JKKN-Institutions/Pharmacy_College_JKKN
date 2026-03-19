import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'B.Pharm Time Table | Academic Calendar 2026 | JKKN Pharmacy',
  description: 'B.Pharm timetable and academic calendar at JKKN College of Pharmacy. Class schedules, examination dates.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/bpharm-time-table/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/bpharm-time-table/',
    title: 'B.Pharm Time Table | Academic Calendar 2026 | JKKN Pharmacy',
    description: 'B.Pharm timetable and academic calendar at JKKN College of Pharmacy. Class schedules, examination dates.',
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
    title: 'B.Pharm Time Table | Academic Calendar 2026 | JKKN Pharmacy',
    description: 'B.Pharm timetable and academic calendar at JKKN College of Pharmacy. Class schedules, examination dates.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function BPharmTimeTableLayout({
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
