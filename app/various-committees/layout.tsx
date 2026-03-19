import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Various Committees | Governance | JKKN Pharmacy',
  description: 'Various committees at JKKN College of Pharmacy. Academic, administrative, student welfare, examination, library.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/various-committees/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/various-committees/',
    title: 'Various Committees | Governance | JKKN Pharmacy',
    description: 'Various committees at JKKN College of Pharmacy. Academic, administrative, student welfare, examination, library.',
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
    title: 'Various Committees | Governance | JKKN Pharmacy',
    description: 'Various committees at JKKN College of Pharmacy. Academic, administrative, student welfare, examination, library.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function VariousCommitteesLayout({
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
