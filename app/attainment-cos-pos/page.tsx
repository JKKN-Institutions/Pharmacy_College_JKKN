'use client'

import { useEffect } from 'react'

export default function AttainmentCosPos() {
  useEffect(() => {
    window.location.replace('/pdf/ATTAINMENT-OF-COs-AND-POs.pdf')
  }, [])

  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
        Attainment of Course Outcomes &amp; Programme Outcomes — JKKN College of Pharmacy
      </h1>
      <p className="text-gray-600 text-sm sm:text-base">Loading attainment of COs and POs document...</p>
    </div>
  )
}
