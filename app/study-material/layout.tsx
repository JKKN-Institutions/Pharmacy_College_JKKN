import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Study Materials & Resources | E-Learning | JKKN Pharmacy',
  description: 'Download study materials for pharmacy courses at JKKN College. Lecture notes, practicals, previous papers.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/study-material/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/study-material/',
    title: 'Study Materials & Resources | E-Learning | JKKN Pharmacy',
    description: 'Download study materials for pharmacy courses at JKKN College. Lecture notes, practicals, previous papers.',
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
    title: 'Study Materials & Resources | E-Learning | JKKN Pharmacy',
    description: 'Download study materials for pharmacy courses at JKKN College. Lecture notes, practicals, previous papers.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function StudyMaterialLayout({
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
