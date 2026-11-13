// The enquiry form as a full-width page section (user's call 2026-11-13). The 2026-11-13 scan found 30
// admission pages with no form of their own - the fee page, the admissions page, the city pages, the
// M.Pharm specialisation pages - only jkkn.ai Apply links that leave the site. One component so every one
// of them shows the same section, tagged by its own sourcePage (CRM utm_campaign pharmacy-<sourcePage>).
// The card inside is the same PharmacyEnquiryForm the Contact and B.Pharm pages already carry.

import PharmacyEnquiryForm from "@/components/lead/PharmacyEnquiryForm"

type Props = {
  /** Tags the lead in the CRM as utm_campaign pharmacy-<sourcePage>. */
  sourcePage: string
  heading?: string
  subheading?: string
  /** Pre-selected programme id (lib/pharmacy-programmes.ts). Only for a page about exactly one programme. */
  programmeId?: string
}

export default function EnquirySection({
  sourcePage,
  heading = "Get Pharmacy Fee & Admission Details",
  subheading = "Fill your details, then call or WhatsApp our admission team right away.",
  programmeId,
}: Props) {
  return (
    <section className="bg-gradient-to-br from-[#0b6d41] to-[#0f8f56] py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-3 min-[640px]:px-4">
        <h2 className="text-white text-xl md:text-3xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-white/80 text-center text-sm mb-6 md:mb-8">{subheading}</p>
        <PharmacyEnquiryForm sourcePage={sourcePage} defaultProgrammeId={programmeId} />
      </div>
    </section>
  )
}
