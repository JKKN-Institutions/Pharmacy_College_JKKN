import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Institutional Development Plan | JKKN Pharmacy',
  description: 'Institutional Development Plan of JKKN College of Pharmacy. Strategic roadmap, infrastructure development, academic enhancement and future growth initiatives.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/institutional-development-plan/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/institutional-development-plan/',
    title: 'Institutional Development Plan | JKKN Pharmacy',
    description: 'Institutional Development Plan of JKKN College of Pharmacy. Strategic roadmap, infrastructure development, academic enhancement and future growth initiatives.',
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
    title: 'Institutional Development Plan | JKKN Pharmacy',
    description: 'Institutional Development Plan of JKKN College of Pharmacy. Strategic roadmap, infrastructure development, academic enhancement and future growth initiatives.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function InstitutionalDevelopmentPlanLayout({
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
