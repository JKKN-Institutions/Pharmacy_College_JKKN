// lib/placement-facts.ts
//
// EVERY PLACEMENT NUMBER THIS SITE PUBLISHES, IN ONE PLACE, WITH ITS SOURCE.
//
// Source: the college's own NIRF 2026 submission to the Ministry of Education,
// "Submitted Institute Data for NIRF'2026'", Institute ID IR-P-C-45689. The file is
// published on this site and is publicly fetchable, so a reader can check every figure:
//   https://pharmacy.jkkn.ac.in/pdf/NIRF-Pharmacy-2026.pdf   (placement tables)
//   https://pharmacy.jkkn.ac.in/pdf/NIRF-Overall-2026.pdf    (accreditation block)
// Both verified live 200, application/pdf, on 2026-09-17.
//
// WHY THIS FILE EXISTS. Until 2026-09-18 the site published "Average Package 3.5 LPA"
// and "Highest Package 8 LPA" with no source anywhere, plus per-programme averages of
// 3.2 / 4.5 / 4.0 LPA that appeared in no document. NIRF does not collect an average
// package or a highest package at all - it collects the MEDIAN salary of placed
// graduates - so those figures could not be checked against anything. They were also
// LOWER than the official medians, so the site was understating its own record while
// being unable to prove it.
//
// RULES FOR EDITING THIS FILE:
//   1. A number goes in only if it appears in a document linked from `source`.
//   2. Median is not average. Do not relabel one as the other.
//   3. Re-read the PDF when the next NIRF cycle is submitted; do not carry figures over.

export const PLACEMENT_SOURCE = {
  label: 'NIRF 2026 submission, Ministry of Education',
  instituteId: 'IR-P-C-45689',
  academicYear: '2024-25',
  url: 'https://pharmacy.jkkn.ac.in/pdf/NIRF-Pharmacy-2026.pdf',
  readOn: '2026-09-17',
} as const

export type ProgrammePlacement = {
  programme: string
  nirfCategory: string
  graduating: number
  placed: number
  higherStudies: number
  /** Median salary of placed graduates, in rupees, exactly as filed. */
  medianSalary: number
}

/** Academic year 2024-25, read line by line from the NIRF 2026 placement tables. */
export const PLACEMENT_2024_25: ReadonlyArray<ProgrammePlacement> = [
  { programme: 'B.Pharm',                nirfCategory: 'UG [4 Years]',  graduating: 84, placed: 42, higherStudies: 28, medianSalary: 440000 },
  { programme: 'M.Pharm',                nirfCategory: 'PG [2 Years]',  graduating: 40, placed: 31, higherStudies:  2, medianSalary: 675000 },
  { programme: 'Pharm.D',                nirfCategory: 'PG [6 Years]',  graduating: 28, placed: 21, higherStudies:  1, medianSalary: 442000 },
  { programme: 'Pharm.D Post Baccalaureate', nirfCategory: 'PG [3 Years]', graduating: 3, placed: 3, higherStudies: 0, medianSalary: 430000 },
]

const sum = (k: keyof ProgrammePlacement) =>
  PLACEMENT_2024_25.reduce((n, p) => n + (p[k] as number), 0)

/** 155 - every graduate of 2024-25, across all four programmes. */
export const TOTAL_GRADUATING = sum('graduating')
/** 97 */
export const TOTAL_PLACED = sum('placed')
/** 31 */
export const TOTAL_HIGHER_STUDIES = sum('higherStudies')
/** 124 - graduates who sought placement, i.e. everyone who did not go on to study. */
export const SOUGHT_PLACEMENT = TOTAL_GRADUATING - TOTAL_HIGHER_STUDIES

/**
 * 78% - placed as a share of those who SOUGHT placement (97 of 124).
 * The all-graduates ratio from the same document is 97/155 = 62.6%. Both are true and
 * they answer different questions; whichever is published must say which one it is.
 */
export const PLACEMENT_RATE_OF_SEEKERS = Math.round((TOTAL_PLACED / SOUGHT_PLACEMENT) * 100)
export const PLACEMENT_RATE_OF_ALL_GRADUATES =
  Math.round((TOTAL_PLACED / TOTAL_GRADUATING) * 1000) / 10

/** "Rs 4,40,000" - Indian digit grouping, which is what a reader here expects. */
export function formatRupees(amount: number): string {
  const s = String(amount)
  if (s.length <= 3) return 'Rs ' + s
  const last3 = s.slice(-3)
  const rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ',')
  return 'Rs ' + rest + ',' + last3
}

/**
 * NOT IN THIS FILE, DELIBERATELY:
 *   - an "average package". NIRF collects a median; no document gives an average.
 *   - a "highest package". No document gives one. The 8 LPA figure the site carried
 *     until 2026-09-18 came from nowhere that could be traced.
 *   - a recruiter count or any recruiter name. The NIRF submission lists neither, and
 *     naming a company that did not recruit here is the single most damaging claim a
 *     college site can make. They return only with the placement cell's own record -
 *     offer letters or an MoU list - per the user's decision of 2026-09-18.
 */
