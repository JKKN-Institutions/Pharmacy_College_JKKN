import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Anti-Ragging Committee | Safe Campus | JKKN',
  description: 'Anti-ragging committee at JKKN Pharmacy. Ragging-free campus, complaint mechanism and student safety.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/anti-ragging-committee/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/anti-ragging-committee/',
    title: 'Anti-Ragging Committee | Safe Campus | JKKN',
    description: 'Anti-ragging committee at JKKN Pharmacy. Ragging-free campus, complaint mechanism and student safety.',
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
    title: 'Anti-Ragging Committee | Safe Campus | JKKN',
    description: 'Anti-ragging committee at JKKN Pharmacy. Ragging-free campus, complaint mechanism and student safety.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function AntiRaggingCommitteeLayout({
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
