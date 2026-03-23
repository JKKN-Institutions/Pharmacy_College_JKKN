'use client'

// DEV-5: Development-only JSON-LD schema validator
// Warns about placeholder values, duplicate schema types, and missing required properties
// This component renders nothing — side-effects only via useEffect

import { useEffect } from 'react'

export default function SchemaValidatorDev() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return

    const scripts = Array.from(
      document.querySelectorAll('script[type="application/ld+json"]')
    )

    if (scripts.length === 0) return

    const typeCounts: Record<string, number> = {}

    scripts.forEach((script, i) => {
      let parsed: Record<string, unknown>
      try {
        parsed = JSON.parse(script.textContent || '{}')
      } catch {
        console.warn(`[SchemaValidator] Script #${i + 1}: Invalid JSON-LD — parse error`)
        return
      }

      const schemaType = parsed['@type']
      const typeKey = Array.isArray(schemaType) ? schemaType.join('+') : String(schemaType)

      // Check for duplicate @type
      typeCounts[typeKey] = (typeCounts[typeKey] || 0) + 1

      // Check for placeholder values recursively
      const jsonStr = script.textContent || ''
      if (jsonStr.includes('YOUR_') || jsonStr.includes('PLACEHOLDER') || jsonStr.includes('TODO')) {
        console.warn(
          `[SchemaValidator] Schema @type="${typeKey}" contains placeholder values (YOUR_*, PLACEHOLDER, TODO). Replace with real data.`
        )
      }

      // Check required fields for common types
      if (typeKey === 'FAQPage') {
        const entities = parsed['mainEntity']
        if (!entities || (Array.isArray(entities) && entities.length === 0)) {
          console.warn(`[SchemaValidator] FAQPage schema is missing mainEntity questions.`)
        }
      }

      if (typeKey === 'Course') {
        if (!parsed['name']) console.warn(`[SchemaValidator] Course schema missing required "name".`)
        if (!parsed['description']) console.warn(`[SchemaValidator] Course schema missing required "description".`)
        if (!parsed['provider']) console.warn(`[SchemaValidator] Course schema missing required "provider".`)
      }

      if (typeKey === 'BlogPosting' || typeKey === 'Article') {
        if (!parsed['headline']) console.warn(`[SchemaValidator] ${typeKey} schema missing required "headline".`)
        if (!parsed['author']) console.warn(`[SchemaValidator] ${typeKey} schema missing required "author".`)
        if (!parsed['datePublished']) console.warn(`[SchemaValidator] ${typeKey} schema missing required "datePublished".`)
      }
    })

    // Warn about duplicate schema types
    Object.entries(typeCounts).forEach(([type, count]) => {
      if (count > 1) {
        console.warn(
          `[SchemaValidator] Duplicate schema detected: @type="${type}" appears ${count} times on this page. Google may ignore duplicates.`
        )
      }
    })
  }, [])

  return null
}
