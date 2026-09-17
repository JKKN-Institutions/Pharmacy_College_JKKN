import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Campus Facilities | Library, Labs, Hostel, Transport | JKKN Pharmacy',
  description: 'Campus facilities at JKKN College of Pharmacy: learning labs and studios, library, hostel, transport, health and ambulance services, sports, food court, Wi-Fi and the NSS unit.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/facilities/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/facilities/',
    title: 'Campus Facilities | Library, Labs, Hostel, Transport | JKKN Pharmacy',
    description: 'Campus facilities at JKKN College of Pharmacy: learning labs and studios, library, hostel, transport, health and ambulance services, sports, food court, Wi-Fi and the NSS unit.',
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
    title: 'Campus Facilities | Library, Labs, Hostel, Transport | JKKN Pharmacy',
    description: 'Campus facilities at JKKN College of Pharmacy: learning labs and studios, library, hostel, transport, health and ambulance services, sports, food court, Wi-Fi and the NSS unit.',
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
