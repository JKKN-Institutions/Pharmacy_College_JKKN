import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Bhavani 2026 — Admission Open | JKKN',
  description: 'PCI-approved, NAAC-accredited pharmacy college just 5 km from Bhavani, across the Kaveri in Komarapalayam. B.Pharm, M.Pharm & Pharm.D with 95%+ placements. Admissions open 2026-27 — call +91-9345855001.',
  keywords: [
    'pharmacy college near bhavani',
    'pharmacy college in bhavani',
    'b pharm college near bhavani',
    'pharm d college bhavani',
    'pharmacy colleges in erode district',
    'jkkn pharmacy bhavani',
    'pci approved pharmacy college komarapalayam',
    'pharmacy admission bhavani 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/bhavani/',
  },
  openGraph: {
    title: 'Pharmacy College near Bhavani 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college just 5 km from Bhavani in Komarapalayam. B.Pharm, M.Pharm & Pharm.D with 95%+ placements. Admissions open 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/bhavani/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Bhavani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Bhavani 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college just 5 km from Bhavani in Komarapalayam. B.Pharm, M.Pharm & Pharm.D with 95%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function BhavaniLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
