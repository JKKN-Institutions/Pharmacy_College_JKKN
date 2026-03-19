import { Metadata} from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Sports Committee | Athletics & Games | JKKN',
  description: 'Sports committee at JKKN College of Pharmacy. Organizing sports events, inter-college tournaments, athletics, games competitions and promoting physical fitness.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/sports-committee/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/sports-committee/',
    title: 'Sports Committee | Athletics & Games | JKKN',
    description: 'Sports committee at JKKN College of Pharmacy. Organizing sports events, inter-college tournaments, athletics, games competitions and promoting physical fitness.',
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
    title: 'Sports Committee | Athletics & Games | JKKN',
    description: 'Sports committee at JKKN College of Pharmacy. Organizing sports events, inter-college tournaments, athletics, games competitions and promoting physical fitness.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function SportsCommitteeLayout({
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
