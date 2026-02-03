'use client'

import { useEffect } from 'react'

export default function VariousCommitteesPage() {
  useEffect(() => {
    window.location.replace('/pdf/Various-Committees.pdf')
  }, [])

  return null
}
