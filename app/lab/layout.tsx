import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Pharmacy Laboratories | Advanced Equipment | JKKN College',
  description: 'Well-equipped pharmacy laboratories at JKKN College of Pharmacy. Pharmaceutics, pharmacology, chemistry, and analysis labs with modern instruments.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/lab/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/lab/',
    title: 'Pharmacy Laboratories | Advanced Equipment | JKKN College',
    description: 'Well-equipped pharmacy laboratories at JKKN College of Pharmacy. Pharmaceutics, pharmacology, chemistry, and analysis labs with modern instruments.',
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
    title: 'Pharmacy Laboratories | Advanced Equipment | JKKN College',
    description: 'Well-equipped pharmacy laboratories at JKKN College of Pharmacy. Pharmaceutics, pharmacology, chemistry, and analysis labs with modern instruments.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function LabLayout({
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
