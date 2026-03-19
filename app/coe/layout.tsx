import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'COE - Controller of Examinations | JKKN Pharmacy College',
  description: 'Controller of Examinations office at JKKN College of Pharmacy. Exam notifications, hall tickets, results, revaluation, certificates and examination administration.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/coe/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/coe/',
    title: 'COE - Controller of Examinations | JKKN Pharmacy College',
    description: 'Controller of Examinations office at JKKN College of Pharmacy. Exam notifications, hall tickets, results, revaluation, certificates and examination administration.',
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
    title: 'COE - Controller of Examinations | JKKN Pharmacy College',
    description: 'Controller of Examinations office at JKKN College of Pharmacy. Exam notifications, hall tickets, results, revaluation, certificates and examination administration.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function COELayout({
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
