import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Discipline Committee | Code of Conduct | JKKN',
  description: 'Discipline committee at JKKN College of Pharmacy. Student code of conduct, disciplinary rules.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/discipline-committee/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/discipline-committee/',
    title: 'Discipline Committee | Code of Conduct | JKKN',
    description: 'Discipline committee at JKKN College of Pharmacy. Student code of conduct, disciplinary rules.',
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
    title: 'Discipline Committee | Code of Conduct | JKKN',
    description: 'Discipline committee at JKKN College of Pharmacy. Student code of conduct, disciplinary rules.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function DisciplineCommitteeLayout({
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
