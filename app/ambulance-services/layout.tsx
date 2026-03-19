import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Ambulance Services | Emergency Medical Care | JKKN Pharmacy',
  description: 'Ambulance services and emergency medical care at JKKN College of Pharmacy. 24/7 availability, emergency response and comprehensive student safety measures.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/ambulance-services/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/ambulance-services/',
    title: 'Ambulance Services | Emergency Medical Care | JKKN Pharmacy',
    description: 'Ambulance services and emergency medical care at JKKN College of Pharmacy. 24/7 availability, emergency response and comprehensive student safety measures.',
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
    title: 'Ambulance Services | Emergency Medical Care | JKKN Pharmacy',
    description: 'Ambulance services and emergency medical care at JKKN College of Pharmacy. 24/7 availability, emergency response and comprehensive student safety measures.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function AmbulanceServicesLayout({
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
