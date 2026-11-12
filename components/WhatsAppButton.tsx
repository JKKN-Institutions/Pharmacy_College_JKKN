'use client';

// Floating WhatsApp button on every page (user's choice 2026-11-13: "Ella page laiyum podu", same as
// Dental's components/WhatsAppButton.tsx). This component existed but was mounted nowhere, so the
// only WhatsApp links were small text on the 4 admission pages.
//
// The number is the admission line +91 93458 55001, so the Call / WhatsApp gate in EnquiryModal
// catches the tap: the 3-box form opens first, the lead goes to the CRM, then WhatsApp opens.
// ConversionTracking counts the tap as whatsapp_click because it is a wa.me link.
//
// Sits above ScrollToTop (bottom-20 / lg:bottom-6, 40 px) with a gap on both phone and desktop, and
// clear of the mobile bottom bar.

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919345855001?text=Hi%2C%20I%20would%20like%20to%20know%20about%20pharmacy%20admissions%20at%20JKKN."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-32 lg:bottom-20 right-4 z-50 w-12 h-12 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Chat with the admission team on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C8.86 3 3.02 8.83 3.02 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A13 13 0 0 0 16.04 29C23.2 29 29.04 23.17 29.04 16S23.2 3 16.04 3Zm0 23.8c-2 0-3.95-.54-5.65-1.55l-.4-.24-3.97 1.04 1.06-3.86-.26-.4A10.76 10.76 0 0 1 5.24 16c0-5.95 4.85-10.79 10.8-10.79 5.95 0 10.79 4.84 10.79 10.79 0 5.96-4.84 10.8-10.79 10.8Zm5.92-8.08c-.32-.16-1.91-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.65.15-.15.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.58 1.16 3.12 1.32 3.33.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
