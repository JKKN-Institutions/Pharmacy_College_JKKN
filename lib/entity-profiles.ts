/**
 * The entity identity of JKKN College of Pharmacy — one array, one place.
 *
 * WHY THIS FILE EXISTS.
 * `sameAs` is not a link list. It is an identity assertion: it tells Google and every
 * answer engine "this college and that page are the same entity". Until 2026-09-16 the
 * array was duplicated across 8 files, and three of its entries pointed at organisations
 * that are not this college:
 *
 *   - `https://www.pci.nic.in`   — the Pharmacy Council of India's own homepage
 *   - `https://www.pci.nic.in/`  — the identical page a second time (same byte length
 *                                  188,075 and the same Last-Modified, measured 2026-09-16)
 *   - `https://www.nirfindia.org/` — the NIRF ranking body's homepage
 *
 * A regulator is something this college is *approved by*; that relationship already lives
 * in `hasCredential.recognizedBy`, where it belongs. Putting the regulator's homepage in
 * `sameAs` says we *are* the regulator. All three were removed.
 *
 * EVERY URL BELOW WAS OPENED AND READ ON 2026-09-16 — a JKKN-shaped slug is not evidence.
 * The CAS site carried a Shiksha URL whose slug read `jkkn-college-of-arts-and-science`
 * and whose canonical named a different college in Nanded. Check the canonical, not the URL text.
 */

/** Verification notes are per-entry and dated. Do not add a URL without one. */
export const PHARMACY_SAME_AS: ReadonlyArray<string> = [
  // 200 / canonical self. Page title reads "J.K.K. Nattraja College of Pharmacy",
  // description "pharmacy college in Komarapalayam, Tamil Nadu, India". Live fetch 2026-09-16.
  // This is the only JKKN site whose Wikidata link resolves to its own institution.
  'https://www.wikidata.org/wiki/Q48733446',

  // 302 -> google.com/maps/place/JKKN+College+of+Pharmacy @11.4449861,77.7307333.
  // Those coordinates match the GBP pin the user supplied on 2026-08-13. Live fetch 2026-09-16.
  'https://maps.app.goo.gl/dbVYZkJkkCnHcLkx7',

  // User-supplied ground truth 2026-08-13 (given twice, both lists agree).
  // facebook.com and linkedin.com both serve `Disallow: /` to non-browser fetchers, so these
  // two cannot be machine-verified — they rest on the user's own list, not on a fetch.
  'https://www.facebook.com/jkknpharmacy',
  'https://www.linkedin.com/school/jkknpharmacy/',

  // 200 live 2026-09-16, and on the user's 2026-08-13 list.
  'https://www.instagram.com/jkknpharmacy',

  // 200 live 2026-09-16. This is the GROUP channel (@JKKNInstitutions), not a pharmacy-only
  // channel — no pharmacy-specific channel exists. Kept deliberately: it is genuinely a
  // profile this institution publishes under, unlike a regulator's homepage.
  'https://www.youtube.com/@JKKNInstitutions',
]

/**
 * Public rating, carried so the number has exactly one home.
 *
 * SOURCE: Google Maps place "JKKN College of Pharmacy", read 2026-09-16 — 4.3 from 238 reviews.
 * It replaces 4.2 / 216, which was a Justdial reading taken on 2026-03-20 and already wrong
 * by two counts: Justdial itself read 3.9 from 246 Ratings when re-checked on 2026-09-16.
 *
 * RE-CHECK THIS QUARTERLY. A rating that drifts is worse than no rating, because it is a
 * number a parent can disprove in one tap.
 *
 * NOTE, and it is a real one: schema.org `aggregateRating` published by a business about
 * itself is "self-serving review markup" under Google's structured-data policy and is not
 * eligible for review rich results. It is kept here by the user's decision of 2026-09-16
 * on the understanding that it will not produce stars in search.
 */
// PHARMACY_AGGREGATE_RATING was REMOVED on 2026-09-18 (schema audit).
// The block carried 4.3 / 238 (Google Maps, read 2026-09-16). Two days later the same
// Maps place read 4.3 / 244 - the number was already stale, and it could never earn a
// rich result: a rating an organisation publishes about itself is self-serving review
// markup under Google's structured-data policy. GSC URL Inspection on 2026-09-18 flagged
// "Review has multiple aggregate ratings" (ERROR) on one blog URL and detected the same
// self-serving "Review snippets" item on every one of 20 inspected pages.
// Ratings now live where they are counted: on the Google Business Profile itself.
// Do not reintroduce an aggregateRating here without a first-party review system.
