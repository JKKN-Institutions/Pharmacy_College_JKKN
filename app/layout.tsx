import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import FooterWrapper from '@/components/FooterWrapper'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { ConversionTracking } from '@/components/analytics/ConversionTracking'
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
  // NO site-wide canonical. It was `canonical: 'https://pharmacy.jkkn.ac.in/'` here, and because
  // metadata is inherited, EVERY page without its own canonical served it - measured 2026-08-31,
  // 162 of the 165 page.tsx files in this repo set no canonical of their own, and 32 of the URLs
  // in the live sitemap were confirmed serving <link rel="canonical" href="https://pharmacy.jkkn.ac.in/"/>.
  // /faculty/dr-karthika-j/ carried the title "Faculty | JKKN College of Pharmacy" and a canonical
  // pointing at the homepage, which asks Google to index a page that declares it is a different page.
  //
  // Removing it does NOT leave pages canonical-less in any harmful sense: with no rel=canonical,
  // Google treats the URL it fetched as canonical, which is the correct answer for every one of
  // these pages including the homepage. A page that needs a non-self canonical still sets its own.
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
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
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
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
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
        {/* llms.txt discovery. Nothing on this site pointed at either file, and GSC had no
            record of the URL at all (inspected 2026-09-03: "URL is unknown to Google").
            No engine has publicly committed to reading this rel, so treat it as a signal
            we can offer, not a mechanism we have measured working. */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="llms-full.txt" />
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
        <ConversionTracking />
        <SchemaValidatorDev />
        {children}
        <FooterWrapper />
      </body>
    </html>
  )
}
