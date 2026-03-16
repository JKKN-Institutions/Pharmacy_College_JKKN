import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Photo Gallery | Campus Life at JKKN Pharmacy College',
  description: 'View photos of JKKN College of Pharmacy — campus infrastructure, laboratories, classrooms, events, cultural activities, sports, convocation ceremonies and vibrant student life.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/gallery/',
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
