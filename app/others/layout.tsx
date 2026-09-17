import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Careers, Clubs and Policies | JKKN Pharmacy',
  description: 'Careers, senior learners, best practice, competitive examination support, digital campus, social work units, innovation and entrepreneurship cells, and policy documents at JKKN College of Pharmacy.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/others/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/others/',
    title: 'Careers, Clubs and Policies | JKKN Pharmacy',
    description: 'Careers, senior learners, best practice, competitive examination support, digital campus, social work units, innovation and entrepreneurship cells, and policy documents at JKKN College of Pharmacy.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy - PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers, Clubs and Policies | JKKN Pharmacy',
    description: 'Careers, senior learners, best practice, competitive examination support, digital campus, social work units, innovation and entrepreneurship cells, and policy documents at JKKN College of Pharmacy.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
