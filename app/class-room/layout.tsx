import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Learning Studios & Learning Spaces | JKKN College of Pharmacy',
  description: 'Modern learning studios and learning spaces at JKKN College of Pharmacy. Air-conditioned rooms, smart boards.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/class-room/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/class-room/',
    title: 'Learning Studios & Learning Spaces | JKKN College of Pharmacy',
    description: 'Modern learning studios and learning spaces at JKKN College of Pharmacy. Air-conditioned rooms, smart boards.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learning Studios & Learning Spaces | JKKN College of Pharmacy',
    description: 'Modern learning studios and learning spaces at JKKN College of Pharmacy. Air-conditioned rooms, smart boards.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function ClassRoomLayout({
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
