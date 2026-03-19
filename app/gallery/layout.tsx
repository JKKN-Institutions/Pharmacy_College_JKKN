import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Photo Gallery | Campus Life at JKKN Pharmacy College',
  description: 'View photos of JKKN College of Pharmacy — campus infrastructure, laboratories, classrooms, events, cultural activities, sports, convocation ceremonies and vibrant student life.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/gallery/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/gallery/',
    title: 'Photo Gallery | Campus Life at JKKN Pharmacy College',
    description: 'View photos of JKKN College of Pharmacy — campus infrastructure, laboratories, classrooms, events, cultural activities, sports, convocation ceremonies and vibrant student life.',
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
    title: 'Photo Gallery | Campus Life at JKKN Pharmacy College',
    description: 'View photos of JKKN College of Pharmacy — campus infrastructure, laboratories, classrooms, events, cultural activities, sports, convocation ceremonies and vibrant student life.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function GalleryLayout({
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
