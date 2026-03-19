import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Incubation Centre | Startup Support | JKKN Pharmacy College',
  description: 'Incubation centre at JKKN College of Pharmacy. Support for pharmaceutical startups, innovation projects, mentoring, infrastructure and funding opportunities for entrepreneurs.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/incubation-centre/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/incubation-centre/',
    title: 'Incubation Centre | Startup Support | JKKN Pharmacy College',
    description: 'Incubation centre at JKKN College of Pharmacy. Support for pharmaceutical startups, innovation projects, mentoring, infrastructure and funding opportunities for entrepreneurs.',
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
    title: 'Incubation Centre | Startup Support | JKKN Pharmacy College',
    description: 'Incubation centre at JKKN College of Pharmacy. Support for pharmaceutical startups, innovation projects, mentoring, infrastructure and funding opportunities for entrepreneurs.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function IncubationCentreLayout({
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
