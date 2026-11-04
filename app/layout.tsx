import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import FooterWrapper from '@/components/FooterWrapper'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { ConversionTracking } from '@/components/analytics/ConversionTracking'
import { OrganizationSchema } from '@/components/SchemaOrg'
import { EnquiryModalProvider } from '@/components/lead/EnquiryModal'
import dynamic from 'next/dynamic'

// ANALYTICS_OFF=1 at build time is for a LOCAL test build only (the 2026-11-04 test of the Call /
// WhatsApp gate runs `next start` on this laptop). Vercel never sets it.
const IS_PRODUCTION_BUILD =
  process.env.NODE_ENV === 'production' && process.env.ANALYTICS_OFF !== '1'

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
  // iPhone Safari turns any phone number in plain text into a dial link of its own, which skipped
  // the Call / WhatsApp form gate (2026-11-04, same as the Dental site: those taps must also go
  // form -> dialer). Off here; EnquiryModal's plain-number tap listener takes those taps instead.
  formatDetection: { telephone: false },
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
      {/* Analytics load only in a real production build (2026-11-04): a local test - the Call /
          WhatsApp gate test included - must not write test taps into the live GA4 property or the
          Meta pixel. Vercel production and preview builds are unaffected. */}
      {/* Google Analytics (GA4) — tracks SPA route changes */}
      {IS_PRODUCTION_BUILD && <GoogleAnalytics />}
      {/* Meta Pixel */}
      {IS_PRODUCTION_BUILD && (
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
      )}
      <body className={poppins.className} suppressHydrationWarning>
        {IS_PRODUCTION_BUILD && (
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=726400952116492&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        )}
        <OrganizationSchema />
        <ConversionTracking />
        <SchemaValidatorDev />
        {/* The enquiry modal provider wraps every page (user's choice 2026-10-22), so the header
            "Enquire Now" and every jkkn.ai apply link open the same 3-box form everywhere, not only
            on the homepage. Before, every other page fell back to the jkkn.ai link (6 boxes, the
            college picked again). A "use client" provider can sit in this server layout. */}
        <EnquiryModalProvider>
          {children}
          <FooterWrapper />
        </EnquiryModalProvider>
      </body>
    </html>
  )
}
