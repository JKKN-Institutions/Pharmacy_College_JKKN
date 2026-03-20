import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Hostel | Boys & Girls Hostel | JKKN Pharmacy',
  description: 'Separate hostel facilities for boys and girls at JKKN College of Pharmacy. Comfortable rooms, mess facility, 24/7 security.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/hostel/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/hostel/',
    title: 'Hostel | Boys & Girls Hostel | JKKN Pharmacy',
    description: 'Separate hostel facilities for boys and girls at JKKN College of Pharmacy. Comfortable rooms, mess facility, 24/7 security.',
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
    title: 'Hostel | Boys & Girls Hostel | JKKN Pharmacy',
    description: 'Separate hostel facilities for boys and girls at JKKN College of Pharmacy. Comfortable rooms, mess facility, 24/7 security.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function HostelLayout({
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
