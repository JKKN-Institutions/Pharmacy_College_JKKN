// others hub. Built 2026-09-17 because the header linked /others/ on all 136
// pages and nothing was served there - measured 404. See components/SectionHub.tsx
// for why the dropdown's own links are invisible to a crawler.
import SectionHub from '@/components/SectionHub'

export default function OthersPage() {
  return (
    <SectionHub
      sectionLabel="OTHERS"
      eyebrow="More"
      heading="Careers, Clubs and Policies"
      intro="The pages that do not sit under a course or a facility: careers and the senior learner directory, best practice and competitive examination support, the digital campus, the social work units, the innovation and entrepreneurship cells, and the college policy documents."
    />
  )
}
