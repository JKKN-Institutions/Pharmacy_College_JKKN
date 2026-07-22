import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Trichy 2026 — Admission Open | JKKN',
  description: 'PCI-approved, NAAC-accredited residential pharmacy college 145 km from Trichy via Namakkal, in Komarapalayam. B.Pharm, M.Pharm & Pharm.D with hostel and 95%+ placements. Admissions open 2026-27 — call +91-9345855001.',
  keywords: [
    'pharmacy college near trichy',
    'pharmacy college in trichy',
    'b pharm colleges in trichy',
    'pharm d college trichy',
    'pharmacy college with hostel trichy',
    'jkkn pharmacy trichy',
    'residential pharmacy college tamil nadu',
    'pharmacy admission trichy 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/trichy/',
  },
  openGraph: {
    title: 'Pharmacy College near Trichy 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited residential pharmacy college 145 km from Trichy via Namakkal. B.Pharm, M.Pharm & Pharm.D with hostel and 95%+ placements. Admissions open 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/trichy/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Trichy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Trichy 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited residential pharmacy college 145 km from Trichy via Namakkal. B.Pharm, M.Pharm & Pharm.D with hostel and 95%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function TrichyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
