'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CPIOPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the PDF file immediately
    window.location.replace('/pdf/Central-Public-Information-Officer.pdf')
  }, [])

  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
        Central Public Information Officer (CPIO) — JKKN College of Pharmacy
      </h1>
      <p className="text-gray-600 text-sm sm:text-base">Loading CPIO document...</p>
    </div>
  )
}
