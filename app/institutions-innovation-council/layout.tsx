import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'IIC - Institution Innovation Council | MHRD | JKKN Pharmacy',
  description: 'Institution Innovation Council (IIC) at JKKN College of Pharmacy. MHRD initiative, innovation activities, hackathons, ideation sessions and entrepreneurship promotion.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/institutions-innovation-council/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/institutions-innovation-council/',
    title: 'IIC - Institution Innovation Council | MHRD | JKKN Pharmacy',
    description: 'Institution Innovation Council (IIC) at JKKN College of Pharmacy. MHRD initiative, innovation activities, hackathons, ideation sessions and entrepreneurship promotion.',
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
    title: 'IIC - Institution Innovation Council | MHRD | JKKN Pharmacy',
    description: 'Institution Innovation Council (IIC) at JKKN College of Pharmacy. MHRD initiative, innovation activities, hackathons, ideation sessions and entrepreneurship promotion.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function InstitutionsInnovationCouncilLayout({
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
