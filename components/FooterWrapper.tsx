'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { BottomNavWrapper } from '@/components/BottomNavWrapper';
import ScrollToTop from '@/components/ScrollToTop';

const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function FooterWrapper() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;
  return (
    <>
      <Footer />
      <ScrollToTop />
      <BottomNavWrapper />
    </>
  );
}
