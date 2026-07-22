import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Mettur 2026 — Admission Open | JKKN',
  description: 'PCI-approved, NAAC-accredited pharmacy college 45 km from Mettur via Bhavani, in Komarapalayam. B.Pharm, M.Pharm & Pharm.D with 95%+ placements. Admissions open 2026-27 — call +91-9345855001.',
  keywords: [
    'pharmacy college near mettur',
    'pharmacy college in mettur',
    'b pharm college near mettur',
    'pharm d college mettur',
    'pharmacy colleges in salem district',
    'jkkn pharmacy mettur',
    'pci approved pharmacy college salem',
    'pharmacy admission mettur 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/mettur/',
  },
  openGraph: {
    title: 'Pharmacy College near Mettur 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college 45 km from Mettur via Bhavani, in Komarapalayam. B.Pharm, M.Pharm & Pharm.D with 95%+ placements. Admissions open 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/mettur/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Mettur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Mettur 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college 45 km from Mettur via Bhavani, in Komarapalayam. B.Pharm, M.Pharm & Pharm.D with 95%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function MetturLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
