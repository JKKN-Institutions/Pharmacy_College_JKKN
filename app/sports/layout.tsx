import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Sports & Physical Education | JKKN Pharmacy',
  description: 'Sports facilities and physical education at JKKN College of Pharmacy. Indoor and outdoor sports, tournaments, fitness center, yoga, sports achievements and student wellness programs.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/sports/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/sports/',
    title: 'Sports & Physical Education | JKKN Pharmacy',
    description: 'Sports facilities and physical education at JKKN College of Pharmacy. Indoor and outdoor sports, tournaments, fitness center, yoga, sports achievements and student wellness programs.',
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
    title: 'Sports & Physical Education | JKKN Pharmacy',
    description: 'Sports facilities and physical education at JKKN College of Pharmacy. Indoor and outdoor sports, tournaments, fitness center, yoga, sports achievements and student wellness programs.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function SportsLayout({
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
