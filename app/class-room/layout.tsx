import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Classrooms & Learning Spaces | JKKN College of Pharmacy',
  description: 'Modern classrooms and learning spaces at JKKN College of Pharmacy. Air-conditioned rooms, smart boards, audio-visual aids and comfortable seating for effective learning.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/class-room/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/class-room/',
    title: 'Classrooms & Learning Spaces | JKKN College of Pharmacy',
    description: 'Modern classrooms and learning spaces at JKKN College of Pharmacy. Air-conditioned rooms, smart boards, audio-visual aids and comfortable seating for effective learning.',
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
    title: 'Classrooms & Learning Spaces | JKKN College of Pharmacy',
    description: 'Modern classrooms and learning spaces at JKKN College of Pharmacy. Air-conditioned rooms, smart boards, audio-visual aids and comfortable seating for effective learning.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
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
