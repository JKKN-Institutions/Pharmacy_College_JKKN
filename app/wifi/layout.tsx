import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Wi-Fi & Internet | Digital Campus | JKKN Pharmacy',
  description: 'Wi-Fi and internet facilities at JKKN College of Pharmacy. High-speed connectivity, digital learning resources.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/wifi/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/wifi/',
    title: 'Wi-Fi & Internet | Digital Campus | JKKN Pharmacy',
    description: 'Wi-Fi and internet facilities at JKKN College of Pharmacy. High-speed connectivity, digital learning resources.',
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
    title: 'Wi-Fi & Internet | Digital Campus | JKKN Pharmacy',
    description: 'Wi-Fi and internet facilities at JKKN College of Pharmacy. High-speed connectivity, digital learning resources.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function WiFiLayout({
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
