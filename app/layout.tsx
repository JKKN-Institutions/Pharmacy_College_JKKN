import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import dynamic from 'next/dynamic'

// Lazy load below-the-fold components to reduce layout chunk size
const Footer = dynamic(() => import('@/components/Footer'))

const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'))

const BottomNavWrapper = dynamic(
  () => import('@/components/BottomNavWrapper').then(mod => ({ default: mod.BottomNavWrapper }))
)

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
        url: '/images/logo.png',
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
    images: ['/images/logo.png'],
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      {/* Google Analytics (GA4) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K89Q53LBEH"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K89Q53LBEH', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <body className={poppins.className} suppressHydrationWarning>
        {children}
        <Footer />
        <ScrollToTop />
        <BottomNavWrapper />
      </body>
    </html>
  )
}
