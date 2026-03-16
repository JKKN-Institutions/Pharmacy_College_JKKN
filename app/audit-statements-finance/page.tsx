'use client'

import { useEffect } from 'react'

export default function AuditStatementsFinancePage() {
  useEffect(() => {
    window.location.replace('/pdf/Audit-Statements-Finance.pdf')
  }, [])

  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
        Audit Statements &amp; Finance — JKKN College of Pharmacy
      </h1>
      <p className="text-gray-600 text-sm sm:text-base">Loading financial audit document...</p>
    </div>
  )
}
