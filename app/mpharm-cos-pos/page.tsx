'use client'

import { useEffect } from 'react'

export default function MPharmCosPosPage() {
  useEffect(() => {
    window.location.replace('/pdf/COs-POs-M.PHARM.pdf')
  }, [])

  return null
}
