import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Interdisciplinary Research | JKKN Pharmacy',
  description: 'Interdisciplinary research at JKKN College of Pharmacy. Cross-departmental collaborations, multi-disciplinary projects.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/interdisciplinary-research/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/interdisciplinary-research/',
    title: 'Interdisciplinary Research | JKKN Pharmacy',
    description: 'Interdisciplinary research at JKKN College of Pharmacy. Cross-departmental collaborations, multi-disciplinary projects.',
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
    title: 'Interdisciplinary Research | JKKN Pharmacy',
    description: 'Interdisciplinary research at JKKN College of Pharmacy. Cross-departmental collaborations, multi-disciplinary projects.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function InterdisciplinaryResearchLayout({
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
