'use client'

import { useEffect } from 'react'

export default function UGCPublicDisclosureCompliancePage() {
  useEffect(() => {
    window.location.replace('/pdf/UGC-PUBLIC-DISCLOSURE-COMPLIANCE-LETTER.pdf')
  }, [])

  return null
}
