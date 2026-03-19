import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Quality Policy | Academic Standards | JKKN Pharmacy',
  description: 'Quality policy at JKKN College of Pharmacy. Commitment to excellence in pharmaceutical education, continuous improvement, quality assurance and maintaining high academic standards.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/quality-policy/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/quality-policy/',
    title: 'Quality Policy | Academic Standards | JKKN Pharmacy',
    description: 'Quality policy at JKKN College of Pharmacy. Commitment to excellence in pharmaceutical education, continuous improvement, quality assurance and maintaining high academic standards.',
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
    title: 'Quality Policy | Academic Standards | JKKN Pharmacy',
    description: 'Quality policy at JKKN College of Pharmacy. Commitment to excellence in pharmaceutical education, continuous improvement, quality assurance and maintaining high academic standards.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function QualityPolicyLayout({
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
