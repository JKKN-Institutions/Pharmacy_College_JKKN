import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Pharmacy Admission 2026 | B.Pharm Pharm.D | JKKN',
  description: 'Apply for pharmacy admission at JKKN in 2026. Application fee ₹1,000, forms open May-June. Step-by-step B.Pharm, M.Pharm, Pharm.D admission guide.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/admissions/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/admissions/',
    title: 'Pharmacy Admission 2026 | B.Pharm Pharm.D | JKKN',
    description: 'Apply for pharmacy admission at JKKN in 2026. Application fee ₹1,000, forms open May-June. Step-by-step B.Pharm, M.Pharm, Pharm.D admission guide.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy Admission 2026 | B.Pharm Pharm.D | JKKN',
    description: 'Apply for pharmacy admission at JKKN in 2026. Application fee ₹1,000, forms open May-June. Step-by-step B.Pharm, M.Pharm, Pharm.D admission guide.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function AdmissionProcessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* HowTo + WebPage JSON-LD moved to page.tsx on 2026-09-18: from a layout they were inherited by /admissions/b.pharm, /m.pharm and /pharm.d, which carry their own, so each of those pages published two HowTo and two WebPage nodes. */}
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
