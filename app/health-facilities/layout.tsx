import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Health Facilities | Campus Clinic | JKKN Pharmacy',
  description: 'Health care facilities at JKKN College of Pharmacy. Medical room, first aid, doctor on call, annual health checkups and student wellness programmes.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/health-facilities/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/health-facilities/',
    title: 'Health Facilities | Campus Clinic | JKKN Pharmacy',
    description: 'Health care facilities at JKKN College of Pharmacy. Medical room, first aid, doctor on call, annual health checkups and student wellness programmes.',
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
    title: 'Health Facilities | Campus Clinic | JKKN Pharmacy',
    description: 'Health care facilities at JKKN College of Pharmacy. Medical room, first aid, doctor on call, annual health checkups and student wellness programmes.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function HealthFacilitiesLayout({
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
