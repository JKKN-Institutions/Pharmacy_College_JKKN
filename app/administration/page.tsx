'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdministrationPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the PDF file immediately
    window.location.replace('/pdf/administration.pdf')
  }, [])

  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
        Administration — JKKN College of Pharmacy
      </h1>
      <p className="text-gray-600 text-sm sm:text-base">Loading administration document...</p>
    </div>
  )
}
