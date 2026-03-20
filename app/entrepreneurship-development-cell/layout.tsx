import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Entrepreneurship Cell | Startup Incubation | JKKN Pharmacy',
  description: 'Entrepreneurship Development Cell fostering innovation and startups at JKKN Pharmacy College.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/entrepreneurship-development-cell/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/entrepreneurship-development-cell/',
    title: 'Entrepreneurship Cell | Startup Incubation | JKKN Pharmacy',
    description: 'Entrepreneurship Development Cell fostering innovation and startups at JKKN Pharmacy College.',
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
    title: 'Entrepreneurship Cell | Startup Incubation | JKKN Pharmacy',
    description: 'Entrepreneurship Development Cell fostering innovation and startups at JKKN Pharmacy College.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function EntrepreneurshipDevelopmentCellLayout({
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
