import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Red Ribbon Club | HIV/AIDS Awareness | JKKN',
  description: 'Red Ribbon Club at JKKN College of Pharmacy. HIV/AIDS awareness, health campaigns, blood donation drives and social responsibility activities for students.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/red-ribbon-club/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/red-ribbon-club/',
    title: 'Red Ribbon Club | HIV/AIDS Awareness | JKKN',
    description: 'Red Ribbon Club at JKKN College of Pharmacy. HIV/AIDS awareness, health campaigns, blood donation drives and social responsibility activities for students.',
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
    title: 'Red Ribbon Club | HIV/AIDS Awareness | JKKN',
    description: 'Red Ribbon Club at JKKN College of Pharmacy. HIV/AIDS awareness, health campaigns, blood donation drives and social responsibility activities for students.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function RedRibbonClubLayout({
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
