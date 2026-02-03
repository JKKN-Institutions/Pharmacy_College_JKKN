'use client'

import { useEffect } from 'react'

export default function AuditStatementsFinancePage() {
  useEffect(() => {
    window.location.replace('/pdf/Audit-Statements-Finance.pdf')
  }, [])

  return null
}
