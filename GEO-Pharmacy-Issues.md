# JKKN College of Pharmacy — SEO + GEO Issues (Extracted from GEO Handoff Guide)

**Source:** GEO-Handoff-Guide (1).md
**Extracted:** 2026-03-16
**Institution:** JKKN College of Pharmacy
**URL:** jkkn.ac.in/jkkn-college-of-pharmacy | pharmacy.jkkn.ac.in

---

## 1. Crisis Dashboard — Current Status

| Metric | Status |
|--------|--------|
| SEO Score | **2/10** |
| Visibility | **NOT RANKING** |
| Urgency | **CRITICAL** |

---

## 2. Institution Data Card

| Field | Value |
|-------|-------|
| URL | jkkn.ac.in/jkkn-college-of-pharmacy |
| Founded | 1985 |
| Accreditation | PCI Approved, NAAC A |
| Programs | 10 programs (B.Pharm, M.Pharm, D.Pharm, Pharm.D + specializations), ~240 total seats |
| Placement | 96% placement rate `[WEBSITE CLAIM — SEO IN-CHARGE: Verify against aggregator data before deploying]` |
| SEO Status | CRITICAL (2/10) — no meta description, no H1 |
| Key Competitors | JSS Ooty, SRM, Annamalai |

---

## 3. SEO Emergency Fixes (Phase 0)

### 3.1 Missing Meta Description (CRITICAL)

Pharmacy site has NO meta description. Google auto-generates random text from the page.

**Ready-to-deploy template:**
```html
<title>JKKN College of Pharmacy - Top Pharmacy College in Tamil Nadu | B.Pharm, M.Pharm</title>
<meta name="description" content="JKKN College of Pharmacy - PCI approved pharmacy college in Tamil Nadu. B.Pharm & M.Pharm programs with excellent placements. Apply for 2026 admissions.">
```

### 3.2 Missing H1 Tag

Pharmacy site needs H1 audit — check if H1 tag exists and correctly says the institution name.

**Claude Code audit prompt:**
```
Scrape the homepage of pharmacy.jkkn.ac.in and extract the H1 tag.
Report if H1 is missing or has incorrect content.
```

---

## 4. AI Crawler Access (Move 1)

### 4.1 robots.txt Verification Needed

**Status:** NOT YET VERIFIED (main jkkn.ac.in and dental.jkkn.ac.in already done)

**Check:** `https://pharmacy.jkkn.ac.in/robots.txt`

If it doesn't have the AI-friendly robots.txt (allowing GPTBot, ClaudeBot, PerplexityBot, etc.), ask IT to copy the jkkn.ac.in version.

---

## 5. Subdomain/URL Inconsistency Issue

| Current Setup | Problem |
|---------------|---------|
| Pharmacy on main site subpages (jkkn.ac.in/jkkn-college-of-pharmacy) | Inconsistent with other institutions that have their own subdomains |

**Long-term recommendation:** Consolidate to either all subdomains or all subfolders for consistent authority handling. Currently pharmacy uses a subfolder while dental, engineering, etc. use subdomains.

---

## 6. Review Campaign — Pharmacy

### Current Review Status

| Platform | Current Reviews | Target (Month 1) |
|----------|----------------|-------------------|
| Shiksha | **0 — check** | 25+ |
| Collegedunia | **0 — check** | 25+ |
| Google Business Profile | **0 — check** | 50+ |

### Action Needed
- Find Pharmacy College page on Shiksha, Collegedunia, Careers360
- Launch review campaign to alumni/current students via WhatsApp groups
- Use review campaign template from the main guide (customize for Pharmacy)

---

## 7. Google Business Profile

| Institution | Action Needed |
|------------|--------------|
| JKKN College of Pharmacy | **Create/claim profile** |

**Complete these for GBP:**
- [ ] Business name (exactly as on signboard)
- [ ] Category: Pharmacy College
- [ ] Address (exact match across all listings)
- [ ] Phone number
- [ ] Website URL
- [ ] Business hours
- [ ] 20+ photos (campus, labs, library, hostel, events)
- [ ] Services/programs offered
- [ ] Description (use opening paragraph from GEO page)

---

## 8. Structured Data / Schema.org (Move 3)

### Status: MISSING — No Schema.org markup exists

**Action:** Generate Schema.org JSON-LD for Pharmacy College including:
- EducationalOrganization
- Course (for B.Pharm, M.Pharm, D.Pharm, Pharm.D)
- FAQPage
- BreadcrumbList

**Claude Code prompt:**
```
Generate complete Schema.org JSON-LD markup for an Indian pharmacy college with these details:
- Name: JKKN College of Pharmacy
- Type: EducationalOrganization + CollegeOrUniversity
- Founded: 1985
- Address: NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183
- Accreditation: PCI Approved, NAAC A
- Programs: B.Pharm, M.Pharm, D.Pharm, Pharm.D (10 programs, ~240 seats)
- Placement rate: [VERIFY — use aggregator-verified figure]
- URL: https://pharmacy.jkkn.ac.in
- Phone: [VERIFY — use canonical phone from Data Card]

Include: Organization, EducationalOrganization, Course (for each program),
FAQPage, BreadcrumbList, and aggregate rating schemas.
```

**Timeline:** Week 1 — Generate Schema.org JSON-LD for Pharmacy (alongside Dental and Engineering)

---

## 9. GEO Content Hub Pages (Move 4)

### Tier 2 Priority — Create Week 2

| Page | Target Query | URL |
|------|-------------|-----|
| JKKN Pharmacy Overview | "best pharmacy college Tamil Nadu" | `/pharmacy-college` |

### Comparison Page — Week 3

| Page | Target Query |
|------|-------------|
| JKKN Pharmacy vs JSS Ooty | "JKKN pharmacy vs JSS Ooty" |
| JKKN pharmacy vs PSG pharmacy | "JKKN pharmacy vs PSG pharmacy" |

### GEO Page Content Requirements
- Clean semantic HTML (proper H1, H2, H3, paragraphs)
- Opening paragraph with key facts in first 200 words
- Key facts table
- 7 sections with H2 headers phrased as questions students ask
- Each section: 100-200 words with specific data points
- FAQ section with 10+ questions
- Schema.org JSON-LD in head
- "Last Updated: March 2026" footer
- Author attribution section
- Mobile-responsive, fast-loading, minimal CSS

---

## 10. llms.txt Entry for Pharmacy

The main jkkn.ac.in llms.txt should include this Pharmacy section:

```markdown
### JKKN College of Pharmacy
- Programs: B.Pharm, M.Pharm, Pharm.D
- Approval: Pharmacy Council of India (PCI)
- URL: https://pharmacy.jkkn.ac.in
```

---

## 11. Education Portal Profiles (Move 5)

**Action:** Complete JKKN Pharmacy's profile on every education portal:

| Portal | Action |
|--------|--------|
| Shiksha | Complete full profile, add programs, photos |
| Collegedunia | Complete full profile |
| Careers360 | Create/complete profile |
| CollegeDekho | Create/complete profile |
| GetMyUni | Create/complete profile |

**For each portal:**
- [ ] All basic info filled (correct and consistent NAP)
- [ ] All 10 programs listed with details
- [ ] Fee structure updated for 2026-27
- [ ] Placement data added
- [ ] 10+ campus photos uploaded
- [ ] Faculty highlights added
- [ ] College videos uploaded
- [ ] Courses with eligibility criteria

---

## 12. Tamil-Language GEO (Phase 2)

- [ ] Test current Tamil AI search results for Tamil queries about pharmacy colleges
- [ ] Create Tamil-language FAQ sections on pharmacy content hub page
- [ ] Add Tamil `hreflang` tags
- [ ] Include Tamil alternative names in Schema.org (`alternateName` field)

---

## 13. Weekly Execution Calendar — Pharmacy Tasks

| Week | Day | Task | Time |
|------|-----|------|------|
| Week 1 | Thu | Generate Schema.org JSON-LD for Pharmacy | Part of 2-hour block |
| Week 3 | Mon-Tue | Generate GEO page for Pharmacy | Part of 4-hour block |
| Week 3 | Wed | Generate "JKKN Pharmacy vs JSS Ooty" comparison page | Part of 3-hour block |
| Week 3 | Fri | Complete education portal profiles for Pharmacy | Part of 3-hour block |
| Month 2+ | Weekly | Publish 1 new content piece (FAQ expansion / case study / comparison / data update) | 2-3 hours |

### Monthly Content Rhythm

| Week of Month | Content Type | Example |
|--------------|-------------|---------|
| Week 1 | FAQ Expansion | "What is the hostel fee at JKKN Pharmacy?" |
| Week 2 | Case Study | Learner success story from Pharmacy |
| Week 3 | Comparison Page | "JKKN Pharmacy vs JSS Ooty — 2026 Comparison" |
| Week 4 | Data Update | Refresh placement figures, fee structures |

---

## 14. Data Verification Warnings

| Issue | Details |
|-------|---------|
| Placement Rate | Website claims 96% — **MUST verify against Shiksha, Careers360, Collegedunia** before using in any GEO content |
| Aggregator Cross-Check | If aggregators report lower (like Engineering: website 95% vs aggregator 40-70%), use the aggregator figure |
| Never Round Up | Exact figures only — precision = trust for AI engines |

**Verification Protocol:**
1. Check 3 sources (Shiksha, Careers360, Collegedunia)
2. Use the conservative/middle figure
3. Add qualifying language if only website data exists
4. Flag discrepancies
5. Never round up

---

## 15. Key Competitors

| Competitor | Notes |
|------------|-------|
| JSS College of Pharmacy, Ooty | Primary competitor for pharmacy comparison pages |
| SRM College of Pharmacy | Strong content marketing presence |
| Annamalai University Pharmacy | Established name |
| PSG College of Pharmacy | Strong regional competitor |

---

## 16. AEO (Answer Engine Optimization) — Pharmacy Specific

### Target Snippet Queries

| Category | Example Query | Snippet Format |
|----------|-------------|----------------|
| Fee queries | "JKKN pharmacy college fees" | Paragraph or Table |
| Admission queries | "How to get admission in JKKN Pharmacy" | Numbered list |
| Comparison queries | "JKKN vs JSS Ooty pharmacy" | Table |
| Placement queries | "JKKN pharmacy placement rate" | Paragraph |
| Eligibility queries | "B.Pharm eligibility criteria Tamil Nadu" | Bullet list |
| Course info queries | "B.Pharm course details JKKN" | Table |

### Voice Search Optimization

| Typed Query | Voice Query Equivalent |
|-------------|----------------------|
| "JKKN pharmacy fees" | "How much does B.Pharm cost at JKKN?" |
| "JKKN pharmacy placement" | "What's the placement rate at JKKN Pharmacy?" |
| "best pharmacy college Erode" | "Hey Google, what's the best pharmacy college near Erode?" |

---

## Summary — All Pharmacy Issues at a Glance

| # | Issue | Severity | Status |
|---|-------|----------|--------|
| 1 | SEO Score 2/10 — NOT RANKING | CRITICAL | Needs immediate action |
| 2 | No meta description | CRITICAL | Template ready — send to IT |
| 3 | No H1 tag (or incorrect) | CRITICAL | Needs audit |
| 4 | robots.txt not verified for AI crawlers | HIGH | Needs check |
| 5 | URL inconsistency (subfolder vs subdomain) | MEDIUM | Long-term fix |
| 6 | Zero reviews on aggregator platforms | HIGH | Launch review campaign |
| 7 | No Google Business Profile | HIGH | Create/claim |
| 8 | No Schema.org markup | HIGH | Generate with Claude Code |
| 9 | No GEO content hub page | HIGH | Create in Week 3 |
| 10 | No llms.txt entry | MEDIUM | Part of main jkkn.ac.in llms.txt |
| 11 | No education portal profiles | HIGH | Create on all platforms |
| 12 | No Tamil-language GEO | LOW | Phase 2 |
| 13 | Placement data unverified (96% claim) | HIGH | Verify against aggregators |
| 14 | No comparison pages vs competitors | MEDIUM | Create in Week 3 |
| 15 | No AEO/snippet optimization | MEDIUM | Part of GEO page creation |

---

*Extracted from GEO-Handoff-Guide (1).md on 2026-03-16*
*For the complete multi-institution guide, refer to the original document.*
