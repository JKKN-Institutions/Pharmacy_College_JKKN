import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'About Our Trust | JKKN Educational Institutions',
  description: 'JKKN Educational Trust — Founder details, trust activities, social welfare, educational mission and the institutions under JKKN group in Komarapalayam, Tamil Nadu.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/our-trust/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/our-trust/',
    title: 'About Our Trust | JKKN Educational Institutions',
    description: 'JKKN Educational Trust — Founder details, trust activities, social welfare, educational mission and the institutions under JKKN group in Komarapalayam, Tamil Nadu.',
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
    title: 'About Our Trust | JKKN Educational Institutions',
    description: 'JKKN Educational Trust — Founder details, trust activities, social welfare, educational mission and the institutions under JKKN group in Komarapalayam, Tamil Nadu.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function OurTrustLayout({
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
