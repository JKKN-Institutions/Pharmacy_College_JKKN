// components/SectionHub.tsx
//
// WHY THIS EXISTS.
// The header renders its dropdowns from React state: components/Header.tsx gates the
// submenu on `activeSubmenu === item.label`, which is set by onMouseEnter. So every
// link inside a dropdown exists only after a real mouse hovers. Crawlers do not hover,
// and AI crawlers do not run JavaScript at all. Measured on the built output 2026-09-17:
// the homepage carries 45 internal <a> links and the whole site has only 10 link targets
// that appear on every page, while 86 of 136 prerendered pages are pointed at by NO html
// link whatsoever - /admissions/, /scholarships/, /placements/, /faq/, /hostel/, /library/
// and /the-principal/ among them. They are reachable from the XML sitemap and nowhere else.
//
// Four of the header's own top-level items made it worse: /academic/, /facilities/,
// /committee/ and /others/ are rendered as links on all 136 pages and every one of them
// answered 404, because no page was ever built at those paths.
//
// This component fixes both at once. It renders a section of the SAME menu tree the
// dropdown uses - data/siteData.ts, the repo's own source - as plain server-rendered
// links. Nothing here is invented: every label and href below is read from that file.
//
// Fleet note: dental, engineering, cas and education already serve real pages at
// /facilities/ and /others/ (measured live 2026-09-17), so this is the pattern the rest
// of the estate already uses, not a new invention.

import Link from 'next/link'
import Header from '@/components/Header'
import { navigationMenu } from '@/data/siteData'
import type { NavItem, SubmenuItem } from '@/types/navigation'

function isDocument(href: string) {
  return href.startsWith('/pdf/') || href.endsWith('.pdf')
}

function ItemLink({ item }: { item: SubmenuItem }) {
  const doc = isDocument(item.href)
  const cls =
    'group flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 ' +
    'transition-colors hover:border-[#006837] hover:bg-[#F5F1E8] focus:border-[#006837] focus:outline-none'

  const body = (
    <>
      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7cb983]" />
      <span className="text-sm text-gray-700 group-hover:text-[#006837]">
        {item.label}
        {doc && <span className="ml-2 text-[11px] uppercase tracking-wide text-gray-400">PDF</span>}
      </span>
    </>
  )

  // A document or an off-site target is a plain anchor; everything else is a Next link.
  if (doc || item.target === '_blank') {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {body}
      </a>
    )
  }
  return (
    <Link href={item.href} className={cls}>
      {body}
    </Link>
  )
}

function Group({ item }: { item: SubmenuItem }) {
  // A branch whose href is "#" is a heading, not a destination.
  const isHeading = item.href === '#' || (item.submenu && item.submenu.length > 0)

  if (!isHeading) {
    return <ItemLink item={item} />
  }

  return (
    <div className="sm:col-span-2">
      <h3 className="mb-3 mt-2 text-sm font-bold uppercase tracking-wide text-[#006837]">
        {item.href === '#' ? item.label : <Link href={item.href}>{item.label}</Link>}
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {item.submenu?.map((child) => (
          <Group key={child.label + child.href} item={child} />
        ))}
      </div>
    </div>
  )
}

export default function SectionHub({
  sectionLabel,
  heading,
  eyebrow,
  intro,
}: {
  /** Must match a `label` in data/siteData.ts exactly, e.g. "ACADEMIC". */
  sectionLabel: string
  heading: string
  eyebrow: string
  intro: string
}) {
  const section = navigationMenu.find((m: NavItem) => m.label === sectionLabel)
  const children = section?.submenu ?? []

  return (
    <div className="flex min-h-screen flex-col bg-[#FBFBEE]">
      <Header />

      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#7cb983] sm:text-sm">
            {eyebrow}
          </p>
          <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">{heading}</h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 rounded-full bg-[#7cb983]" />
          </div>
        </div>
      </section>

      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 sm:space-y-10 lg:px-8">
          <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
            <p className="mb-6 text-sm leading-relaxed text-gray-700 sm:text-base">{intro}</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {children.map((child) => (
                <Group key={child.label + child.href} item={child} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
