// academic hub. Built 2026-09-17 because the header linked /academic/ on all 136
// pages and nothing was served there - measured 404. See components/SectionHub.tsx
// for why the dropdown's own links are invisible to a crawler.
import SectionHub from '@/components/SectionHub'

export default function AcademicPage() {
  return (
    <SectionHub
      sectionLabel="ACADEMIC"
      eyebrow="Academic"
      heading="Academic"
      intro="Every academic page on this site, in one place: the admission route, programme time tables, the examination schedule and the ordinances that govern it, course and programme outcomes for each degree, and the placement record."
    />
  )
}
