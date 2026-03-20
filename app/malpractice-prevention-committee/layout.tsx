import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Malpractice Prevention | Exam Ethics | JKKN',
  description: 'Malpractice Prevention Committee at JKKN College of Pharmacy. Preventing exam malpractices, academic integrity.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/malpractice-prevention-committee/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/malpractice-prevention-committee/',
    title: 'Malpractice Prevention | Exam Ethics | JKKN',
    description: 'Malpractice Prevention Committee at JKKN College of Pharmacy. Preventing exam malpractices, academic integrity.',
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
    title: 'Malpractice Prevention | Exam Ethics | JKKN',
    description: 'Malpractice Prevention Committee at JKKN College of Pharmacy. Preventing exam malpractices, academic integrity.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function MalpracticePreventionCommitteeLayout({
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
