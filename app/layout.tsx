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
  title: 'Best Pharmacy Colleges in Tamilnadu | JKKN Pharmacy College',
  description: 'JKKN College of Pharmacy — among the best pharmacy colleges in Tamilnadu. A top college for pharmacy, PCI approved & NAAC A Grade. Admissions Open 2026-27!',
  keywords: [
    'best pharmacy colleges in tamilnadu',
    'top pharmacy colleges in tamilnadu',
    'best colleges for pharmacy',
    'pharmacy colleges in tamilnadu',
    'top 10 pharmacy colleges in tamilnadu',
    'best college for pharmacy in tamilnadu',
  ],
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
    canonical: 'https://pharmacy.jkkn.ac.in/',
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
    url: 'https://pharmacy.jkkn.ac.in/',
    title: 'Best Pharmacy Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'JKKN College of Pharmacy — among the best pharmacy colleges in Tamilnadu. A top college for pharmacy, PCI approved & NAAC A Grade. Admissions Open 2026-27!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Best Pharmacy College in Tamilnadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jkknpharmacy',
    title: 'Best Pharmacy Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'JKKN College of Pharmacy — among the best pharmacy colleges in Tamilnadu. A top college for pharmacy, PCI approved & NAAC A Grade. Admissions Open 2026-27!',
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
