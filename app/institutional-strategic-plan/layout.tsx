import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Strategic Plan | Vision 2030 | JKKN College of Pharmacy',
  description: 'Institutional strategic plan of JKKN College of Pharmacy. Long-term vision, strategic goals, academic excellence roadmap and growth strategy for pharmaceutical education.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/institutional-strategic-plan/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/institutional-strategic-plan/',
    title: 'Strategic Plan | Vision 2030 | JKKN College of Pharmacy',
    description: 'Institutional strategic plan of JKKN College of Pharmacy. Long-term vision, strategic goals, academic excellence roadmap and growth strategy for pharmaceutical education.',
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
    title: 'Strategic Plan | Vision 2030 | JKKN College of Pharmacy',
    description: 'Institutional strategic plan of JKKN College of Pharmacy. Long-term vision, strategic goals, academic excellence roadmap and growth strategy for pharmaceutical education.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function InstitutionalStrategicPlanLayout({
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
