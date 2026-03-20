import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'M.Pharm Time Table | Academic Schedule 2026 | JKKN Pharmacy',
  description: 'M.Pharm timetable and academic schedule at JKKN College of Pharmacy. Semester-wise class schedules.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/mpharm-time-table/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/mpharm-time-table/',
    title: 'M.Pharm Time Table | Academic Schedule 2026 | JKKN Pharmacy',
    description: 'M.Pharm timetable and academic schedule at JKKN College of Pharmacy. Semester-wise class schedules.',
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
    title: 'M.Pharm Time Table | Academic Schedule 2026 | JKKN Pharmacy',
    description: 'M.Pharm timetable and academic schedule at JKKN College of Pharmacy. Semester-wise class schedules.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function MPharmTimeTableLayout({
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
