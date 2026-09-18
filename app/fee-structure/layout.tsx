import { Metadata } from 'next'

// page.tsx is a client component and cannot export metadata, so until 2026-09-18 this
// route inherited the ROOT layout's title and canonical: Google Search Console read its
// user-declared canonical as "https://pharmacy.jkkn.ac.in/" and its <title> was the
// homepage's "Best Pharmacy Colleges in Tamil Nadu". A fee page that declares itself to
// be the homepage is a page that asks not to be indexed on its own.
export const metadata: Metadata = {
  title: 'Fee Structure 2026-27 | JKKN College of Pharmacy',
  description:
    'Management-quota tuition fees for 2026-27 at JKKN College of Pharmacy, Komarapalayam: B.Pharm, B.Pharm Lateral Entry, Pharm.D, Pharm.D (PB) and M.Pharm. Government-quota fees follow Tamil Nadu Government norms.',
  alternates: { canonical: 'https://pharmacy.jkkn.ac.in/fee-structure/' },
  openGraph: {
    title: 'Fee Structure 2026-27 | JKKN College of Pharmacy',
    description:
      'Tuition fees per programme for the 2026-27 academic year at JKKN College of Pharmacy, Komarapalayam.',
    url: 'https://pharmacy.jkkn.ac.in/fee-structure/',
    siteName: 'JKKN College of Pharmacy',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function FeeStructureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
