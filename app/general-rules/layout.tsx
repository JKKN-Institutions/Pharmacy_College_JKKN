import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'General Rules | Student Guidelines | JKKN Pharmacy',
  description: 'General rules and regulations for students at JKKN College of Pharmacy. Academic rules, attendance, dress code, conduct guidelines and institutional policies.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/general-rules/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/general-rules/',
    title: 'General Rules | Student Guidelines | JKKN Pharmacy',
    description: 'General rules and regulations for students at JKKN College of Pharmacy. Academic rules, attendance, dress code, conduct guidelines and institutional policies.',
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
    title: 'General Rules | Student Guidelines | JKKN Pharmacy',
    description: 'General rules and regulations for students at JKKN College of Pharmacy. Academic rules, attendance, dress code, conduct guidelines and institutional policies.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function GeneralRulesLayout({
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
