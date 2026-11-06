// Enquiry box: the same white card + compact 3-box form as the Dental and Education sites.
//  - Inside a blog post (lead option 2, 2026-11-05): no course is pre-selected (lib/blog-inline-cta.ts), the reader picks.
//  - Near the top of the B.Pharm / M.Pharm admission pages and /m-pharmacy/ (round 2, 2026-11-06): their only form
//    sat 12-35 phone screens down, or there was none. B.Pharm pre-selects B.Pharm; M.Pharm never pre-selects (six
//    specialisations, see lib/pharmacy-programmes.ts).
// No fee figure here on purpose: the fee table on /fee-structure/ is the one place that number lives, so the box links
// to it. (From 2026-11-05 to 11-06 that link pointed at the Git-for-Windows install folder - a Git Bash run rewrote
// the leading slash into a Windows path. It is a plain site path again.)
// The title is not a heading, so the page's own H2 outline (and a blog's table of contents) stays as written.

import Link from "next/link"
import PharmacyEnquiryForm from "@/components/lead/PharmacyEnquiryForm"

type Props = {
  /** Tags the lead in the CRM, e.g. "blog-<slug>" or "admissions-b-pharm-top". */
  sourcePage: string
  /** Pre-selected programme id on a one-course page. Left out: the reader picks. */
  programmeId?: string
  /** Card title. */
  title?: string
}

export default function BlogEnquiryBox({ sourcePage, programmeId, title = "Get Pharmacy Fee & Admission Details" }: Props) {
  return (
    <aside
      aria-label="Pharmacy admission enquiry"
      className="my-10 max-w-xl mx-auto rounded-[20px] bg-white border border-[#d4f1e4] shadow-[0_18px_40px_rgba(3,40,22,0.35)] p-5 sm:p-6 lg:p-7"
    >
      <div className="mb-4">
        <div className="text-xl lg:text-2xl font-bold text-[#032816] leading-snug">{title}</div>
        <div className="mt-2 text-base text-[#374151] leading-relaxed">
          Fill your details, then call or WhatsApp our admission team right away.{" "}
          <Link href="/fee-structure/" className="font-semibold text-[#0b6d41] underline">
            See the fee table
          </Link>
          .
        </div>
      </div>
      <PharmacyEnquiryForm sourcePage={sourcePage} defaultProgrammeId={programmeId} compact bare />
    </aside>
  )
}
