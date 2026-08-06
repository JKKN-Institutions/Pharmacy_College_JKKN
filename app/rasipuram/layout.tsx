import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Rasipuram 2026 — Admission Open | JKKN',
  description: 'PCI-approved, NAAC-accredited pharmacy college in Namakkal district, 60 km from Rasipuram via Tiruchengode. B.Pharm, M.Pharm & Pharm.D, hostel available. Admissions open 2026-27 — call +91-9345855001.',
  keywords: [
    'pharmacy college near rasipuram',
    'pharmacy college in rasipuram',
    'b pharm college near rasipuram',
    'pharm d college rasipuram',
    'pharmacy colleges in namakkal district',
    'jkkn pharmacy rasipuram',
    'pci approved pharmacy college namakkal',
    'pharmacy admission rasipuram 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/rasipuram/',
  },
  openGraph: {
    title: 'Pharmacy College near Rasipuram 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college in Namakkal district, 60 km from Rasipuram. B.Pharm, M.Pharm & Pharm.D, hostel available. Admissions open 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/rasipuram/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Rasipuram',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Rasipuram 2026 — Admission Open | JKKN',
    description: 'PCI-approved, NAAC-accredited pharmacy college in Namakkal district, 60 km from Rasipuram. B.Pharm, M.Pharm & Pharm.D, hostel available.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function RasipuramLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
