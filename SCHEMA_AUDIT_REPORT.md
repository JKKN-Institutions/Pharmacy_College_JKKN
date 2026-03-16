# Schema & JSON-LD Audit Report — JKKN Pharmacy College
**Date:** 2026-03-16  
**Status:** Comprehensive Audit Complete  

---

## SUMMARY

**Overall:** 8/10 GEO-ready. All critical schemas present. Some enhancements missing.

---

## 10-POINT AUDIT FINDINGS

### 1. parentOrganization Schema — ✅ FIXED
**File:** `components/SchemaOrg.tsx` line 63-67  
**Status:** Implemented on all pages via OrganizationSchema  
**Content:**
```
"parentOrganization": {
  "@type": "EducationalOrganization",
  "name": "JKKN Institutions",
  "url": "https://jkkn.ac.in"
}
```
**Finding:** Correct. Links to parent organization for knowledge panel hierarchy.

---

### 2. sameAs Schema — ✅ FIXED
**File:** `components/SchemaOrg.tsx` line 68-74  
**Status:** Implemented  
**Content:** Facebook, Instagram, LinkedIn (school), Shiksha, Justdial  
**Finding:** Good coverage. Could add YouTube, Twitter, Wikipedia if those profiles exist.

---

### 3. AggregateRating Schema — ✅ FIXED
**File:** `components/SchemaOrg.tsx` line 75-82  
**Status:** Implemented on homepage  
**Rating:** 4.3/5 from 127 reviews  
**Finding:** Correct implementation with sample review. Could add 2-3 more diverse reviews.

---

### 4. GeoCoordinates — ✅ FIXED
**File:** `components/SchemaOrg.tsx` line 52-56  
**Status:** Implemented  
**Coordinates:** 11.4387, 77.7062 (Komarapalayam)  
**Finding:** Correct. Verified against address.

---

### 5. streetAddress — ✅ FIXED
**File:** `components/SchemaOrg.tsx` line 46  
**Status:** Implemented  
**Content:** "Natarajapuram, NH-544, Salem To Coimbatore National Highway"  
**Finding:** Correct. Not organization name, actual street address. Used consistently across all course pages.

---

### 6. foundingDate — ✅ FIXED
**File:** `components/SchemaOrg.tsx` line 11  
**Status:** Implemented  
**Year:** 1985  
**Finding:** Correct and verified against site content.

---

### 7. areaServed — ⚠️ NEEDS EXPANSION
**File:** `components/SchemaOrg.tsx` line 57-60  
**Current:**
```
"areaServed": {
  "@type": "State",
  "name": "Tamil Nadu"
}
```
**Issue:** Only state-level. Should include:
- Erode, Salem, Tiruppur, Namakkal (secondary cities)
- India-wide (secondary region per CLAUDE.md)
**Recommendation:** Change to array with State, multiple City, and Country entries.

---

### 8. FAQPage Schema — ✅ FIXED
**Files:**
- Homepage: `app/page.tsx` line 49 (8 FAQs)
- B.Pharmacy: `app/b-pharmacy/layout.tsx` line 122 (15+ FAQs)
- M.Pharmacy: `app/m-pharmacy/layout.tsx` line similar (5+ FAQs)
- Pharm.D: `app/pharm-d/layout.tsx` line similar (5+ FAQs)

**Status:** All major course pages + homepage have FAQPage schema  
**Finding:** Excellent coverage. Inline scripts with full Q&A pairs. Ready for answer snippets.

---

### 9. Course Schema — ✅ FIXED
**Files:**
- B.Pharmacy: `app/b-pharmacy/layout.tsx` line 4-55
- M.Pharmacy: `app/m-pharmacy/layout.tsx` line 4-55
- Pharm.D: `app/pharm-d/layout.tsx` line 4-55

**Status:** All three courses have Course schema  
**Content:** Name, description, duration, educationalLevel, courseMode, teaches, offers, courseInstance with instructor  
**Finding:** Proper implementation. All required fields present.

---

### 10. NIRF Ranking — ❌ MISSING SCHEMA
**Files:**
- `app/nirf/page.tsx` — No schema, just buttons
- `app/nirf/nirf-2024/page.tsx` — No schema, PDF links
- `app/nirf/nirf-2025/page.tsx` — No schema, PDF links
- `app/overview/page.tsx` — Plain text: "top 50 pharmacy institutions by NIRF in 2016-2018"

**Status:** NIRF data is HTML text only, no structured data  
**Issue:** LLMs and search engines can't extract ranking data  
**Recommendation:** Add Award or EducationalOccupationalCredential schema to NIRF pages with ranking metadata.

---

## ADDITIONAL SCHEMA ELEMENTS

### ✅ BlogPosting / Article
`app/blog/[slug]/page.tsx` line 196-233  
**Status:** Implemented. Full article schema with author, publisher, datePublished.

### ✅ Person (Faculty)
`app/faculty/[slug]/page.tsx`  
**Status:** Implemented. Person type with jobTitle, email, worksFor. Some sameAs arrays are empty (should add Google Scholar links).

### ✅ BreadcrumbList
`components/Breadcrumb.tsx` line 16-26  
**Status:** Implemented on all pages. Valid structure.

---

## SCHEMA USAGE MATRIX

| Schema Type | Implemented | Pages | File |
|-------------|-------------|-------|------|
| EducationalOrganization | ✅ | All | `SchemaOrg.tsx:2-107` |
| parentOrganization | ✅ | All | `SchemaOrg.tsx:63` |
| sameAs | ✅ | All | `SchemaOrg.tsx:68` |
| AggregateRating | ✅ | Homepage | `SchemaOrg.tsx:75` |
| GeoCoordinates | ✅ | All | `SchemaOrg.tsx:52` |
| PostalAddress | ✅ | All | `SchemaOrg.tsx:44` |
| foundingDate | ✅ | All | `SchemaOrg.tsx:11` |
| areaServed | ⚠️ Partial | All | `SchemaOrg.tsx:57` |
| FAQPage | ✅ | 4 pages | layouts + homepage |
| Course | ✅ | 3 pages | course layouts |
| BlogPosting | ✅ | Blog pages | `blog/[slug]/page.tsx` |
| Person | ✅ | Faculty pages | `faculty/[slug]/page.tsx` |
| BreadcrumbList | ✅ | All pages | `Breadcrumb.tsx` |
| NIRF Award | ❌ | NIRF pages | Missing |

---

## PRIORITY RECOMMENDATIONS

### HIGH (Do First)
1. **Expand areaServed** to include cities (Erode, Salem, Namakkal, Tiruppur) and India
   - File: `components/SchemaOrg.tsx:57-60`
   - Why: Better local + regional SEO

2. **Add NIRF ranking schema** to NIRF pages
   - Files: `app/nirf/layout.tsx`, `app/nirf-2024/layout.tsx`, `app/nirf-2025/layout.tsx`
   - Why: Makes ranking discoverable by LLMs and search

### MEDIUM
3. Add 3-4 more sample reviews to AggregateRating
4. Populate faculty sameAs with Google Scholar links
5. Add educationalCredentialAwarded to Course schemas

### LOW
6. Add Event schema for admissions sessions (if any exist)
7. Add Video schema for campus/intro videos (if any exist)

---

## FILES TO MODIFY (When Approved)

1. `components/SchemaOrg.tsx` — areaServed expansion
2. `app/nirf/layout.tsx` — Add Award schema
3. `app/nirf/nirf-2024/layout.tsx` — Add Award schema
4. `app/nirf/nirf-2025/layout.tsx` — Add Award schema

---

**Audit Date:** 2026-03-16  
**Status:** Ready for implementation recommendations

