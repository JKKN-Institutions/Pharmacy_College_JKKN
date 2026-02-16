import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Best Pharm D Colleges in Tamilnadu | JKKN Pharmacy College',
  description: 'Looking for the best Pharm D colleges in Tamilnadu? JKKN offers a 6-year PCI-approved Pharm.D course — a top Pharm.D college. Admissions Open 2026-27!',
  keywords: [
    'best pharm d colleges in tamilnadu',
    'pharm d colleges in tamilnadu',
    'pharm d course in tamilnadu',
    'pharm d course details in tamil nadu',
    'pharm d course colleges in tamilnadu',
    'pharm d best colleges in tamilnadu',
    'pharm d college in tamilnadu',
    'best college for pharm d in tamilnadu',
    'top pharm d colleges in tamilnadu',
    'pharm d top colleges in tamilnadu',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharm-d',
  },
  openGraph: {
    title: 'Best Pharm D Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'Looking for the best Pharm D colleges in Tamilnadu? JKKN offers a 6-year PCI-approved Pharm.D course — a top Pharm.D college. Admissions Open 2026-27!',
    url: 'https://pharmacy.jkkn.ac.in/pharm-d',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Best Pharm.D College in Tamilnadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pharm D Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'Looking for the best Pharm D colleges in Tamilnadu? JKKN offers a 6-year PCI-approved Pharm.D course — a top Pharm.D college. Admissions Open 2026-27!',
    images: ['/og-image.jpg'],
  },
}

export default function PharmDLayout({
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
