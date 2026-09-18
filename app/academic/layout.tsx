import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Academic | Time Tables, Exam Schedule, COs and POs | JKKN Pharmacy',
  description: 'Academic pages at JKKN College of Pharmacy: programme time tables, examination schedule and ordinances, course and programme outcomes, and the admission route.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/academic/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/academic/',
    title: 'Academic | Time Tables, Exam Schedule, COs and POs | JKKN Pharmacy',
    description: 'Academic pages at JKKN College of Pharmacy: programme time tables, examination schedule and ordinances, course and programme outcomes, and the admission route.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy - PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academic | Time Tables, Exam Schedule, COs and POs | JKKN Pharmacy',
    description: 'Academic pages at JKKN College of Pharmacy: programme time tables, examination schedule and ordinances, course and programme outcomes, and the admission route.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
