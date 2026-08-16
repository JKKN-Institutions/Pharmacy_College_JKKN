// DEP-34 — the CRM programme list for JKKN College of Pharmacy.
//
// WHY THIS IS ITS OWN FILE AND NOT PART OF THE SERVER ACTION.
// A Next.js `'use server'` module may only export async functions. On the Arts build this array
// sat inside the action file, the build stripped it, and the page died at prerender with
// `TypeError: j.map is not a function` — while `tsc --noEmit` reported zero errors. Measured
// 2026-08-16. Plain data stays out of 'use server' files.
//
// Verified live against GET https://www.jkkn.ai/api/public/forms/jkkn-admission-2026 on
// 2026-08-16: these are exactly the 10 rows the CRM holds for this institution — none missing,
// none extra, none dead. Re-check before each deploy: a dead program_id is a lead that never lands.
//
// NOTHING HERE IS A GUESS. The Arts list carries three byte-identical duplicate names plus an
// ambiguous COMMERCE row, so its UG/PG split is an assumption. Pharmacy's ten rows are each
// distinct, so these labels are a reading of the CRM rather than an interpretation of it. The only
// editorial choice is expanding the CRM's own shorthand — BPHARM, PHARM D PB — into words a parent
// would recognise.

export const PHARMACY_INSTITUTION_ID = "5736d86f-5dab-4b7f-9aa1-b3bb1a2dd334"

export type PharmacyProgramme = { id: string; label: string }

// Ordered by measured demand, not by the CRM's ordering: /pharm-d/ carries 18,869 impressions over
// 90 days against 6,378 for /m-pharmacy/ and 1,369 for /b-pharmacy/
// (GSC, 2026-05-15..2026-08-13), so Pharm.D leads.
export const PHARMACY_PROGRAMMES: ReadonlyArray<PharmacyProgramme> = [
  { id: "b3640fc2-4260-4548-b66b-1a9908e876ea", label: "Pharm.D (6 years)" },
  { id: "1e1fe1a9-92a9-43e5-b64f-72ffcb98caca", label: "Pharm.D Post Baccalaureate" },
  { id: "0d980d34-f945-4de6-8c88-ee97b2620b99", label: "B.Pharm (4 years)" },
  { id: "771422d3-c867-4ebc-9126-15207d5a757e", label: "B.Pharm Lateral Entry" },
  { id: "e56b6ef9-6266-4097-9287-7c7920b3822e", label: "M.Pharm — Pharmaceutics" },
  { id: "81857fa8-1481-49d6-939b-f4e601616734", label: "M.Pharm — Pharmacology" },
  { id: "4965ac96-222b-4a5f-a671-001807dd19ab", label: "M.Pharm — Pharmaceutical Chemistry" },
  { id: "3b440c7a-6a95-40c9-9811-e6a325408669", label: "M.Pharm — Pharmaceutical Analysis" },
  { id: "08d25ceb-a761-4a64-9789-e2cc7cc87f5f", label: "M.Pharm — Pharmacy Practice" },
  { id: "ab96b847-f9e3-41ee-bdd6-3500dd869571", label: "M.Pharm — Regulatory Affairs" },
]

export const VALID_PHARMACY_PROGRAMME_IDS: ReadonlySet<string> = new Set(
  PHARMACY_PROGRAMMES.map((p) => p.id)
)

// Pre-selects the dropdown when the form sits on a programme page, so a parent reading the Pharm.D
// page does not have to pick Pharm.D again. M.Pharm is deliberately absent: the CRM holds six
// M.Pharm specialisations and there is no correct default, so that page opens on "Select a
// Programme" and the parent chooses. Guessing files the lead under a specialisation nobody asked
// for — the same rule applied to nursing's five M.Sc rows.
export const DEFAULT_PROGRAMME_BY_PAGE: Readonly<Record<string, string>> = {
  "pharm-d": "b3640fc2-4260-4548-b66b-1a9908e876ea",
  "b-pharmacy": "0d980d34-f945-4de6-8c88-ee97b2620b99",
}
