---
name: jkkn-institutional-page
description: >
  Build JKKN Pharmacy College institutional content pages (committees, cells, policies,
  facilities, disclosures) using the standard green-and-cream design system: dark green
  hero banner, white rounded cards on cream background, green-header zebra tables, and
  green-dot bullet lists. Use this skill whenever the user asks to create a new static
  content page, committee page, cell page, policy page, or says "same design as
  sports-committee", "committee page pola", "indha design la oru page", or wants any
  page matching the existing institutional page style. Also use when converting raw
  content (Word doc text, lists of members, objectives) into a styled page for this site.
---

# JKKN Institutional Page Template

Standard design system for static institutional pages on the JKKN College of Pharmacy
website (Next.js App Router + Tailwind). Extracted from `app/sports-committee/` and
used by committee/cell/policy pages across the site.

Every page built with this skill consists of **two files**:

```
app/<slug>/
├── layout.tsx   — SEO metadata + BreadcrumbWrapper
└── page.tsx     — Hero banner + content sections
```

## Design Tokens (never deviate)

| Token | Value | Usage |
|-------|-------|-------|
| Page background | `bg-[#FBFBEE]` | Root div (cream) |
| Hero / table header | `bg-[#006837]` | Dark green |
| Section headings | `text-[#006837]` | Dark green |
| Bullet dots / accents | `bg-[#7cb983]` | Primary green |
| Zebra stripe row | `bg-[#f4f9f6]` | Odd table rows |
| Card | `bg-white rounded-2xl shadow-sm border border-gray-100` | All content cards |
| Body text | `text-sm sm:text-base text-gray-700 leading-relaxed` | Paragraphs, list items |
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` | Hero inner + main inner |
| Vertical rhythm | `py-10 sm:py-12 md:py-16` + `space-y-12 md:space-y-16` | Main wrapper |

## Page Skeleton (page.tsx)

```tsx
import Header from '@/components/Header'

export default function <PascalName>Page() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            <Page Title>
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-12 md:space-y-16">
          {/* sections go here */}
        </div>
      </main>
    </div>
  )
}
```

No Footer import — the site layout handles it. Only `Header` is imported directly.

## Section Patterns

Compose the page from these blocks in any order/quantity the content needs.
Data (table rows, bullet items) always lives in `const` arrays at the top of the
file, above the component — never inline literals inside JSX when there are 3+ items.

### 1. Intro / paragraph card

```tsx
<section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 space-y-4">
  <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
    First paragraph…
  </p>
  <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
    Second paragraph…
  </p>
</section>
```

### 2. Section heading (outside the card)

Use when a section needs a visible title. Heading sits above the card, not inside it.

```tsx
<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
  Section Title
</h2>
```

### 3. Data table (members, staff, documents)

Green header row, centered cells, zebra striping, horizontal scroll on mobile.
Columns are flexible — match the content (e.g. Sl.No / Name / Designation / Role,
or NAME / NATURE / ROLE). Name column gets `font-medium`.

```tsx
<section>
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full text-sm sm:text-base">
        <thead>
          <tr className="bg-[#006837] text-white">
            <th className="px-6 py-4 text-center font-semibold">NAME</th>
            <th className="px-6 py-4 text-center font-semibold">DESIGNATION</th>
            <th className="px-6 py-4 text-center font-semibold">ROLE</th>
          </tr>
        </thead>
        <tbody>
          {members.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f4f9f6]'}>
              <td className="px-6 py-4 text-center text-gray-700 font-medium">{row.name}</td>
              <td className="px-6 py-4 text-center text-gray-700">{row.designation}</td>
              <td className="px-6 py-4 text-center text-gray-700">{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>
```

If the page has 2+ tables, extract a local `StyledTable` component inside the same
file (see `app/anti-ragging-committee/page.tsx` for the reference implementation).

### 4. Bullet list card (objectives, functions, responsibilities)

Green dot bullets (`w-2 h-2 rounded-full bg-[#7cb983] mt-2`), optional bold lead-in
sentence.

```tsx
<section>
  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
    Key Objectives
  </h2>
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
    <p className="text-sm sm:text-base text-gray-700 font-semibold mb-5 text-justify">
      Optional lead-in sentence:
    </p>
    <ul className="space-y-4">
      {objectives.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</section>
```

If the page has 2+ bullet lists, extract a local `BulletItem` component
(same reference file as above).

### 5. Two-column card grid (optional, for contacts / sub-committees)

When content is naturally paired (e.g. two coordinators, two wings), place cards in
`grid grid-cols-1 md:grid-cols-2 gap-6` inside a section. Each card follows the same
white-card token.

## Layout File (layout.tsx)

Every page gets its own `layout.tsx` with full SEO metadata. Replace title,
description, and slug; the OG image stays the site default unless the user
supplies a page-specific one.

```tsx
import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: '<Page Title> | <Short Context> | JKKN',
  description: '<~150 char description mentioning JKKN College of Pharmacy>',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/<slug>/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/<slug>/',
    title: '<Page Title> | <Short Context> | JKKN',
    description: '<same description>',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '<Page Title> | <Short Context> | JKKN',
    description: '<same description>',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function <PascalName>Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
```

## Workflow

1. **Get the content first.** Title, intro paragraphs, table data, bullet items.
   If the user gives raw text (from Word/PDF), split it into the section blocks
   above — paragraphs → intro card, name lists → table, numbered/dashed points →
   bullet list. Ask only if the mapping is genuinely ambiguous.
2. **Pick the slug** — kebab-case, matching how the page will appear in navigation
   (e.g. `library-committee`). Check `app/` for an existing directory before creating.
3. **Create both files** — `app/<slug>/page.tsx` and `app/<slug>/layout.tsx`.
4. **Navigation**: adding the page to the Header menu is a separate, riskier change
   (Header is shared across every page). Do it only if the user asks, and grep
   `components/Header.tsx` for the menu structure first.
5. **Verify** at 320px, 768px, and 1024px+ if a dev server is running — especially
   table horizontal scroll on mobile.

## Rules

- These pages are **server components** — no `'use client'`, no framer-motion,
  no state. Keep them static and fast.
- Do not invent new colors, shadows, or radii. The whole point is that dozens of
  pages share one visual language; a page that's 95% consistent reads as broken.
- Text content comes from the user verbatim — fix obvious typos only if asked.
  Keep `text-justify` on paragraph blocks.
- Reference implementations when unsure:
  - Single table + objectives: `app/sports-committee/page.tsx`
  - Multiple tables + extracted components: `app/anti-ragging-committee/page.tsx`
