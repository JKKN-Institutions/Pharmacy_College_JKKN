import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Student Statistics & Demographics | JKKN Pharmacy College',
  description: 'Student details and demographics at JKKN College of Pharmacy. Enrollment statistics, gender ratio, category-wise distribution, state-wise students and admission data.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/details-of-students/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/details-of-students/',
    title: 'Student Statistics & Demographics | JKKN Pharmacy College',
    description: 'Student details and demographics at JKKN College of Pharmacy. Enrollment statistics, gender ratio, category-wise distribution, state-wise students and admission data.',
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
    title: 'Student Statistics & Demographics | JKKN Pharmacy College',
    description: 'Student details and demographics at JKKN College of Pharmacy. Enrollment statistics, gender ratio, category-wise distribution, state-wise students and admission data.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function DetailsOfStudentsLayout({
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
