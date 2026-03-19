import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Ordinances | Academic Policies | JKKN Pharmacy',
  description: 'University ordinances and academic regulations at JKKN College of Pharmacy. Examination rules, promotion criteria, academic policies and regulatory framework.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/ordinances/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/ordinances/',
    title: 'Ordinances | Academic Policies | JKKN Pharmacy',
    description: 'University ordinances and academic regulations at JKKN College of Pharmacy. Examination rules, promotion criteria, academic policies and regulatory framework.',
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
    title: 'Ordinances | Academic Policies | JKKN Pharmacy',
    description: 'University ordinances and academic regulations at JKKN College of Pharmacy. Examination rules, promotion criteria, academic policies and regulatory framework.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function OrdinancesLayout({
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
