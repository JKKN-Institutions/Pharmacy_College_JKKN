import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Vision & Mission | JKKN College of Pharmacy Komarapalayam',
  description: 'JKKN Pharmacy College vision and mission statements. Commitment to pharmaceutical education excellence, research, innovation and producing competent pharmacy professionals.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/vision-mission/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/vision-mission/',
    title: 'Vision & Mission | JKKN College of Pharmacy Komarapalayam',
    description: 'JKKN Pharmacy College vision and mission statements. Commitment to pharmaceutical education excellence, research, innovation and producing competent pharmacy professionals.',
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
    title: 'Vision & Mission | JKKN College of Pharmacy Komarapalayam',
    description: 'JKKN Pharmacy College vision and mission statements. Commitment to pharmaceutical education excellence, research, innovation and producing competent pharmacy professionals.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function VisionMissionLayout({
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
