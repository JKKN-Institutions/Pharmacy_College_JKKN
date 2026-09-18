import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Committees and Cells | Anti-Ragging, Grievance, ICC | JKKN Pharmacy',
  description: 'Statutory committees and cells at JKKN College of Pharmacy: anti-ragging, discipline, internal complaints, student grievance redressal, equal opportunity, malpractice prevention, sports and cultural.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/committee/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/committee/',
    title: 'Committees and Cells | Anti-Ragging, Grievance, ICC | JKKN Pharmacy',
    description: 'Statutory committees and cells at JKKN College of Pharmacy: anti-ragging, discipline, internal complaints, student grievance redressal, equal opportunity, malpractice prevention, sports and cultural.',
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
    title: 'Committees and Cells | Anti-Ragging, Grievance, ICC | JKKN Pharmacy',
    description: 'Statutory committees and cells at JKKN College of Pharmacy: anti-ragging, discipline, internal complaints, student grievance redressal, equal opportunity, malpractice prevention, sports and cultural.',
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
