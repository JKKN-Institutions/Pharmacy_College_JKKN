// facilities hub. Built 2026-09-17 because the header linked /facilities/ on all 136
// pages and nothing was served there - measured 404. See components/SectionHub.tsx
// for why the dropdown's own links are invisible to a crawler.
import SectionHub from '@/components/SectionHub'

export default function FacilitiesPage() {
  return (
    <SectionHub
      sectionLabel="FACILITIES"
      eyebrow="Campus"
      heading="Campus Facilities"
      intro="Every facility page on this site, in one place: learning studios and labs, the library and central facilities, hostel and transport, health and ambulance services, sports, the food court, Wi-Fi, the bank and post office, and internship support."
    />
  )
}
