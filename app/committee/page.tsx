// committee hub. Built 2026-09-17 because the header linked /committee/ on all 136
// pages and nothing was served there - measured 404. See components/SectionHub.tsx
// for why the dropdown's own links are invisible to a crawler.
import SectionHub from '@/components/SectionHub'

export default function CommitteePage() {
  return (
    <SectionHub
      sectionLabel="COMMITTEE"
      eyebrow="Governance"
      heading="Committees and Cells"
      intro="The statutory committees and cells of the college, in one place: anti-ragging, discipline, internal complaints, student grievance redressal, equal opportunity, malpractice prevention, and the sports and cultural committees."
    />
  )
}
