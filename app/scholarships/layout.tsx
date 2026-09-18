import { Metadata } from 'next'

// page.tsx is a client component and cannot export metadata, so until 2026-09-18 this
// route inherited the ROOT layout's title and canonical (the homepage's). Measured live
// 2026-09-18: <title> "Best Pharmacy Colleges in Tamil Nadu" and no canonical of its own.
export const metadata: Metadata = {
  title: 'Scholarships | JKKN College of Pharmacy',
  description:
    'Scholarships available to JKKN College of Pharmacy learners: Tamil Nadu Government post-matric and BC/MBC/DNC schemes, the AICTE GPAT stipend for M.Pharm, and merit awards. Amounts are fixed by the awarding body.',
  alternates: { canonical: 'https://pharmacy.jkkn.ac.in/scholarships/' },
  openGraph: {
    title: 'Scholarships | JKKN College of Pharmacy',
    description:
      'Government, AICTE and merit scholarships available to pharmacy learners at JKKN College of Pharmacy, Komarapalayam.',
    url: 'https://pharmacy.jkkn.ac.in/scholarships/',
    siteName: 'JKKN College of Pharmacy',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function ScholarshipsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
