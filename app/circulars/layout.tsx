import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Circulars & Notifications | JKKN Pharmacy College',
  description: 'Latest circulars, notifications and announcements from JKKN College of Pharmacy. Academic circulars, exam notifications and updates.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/circulars/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/circulars/',
    title: 'Circulars & Notifications | JKKN Pharmacy College',
    description: 'Latest circulars, notifications and announcements from JKKN College of Pharmacy. Academic circulars, exam notifications and updates.',
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
    title: 'Circulars & Notifications | JKKN Pharmacy College',
    description: 'Latest circulars, notifications and announcements from JKKN College of Pharmacy. Academic circulars, exam notifications and updates.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function CircularsLayout({
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
