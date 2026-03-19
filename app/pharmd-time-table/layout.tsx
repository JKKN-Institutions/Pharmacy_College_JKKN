import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Pharm.D Time Table | Class Schedule 2026 | JKKN Pharmacy',
  description: 'Pharm.D timetable and class schedule at JKKN College of Pharmacy. Year-wise schedules, clinical rotations, examination dates and academic calendar for 2026.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmd-time-table/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/pharmd-time-table/',
    title: 'Pharm.D Time Table | Class Schedule 2026 | JKKN Pharmacy',
    description: 'Pharm.D timetable and class schedule at JKKN College of Pharmacy. Year-wise schedules, clinical rotations, examination dates and academic calendar for 2026.',
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
    title: 'Pharm.D Time Table | Class Schedule 2026 | JKKN Pharmacy',
    description: 'Pharm.D timetable and class schedule at JKKN College of Pharmacy. Year-wise schedules, clinical rotations, examination dates and academic calendar for 2026.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function PharmDTimeTableLayout({
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
