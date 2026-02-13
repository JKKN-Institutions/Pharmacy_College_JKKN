import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'
import { BottomNavWrapper } from '@/components/BottomNavWrapper'
import ScrollToTop from '@/components/ScrollToTop'

// Lazy load Footer component as it's below the fold
const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true,
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pharmacy.jkkn.ac.in'),
  title: 'JKKN College of Pharmacy, Komarapalayam | NAAC A Grade | PCI Approved',
  description: 'Is JKKN College of Pharmacy good? What pharmacy courses are offered at JKKN? Premier Pharmacy College in Tamil Nadu offering B.Pharm, M.Pharm, Pharm.D & PhD programmes since 1987. NAAC A Grade accredited, PCI approved, 95% placement record (2024-25) with top pharma recruiters like Sun Pharma, Cipla. State-of-the-art facilities in Komarapalayam.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in',
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in',
    title: 'JKKN College of Pharmacy, Komarapalayam | NAAC A Grade | PCI Approved',
    description: 'Is JKKN College of Pharmacy good? What pharmacy courses are offered at JKKN? Premier Pharmacy College in Tamil Nadu offering B.Pharm, M.Pharm, Pharm.D & PhD programmes since 1987. NAAC A Grade accredited, PCI approved, 95% placement record (2024-25) with top pharma recruiters like Sun Pharma, Cipla. State-of-the-art facilities in Komarapalayam.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy Campus - NAAC A Grade, PCI Approved',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jkknpharmacy',
    title: 'JKKN College of Pharmacy, Komarapalayam | NAAC A Grade | PCI Approved',
    description: 'Is JKKN College of Pharmacy good? What pharmacy courses are offered at JKKN? Premier Pharmacy College in Tamil Nadu offering B.Pharm, M.Pharm, Pharm.D & PhD programmes since 1987. NAAC A Grade accredited, PCI approved, 95% placement record (2024-25) with top pharma recruiters like Sun Pharma, Cipla. State-of-the-art facilities in Komarapalayam.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
      </head>
      <body className={poppins.className} suppressHydrationWarning>
        {children}
        <Footer />
        <ScrollToTop />
        <BottomNavWrapper />
      </body>
    </html>
  )
}
