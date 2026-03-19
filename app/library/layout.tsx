import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Library & Learning Resources | 11000+ Books | JKKN Pharmacy',
  description: 'Automated library at JKKN College of Pharmacy with 11,938+ volumes, digital resources, e-journals, DELNET access, OPAC system. Dedicated reading spaces for pharmaceutical studies.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/library/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/library/',
    title: 'Library & Learning Resources | 11000+ Books | JKKN Pharmacy',
    description: 'Automated library at JKKN College of Pharmacy with 11,938+ volumes, digital resources, e-journals, DELNET access, OPAC system. Dedicated reading spaces for pharmaceutical studies.',
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
    title: 'Library & Learning Resources | 11000+ Books | JKKN Pharmacy',
    description: 'Automated library at JKKN College of Pharmacy with 11,938+ volumes, digital resources, e-journals, DELNET access, OPAC system. Dedicated reading spaces for pharmaceutical studies.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function LibraryLayout({
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
