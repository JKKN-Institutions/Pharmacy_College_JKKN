import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Dharmapuri 2026 — Admission Open | JKKN',
  description: 'PCI-approved, NAAC-accredited residential pharmacy college 100 km from Dharmapuri via Salem. B.Pharm, M.Pharm & Pharm.D with hostel and 95%+ placements. Admissions open 2026-27 — call +91-9345855001.',
  keywords: [
    'pharmacy college near dharmapuri',
    'pharmacy college in dharmapuri',
    'b pharm college near dharmapuri',
    'pharm d college dharmapuri',
    'pharmacy college with hostel dharmapuri',
    'jkkn pharmacy dharmapuri',
    'pci approved pharmacy college near dharmapuri',
    'pharmacy admission dharmapuri 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/dharmapuri/',
  },
  openGraph: {
    title: 'Pharmacy College near Dharmapuri 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited residential pharmacy college 100 km from Dharmapuri via Salem. B.Pharm, M.Pharm & Pharm.D with hostel and 95%+ placements. Admissions open 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/dharmapuri/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Dharmapuri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Dharmapuri 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited residential pharmacy college 100 km from Dharmapuri via Salem. B.Pharm, M.Pharm & Pharm.D with hostel and 95%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function DharmapuriLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
