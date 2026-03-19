import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Competitive Exam Coaching | GPAT GATE | JKKN Pharmacy',
  description: 'Competitive examination coaching at JKKN College of Pharmacy. GPAT, GATE, Civil Services preparation, coaching classes.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/competitive-examination/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/competitive-examination/',
    title: 'Competitive Exam Coaching | GPAT GATE | JKKN Pharmacy',
    description: 'Competitive examination coaching at JKKN College of Pharmacy. GPAT, GATE, Civil Services preparation, coaching classes.',
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
    title: 'Competitive Exam Coaching | GPAT GATE | JKKN Pharmacy',
    description: 'Competitive examination coaching at JKKN College of Pharmacy. GPAT, GATE, Civil Services preparation, coaching classes.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function CompetitiveExaminationLayout({
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
