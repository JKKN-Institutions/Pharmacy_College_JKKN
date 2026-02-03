'use client'

import { useEffect } from 'react'

export default function FacultyProfilePage() {
  useEffect(() => {
    window.location.replace('/pdf/FACULTY-PROFILE.pdf')
  }, [])

  return null
}
