import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Digital Campus & Smart Classrooms | JKKN Pharmacy College',
  description: 'Digital campus initiatives at JKKN College of Pharmacy. Smart classrooms, e-learning, Wi-Fi, online resources.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/digital-campus/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/digital-campus/',
    title: 'Digital Campus & Smart Classrooms | JKKN Pharmacy College',
    description: 'Digital campus initiatives at JKKN College of Pharmacy. Smart classrooms, e-learning, Wi-Fi, online resources.',
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
    title: 'Digital Campus & Smart Classrooms | JKKN Pharmacy College',
    description: 'Digital campus initiatives at JKKN College of Pharmacy. Smart classrooms, e-learning, Wi-Fi, online resources.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function DigitalCampusLayout({
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
