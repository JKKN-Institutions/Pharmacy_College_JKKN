'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HomepagePopup() {
  const [open, setOpen] = useState(true)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
      <div className="relative max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full">
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 z-10 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-lg hover:bg-gray-100"
          aria-label="Close popup"
        >
          ×
        </button>
        <a
          href="https://www.jkkn.ai/apply/jkkn-admission-2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/pharmacy-pop-up-poster.jpg"
            alt="JKKN Admissions Open 2026-27"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg cursor-pointer"
            priority
          />
        </a>
      </div>
    </div>
  )
}
