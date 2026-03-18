'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919345855001?text=Hi%2C%20I%20would%20like%20to%20know%20about%20pharmacy%20admissions%20at%20JKKN."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-32 lg:bottom-16 right-4 z-50 w-12 h-12 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
