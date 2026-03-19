import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Barrier-Free Campus | Accessible | JKKN Pharmacy',
  description: 'Barrier-free environment and accessibility features at JKKN College of Pharmacy. Ramps, accessible toilets, assistive devices and inclusive infrastructure for differently-abled.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/barrier-free-environment/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/barrier-free-environment/',
    title: 'Barrier-Free Campus | Accessible | JKKN Pharmacy',
    description: 'Barrier-free environment and accessibility features at JKKN College of Pharmacy. Ramps, accessible toilets, assistive devices and inclusive infrastructure for differently-abled.',
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
    title: 'Barrier-Free Campus | Accessible | JKKN Pharmacy',
    description: 'Barrier-free environment and accessibility features at JKKN College of Pharmacy. Ramps, accessible toilets, assistive devices and inclusive infrastructure for differently-abled.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function BarrierFreeEnvironmentLayout({
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
