import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import { BottomNavWrapper } from '@/components/BottomNavWrapper'
import ScrollToTop from '@/components/ScrollToTop'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JKKN College of Pharmacy',
  description: 'JKKN College of Pharmacy Official Website',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning>
        {children}
        <Footer />
        <ScrollToTop />
        <BottomNavWrapper />
      </body>
    </html>
  )
}
