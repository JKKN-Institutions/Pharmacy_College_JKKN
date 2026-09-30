# MyJKKN Careers Integration (Pharmacy) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the cvviz iframe on `/careers/` with a native page that lists **only JKKN College of Pharmacy** openings from the MyJKKN Public Careers API, adds a `/careers/[id]/` detail page per job, and lets applicants apply directly from that page.

**Architecture:** A `lib/careers/` module holds types, pure unit-tested helpers (filtering, labels, sanitiser, JSON-LD), a `server-only` fetch layer (ISR 300 s, 8 s timeout) and a browser-side apply client. Two server-rendered routes (`app/careers/page.tsx`, `app/careers/[id]/page.tsx`) render the data; one client component (`ApplyForm`) posts the application from the applicant's browser straight to MyJKKN, as the API requires. Pharmacy-only filtering is enforced server-side and **fails closed**.

**Tech Stack:** Next.js 15.4 App Router (Server Components, ISR), React 19, TypeScript strict, Tailwind 3.4, lucide-react, `sanitize-html` (new), Vitest (new, dev only). Node 24 locally, Vercel in production.

**Spec:** `2026-09-28-myjkkn-careers-integration.md` (repo root — the **Dental** site's plan this one adapts) + the Pharmacy API facts below. The Dental plan cites `docs/public-careers-api.md`, which does **not** exist in this repo; the facts table below is the source of truth here.

---

## API facts (verified live on 2026-09-30 for Pharmacy — override the Dental plan where they differ)

| Fact | Evidence |
|---|---|
| Host `https://www.jkkn.ai`, endpoints `GET /api/public/careers/jobs[?institution_id=]`, `GET /api/public/careers/jobs/{id}`, `POST /api/public/careers/jobs/{id}/apply` | Dental plan + live GET → 200 |
| Pharmacy institution id = `5736d86f-5dab-4b7f-9aa1-b3bb1a2dd334` — **already** in `.env.local` as `JKKN_PHARMACY_INSTITUTION_ID` (used by the faculty sync, so it is also set on Vercel) | `institutions[]` → "JKKN College of Pharmacy", `open_jobs: 6` |
| `?institution_id=` filter works server-side: 6/6 results are Pharmacy | checked every `institution.id` |
| `GET /jobs/{id}` returns jobs of **any** institution → detail page must check `institution.id` itself | Dental plan |
| Unknown / malformed id → `404 {"error":"Job not found."}` | Dental plan |
| `description` is HTML with Tailwind classes and junk auto-links (`href="http://M.Sc"`) | Dental plan sample of 34 jobs |
| Pharmacy jobs: `posted_at`, `closes_at`, `job_code`, `qualifications`, `skills` empty on 6/6; `salary` set on 1/6; `department` null on 1/6; `role_category` only `teaching_faculty`; `job_type` only `full_time` | live payload |
| Titles are internal codes, e.g. `Asst Prof - PHARMACOLOGY - COP`, `TUTOR - COP` (longest ≈ 45 chars) | live payload |
| **CORS allows `https://pharmacy.jkkn.ac.in`** for GET and for the POST preflight; does **not** allow `http://localhost:3000` | `curl -H "Origin: …"` preflight → `Access-Control-Allow-Origin: https://pharmacy.jkkn.ac.in` |
| API sends `Cache-Control: no-store` → caching is our job (ISR 300 s) | Dental plan |
| "JKKN Testing Institution" `183847c5-be1b-4903-86eb-bbc20c213071` has 1 open job → safe end-to-end apply testing | Dental plan |

## Current state being replaced

- `app/careers/page.tsx` (37 lines, server component) renders a hero + a cvviz `<iframe>` (with an inline `style`). No `layout.tsx`, no breadcrumb.
- Header and mobile BottomNav **both** read `data/siteData.ts:194` → `{ label: "Careers", href: "/careers" }`. Already internal — **no nav change needed**.
- No cvviz redirect exists in `next.config.js` (unlike Dental).
- CSP is `Content-Security-Policy-Report-Only` in `next.config.js:64` (`connect-src 'self' https://www.google-analytics.com`) — it will not block, but it would report every apply call.
- Sitemap = `next-sitemap.config.js` (`postbuild`). Its `additionalPaths` comment says ISR pages (`revalidate`) are missed by auto-discovery, so `/blog`, `/faculty`, `/gallery` are added by hand.
- Footer, ScrollToTop and BottomNav are rendered **globally** by `components/FooterWrapper.tsx` in `app/layout.tsx`. Pages render only `<Header />`.
- Root `app/layout.tsx` has **no title template** — every page's `title` must include the brand itself.
- `utils/breadcrumbs.ts` has no `careers` entry and would show a raw UUID for `/careers/<id>`; it drives 111 layouts (shared — must not be edited). Careers pages therefore render their own breadcrumb.

## Global Constraints

- Only Pharmacy jobs are ever displayed. Scope = `process.env.JKKN_PHARMACY_INSTITUTION_ID`. If it is missing, show **zero** jobs (never all colleges).
- Routes: `/careers/` (listing) and `/careers/[id]/` (detail). `next.config.js` has `trailingSlash: true` — every internal link ends with `/`.
- The apply `POST` runs in the applicant's browser, never from our server (API rate-limits per IP: 5 applications / IP / hour).
- Honeypot `company_fax` is rendered hidden (`tabIndex={-1}`, `autoComplete="off"`), never filled by us.
- Resume: ≤ 2 MB, PDF / DOC / DOCX. Phone: 10–15 digits (spaces, `+`, `-`, `()` allowed). `experience_months`: integer 0–720. Name fields ≤ 100 chars, qualification ≤ 200, current job title / company ≤ 150.
- `utm_source` = `window.location.hostname`. Do not set `Content-Type` on the multipart request.
- Brand colours only: `#7cb983` (buttons), `#6ba872` (button hover), `#006837` (headings), `#002309` (text), `#FBFBEE` (background), plus white. Exception: the breadcrumb bar copies the existing `components/Breadcrumb.tsx` classes (`bg-gray-50`, `text-gray-600`) so it looks identical to every other page.
- Tailwind utilities only — no inline `style`, no CSS modules. Use `cn()` from `@/lib/utils`. Touch targets ≥ 44 px.
- JKKN terminology: teaching staff = "senior learners", non-teaching staff = "team members". Job titles from HR are displayed verbatim (data, not our copy).
- Breadcrumbs: "Home" is the only clickable crumb (matches `components/Breadcrumb.tsx`).
- Metadata: every `title` ends with ` | JKKN Pharmacy` and is ≤ 60 chars; description ≤ 155 chars.
- TypeScript strict, no `any`. Props interfaces named `{ComponentName}Props` in the same file.
- Every HTML string from the API is sanitised before `dangerouslySetInnerHTML`; every JSON-LD payload containing API data goes through `serializeJsonLd` (escapes `<`). Do **not** use `components/SchemaOrg.tsx` / `components/Breadcrumb.tsx` for API data — they use raw `JSON.stringify`.
- Do not edit shared files beyond what a task lists (`CLAUDE.md` rule 2). Allowed shared edits: `next.config.js` (one CSP line), `next-sitemap.config.js` (additive), `CLAUDE.md` (docs), `package.json`/`package-lock.json`.
- One task = one commit. End every commit message with the trailer `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- There is **no ESLint config** in this repo (`npm run lint` would start the interactive setup) — do not run it. The static gate is `npx tsc --noEmit` (baseline: exit 0 on 2026-09-30).

## Review Focus

1. **HR pastes hostile or messy HTML into a description** (`<script>`, `<iframe>`, `onerror=`, `javascript:` links, `style`/`class` attrs) → the rendered page contains none of it; the text survives. *Pinned in Task 2 (sanitiser tests) and by curl in Task 4.*
2. **Someone opens `/careers/<dental-or-nursing-job-id>/`** → 404, never another college's job. *Pinned in Task 1 (`pickInstitutionJob` tests) and verified by curl in Task 4.*
3. **`JKKN_PHARMACY_INSTITUTION_ID` missing on the server** → listing shows zero jobs + the fallback notice, not every college's jobs; sitemap adds no job URLs. *Pinned in Task 1 (`filterInstitutionJobs(…, undefined)` test) and the fail-closed check in Task 3.*
4. **MyJKKN is down, slow, or returns non-JSON** → listing shows "couldn't load" notice (build does not fail); detail page shows the friendly error boundary; apply shows a retry message instead of crashing. *Pinned in Task 1 (malformed payload tests), Task 4 (`error.tsx`) and Task 5 (non-JSON / network-error tests).*
5. **A job title contains `</script>` or is very long** → JSON-LD (JobPosting + breadcrumb) cannot break out of its `<script>` tag, and the `<title>` stays ≤ 60 chars. *Pinned in Task 2 (`serializeJsonLd` test) and Task 1 (`careerPageTitle` test).*

---

## File Structure

| File | Status | Responsibility |
|---|---|---|
| `vitest.config.ts` | Create | Test runner config (`@/` alias, node env) |
| `lib/careers/types.ts` | Create | `PublicJob`, `PublicJobsResponse`, `ApplyResult` types |
| `lib/careers/config.ts` | Create | API base URL, careers path, site URL, college name, limits (browser-safe, no env secrets) |
| `lib/careers/jobs.ts` | Create | Pure: uuid check, institution filtering (fail-closed), payload validation |
| `lib/careers/format.ts` | Create | Pure: human labels + `careerPageTitle` |
| `lib/careers/sanitize.ts` | Create | Pure: description HTML sanitiser + plain-text excerpt |
| `lib/careers/schema.ts` | Create | Pure: `JobPosting` JSON-LD builder + safe serialiser |
| `lib/careers/api.ts` | Create | `server-only`: `getCollegeJobs()`, `getCollegeJob(id)` with ISR + timeout |
| `lib/careers/apply.ts` | Create | Browser-safe: validation, FormData builder, `submitApplication()` |
| `lib/careers/test-fixtures.ts` | Create | `makeJob()` fixture for tests |
| `lib/careers/*.test.ts` | Create | Unit tests (jobs, format, sanitize, schema, apply) |
| `components/careers/JsonLd.tsx` | Create | Escaped JSON-LD `<script>` |
| `components/careers/CareersBreadcrumb.tsx` | Create | Server breadcrumb (same look as `Breadcrumb.tsx`) + escaped BreadcrumbList JSON-LD |
| `components/careers/JobCard.tsx` | Create | Server component: one job summary card |
| `components/careers/ApplyForm.tsx` | Create | Client component: application form |
| `app/careers/page.tsx` | Rewrite | Listing (replaces cvviz iframe; keeps hero; adds contact card) |
| `app/careers/[id]/page.tsx` | Create | Job detail + apply form + JSON-LD |
| `app/careers/[id]/error.tsx` | Create | Friendly error boundary when MyJKKN is unreachable |
| `next.config.js` | Modify | Add `https://www.jkkn.ai` to CSP `connect-src` (line 64) |
| `next-sitemap.config.js` | Modify | Add `/careers` index + job detail URLs to `additionalPaths` |
| `package.json` | Modify | `sanitize-html`, `@types/sanitize-html`, `vitest`, `test` script |
| `CLAUDE.md` | Modify | Short "Careers" section (env var, behaviour, tests) |

`data/siteData.ts`, `components/Header.tsx`, `components/BottomNav/*`, `utils/breadcrumbs.ts` are **not** touched.

---

### Task 1: Test harness + careers types, config, filtering and formatting

**Files:**
- Modify: `package.json` (devDependency + `test` script)
- Create: `vitest.config.ts`, `lib/careers/types.ts`, `lib/careers/config.ts`, `lib/careers/jobs.ts`, `lib/careers/format.ts`, `lib/careers/test-fixtures.ts`
- Test: `lib/careers/jobs.test.ts`, `lib/careers/format.test.ts`

**Interfaces:**
- Produces:
  - `types.ts`: `JobType`, `PublicJobRef`, `PublicJobSalary`, `PublicJob`, `PublicJobsResponse`, `ApplyResult`
  - `config.ts`: `MYJKKN_URL: string`, `CAREERS_API: string`, `CAREERS_PATH = '/careers'`, `SITE_URL = 'https://pharmacy.jkkn.ac.in'`, `COLLEGE_NAME = 'JKKN College of Pharmacy'`, `CAREERS_REVALIDATE_SECONDS = 300`, `RESUME_MAX_BYTES = 2097152`
  - `jobs.ts`: `isUuid(v: string): boolean`, `filterInstitutionJobs(payload: unknown, institutionId: string | undefined): PublicJob[]`, `pickInstitutionJob(payload: unknown, institutionId: string | undefined): PublicJob | null`
  - `format.ts`: `roleCategoryLabel`, `jobTypeLabel`, `educationLabel` (all `(v: string | null) => string | null`), `experienceLabel(min: number | null, max: number | null): string | null`, `salaryLabel(s: PublicJobSalary | null): string | null`, `locationLabel(job: Pick<PublicJob,'city'|'state'>): string | null`, `formatDate(iso: string | null): string | null`, `positionsLabel(n: number | null): string | null`, `careerPageTitle(jobTitle: string): string`
  - `test-fixtures.ts`: `PHARMACY_ID`, `DENTAL_ID`, `makeJob(overrides?: Partial<PublicJob>): PublicJob`

- [ ] **Step 1: Pre-flight — clean package files and a feature branch**

Run: `git status --short`

Expected: **no** `M package.json` / `M package-lock.json` lines. On 2026-09-30 the tree had unrelated uncommitted changes to `lib/services/staff-api.ts` and `package-lock.json`. If either package file shows as modified, **stop and ask your human partner** to commit or stash that work first — this task commits `package-lock.json` and must not sweep unrelated changes into it.

Then: `git switch -c feat/myjkkn-careers`

- [ ] **Step 2: Install Vitest and add the test script**

Run: `npm install --save-dev vitest`

Then add to `package.json` → `"scripts"` (after `"lint"`):

```json
"test": "vitest run"
```

- [ ] **Step 3: Create `vitest.config.ts`**

```ts
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: [{ find: /^@\//, replacement: fileURLToPath(new URL('./', import.meta.url)) }],
  },
  test: {
    environment: 'node',
    include: ['lib/**/*.test.ts'],
  },
});
```

- [ ] **Step 4: Create `lib/careers/types.ts`**

```ts
/**
 * Types for the MyJKKN Public Careers API (https://www.jkkn.ai/api/public/careers).
 * Nullable fields reflect live data (posted_at, job_code, department, salary are frequently null).
 */

export type JobType = 'full_time' | 'part_time' | 'contract' | 'internship' | 'freelance';

export interface PublicJobRef {
  id: string;
  name: string;
}

export interface PublicJobSalary {
  min: number | null;
  max: number | null;
  currency: string;
  duration: string;
}

export interface PublicJob {
  id: string;
  job_code: string | null;
  title: string;
  role_category: string | null;
  job_type: JobType | string;
  description: string | null;
  institution: PublicJobRef;
  department: PublicJobRef | null;
  city: string | null;
  state: string | null;
  country: string | null;
  education_level: string | null;
  min_experience_years: number | null;
  max_experience_years: number | null;
  qualifications: string[] | null;
  skills: string[] | null;
  positions_open: number | null;
  posted_at: string | null;
  closes_at: string | null;
  salary: PublicJobSalary | null;
}

export interface PublicJobsResponse {
  data: PublicJob[];
  institutions: Array<PublicJobRef & { open_jobs: number }>;
}

export type ApplyResult =
  | { ok: true; reference: string }
  | { ok: false; status: number; error: string; fields: Record<string, string> };
```

- [ ] **Step 5: Create `lib/careers/config.ts`**

```ts
/**
 * Careers integration config. Browser-safe (no secrets, no institution id —
 * that is read server-side in lib/careers/api.ts).
 * NEXT_PUBLIC_MYJKKN_URL is optional; production MyJKKN host is https://www.jkkn.ai.
 * If the host ever changes, also update connect-src in next.config.js and next-sitemap.config.js.
 */
export const MYJKKN_URL = (process.env.NEXT_PUBLIC_MYJKKN_URL || 'https://www.jkkn.ai').replace(/\/+$/, '');
export const CAREERS_API = `${MYJKKN_URL}/api/public/careers`;
export const CAREERS_PATH = '/careers';
export const SITE_URL = 'https://pharmacy.jkkn.ac.in';
export const COLLEGE_NAME = 'JKKN College of Pharmacy';
export const CAREERS_REVALIDATE_SECONDS = 300;
export const RESUME_MAX_BYTES = 2 * 1024 * 1024;
```

- [ ] **Step 6: Create `lib/careers/test-fixtures.ts`**

```ts
import type { PublicJob } from './types';

export const PHARMACY_ID = '5736d86f-5dab-4b7f-9aa1-b3bb1a2dd334';
export const DENTAL_ID = 'e8fbe8aa-c44e-41aa-a44b-39dab2c8b9a5';

export function makeJob(overrides: Partial<PublicJob> = {}): PublicJob {
  return {
    id: 'dff7f886-0000-4000-8000-000000000001',
    job_code: null,
    title: 'Asst Prof - PHARMACOLOGY - COP',
    role_category: 'teaching_faculty',
    job_type: 'full_time',
    description: '<p>Role summary</p>',
    institution: { id: PHARMACY_ID, name: 'JKKN College of Pharmacy' },
    department: { id: 'dept-1', name: 'Pharmacology' },
    city: 'Komarapalayam',
    state: 'Tamil Nadu',
    country: 'India',
    education_level: 'masters',
    min_experience_years: 2,
    max_experience_years: null,
    qualifications: [],
    skills: [],
    positions_open: 1,
    posted_at: null,
    closes_at: null,
    salary: null,
    ...overrides,
  };
}
```

- [ ] **Step 7: Write the failing tests `lib/careers/jobs.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import { filterInstitutionJobs, isUuid, pickInstitutionJob } from './jobs';
import { DENTAL_ID, PHARMACY_ID, makeJob } from './test-fixtures';

const pharmacy = makeJob();
const dental = makeJob({
  id: '11111111-1111-4111-8111-111111111111',
  title: 'PROF - DCH - PERIODONTICS',
  institution: { id: DENTAL_ID, name: 'JKKN Dental College and Hospital' },
});

describe('isUuid', () => {
  it('accepts a uuid and rejects other strings', () => {
    expect(isUuid(PHARMACY_ID)).toBe(true);
    expect(isUuid('not-a-uuid')).toBe(false);
    expect(isUuid('../../admin')).toBe(false);
  });
});

describe('filterInstitutionJobs', () => {
  it('keeps only jobs of the given institution', () => {
    expect(filterInstitutionJobs({ data: [pharmacy, dental] }, PHARMACY_ID)).toEqual([pharmacy]);
  });

  it('fails closed when the institution id is missing', () => {
    expect(filterInstitutionJobs({ data: [pharmacy, dental] }, undefined)).toEqual([]);
  });

  it('returns [] for malformed payloads', () => {
    expect(filterInstitutionJobs(null, PHARMACY_ID)).toEqual([]);
    expect(filterInstitutionJobs({ data: 'oops' }, PHARMACY_ID)).toEqual([]);
    expect(filterInstitutionJobs({ error: 'boom' }, PHARMACY_ID)).toEqual([]);
  });

  it('drops entries that are not valid jobs', () => {
    const broken = { id: 'x', institution: { id: PHARMACY_ID } };
    expect(filterInstitutionJobs({ data: [broken, pharmacy] }, PHARMACY_ID)).toEqual([pharmacy]);
  });
});

describe('pickInstitutionJob', () => {
  it('returns the job when it belongs to the institution', () => {
    expect(pickInstitutionJob({ data: pharmacy }, PHARMACY_ID)).toEqual(pharmacy);
  });

  it("rejects another institution's job", () => {
    expect(pickInstitutionJob({ data: dental }, PHARMACY_ID)).toBeNull();
  });

  it('fails closed without an institution id or with a bad payload', () => {
    expect(pickInstitutionJob({ data: pharmacy }, undefined)).toBeNull();
    expect(pickInstitutionJob({ error: 'Job not found.' }, PHARMACY_ID)).toBeNull();
  });
});
```

- [ ] **Step 8: Write the failing tests `lib/careers/format.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import {
  careerPageTitle,
  educationLabel,
  experienceLabel,
  formatDate,
  jobTypeLabel,
  locationLabel,
  positionsLabel,
  roleCategoryLabel,
  salaryLabel,
} from './format';

describe('labels', () => {
  it('maps role categories to JKKN terminology', () => {
    expect(roleCategoryLabel('teaching_faculty')).toBe('Senior Learner');
    expect(roleCategoryLabel('non_teaching')).toBe('Team Member');
    expect(roleCategoryLabel('medical')).toBe('Clinical');
    expect(roleCategoryLabel('research_assistant')).toBe('Research Assistant');
    expect(roleCategoryLabel(null)).toBeNull();
  });

  it('maps job types and education levels', () => {
    expect(jobTypeLabel('full_time')).toBe('Full-time');
    expect(jobTypeLabel('internship')).toBe('Internship');
    expect(educationLabel('phd')).toBe('Ph.D.');
    expect(educationLabel('masters')).toBe("Master's degree");
    expect(educationLabel(null)).toBeNull();
  });
});

describe('experienceLabel', () => {
  it('formats ranges and open-ended values', () => {
    expect(experienceLabel(1, 5)).toBe('1–5 years');
    expect(experienceLabel(10, null)).toBe('10+ years');
    expect(experienceLabel(1, null)).toBe('1+ year');
    expect(experienceLabel(0, null)).toBe('Freshers welcome');
    expect(experienceLabel(null, 3)).toBe('Up to 3 years');
    expect(experienceLabel(2, 2)).toBe('2 years');
    expect(experienceLabel(null, null)).toBeNull();
  });
});

describe('salaryLabel', () => {
  it('formats INR ranges with duration', () => {
    expect(salaryLabel({ min: 30000, max: 50000, currency: 'INR', duration: 'per_month' })).toBe(
      '₹30,000 – ₹50,000 / month',
    );
    expect(salaryLabel({ min: 150000, max: null, currency: 'INR', duration: 'per_year' })).toBe(
      'From ₹1,50,000 / year',
    );
  });

  it('returns null when hidden or empty', () => {
    expect(salaryLabel(null)).toBeNull();
    expect(salaryLabel({ min: null, max: null, currency: 'INR', duration: 'per_month' })).toBeNull();
  });
});

describe('misc labels', () => {
  it('formats location, date and positions', () => {
    expect(locationLabel({ city: 'Komarapalayam', state: 'Tamil Nadu' })).toBe('Komarapalayam, Tamil Nadu');
    expect(locationLabel({ city: null, state: null })).toBeNull();
    expect(formatDate('2026-09-01T00:00:00Z')).toBe('1 September 2026');
    expect(formatDate(null)).toBeNull();
    expect(formatDate('garbage')).toBeNull();
    expect(positionsLabel(1)).toBe('1 position');
    expect(positionsLabel(3)).toBe('3 positions');
    expect(positionsLabel(null)).toBeNull();
  });
});

describe('careerPageTitle', () => {
  it('appends the brand to short titles', () => {
    expect(careerPageTitle('TUTOR - COP')).toBe('TUTOR - COP | JKKN Pharmacy');
  });

  it('collapses whitespace', () => {
    expect(careerPageTitle('  Asst Prof  -  PHARMACOLOGY ')).toBe('Asst Prof - PHARMACOLOGY | JKKN Pharmacy');
  });

  it('truncates long titles so the result is at most 60 characters', () => {
    const title = careerPageTitle('Asst Prof - PHARMA CHEMISTRY & ANALYSIS - COP - EXTRA LONG SUFFIX');
    expect(title.length).toBeLessThanOrEqual(60);
    expect(title.endsWith('… | JKKN Pharmacy')).toBe(true);
  });
});
```

- [ ] **Step 9: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL — `Failed to resolve import "./jobs"` / `"./format"`.

- [ ] **Step 10: Implement `lib/careers/jobs.ts`**

```ts
import type { PublicJob } from './types';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isUuid(value: string): boolean {
  return UUID_RE.test(value);
}

function isPublicJob(value: unknown): value is PublicJob {
  if (!value || typeof value !== 'object') return false;
  const job = value as Partial<PublicJob>;
  return typeof job.id === 'string' && typeof job.title === 'string' && typeof job.institution?.id === 'string';
}

function payloadData(payload: unknown): unknown {
  return payload && typeof payload === 'object' ? (payload as { data?: unknown }).data : undefined;
}

/** Jobs from a list response that belong to `institutionId`. Fails closed: no id → []. */
export function filterInstitutionJobs(payload: unknown, institutionId: string | undefined): PublicJob[] {
  if (!institutionId) return [];
  const data = payloadData(payload);
  if (!Array.isArray(data)) return [];
  return data.filter(isPublicJob).filter((job) => job.institution.id === institutionId);
}

/** The job from a detail response if it belongs to `institutionId`, else null. */
export function pickInstitutionJob(payload: unknown, institutionId: string | undefined): PublicJob | null {
  if (!institutionId) return null;
  const data = payloadData(payload);
  return isPublicJob(data) && data.institution.id === institutionId ? data : null;
}
```

- [ ] **Step 11: Implement `lib/careers/format.ts`**

```ts
import type { PublicJob, PublicJobSalary } from './types';

const ROLE_LABELS: Record<string, string> = {
  teaching_faculty: 'Senior Learner',
  non_teaching: 'Team Member',
  medical: 'Clinical',
};

const JOB_TYPE_LABELS: Record<string, string> = {
  full_time: 'Full-time',
  part_time: 'Part-time',
  contract: 'Contract',
  internship: 'Internship',
  freelance: 'Freelance',
};

const EDUCATION_LABELS: Record<string, string> = {
  phd: 'Ph.D.',
  masters: "Master's degree",
  bachelors: "Bachelor's degree",
  diploma: 'Diploma',
};

const DURATION_LABELS: Record<string, string> = {
  per_hour: ' / hour',
  per_day: ' / day',
  per_week: ' / week',
  per_month: ' / month',
  per_year: ' / year',
};

function humanize(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function lookup(labels: Record<string, string>, value: string | null): string | null {
  if (!value) return null;
  return labels[value] ?? humanize(value);
}

export const roleCategoryLabel = (value: string | null) => lookup(ROLE_LABELS, value);
export const jobTypeLabel = (value: string | null) => lookup(JOB_TYPE_LABELS, value);
export const educationLabel = (value: string | null) => lookup(EDUCATION_LABELS, value);

const years = (n: number) => (n === 1 ? 'year' : 'years');

export function experienceLabel(min: number | null, max: number | null): string | null {
  if (min == null && max == null) return null;
  if (min != null && max != null) return min === max ? `${min} ${years(min)}` : `${min}–${max} years`;
  if (min != null) return min === 0 ? 'Freshers welcome' : `${min}+ ${years(min)}`;
  return `Up to ${max} ${years(max as number)}`;
}

export function salaryLabel(salary: PublicJobSalary | null): string | null {
  if (!salary || (salary.min == null && salary.max == null)) return null;
  const money = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: salary.currency || 'INR',
    maximumFractionDigits: 0,
  });
  const per = DURATION_LABELS[salary.duration] ?? '';
  if (salary.min != null && salary.max != null) return `${money.format(salary.min)} – ${money.format(salary.max)}${per}`;
  if (salary.min != null) return `From ${money.format(salary.min)}${per}`;
  return `Up to ${money.format(salary.max as number)}${per}`;
}

export function locationLabel(job: Pick<PublicJob, 'city' | 'state'>): string | null {
  return [job.city, job.state].filter(Boolean).join(', ') || null;
}

const DATE_FORMAT = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Asia/Kolkata',
});

export function formatDate(iso: string | null): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? null : DATE_FORMAT.format(date);
}

export function positionsLabel(count: number | null): string | null {
  if (count == null || count < 1) return null;
  return `${count} ${count === 1 ? 'position' : 'positions'}`;
}

const TITLE_SUFFIX = ' | JKKN Pharmacy';
const TITLE_MAX = 60;

/** `<title>` for a job page: "<job title> | JKKN Pharmacy", truncated to ≤ 60 chars. */
export function careerPageTitle(jobTitle: string): string {
  const room = TITLE_MAX - TITLE_SUFFIX.length;
  const title = jobTitle.trim().replace(/\s+/g, ' ');
  const short = title.length <= room ? title : `${title.slice(0, room - 1).trimEnd()}…`;
  return `${short}${TITLE_SUFFIX}`;
}
```

- [ ] **Step 12: Run tests to verify they pass**

Run: `npm test`
Expected: PASS — `jobs.test.ts` and `format.test.ts` all green.

- [ ] **Step 13: Type-check**

Run: `npx tsc --noEmit`
Expected: exit 0.

- [ ] **Step 14: Commit**

```bash
git add package.json package-lock.json vitest.config.ts lib/careers/types.ts lib/careers/config.ts lib/careers/jobs.ts lib/careers/format.ts lib/careers/test-fixtures.ts lib/careers/jobs.test.ts lib/careers/format.test.ts
git commit -m "feat(careers): add MyJKKN careers types, pharmacy-only filtering and label helpers" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2: Description sanitiser, plain-text excerpt, JobPosting JSON-LD, escaped JSON-LD components

**Files:**
- Modify: `package.json` (`sanitize-html`, `@types/sanitize-html`)
- Create: `lib/careers/sanitize.ts`, `lib/careers/schema.ts`, `components/careers/JsonLd.tsx`, `components/careers/CareersBreadcrumb.tsx`
- Test: `lib/careers/sanitize.test.ts`, `lib/careers/schema.test.ts`

**Interfaces:**
- Consumes: `PublicJob` (Task 1); `SITE_URL`, `COLLEGE_NAME` (Task 1)
- Produces:
  - `sanitizeJobDescription(html: string | null | undefined): string`
  - `descriptionToPlainText(html: string | null | undefined, maxLength?: number): string` (default 155)
  - `serializeJsonLd(data: unknown): string`
  - `buildJobPostingSchema(job: PublicJob, pageUrl: string, descriptionHtml: string): Record<string, unknown> | null`
  - `<JsonLd data={object} />` (default export, `JsonLdProps { data: Record<string, unknown> }`)
  - `<CareersBreadcrumb items={CareersCrumb[]} />` (default export; `CareersCrumb { name: string; path: string }`; items **exclude** Home, last item = current page)

- [ ] **Step 1: Install the sanitiser**

Run: `npm install sanitize-html && npm install --save-dev @types/sanitize-html`

- [ ] **Step 2: Write the failing tests `lib/careers/sanitize.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import { descriptionToPlainText, sanitizeJobDescription } from './sanitize';

describe('sanitizeJobDescription', () => {
  it('strips class and style attributes', () => {
    expect(sanitizeJobDescription('<p class="x" style="color:red">Hi</p>')).toBe('<p>Hi</p>');
  });

  it('removes scripts, iframes and event handlers', () => {
    expect(sanitizeJobDescription('<script>alert(1)</script><p>ok</p>')).toBe('<p>ok</p>');
    expect(sanitizeJobDescription('<iframe src="https://evil.test"></iframe><p>ok</p>')).toBe('<p>ok</p>');
    expect(sanitizeJobDescription('<img src=x onerror=alert(1)>')).toBe('');
  });

  it('unwraps unsafe or junk links but keeps their text', () => {
    expect(sanitizeJobDescription('<a href="javascript:alert(1)">click</a>')).toBe('click');
    expect(sanitizeJobDescription('<a class="text-blue-600" href="http://M.Sc">M.Sc</a>')).toBe('M.Sc');
  });

  it('keeps https links, opening them safely in a new tab', () => {
    expect(sanitizeJobDescription('<a href="https://jkkn.ac.in">site</a>')).toBe(
      '<a href="https://jkkn.ac.in" target="_blank" rel="noopener noreferrer nofollow">site</a>',
    );
  });

  it('keeps mailto links without target', () => {
    expect(sanitizeJobDescription('<a target="_blank" href="mailto:pharmacy@jkkn.ac.in">mail</a>')).toBe(
      '<a href="mailto:pharmacy@jkkn.ac.in">mail</a>',
    );
  });

  it('keeps list structure and handles empty input', () => {
    expect(sanitizeJobDescription('<ul><li><strong>A</strong></li></ul>')).toBe('<ul><li><strong>A</strong></li></ul>');
    expect(sanitizeJobDescription(null)).toBe('');
  });
});

describe('descriptionToPlainText', () => {
  it('flattens HTML into readable text with decoded entities', () => {
    expect(descriptionToPlainText('<p>Hello &amp; welcome</p><p>Line&nbsp;two</p>')).toBe('Hello & welcome Line two');
  });

  it('drops script content', () => {
    expect(descriptionToPlainText('<script>alert(1)</script><p>ok</p>')).toBe('ok');
  });

  it('truncates on a word boundary with an ellipsis', () => {
    const text = descriptionToPlainText(`<p>${'alpha '.repeat(50)}</p>`, 40);
    expect(text.length).toBeLessThanOrEqual(40);
    expect(text.endsWith('alpha…')).toBe(true);
  });

  it('returns empty string for empty input', () => {
    expect(descriptionToPlainText(null)).toBe('');
  });
});
```

- [ ] **Step 3: Write the failing tests `lib/careers/schema.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import { buildJobPostingSchema, serializeJsonLd } from './schema';
import { makeJob } from './test-fixtures';

const URL = 'https://pharmacy.jkkn.ac.in/careers/abc/';

describe('buildJobPostingSchema', () => {
  it('returns null when posted_at is missing (Google requires datePosted)', () => {
    expect(buildJobPostingSchema(makeJob({ posted_at: null }), URL, '<p>x</p>')).toBeNull();
  });

  it('builds a JobPosting with employment type and hiring organisation', () => {
    const schema = buildJobPostingSchema(makeJob({ posted_at: '2026-09-01T00:00:00Z' }), URL, '<p>x</p>');
    expect(schema).toMatchObject({
      '@type': 'JobPosting',
      title: 'Asst Prof - PHARMACOLOGY - COP',
      datePosted: '2026-09-01T00:00:00Z',
      employmentType: 'FULL_TIME',
      directApply: true,
      url: URL,
      hiringOrganization: { name: 'JKKN College of Pharmacy', sameAs: 'https://pharmacy.jkkn.ac.in' },
      jobLocation: { address: { addressLocality: 'Komarapalayam', postalCode: '638183', addressCountry: 'IN' } },
    });
    expect(schema).not.toHaveProperty('baseSalary');
    expect(schema).not.toHaveProperty('validThrough');
  });

  it('adds salary and closing date when present', () => {
    const schema = buildJobPostingSchema(
      makeJob({
        posted_at: '2026-09-01T00:00:00Z',
        closes_at: '2026-10-01T00:00:00Z',
        salary: { min: 30000, max: 50000, currency: 'INR', duration: 'per_month' },
      }),
      URL,
      '<p>x</p>',
    );
    expect(schema).toMatchObject({
      validThrough: '2026-10-01T00:00:00Z',
      baseSalary: { currency: 'INR', value: { minValue: 30000, maxValue: 50000, unitText: 'MONTH' } },
    });
  });
});

describe('serializeJsonLd', () => {
  it('escapes < so data cannot close the script tag, and stays valid JSON', () => {
    const data = { title: '</script><script>alert(1)</script>' };
    const out = serializeJsonLd(data);
    expect(out).not.toContain('</script>');
    expect(JSON.parse(out)).toEqual(data);
  });
});
```

- [ ] **Step 4: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL — `Failed to resolve import "./sanitize"` / `"./schema"`.

- [ ] **Step 5: Implement `lib/careers/sanitize.ts`**

```ts
import sanitizeHtml from 'sanitize-html';

const SAFE_LINK = /^(https:|mailto:|tel:)/i;

/**
 * Sanitise HR-authored job description HTML from MyJKKN.
 * Keeps basic formatting; strips classes/styles/scripts; keeps only https/mailto/tel
 * links (others — incl. auto-linked junk like "http://M.Sc" — are unwrapped to text).
 */
export function sanitizeJobDescription(html: string | null | undefined): string {
  if (!html) return '';
  return sanitizeHtml(html, {
    allowedTags: ['p', 'br', 'strong', 'b', 'em', 'i', 'u', 'ul', 'ol', 'li', 'hr', 'h3', 'h4', 'blockquote', 'a'],
    allowedAttributes: { a: ['href', 'target', 'rel'] },
    allowedSchemes: ['https', 'mailto', 'tel'],
    allowProtocolRelative: false,
    transformTags: {
      h1: 'h3',
      h2: 'h3',
      a: (_tagName, attribs) => {
        const href = attribs.href ?? '';
        if (!SAFE_LINK.test(href)) return { tagName: 'span', attribs: {} };
        return href.toLowerCase().startsWith('https:')
          ? { tagName: 'a', attribs: { href, target: '_blank', rel: 'noopener noreferrer nofollow' } }
          : { tagName: 'a', attribs: { href } };
      },
    },
  });
}

const ENTITIES: Record<string, string> = { '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ' };

/** Plain-text version of a description for card excerpts and meta descriptions. */
export function descriptionToPlainText(html: string | null | undefined, maxLength = 155): string {
  if (!html) return '';
  const spaced = html.replace(/<(br|hr)\s*\/?>|<\/(p|li|h[1-6]|div|blockquote)>/gi, ' ');
  const text = sanitizeHtml(spaced, { allowedTags: [], allowedAttributes: {} })
    .replace(/&(lt|gt|quot|#39|nbsp);/g, (entity) => ENTITIES[entity])
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= maxLength) return text;
  const slice = text.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > maxLength * 0.6 ? slice.slice(0, lastSpace) : slice;
  return `${cut.trimEnd()}…`;
}
```

- [ ] **Step 6: Implement `lib/careers/schema.ts`**

Organisation/address values are copied from `OrganizationSchema` in `components/SchemaOrg.tsx` (kept inline here so the helper stays pure and testable).

```ts
import { COLLEGE_NAME, SITE_URL } from './config';
import type { PublicJob } from './types';

const ADDRESS = {
  streetAddress: 'Natarajapuram, NH-544, Salem To Coimbatore National Highway',
  addressLocality: 'Komarapalayam',
  addressRegion: 'Tamil Nadu',
  postalCode: '638183',
  addressCountry: 'IN',
};

const EMPLOYMENT_TYPES: Record<string, string> = {
  full_time: 'FULL_TIME',
  part_time: 'PART_TIME',
  contract: 'CONTRACTOR',
  internship: 'INTERN',
  freelance: 'CONTRACTOR',
};

const SALARY_UNITS: Record<string, string> = {
  per_hour: 'HOUR',
  per_day: 'DAY',
  per_week: 'WEEK',
  per_month: 'MONTH',
  per_year: 'YEAR',
};

/** JSON for a <script type="application/ld+json">, with `<` escaped so data cannot close the tag. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/**
 * schema.org JobPosting for Google Jobs. Returns null when posted_at is missing,
 * because datePosted is a required property.
 */
export function buildJobPostingSchema(
  job: PublicJob,
  pageUrl: string,
  descriptionHtml: string,
): Record<string, unknown> | null {
  if (!job.posted_at) return null;
  const salary = job.salary;
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: descriptionHtml || job.title,
    identifier: { '@type': 'PropertyValue', name: COLLEGE_NAME, value: job.job_code ?? job.id },
    datePosted: job.posted_at,
    ...(job.closes_at ? { validThrough: job.closes_at } : {}),
    employmentType: EMPLOYMENT_TYPES[job.job_type] ?? 'OTHER',
    hiringOrganization: {
      '@type': 'Organization',
      name: COLLEGE_NAME,
      sameAs: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        ...ADDRESS,
        addressLocality: job.city ?? ADDRESS.addressLocality,
        addressRegion: job.state ?? ADDRESS.addressRegion,
      },
    },
    directApply: true,
    url: pageUrl,
    ...(salary && (salary.min != null || salary.max != null)
      ? {
          baseSalary: {
            '@type': 'MonetaryAmount',
            currency: salary.currency || 'INR',
            value: {
              '@type': 'QuantitativeValue',
              ...(salary.min != null ? { minValue: salary.min } : {}),
              ...(salary.max != null ? { maxValue: salary.max } : {}),
              unitText: SALARY_UNITS[salary.duration] ?? 'MONTH',
            },
          },
        }
      : {}),
  };
}
```

- [ ] **Step 7: Create `components/careers/JsonLd.tsx`**

```tsx
import { serializeJsonLd } from '@/lib/careers/schema';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/** JSON-LD script for data that may contain API-provided text (escapes `<`). */
export default function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />;
}
```

- [ ] **Step 8: Create `components/careers/CareersBreadcrumb.tsx`**

Same markup and classes as `components/Breadcrumb.tsx` (so it looks identical to every other page), but a server component whose JSON-LD is escaped — job titles come from the API.

```tsx
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import JsonLd from '@/components/careers/JsonLd';
import { SITE_URL } from '@/lib/careers/config';

export interface CareersCrumb {
  name: string;
  /** Site-relative path with trailing slash, e.g. "/careers/". */
  path: string;
}

interface CareersBreadcrumbProps {
  /** Crumbs after Home; the last one is the current page. */
  items: CareersCrumb[];
}

export default function CareersBreadcrumb({ items }: CareersBreadcrumbProps) {
  const crumbs: CareersCrumb[] = [{ name: 'Home', path: '/' }, ...items];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 pb-3">
          <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm">
            {crumbs.map((crumb, index) => (
              <li key={crumb.path} className="flex items-center min-w-0">
                {index > 0 && (
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mx-1.5 sm:mx-2 text-gray-400" aria-hidden="true" />
                )}
                {index === 0 ? (
                  <Link
                    href="/"
                    className="text-[#006837] hover:text-[#7cb983] transition-colors flex items-center gap-1.5"
                  >
                    <Home className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                    <span>{crumb.name}</span>
                  </Link>
                ) : (
                  <span
                    className="text-gray-600 font-medium break-words"
                    aria-current={index === crumbs.length - 1 ? 'page' : undefined}
                  >
                    {crumb.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
```

- [ ] **Step 9: Run tests and type-check**

Run: `npm test && npx tsc --noEmit`
Expected: all four test files PASS; `tsc` exit 0.

- [ ] **Step 10: Commit**

```bash
git add package.json package-lock.json lib/careers/sanitize.ts lib/careers/schema.ts lib/careers/sanitize.test.ts lib/careers/schema.test.ts components/careers/JsonLd.tsx components/careers/CareersBreadcrumb.tsx
git commit -m "feat(careers): sanitise MyJKKN job HTML and add escaped JobPosting/breadcrumb JSON-LD" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Server data layer + careers listing page (goes live)

**Files:**
- Create: `lib/careers/api.ts`, `components/careers/JobCard.tsx`
- Rewrite: `app/careers/page.tsx`

**Interfaces:**
- Consumes: `CAREERS_API`, `CAREERS_PATH`, `CAREERS_REVALIDATE_SECONDS`, `SITE_URL` (Task 1); `filterInstitutionJobs`, `pickInstitutionJob`, `isUuid` (Task 1); label helpers (Task 1); `descriptionToPlainText` (Task 2); `CareersBreadcrumb` (Task 2); `siteConfig` from `@/lib/site-config` (existing: `phone`, `email`)
- Produces:
  - `getCollegeJobs(): Promise<CollegeJobsResult>` where `CollegeJobsResult = { jobs: PublicJob[]; available: boolean }`
  - `getCollegeJob(jobId: string): Promise<PublicJob | null>` (React `cache`-wrapped; throws on 5xx/network error, null on 404/foreign/invalid id)
  - `<JobCard job={PublicJob} />`

- [ ] **Step 1: Create `lib/careers/api.ts`**

`import 'server-only'` is resolved internally by Next.js 15 — no package install needed.

```ts
import 'server-only';
import { cache } from 'react';
import { CAREERS_API, CAREERS_REVALIDATE_SECONDS } from './config';
import { filterInstitutionJobs, isUuid, pickInstitutionJob } from './jobs';
import type { PublicJob } from './types';

const TIMEOUT_MS = 8000;

/** Same env var the MyJKKN faculty sync uses (lib/services/staff-api.ts). */
function collegeInstitutionId(): string | undefined {
  return process.env.JKKN_PHARMACY_INSTITUTION_ID?.trim() || undefined;
}

export interface CollegeJobsResult {
  jobs: PublicJob[];
  /** false when the API could not be reached or config is missing — show a fallback notice. */
  available: boolean;
}

/** Open jobs for JKKN College of Pharmacy only. Never throws (safe for build). */
export async function getCollegeJobs(): Promise<CollegeJobsResult> {
  const institutionId = collegeInstitutionId();
  if (!institutionId) {
    console.error('[careers] JKKN_PHARMACY_INSTITUTION_ID is not set — showing no jobs');
    return { jobs: [], available: false };
  }
  try {
    const res = await fetch(`${CAREERS_API}/jobs?institution_id=${encodeURIComponent(institutionId)}`, {
      next: { revalidate: CAREERS_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { jobs: filterInstitutionJobs(await res.json(), institutionId), available: true };
  } catch (error) {
    console.error('[careers] failed to load jobs:', error);
    return { jobs: [], available: false };
  }
}

/**
 * One Pharmacy job, or null when the id is invalid, the job is closed, or it belongs
 * to another institution. Throws on server/network errors so ISR keeps the stale page
 * (and app/careers/[id]/error.tsx shows a friendly message on a cold cache).
 */
export const getCollegeJob = cache(async (jobId: string): Promise<PublicJob | null> => {
  const institutionId = collegeInstitutionId();
  if (!institutionId || !isUuid(jobId)) return null;
  const res = await fetch(`${CAREERS_API}/jobs/${jobId}`, {
    next: { revalidate: CAREERS_REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`[careers] job ${jobId}: HTTP ${res.status}`);
  return pickInstitutionJob(await res.json(), institutionId);
});
```

- [ ] **Step 2: Create `components/careers/JobCard.tsx`**

```tsx
import Link from 'next/link';
import { ArrowRight, Briefcase, Clock, GraduationCap, MapPin, type LucideIcon } from 'lucide-react';
import { CAREERS_PATH } from '@/lib/careers/config';
import {
  educationLabel,
  experienceLabel,
  locationLabel,
  positionsLabel,
  roleCategoryLabel,
} from '@/lib/careers/format';
import { descriptionToPlainText } from '@/lib/careers/sanitize';
import type { PublicJob } from '@/lib/careers/types';

interface JobCardProps {
  job: PublicJob;
}

interface Fact {
  icon: LucideIcon;
  label: string;
}

export default function JobCard({ job }: JobCardProps) {
  const href = `${CAREERS_PATH}/${job.id}/`;
  const facts = [
    { icon: Briefcase, label: roleCategoryLabel(job.role_category) },
    { icon: Clock, label: experienceLabel(job.min_experience_years, job.max_experience_years) },
    { icon: GraduationCap, label: educationLabel(job.education_level) },
    { icon: MapPin, label: locationLabel(job) },
  ].filter((fact): fact is Fact => Boolean(fact.label));
  const excerpt = descriptionToPlainText(job.description, 160);
  const positions = positionsLabel(job.positions_open);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#7cb983]/30 bg-white p-6 shadow-sm">
      {job.department && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#006837]">{job.department.name}</p>
      )}
      <h3 className="mb-3 text-lg font-bold text-[#002309] break-words">
        <Link href={href} className="hover:text-[#006837] hover:underline">
          {job.title}
        </Link>
      </h3>
      {facts.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-2">
          {facts.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#FBFBEE] px-3 py-1 text-xs font-medium text-[#002309]"
            >
              <Icon className="h-3.5 w-3.5 text-[#006837]" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      )}
      {excerpt && <p className="mb-5 line-clamp-3 text-sm text-[#002309]/80">{excerpt}</p>}
      <div className="mt-auto flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-[#002309]/70">{positions}</span>
        <Link
          href={href}
          aria-label={`View details and apply for ${job.title}`}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#7cb983] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#6ba872]"
        >
          View &amp; Apply
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
```

- [ ] **Step 3: Rewrite `app/careers/page.tsx`**

Replaces the cvviz iframe. Keeps the existing hero markup; adds breadcrumb, live openings and an HR contact card. **Do not** render `<Footer />` — `FooterWrapper` in `app/layout.tsx` already does.

```tsx
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Mail, Phone } from 'lucide-react';
import Header from '@/components/Header';
import CareersBreadcrumb from '@/components/careers/CareersBreadcrumb';
import JobCard from '@/components/careers/JobCard';
import { getCollegeJobs } from '@/lib/careers/api';
import { CAREERS_PATH, SITE_URL } from '@/lib/careers/config';
import { siteConfig } from '@/lib/site-config';

export const revalidate = 300;

const PAGE_URL = `${SITE_URL}${CAREERS_PATH}/`;
const PAGE_TITLE = 'Careers & Current Openings | JKKN Pharmacy';
const PAGE_DESCRIPTION =
  'Current job openings at JKKN College of Pharmacy, Komarapalayam, for senior learners and team members. View role details and apply online.';
const OG_IMAGE = '/images/Pharmacy-Homepage-Hero-Banner-Image.png';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1920, height: 1080, alt: 'JKKN College of Pharmacy campus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

interface NoticeProps {
  children: ReactNode;
}

function Notice({ children }: NoticeProps) {
  return (
    <div className="rounded-2xl border border-[#7cb983]/30 bg-white p-6 text-center text-[#002309]">{children}</div>
  );
}

export default async function CareersPage() {
  const { jobs, available } = await getCollegeJobs();

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />
      <CareersBreadcrumb items={[{ name: 'Careers', path: `${CAREERS_PATH}/` }]} />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Careers</h1>
          <p className="mt-2 text-sm sm:text-base text-white/90">
            Join JKKN College of Pharmacy as a senior learner or team member
          </p>
        </div>
      </div>

      {/* Current Openings — live from MyJKKN */}
      <section aria-labelledby="openings-heading" className="px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="openings-heading" className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837]">
              Current Openings
            </h2>
            {available && jobs.length > 0 && (
              <p className="text-sm font-medium text-[#002309]/70">
                {jobs.length} open {jobs.length === 1 ? 'role' : 'roles'}
              </p>
            )}
          </div>

          {!available ? (
            <Notice>
              We couldn&apos;t load the current openings right now. Please try again shortly, or reach us using the
              contact details below.
            </Notice>
          ) : jobs.length === 0 ? (
            <Notice>
              There are no open positions at the moment. Please check back soon, or reach us using the contact
              details below.
            </Notice>
          ) : (
            <ul className="grid gap-5 md:grid-cols-2">
              {jobs.map((job) => (
                <li key={job.id}>
                  <JobCard job={job} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Contact Details */}
      <section aria-labelledby="careers-contact-heading" className="px-4 sm:px-6 lg:px-8 pt-4 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-[#7cb983]/30 bg-white">
            <div className="bg-[#006837] px-6 py-4">
              <h2 id="careers-contact-heading" className="text-base md:text-lg font-bold text-white">
                For job-related inquiries, contact us:
              </h2>
            </div>
            <div className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:gap-8">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-[#002309] hover:text-[#006837]"
              >
                <Phone className="h-4 w-4 text-[#006837]" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-[#002309] hover:text-[#006837] break-all"
              >
                <Mail className="h-4 w-4 text-[#006837]" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 4: Type-check and test**

Run: `npm test && npx tsc --noEmit`
Expected: tests PASS; `tsc` exit 0.

- [ ] **Step 5: Run locally and check the page**

Run: `npm run dev`, then in another shell:

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/careers/
curl -s http://localhost:3000/careers/ | grep -o 'View details and apply for [^"]*' | head
curl -s http://localhost:3000/careers/ | grep -o '<title>[^<]*</title>'
curl -s http://localhost:3000/careers/ | grep -c 'cvviz'
```

Expected: `200`; one "View details and apply for …" line per Pharmacy job (6 as of 2026-09-30) and no Dental/Nursing titles; title `Careers &amp; Current Openings | JKKN Pharmacy`; cvviz count `0`.

In a browser at 320 px, 768 px and 1280 px: cards stack to 1 column below 768 px; exactly **one** footer; breadcrumb shows `Home › Careers`; the Header "OTHERS → Careers" link and mobile bottom-nav "Careers" both open this page.

Fail-closed check: temporarily comment out `JKKN_PHARMACY_INSTITUTION_ID` in `.env.local`, restart dev, reload → "We couldn't load the current openings" notice and **no** job cards. **Restore the line** and restart.

- [ ] **Step 6: Commit**

```bash
git add lib/careers/api.ts components/careers/JobCard.tsx app/careers/page.tsx
git commit -m "feat(careers): list pharmacy job openings from MyJKKN instead of the cvviz iframe" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4: Job detail page, error boundary and JSON-LD

**Files:**
- Create: `app/careers/[id]/page.tsx`, `app/careers/[id]/error.tsx`

**Interfaces:**
- Consumes: `getCollegeJob` (Task 3); label helpers + `careerPageTitle` (Task 1); `sanitizeJobDescription`, `descriptionToPlainText`, `buildJobPostingSchema` (Task 2); `JsonLd`, `CareersBreadcrumb` (Task 2); `CAREERS_PATH`, `SITE_URL`, `COLLEGE_NAME` (Task 1)
- Produces: route `/careers/[id]/`, anchor `#apply` (the `ApplyForm` is mounted in Task 5)

No `generateStaticParams`: job pages render on first request and are then cached by ISR (300 s). This keeps the sitemap the single place job URLs are enumerated (Task 6) and avoids next-sitemap listing them twice.

- [ ] **Step 1: Create `app/careers/[id]/page.tsx`**

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import CareersBreadcrumb from '@/components/careers/CareersBreadcrumb';
import JsonLd from '@/components/careers/JsonLd';
import { getCollegeJob } from '@/lib/careers/api';
import { CAREERS_PATH, COLLEGE_NAME, SITE_URL } from '@/lib/careers/config';
import {
  careerPageTitle,
  educationLabel,
  experienceLabel,
  formatDate,
  jobTypeLabel,
  locationLabel,
  positionsLabel,
  roleCategoryLabel,
  salaryLabel,
} from '@/lib/careers/format';
import { descriptionToPlainText, sanitizeJobDescription } from '@/lib/careers/sanitize';
import { buildJobPostingSchema } from '@/lib/careers/schema';

export const revalidate = 300;

interface CareerDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CareerDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const job = await getCollegeJob(id);
  if (!job) return { title: 'Job Opening Not Found | JKKN Pharmacy', robots: { index: false, follow: true } };
  const url = `${SITE_URL}${CAREERS_PATH}/${job.id}/`;
  const title = careerPageTitle(job.title);
  const description =
    descriptionToPlainText(job.description, 155) ||
    `Apply for ${job.title} at ${COLLEGE_NAME}, Komarapalayam.`.slice(0, 155);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', siteName: COLLEGE_NAME, locale: 'en_IN', url, title, description },
    twitter: { card: 'summary', title, description },
  };
}

const DESCRIPTION_CLASSES =
  'text-[#002309] leading-relaxed break-words [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_strong]:font-semibold [&_a]:text-[#006837] [&_a]:underline [&_hr]:my-6 [&_hr]:border-[#7cb983]/30 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#006837] [&_h4]:mt-4 [&_h4]:mb-2 [&_h4]:font-bold [&_blockquote]:border-l-4 [&_blockquote]:border-[#7cb983] [&_blockquote]:pl-4';

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { id } = await params;
  const job = await getCollegeJob(id);
  if (!job) notFound();

  const pagePath = `${CAREERS_PATH}/${job.id}/`;
  const pageUrl = `${SITE_URL}${pagePath}`;
  const descriptionHtml = sanitizeJobDescription(job.description);
  const jobPostingSchema = buildJobPostingSchema(job, pageUrl, descriptionHtml);

  const facts = [
    { term: 'Role type', value: roleCategoryLabel(job.role_category) },
    { term: 'Department', value: job.department?.name ?? null },
    { term: 'Employment', value: jobTypeLabel(job.job_type) },
    { term: 'Experience', value: experienceLabel(job.min_experience_years, job.max_experience_years) },
    { term: 'Education', value: educationLabel(job.education_level) },
    { term: 'Qualifications', value: job.qualifications?.length ? job.qualifications.join(', ') : null },
    { term: 'Skills', value: job.skills?.length ? job.skills.join(', ') : null },
    { term: 'Openings', value: positionsLabel(job.positions_open) },
    { term: 'Location', value: locationLabel(job) },
    { term: 'Salary', value: salaryLabel(job.salary) },
    { term: 'Posted on', value: formatDate(job.posted_at) },
    { term: 'Apply by', value: formatDate(job.closes_at) },
    { term: 'Job code', value: job.job_code },
  ].filter((fact): fact is { term: string; value: string } => Boolean(fact.value));

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      {jobPostingSchema && <JsonLd data={jobPostingSchema} />}
      <Header />
      <CareersBreadcrumb
        items={[
          { name: 'Careers', path: `${CAREERS_PATH}/` },
          { name: job.title, path: pagePath },
        ]}
      />

      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 break-words">{job.title}</h1>
          <p className="text-sm sm:text-base text-white/90 font-medium">
            {COLLEGE_NAME}
            {job.department ? ` · ${job.department.name}` : ''}
          </p>
          <a
            href="#apply"
            className="mt-6 inline-flex min-h-[44px] items-center rounded-lg bg-[#7cb983] px-6 font-semibold text-white transition-colors hover:bg-[#6ba872]"
          >
            Apply for this role
          </a>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`${CAREERS_PATH}/`}
            className="mb-6 inline-flex min-h-[44px] items-center gap-2 font-semibold text-[#006837] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All current openings
          </Link>

          <div className="grid gap-8 lg:grid-cols-3">
            <article className="rounded-2xl border border-[#7cb983]/30 bg-white p-6 md:p-8 lg:col-span-2">
              <h2 className="mb-4 text-xl font-bold text-[#006837]">About this role</h2>
              {descriptionHtml ? (
                <div className={DESCRIPTION_CLASSES} dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
              ) : (
                <p className="text-[#002309]">Contact us for the full role description.</p>
              )}
            </article>

            <aside className="h-fit rounded-2xl border border-[#7cb983]/30 bg-white p-6">
              <h2 className="mb-4 text-lg font-bold text-[#006837]">Role at a glance</h2>
              <dl className="space-y-3">
                {facts.map(({ term, value }) => (
                  <div key={term}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[#006837]">{term}</dt>
                    <dd className="text-[#002309] break-words">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <section id="apply" aria-labelledby="apply-heading" className="mt-10 scroll-mt-28">
            <h2 id="apply-heading" className="mb-4 text-xl sm:text-2xl font-bold text-[#006837]">
              Apply for this role
            </h2>
            {/* ApplyForm is mounted here in Task 5 */}
          </section>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `app/careers/[id]/error.tsx`**

Shown when MyJKKN is down on a cold cache (a warm ISR cache keeps serving the stale page instead).

```tsx
'use client';

import Link from 'next/link';
import Header from '@/components/Header';

interface CareerDetailErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function CareerDetailError({ reset }: CareerDetailErrorProps) {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="mb-3 text-2xl md:text-3xl font-bold text-[#006837]">We couldn&apos;t load this opening</h1>
        <p className="mb-8 text-[#002309]">
          The job listing service is not responding right now. Please try again in a few minutes.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-[44px] items-center rounded-lg bg-[#7cb983] px-6 font-semibold text-white transition-colors hover:bg-[#6ba872]"
          >
            Try again
          </button>
          <Link
            href="/careers/"
            className="inline-flex min-h-[44px] items-center font-semibold text-[#006837] hover:underline"
          >
            All current openings
          </Link>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: exit 0.

- [ ] **Step 4: Verify locally (dev server running)**

```bash
# a real Pharmacy job id from the listing
ID=$(curl -s http://localhost:3000/careers/ | grep -o '/careers/[0-9a-f-]\{36\}/' | head -1 | cut -d/ -f3)
curl -s -o /dev/null -w "pharmacy: %{http_code}\n" http://localhost:3000/careers/$ID/
# a DENTAL job id from the API — must be 404 here
DN=$(curl -s "https://www.jkkn.ai/api/public/careers/jobs?institution_id=e8fbe8aa-c44e-41aa-a44b-39dab2c8b9a5" | grep -o '"id":"[0-9a-f-]\{36\}"' | head -1 | cut -d'"' -f4)
curl -s -o /dev/null -w "dental: %{http_code}\n" http://localhost:3000/careers/$DN/
curl -s -o /dev/null -w "garbage: %{http_code}\n" http://localhost:3000/careers/not-a-job/
curl -s http://localhost:3000/careers/$ID/ | grep -c 'text-blue-600\|http://M.Sc\|<script>alert'
curl -s http://localhost:3000/careers/$ID/ | grep -o '<title>[^<]*</title>'
```

Expected: `pharmacy: 200`, `dental: 404`, `garbage: 404`, count `0`, title ends with `| JKKN Pharmacy`.

In a browser at 320 px, 768 px and 1280 px: description readable; the facts sidebar stacks under the description below 1024 px; breadcrumb shows `Home › Careers › <job title>` with only Home clickable; exactly one footer.

- [ ] **Step 5: Commit**

```bash
git add "app/careers/[id]/page.tsx" "app/careers/[id]/error.tsx"
git commit -m "feat(careers): add pharmacy job detail page with sanitised description and JSON-LD" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5: Browser-side apply client + ApplyForm + CSP

**Files:**
- Create: `lib/careers/apply.ts`, `components/careers/ApplyForm.tsx`
- Test: `lib/careers/apply.test.ts`
- Modify: `app/careers/[id]/page.tsx` (mount form), `next.config.js:64` (CSP `connect-src`)

**Interfaces:**
- Consumes: `CAREERS_API`, `RESUME_MAX_BYTES` (Task 1), `ApplyResult` (Task 1), `cn` from `@/lib/utils` (existing)
- Produces:
  - `ApplicationInput` (interface), `FieldErrors` (type), `ApplicationField` (type), `APPLICATION_FIELD_ORDER`
  - `toExperienceMonths(years: string, months: string): number | null`
  - `validateApplication(input: ApplicationInput): FieldErrors`
  - `buildApplicationFormData(input: ApplicationInput, utmSource: string): FormData`
  - `submitApplication(jobId: string, formData: FormData, fetchImpl?: typeof fetch): Promise<ApplyResult>`
  - `<ApplyForm jobId={string} jobTitle={string} />`

- [ ] **Step 1: Write the failing tests `lib/careers/apply.test.ts`**

```ts
import { describe, expect, it, vi } from 'vitest';
import {
  buildApplicationFormData,
  submitApplication,
  toExperienceMonths,
  validateApplication,
  type ApplicationInput,
} from './apply';

const pdf = (bytes = 10, name = 'cv.pdf') => new File([new Uint8Array(bytes)], name, { type: 'application/pdf' });

const valid = (overrides: Partial<ApplicationInput> = {}): ApplicationInput => ({
  first_name: 'Priya',
  last_name: 'Kumar',
  email: 'priya@example.com',
  phone: '+91 93458-55001',
  qualification: 'M.Pharm Pharmaceutics',
  experience_years: '2',
  experience_extra_months: '6',
  current_job_title: '',
  current_company: '',
  resume: pdf(),
  consent: true,
  company_fax: '',
  ...overrides,
});

describe('toExperienceMonths', () => {
  it('converts years + months within 0–720', () => {
    expect(toExperienceMonths('2', '6')).toBe(30);
    expect(toExperienceMonths('0', '0')).toBe(0);
    expect(toExperienceMonths('60', '0')).toBe(720);
  });

  it('rejects out-of-range, fractional and blank values', () => {
    expect(toExperienceMonths('60', '1')).toBeNull();
    expect(toExperienceMonths('1', '12')).toBeNull();
    expect(toExperienceMonths('1.5', '0')).toBeNull();
    expect(toExperienceMonths('-1', '0')).toBeNull();
    expect(toExperienceMonths('', '0')).toBeNull();
  });
});

describe('validateApplication', () => {
  it('accepts a valid application', () => {
    expect(validateApplication(valid())).toEqual({});
  });

  it('flags missing and malformed fields', () => {
    const errors = validateApplication(
      valid({ first_name: ' ', email: 'nope', phone: '12345', consent: false, experience_years: '' }),
    );
    expect(Object.keys(errors).sort()).toEqual(['consent', 'email', 'experience_months', 'first_name', 'phone']);
  });

  it('rejects phones with letters and over-long text', () => {
    expect(validateApplication(valid({ phone: '93458abc55' }))).toHaveProperty('phone');
    expect(validateApplication(valid({ current_company: 'x'.repeat(151) }))).toHaveProperty('current_company');
  });

  it('checks resume presence, type and size', () => {
    expect(validateApplication(valid({ resume: null }))).toHaveProperty('resume');
    expect(validateApplication(valid({ resume: pdf(10, 'cv.png') }))).toHaveProperty('resume');
    expect(validateApplication(valid({ resume: pdf(3 * 1024 * 1024) }))).toHaveProperty('resume');
    expect(validateApplication(valid({ resume: pdf(0) }))).toHaveProperty('resume');
    expect(validateApplication(valid({ resume: pdf(10, 'CV.DOCX') }))).toEqual({});
  });
});

describe('buildApplicationFormData', () => {
  it('maps inputs to API field names', () => {
    const fd = buildApplicationFormData(valid({ first_name: '  Priya ' }), 'pharmacy.jkkn.ac.in');
    expect(fd.get('first_name')).toBe('Priya');
    expect(fd.get('experience_months')).toBe('30');
    expect(fd.get('consent')).toBe('true');
    expect(fd.get('utm_source')).toBe('pharmacy.jkkn.ac.in');
    expect(fd.get('company_fax')).toBe('');
    expect(fd.get('resume')).toBeInstanceOf(File);
    expect(fd.has('current_company')).toBe(false);
  });

  it('includes optional fields when provided', () => {
    const fd = buildApplicationFormData(valid({ current_company: 'Apollo Pharmacy' }), 'pharmacy.jkkn.ac.in');
    expect(fd.get('current_company')).toBe('Apollo Pharmacy');
  });
});

describe('submitApplication', () => {
  const body = new FormData();
  const respond = (status: number, payload: unknown) =>
    vi.fn<typeof fetch>(async () => new Response(typeof payload === 'string' ? payload : JSON.stringify(payload), { status }));

  it('posts to the job apply endpoint and returns the reference', async () => {
    const fetchMock = respond(201, { reference: 'JOB-001-AB12CD34' });
    const result = await submitApplication('abc', body, fetchMock);
    expect(result).toEqual({ ok: true, reference: 'JOB-001-AB12CD34' });
    expect(fetchMock).toHaveBeenCalledWith(
      'https://www.jkkn.ai/api/public/careers/jobs/abc/apply',
      expect.objectContaining({ method: 'POST', body }),
    );
  });

  it('passes through field errors on 400', async () => {
    const result = await submitApplication('abc', body, respond(400, { error: 'Invalid', fields: { email: 'Bad email' } }));
    expect(result).toEqual({
      ok: false,
      status: 400,
      error: 'Please correct the highlighted fields.',
      fields: { email: 'Bad email' },
    });
  });

  it('uses friendly messages for rate limit and closed jobs', async () => {
    const limited = await submitApplication('abc', body, respond(429, { error: 'Too many' }));
    expect(limited.ok === false && limited.error).toMatch(/try again in an hour/);
    const closed = await submitApplication('abc', body, respond(404, { error: 'Job not found.' }));
    expect(closed.ok === false && closed.error).toMatch(/no longer open/);
  });

  it('shows the API message for 5xx and survives non-JSON bodies', async () => {
    const withMessage = await submitApplication('abc', body, respond(503, { error: 'Maintenance, retry soon' }));
    expect(withMessage.ok === false && withMessage.error).toBe('Maintenance, retry soon');
    const html = await submitApplication('abc', body, respond(502, '<html>Bad gateway</html>'));
    expect(html).toMatchObject({ ok: false, status: 502, fields: {} });
  });

  it('reports network failures without throwing', async () => {
    const failing = vi.fn<typeof fetch>(async () => {
      throw new TypeError('Failed to fetch');
    });
    const result = await submitApplication('abc', body, failing);
    expect(result).toMatchObject({ ok: false, status: 0 });
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL — `Failed to resolve import "./apply"`.

- [ ] **Step 3: Implement `lib/careers/apply.ts`**

```ts
import { CAREERS_API, RESUME_MAX_BYTES } from './config';
import type { ApplyResult } from './types';

/**
 * Browser-side application submit for the MyJKKN Public Careers API.
 * MUST run in the applicant's browser — the API rate-limits per IP.
 */

export interface ApplicationInput {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  qualification: string;
  experience_years: string;
  experience_extra_months: string;
  current_job_title: string;
  current_company: string;
  resume: File | null;
  consent: boolean;
  /** Honeypot — must stay empty. */
  company_fax: string;
}

export const APPLICATION_FIELD_ORDER = [
  'first_name',
  'last_name',
  'email',
  'phone',
  'qualification',
  'experience_months',
  'current_job_title',
  'current_company',
  'resume',
  'consent',
] as const;

export type ApplicationField = (typeof APPLICATION_FIELD_ORDER)[number];
export type FieldErrors = Partial<Record<ApplicationField, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_CHARS_RE = /^[\d\s+\-()]+$/;
const RESUME_EXT_RE = /\.(pdf|docx?)$/i;

function toWholeNumber(value: string): number {
  return value.trim() === '' ? Number.NaN : Number(value);
}

export function toExperienceMonths(years: string, months: string): number | null {
  const y = toWholeNumber(years);
  const m = toWholeNumber(months);
  if (!Number.isInteger(y) || !Number.isInteger(m) || y < 0 || m < 0 || m > 11) return null;
  const total = y * 12 + m;
  return total <= 720 ? total : null;
}

export function validateApplication(input: ApplicationInput): FieldErrors {
  const errors: FieldErrors = {};

  const requireText = (key: 'first_name' | 'last_name' | 'qualification', label: string, max: number) => {
    const value = input[key].trim();
    if (!value) errors[key] = `${label} is required.`;
    else if (value.length > max) errors[key] = `${label} must be ${max} characters or fewer.`;
  };
  requireText('first_name', 'First name', 100);
  requireText('last_name', 'Last name', 100);
  requireText('qualification', 'Highest qualification', 200);

  if (!EMAIL_RE.test(input.email.trim())) errors.email = 'Enter a valid email address.';

  const phone = input.phone.trim();
  const digits = phone.replace(/\D/g, '').length;
  if (!PHONE_CHARS_RE.test(phone) || digits < 10 || digits > 15) {
    errors.phone = 'Enter a phone number with 10–15 digits.';
  }

  if (toExperienceMonths(input.experience_years, input.experience_extra_months) === null) {
    errors.experience_months = 'Enter whole years (0–60) and months (0–11). Use 0 if you are a fresher.';
  }

  if (input.current_job_title.trim().length > 150) errors.current_job_title = 'Must be 150 characters or fewer.';
  if (input.current_company.trim().length > 150) errors.current_company = 'Must be 150 characters or fewer.';

  const resume = input.resume;
  if (!resume) errors.resume = 'Attach your resume.';
  else if (!RESUME_EXT_RE.test(resume.name)) errors.resume = 'Resume must be a PDF, DOC or DOCX file.';
  else if (resume.size === 0) errors.resume = 'The selected file is empty.';
  else if (resume.size > RESUME_MAX_BYTES) errors.resume = 'Resume must be smaller than 2 MB.';

  if (!input.consent) errors.consent = 'Please confirm your consent to continue.';

  return errors;
}

export function buildApplicationFormData(input: ApplicationInput, utmSource: string): FormData {
  const fd = new FormData();
  fd.set('first_name', input.first_name.trim());
  fd.set('last_name', input.last_name.trim());
  fd.set('email', input.email.trim());
  fd.set('phone', input.phone.trim());
  fd.set('qualification', input.qualification.trim());
  fd.set('experience_months', String(toExperienceMonths(input.experience_years, input.experience_extra_months)));
  if (input.current_job_title.trim()) fd.set('current_job_title', input.current_job_title.trim());
  if (input.current_company.trim()) fd.set('current_company', input.current_company.trim());
  if (input.resume) fd.set('resume', input.resume);
  fd.set('consent', input.consent ? 'true' : 'false');
  fd.set('utm_source', utmSource.slice(0, 100));
  fd.set('company_fax', input.company_fax);
  return fd;
}

const STATUS_MESSAGES: Record<number, string> = {
  400: 'Please correct the highlighted fields.',
  403: 'Applications can only be submitted from the official JKKN website.',
  404: 'This position is no longer open.',
  413: 'Your resume is too large. Please upload a file under 2 MB.',
  429: 'Too many applications from your network. Please try again in an hour.',
};

const FALLBACK_ERROR = 'Something went wrong on our side. Please try again in a few minutes.';

export async function submitApplication(
  jobId: string,
  formData: FormData,
  fetchImpl: typeof fetch = (input, init) => fetch(input, init),
): Promise<ApplyResult> {
  let res: Response;
  try {
    // No Content-Type header: the browser adds the multipart boundary.
    res = await fetchImpl(`${CAREERS_API}/jobs/${encodeURIComponent(jobId)}/apply`, { method: 'POST', body: formData });
  } catch {
    return {
      ok: false,
      status: 0,
      error: 'We could not reach the application server. Check your connection and try again.',
      fields: {},
    };
  }

  let body: { reference?: unknown; error?: unknown; fields?: unknown } = {};
  try {
    body = await res.json();
  } catch {
    // Non-JSON body (e.g. gateway error page) — fall through to generic handling.
  }

  if (res.status === 201) {
    return { ok: true, reference: typeof body.reference === 'string' ? body.reference : '' };
  }

  const fields: Record<string, string> = {};
  if (body.fields && typeof body.fields === 'object') {
    for (const [key, value] of Object.entries(body.fields)) {
      if (typeof value === 'string') fields[key] = value;
    }
  }
  const apiError = typeof body.error === 'string' && body.error ? body.error : null;
  return { ok: false, status: res.status, error: STATUS_MESSAGES[res.status] ?? apiError ?? FALLBACK_ERROR, fields };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test`
Expected: PASS — all five test files green.

- [ ] **Step 5: Create `components/careers/ApplyForm.tsx`**

```tsx
'use client';

import { useRef, useState, type FormEvent, type ReactNode } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  APPLICATION_FIELD_ORDER,
  buildApplicationFormData,
  submitApplication,
  validateApplication,
  type ApplicationField,
  type ApplicationInput,
  type FieldErrors,
} from '@/lib/careers/apply';

interface ApplyFormProps {
  jobId: string;
  jobTitle: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY: ApplicationInput = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  qualification: '',
  experience_years: '0',
  experience_extra_months: '0',
  current_job_title: '',
  current_company: '',
  resume: null,
  consent: false,
  company_fax: '',
};

const INPUT_CLASSES =
  'w-full min-h-[44px] rounded-lg border bg-white px-3 text-[#002309] focus:outline-none focus:ring-2 focus:ring-[#7cb983]';

/** DOM id of the input to focus for a given error field. */
const fieldInputId = (field: ApplicationField) =>
  `apply-${field === 'experience_months' ? 'experience_years' : field}`;

interface FieldErrorProps {
  id: string;
  message?: string;
}

function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 flex items-center gap-1 text-sm font-semibold text-[#002309]">
      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

interface TextFieldProps {
  name: 'first_name' | 'last_name' | 'email' | 'phone' | 'qualification' | 'current_job_title' | 'current_company';
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
  maxLength: number;
  autoComplete?: string;
  hint?: ReactNode;
}

function TextField({ name, label, value, error, onChange, type = 'text', required, maxLength, autoComplete, hint }: TextFieldProps) {
  const id = `apply-${name}`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-[#002309]">
        {label}
        {required ? <span aria-hidden="true"> *</span> : <span className="font-normal text-[#002309]/70"> (optional)</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        maxLength={maxLength}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(INPUT_CLASSES, error ? 'border-2 border-[#002309]' : 'border-[#7cb983]/50')}
      />
      {hint && !error && <p className="mt-1 text-xs text-[#002309]/70">{hint}</p>}
      <FieldError id={errorId} message={error} />
    </div>
  );
}

export default function ApplyForm({ jobId, jobTitle }: ApplyFormProps) {
  const [values, setValues] = useState<ApplicationInput>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [reference, setReference] = useState('');
  const statusRef = useRef<HTMLDivElement>(null);

  const update = <K extends keyof ApplicationInput>(key: K, value: ApplicationInput[K], errorKey: ApplicationField) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [errorKey]: undefined }));
  };

  const focusFirstError = (found: FieldErrors) => {
    const first = APPLICATION_FIELD_ORDER.find((field) => found[field]);
    if (first) requestAnimationFrame(() => document.getElementById(fieldInputId(first))?.focus());
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;

    const found = validateApplication(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setStatus('error');
      setMessage('Please correct the highlighted fields.');
      focusFirstError(found);
      return;
    }

    setStatus('submitting');
    setMessage('');
    const result = await submitApplication(jobId, buildApplicationFormData(values, window.location.hostname));

    if (result.ok) {
      setStatus('success');
      setReference(result.reference);
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }

    const serverErrors = result.fields as FieldErrors;
    setErrors(serverErrors);
    setStatus('error');
    setMessage(result.error);
    if (Object.keys(serverErrors).length > 0) focusFirstError(serverErrors);
    else requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status === 'success') {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-[#7cb983] bg-white p-6 md:p-8 focus:outline-none"
      >
        <CheckCircle2 className="mb-3 h-10 w-10 text-[#006837]" aria-hidden="true" />
        <h3 className="mb-2 text-xl font-bold text-[#006837]">Application submitted</h3>
        <p className="text-[#002309]">
          Thank you for applying for <strong>{jobTitle}</strong>. A confirmation email has been sent to{' '}
          <strong className="break-all">{values.email.trim()}</strong>, and our team will review your application.
        </p>
        {reference && (
          <p className="mt-4 text-[#002309]">
            Your reference number: <strong className="font-mono">{reference}</strong>
          </p>
        )}
      </div>
    );
  }

  const experienceErrorId = 'apply-experience-error';
  const resumeErrorId = 'apply-resume-error';
  const consentErrorId = 'apply-consent-error';

  return (
    <form noValidate onSubmit={handleSubmit} className="rounded-2xl border border-[#7cb983]/30 bg-white p-6 md:p-8">
      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
        {status === 'error' && message && (
          <p role="alert" className="mb-5 flex items-start gap-2 rounded-lg border-2 border-[#002309] bg-[#FBFBEE] p-3 font-semibold text-[#002309]">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            {message}
          </p>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <TextField name="first_name" label="First name" value={values.first_name} error={errors.first_name}
          onChange={(v) => update('first_name', v, 'first_name')} required maxLength={100} autoComplete="given-name" />
        <TextField name="last_name" label="Last name" value={values.last_name} error={errors.last_name}
          onChange={(v) => update('last_name', v, 'last_name')} required maxLength={100} autoComplete="family-name" />
        <TextField name="email" type="email" label="Email" value={values.email} error={errors.email}
          onChange={(v) => update('email', v, 'email')} required maxLength={254} autoComplete="email" />
        <TextField name="phone" type="tel" label="Phone" value={values.phone} error={errors.phone}
          onChange={(v) => update('phone', v, 'phone')} required maxLength={20} autoComplete="tel" />
        <div className="md:col-span-2">
          <TextField name="qualification" label="Highest qualification" value={values.qualification}
            error={errors.qualification} onChange={(v) => update('qualification', v, 'qualification')}
            required maxLength={200} hint="For example: M.Pharm Pharmaceutics" />
        </div>

        <fieldset className="md:col-span-2" aria-describedby={errors.experience_months ? experienceErrorId : undefined}>
          <legend className="mb-1.5 text-sm font-semibold text-[#002309]">
            Total experience<span aria-hidden="true"> *</span>
          </legend>
          <div className="grid grid-cols-2 gap-3 sm:max-w-sm">
            <div>
              <label htmlFor="apply-experience_years" className="mb-1 block text-xs text-[#002309]/80">Years</label>
              <input id="apply-experience_years" name="experience_years" type="number" inputMode="numeric" min={0} max={60}
                value={values.experience_years}
                onChange={(e) => update('experience_years', e.target.value, 'experience_months')}
                aria-invalid={errors.experience_months ? true : undefined}
                className={cn(INPUT_CLASSES, errors.experience_months ? 'border-2 border-[#002309]' : 'border-[#7cb983]/50')} />
            </div>
            <div>
              <label htmlFor="apply-experience_extra_months" className="mb-1 block text-xs text-[#002309]/80">Months</label>
              <input id="apply-experience_extra_months" name="experience_extra_months" type="number" inputMode="numeric" min={0} max={11}
                value={values.experience_extra_months}
                onChange={(e) => update('experience_extra_months', e.target.value, 'experience_months')}
                aria-invalid={errors.experience_months ? true : undefined}
                className={cn(INPUT_CLASSES, errors.experience_months ? 'border-2 border-[#002309]' : 'border-[#7cb983]/50')} />
            </div>
          </div>
          <FieldError id={experienceErrorId} message={errors.experience_months} />
        </fieldset>

        <TextField name="current_job_title" label="Current job title" value={values.current_job_title}
          error={errors.current_job_title} onChange={(v) => update('current_job_title', v, 'current_job_title')}
          maxLength={150} autoComplete="organization-title" />
        <TextField name="current_company" label="Current organisation" value={values.current_company}
          error={errors.current_company} onChange={(v) => update('current_company', v, 'current_company')}
          maxLength={150} autoComplete="organization" />

        <div className="md:col-span-2">
          <label htmlFor="apply-resume" className="mb-1.5 block text-sm font-semibold text-[#002309]">
            Resume<span aria-hidden="true"> *</span>
          </label>
          <input id="apply-resume" name="resume" type="file" required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => update('resume', e.target.files?.[0] ?? null, 'resume')}
            aria-invalid={errors.resume ? true : undefined}
            aria-describedby={errors.resume ? resumeErrorId : 'apply-resume-hint'}
            className="block w-full min-h-[44px] text-sm text-[#002309] file:mr-4 file:min-h-[44px] file:cursor-pointer file:rounded-lg file:border-0 file:bg-[#FBFBEE] file:px-4 file:font-semibold file:text-[#006837] hover:file:bg-[#7cb983]/20" />
          {!errors.resume && <p id="apply-resume-hint" className="mt-1 text-xs text-[#002309]/70">PDF, DOC or DOCX, smaller than 2 MB.</p>}
          <FieldError id={resumeErrorId} message={errors.resume} />
        </div>

        {/* Honeypot — hidden from people and assistive tech; bots fill it. */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="apply-company_fax">Company fax</label>
          <input id="apply-company_fax" name="company_fax" type="text" tabIndex={-1} autoComplete="off"
            value={values.company_fax} onChange={(e) => setValues((v) => ({ ...v, company_fax: e.target.value }))} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="apply-consent" className="flex min-h-[44px] cursor-pointer items-start gap-3 text-sm text-[#002309]">
            <input id="apply-consent" name="consent" type="checkbox" checked={values.consent}
              onChange={(e) => update('consent', e.target.checked, 'consent')}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? consentErrorId : undefined}
              className="mt-0.5 h-5 w-5 shrink-0 accent-[#006837]" />
            <span>
              I agree that JKKN Institutions may store and use the details and resume I submit to process my
              application.<span aria-hidden="true"> *</span>
            </span>
          </label>
          <FieldError id={consentErrorId} message={errors.consent} />
        </div>
      </div>

      <button type="submit" disabled={status === 'submitting'}
        className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#7cb983] px-8 font-semibold text-white transition-colors hover:bg-[#6ba872] disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === 'submitting' ? 'Submitting…' : 'Submit application'}
      </button>
    </form>
  );
}
```

- [ ] **Step 6: Mount the form in the detail page**

In `app/careers/[id]/page.tsx` add the import (after the `JsonLd` import):

```tsx
import ApplyForm from '@/components/careers/ApplyForm';
```

and replace `{/* ApplyForm is mounted here in Task 5 */}` with:

```tsx
<ApplyForm jobId={job.id} jobTitle={job.title} />
```

- [ ] **Step 7: Allow the MyJKKN host in the CSP (`next.config.js:64`)**

The header is `Content-Security-Policy-Report-Only`, so it does not block today — but keep it accurate so the apply call does not produce violation reports and nothing breaks if the policy is ever enforced. Change:

```js
              "connect-src 'self' https://www.google-analytics.com",
```

to:

```js
              "connect-src 'self' https://www.google-analytics.com https://www.jkkn.ai",
```

Change nothing else in `next.config.js`.

- [ ] **Step 8: Type-check and test**

Run: `npm test && npx tsc --noEmit`
Expected: all PASS / exit 0.

- [ ] **Step 9: Verify the form locally (no real application sent)**

Restart `npm run dev` (config changed). Open a Pharmacy job detail page in Chrome at 320 px, 768 px and 1280 px:
1. Click **Submit application** with the form empty → alert "Please correct the highlighted fields.", focus moves to First name, each invalid field shows its message.
2. Choose a `.png` file → "Resume must be a PDF, DOC or DOCX file."; a > 2 MB PDF → "Resume must be smaller than 2 MB."
3. Tab through the form → the honeypot is never focused; every control is reachable; the submit button is ≥ 44 px tall.
4. DevTools → Network: fill valid data and submit → the request goes to `https://www.jkkn.ai/api/public/careers/jobs/<id>/apply` as `multipart/form-data`. On localhost it fails CORS (expected — MyJKKN allows `https://pharmacy.jkkn.ac.in`, not localhost) and the form shows "We could not reach the application server…" instead of crashing.
5. Console shows **no** `[Report Only] … Content Security Policy` message for `www.jkkn.ai`.

- [ ] **Step 10: Commit**

```bash
git add lib/careers/apply.ts lib/careers/apply.test.ts components/careers/ApplyForm.tsx "app/careers/[id]/page.tsx" next.config.js
git commit -m "feat(careers): apply to pharmacy job openings directly via MyJKKN from the browser" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6: Sitemap, docs, and end-to-end verification

**Files:**
- Modify: `next-sitemap.config.js` (`additionalPaths`), `CLAUDE.md`

**Interfaces:**
- Consumes: the public API contract (plain `fetch` — `next-sitemap.config.js` is CommonJS and cannot import `lib/careers/*.ts`)

- [ ] **Step 1: Add `/careers` to the hand-listed ISR index pages**

In `next-sitemap.config.js` → `additionalPaths` → `indexPages`, add a line after the `/gallery` entry:

```js
      { loc: '/careers', priority: 0.7, changefreq: 'daily' },
```

- [ ] **Step 2: Add open job URLs**

In `additionalPaths`, insert this block **after** the PDF scan `try { … } catch { … }` and **before** the `// Dynamic Supabase-driven content.` comment (the Supabase block `return`s early when its env vars are missing, so jobs must come first):

```js
    // Open MyJKKN job postings for this college (/careers/[id]). Fail-soft:
    // no institution id, API down or bad payload → skip, never break the build.
    try {
      const institutionId = process.env.JKKN_PHARMACY_INSTITUTION_ID
      const myjkkn = (process.env.NEXT_PUBLIC_MYJKKN_URL || 'https://www.jkkn.ai').replace(/\/+$/, '')
      if (!institutionId) {
        console.warn('[next-sitemap] JKKN_PHARMACY_INSTITUTION_ID missing — skipping career openings.')
      } else {
        const res = await fetch(
          `${myjkkn}/api/public/careers/jobs?institution_id=${encodeURIComponent(institutionId)}`,
          { signal: AbortSignal.timeout(8000) }
        )
        const body = res.ok ? await res.json() : null
        const jobs = Array.isArray(body?.data)
          ? body.data.filter(j => typeof j?.id === 'string' && j?.institution?.id === institutionId)
          : []
        jobs.forEach(j => {
          paths.push({
            loc: `/careers/${j.id}`,
            changefreq: 'weekly',
            priority: 0.6,
            lastmod: j.posted_at ? new Date(j.posted_at).toISOString() : now,
          })
        })
        console.log(`[next-sitemap] Added ${jobs.length} career openings`)
      }
    } catch (err) {
      console.warn('[next-sitemap] Careers fetch failed — continuing without job paths:', err.message)
    }
```

- [ ] **Step 3: Document in `CLAUDE.md`**

Insert this section immediately **before** the `# Text Size Documentation - Nursing College Website` heading (i.e. after the High-Risk Danger Zones table and its `---`):

```markdown
## Careers (MyJKKN job postings)

- `/careers/` and `/careers/[id]/` list **only JKKN College of Pharmacy** openings from the MyJKKN Public Careers API (`https://www.jkkn.ai/api/public/careers`). Code: `lib/careers/`, `components/careers/`.
- Scoped by `JKKN_PHARMACY_INSTITUTION_ID` (shared with the faculty sync). If it is unset, the pages show **zero** jobs — never other colleges' jobs.
- ISR 300 s. Applications are POSTed from the applicant's browser (MyJKKN rate-limits per IP and only allows the `https://pharmacy.jkkn.ac.in` origin). Keep `https://www.jkkn.ai` in the CSP `connect-src` in `next.config.js`.
- Optional `NEXT_PUBLIC_MYJKKN_URL` overrides the MyJKKN host — also update `connect-src` in `next.config.js`.
- Job URLs are added to the sitemap in `next-sitemap.config.js` → `additionalPaths`.
- Tests: `npm test` (Vitest) covers the pure helpers in `lib/careers/`.

---
```

- [ ] **Step 4: Full verification**

Run: `npm test && npx tsc --noEmit && npm run build`

Expected: tests PASS; `tsc` exit 0; build succeeds, shows `/careers` as ISR (revalidate 5m) and `/careers/[id]` as dynamic (ƒ); the postbuild log prints `[next-sitemap] Added N career openings` with N = open Pharmacy jobs (6 as of 2026-09-30).

If the log instead says `JKKN_PHARMACY_INSTITUTION_ID missing`, next-sitemap did not load `.env.local` locally — confirm by running `grep -c "careers/" public/sitemap-0.xml`; on Vercel the variable is set (the faculty cron uses it). Report this to your human partner rather than changing env loading.

Then:

```bash
grep -c '/careers/[0-9a-f-]\{36\}' public/sitemap-0.xml
grep -c '/careers/\?</loc>' public/sitemap-0.xml
```

Expected: first count = number of open Pharmacy jobs; second count = **1**. If the second count is 2, next-sitemap already discovered `/careers` on its own — remove the `/careers` line added in Step 1, rebuild, and re-check. (Generated sitemaps are git-ignored; do not commit them.)

Then `npm start` and in a browser check desktop Header → OTHERS → Careers and mobile (≤ 1023 px) bottom nav → Careers both open `/careers/`.

- [ ] **Step 5: End-to-end apply test (coordinated — no real HR noise)**

Ask the MyJKKN team to temporarily allow `http://localhost:3000` (`PUBLIC_CAREERS_EXTRA_ORIGINS` on MyJKKN). Then, locally only, set `JKKN_PHARMACY_INSTITUTION_ID=183847c5-be1b-4903-86eb-bbc20c213071` (JKKN Testing Institution) in `.env.local`, restart dev, open its single job and submit a real application with a small PDF. Expected: success panel with a reference like `JOB-…`; confirmation email arrives; submitting again with the same email shows the **same** reference. **Restore** `JKKN_PHARMACY_INSTITUTION_ID=5736d86f-5dab-4b7f-9aa1-b3bb1a2dd334` afterwards and restart. Do **not** trigger the faculty sync while the test id is set.

If MyJKKN cannot allow localhost: after deploying, ask HR for approval to submit one clearly-labelled test application to a Pharmacy job on https://pharmacy.jkkn.ac.in, confirm the reference appears, and have HR delete it in MyJKKN.

- [ ] **Step 6: Commit**

```bash
git add next-sitemap.config.js CLAUDE.md
git commit -m "feat(careers): add pharmacy job URLs to sitemap and document the careers integration" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

## Deployment notes

- `JKKN_PHARMACY_INSTITUTION_ID` must be set on Vercel — it already is, because the 15-minute faculty-sync cron uses it. If it were missing, the careers pages safely show no jobs.
- No new required env vars. `NEXT_PUBLIC_MYJKKN_URL` is optional.
- The apply call only works from `https://pharmacy.jkkn.ac.in` (MyJKKN CORS allowlist) — Vercel preview URLs will show the "could not reach the application server" message on submit; that is expected.

## Known data gaps (MyJKKN side, not code)

- `posted_at` is null on every Pharmacy job → no `JobPosting` rich results in Google Jobs until HR's postings carry a posted date (the code emits the schema automatically once they do).
- Job titles are internal codes (e.g. "Asst Prof - PHARMACOLOGY - COP", "TUTOR - COP"); they display verbatim. Clearer titles in MyJKKN would improve both UX and search.
- `qualifications`, `skills`, `job_code` are empty; salary is set on only 1 of 6 jobs; the page simply omits empty rows.
