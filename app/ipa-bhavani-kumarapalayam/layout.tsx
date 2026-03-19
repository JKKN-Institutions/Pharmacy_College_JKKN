import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'IPA Bhavani-Komarapalayam | Pharmacy Association',
  description: 'Indian Pharmaceutical Association (IPA) Bhavani-Komarapalayam branch at JKKN College of Pharmacy. Professional networking, continuing education, conferences and practice development.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/ipa-bhavani-kumarapalayam/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/ipa-bhavani-kumarapalayam/',
    title: 'IPA Bhavani-Komarapalayam | Pharmacy Association',
    description: 'Indian Pharmaceutical Association (IPA) Bhavani-Komarapalayam branch at JKKN College of Pharmacy. Professional networking, continuing education, conferences and practice development.',
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
    title: 'IPA Bhavani-Komarapalayam | Pharmacy Association',
    description: 'Indian Pharmaceutical Association (IPA) Bhavani-Komarapalayam branch at JKKN College of Pharmacy. Professional networking, continuing education, conferences and practice development.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function IPABhavaniKomarapalayamLayout({
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
