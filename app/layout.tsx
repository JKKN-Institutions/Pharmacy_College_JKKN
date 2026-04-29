import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import FooterWrapper from '@/components/FooterWrapper'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { OrganizationSchema } from '@/components/SchemaOrg'
import dynamic from 'next/dynamic'

const SchemaValidatorDev = process.env.NODE_ENV === 'development'
  ? dynamic(() => import('@/components/SchemaValidatorDev'))
  : () => null

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pharmacy.jkkn.ac.in'),
  title: 'Best Pharmacy Colleges in Tamil Nadu | JKKN Pharmacy College',
  description: 'PCI-approved, NAAC A Grade pharmacy college in Tamil Nadu. B.Pharm, M.Pharm, Pharm.D & Ph.D at JKKN College of Pharmacy. Admissions Open 2026-27.',
  keywords: [
    'best pharmacy colleges in tamilnadu',
    'top pharmacy colleges in tamilnadu',
    'best colleges for pharmacy',
    'pharmacy colleges in tamilnadu',
    'top 10 pharmacy colleges in tamilnadu',
    'best college for pharmacy in tamilnadu',
    'pharmacy college near Salem',
    'pharmacy college near Erode',
    'pharmacy college Komarapalayam',
    'B.Pharm admission 2026',
    'Pharm.D admission Tamil Nadu',
    'PCI approved pharmacy college Tamil Nadu',
    'NAAC A grade pharmacy college',
    'JKKN pharmacy college',
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
  other: {
    'last-modified': '2026-03-24',
    'article:modified_time': '2026-03-24',
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
    title: 'Best Pharmacy Colleges in Tamil Nadu | JKKN Pharmacy College',
    description: 'PCI-approved, NAAC A Grade pharmacy college in Tamil Nadu. B.Pharm, M.Pharm, Pharm.D & Ph.D at JKKN College of Pharmacy. Admissions Open 2026-27.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jkknpharmacy',
    title: 'Best Pharmacy Colleges in Tamil Nadu | JKKN Pharmacy College',
    description: 'PCI-approved, NAAC A Grade pharmacy college in Tamil Nadu. B.Pharm, M.Pharm, Pharm.D & Ph.D at JKKN College of Pharmacy. Admissions Open 2026-27.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
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
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </head>
      {/* Google Analytics (GA4) — tracks SPA route changes */}
      <GoogleAnalytics />
      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '726400952116492');
          fbq('track', 'PageView');
        `}
      </Script>
      <body className={poppins.className} suppressHydrationWarning>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=726400952116492&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <OrganizationSchema />
        <SchemaValidatorDev />
        {children}
        <FooterWrapper />
      </body>
    </html>
  )
}
