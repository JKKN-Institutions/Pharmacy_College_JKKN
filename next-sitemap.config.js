/** @type {import('next-sitemap').IConfig} */
const fs = require('fs')
const path = require('path')

// High-SEO-value PDFs that deserve priority 0.6 (NIRF/NAAC/research/brochure/alumni).
// Everything else in /public/pdf/ gets priority 0.5.
const HIGH_VALUE_PDF_PATTERNS = [
  /^NIRF/i,
  /^Research-Publication/i,
  /^Research-and-Development/i,
  /^NAAC/i,
  /^SSR-NAAC/i,
  /^IIQA-NAAC/i,
  /-DVV-NAAC\.pdf$/i,
  /^Alumni/i,
  /^brochure/i,
  /^Admission-Process/i,
  /^FACULTY-PROFILE/i,
  /^PLACEMENT/i,
]

// Routes that 301-redirect to PDFs in next.config.js — must NOT be in sitemap
// (Google flags these as "Page with redirect" if listed.)
const PDF_REDIRECT_ROUTES = [
  '/administration',
  '/animal-house',
  '/attainment-cos-pos',
  '/audit-statements-finance',
  '/barrier-free-environment',
  '/circulars',
  '/cpio',
  '/feedback-analysis',
  '/newsletters',
  '/sedg-cell',
  '/ugc-public-disclosure-compliance',
  '/undertaking',
  '/various-committees',
]

// Static informational pages — changefreq monthly/yearly (don't waste crawl budget)
const RARELY_CHANGED = [
  '/ordinances',
  '/vision-mission',
  '/our-trust',
  '/our-management',
  '/our-institutions',
  '/privacy-policy',
  '/quality-policy',
  '/affiliation-details',
  '/the-principal',
  '/general-rules',
  '/peos',
  '/why-jkkn',
  '/institutional-development-plan',
  '/institutional-strategic-plan',
  '/institutional-distinctiveness',
  '/ipa-bhavani-kumarapalayam',
  '/pharmacy-council',
  '/university',
]

module.exports = {
  siteUrl: 'https://pharmacy.jkkn.ac.in',
  generateRobotsTxt: false, // robots.txt is hand-maintained at public/robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    '/wp-content/*',
    '/api/*',
    '/admin/*',
    '/excel',
    '/doctor-of-philosophy-phd',
    '/blog/top-10-career-options-after-bed-2026',
    '/blog/b-pharm-vs-pharm-d',
    '/nirf-2024',
    '/nirf-2025',
    '/admission-process',
    // URL with `&` + typo — kept as redirect source only
    '/recognition-approval-&-accrediation',
    // 13 routes that 301-redirect to PDFs (declared in next.config.js)
    ...PDF_REDIRECT_ROUTES,
  ],
  transform: async (config, path) => {
    let priority = 0.6
    let changefreq = 'weekly'
    const now = new Date().toISOString()

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (['/b-pharmacy', '/m-pharmacy', '/pharm-d'].some(p => path === p || path === p + '/')) {
      priority = 0.9
      changefreq = 'weekly'
    } else if (path.startsWith('/admissions')) {
      // Includes /admissions/, /admissions/b.pharm/, /admissions/m.pharm/, /admissions/pharm.d/
      priority = 0.9
      changefreq = 'weekly'
    } else if (['/placement-cell', '/placements', '/campus-recruitment', '/naac', '/overview', '/nirf'].some(p => path === p || path === p + '/')) {
      priority = 0.85
      changefreq = 'weekly'
    } else if (['/coimbatore', '/erode', '/salem', '/namakkal', '/tiruppur'].some(p => path.startsWith(p))) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (['/pharmaceutical-analysis', '/pharmaceutical-chemistry', '/pharmacology', '/pharmaceutics', '/pharmacy-practice'].some(p => path.startsWith(p))) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path.startsWith('/blog')) {
      priority = 0.75
      changefreq = 'weekly'
    } else if (path.startsWith('/nirf/')) {
      priority = 0.75
      changefreq = 'monthly'
    } else if (RARELY_CHANGED.some(p => path === p || path === p + '/')) {
      priority = 0.4
      changefreq = 'yearly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: now,
    }
  },
  additionalPaths: async (config) => {
    const paths = []
    const now = new Date().toISOString()

    // Index pages next-sitemap misses (server components with `revalidate`)
    const indexPages = [
      { loc: '/blog', priority: 0.8, changefreq: 'daily' },
      { loc: '/faculty', priority: 0.7, changefreq: 'weekly' },
      { loc: '/gallery', priority: 0.6, changefreq: 'monthly' },
      { loc: '/careers', priority: 0.7, changefreq: 'daily' },
    ]
    indexPages.forEach(p => paths.push({ ...p, lastmod: now }))

    // Auto-scan /public/pdf/*.pdf → include all PDF documents
    // (NIRF reports, NAAC DVV docs, research publications, brochure, etc.)
    try {
      const pdfDir = path.join(__dirname, 'public', 'pdf')
      if (fs.existsSync(pdfDir)) {
        const pdfFiles = fs.readdirSync(pdfDir)
          .filter(f => f.toLowerCase().endsWith('.pdf'))
        pdfFiles.forEach(filename => {
          const isHighValue = HIGH_VALUE_PDF_PATTERNS.some(rx => rx.test(filename))
          const mtime = fs.statSync(path.join(pdfDir, filename)).mtime.toISOString()
          // URL-encode the filename portion so spaces/parens become %20/%28/%29
          paths.push({
            loc: `/pdf/${encodeURIComponent(filename)}`,
            changefreq: 'monthly',
            priority: isHighValue ? 0.6 : 0.5,
            lastmod: mtime,
          })
        })
        console.log(`[next-sitemap] Added ${pdfFiles.length} PDF documents`)
      }
    } catch (err) {
      console.warn('[next-sitemap] PDF scan failed:', err.message)
    }

    // Open MyJKKN job postings for this college (/careers/[id]). Fail-soft:
    // no institution id, API down or bad payload → skip, never break the build.
    try {
      const institutionId = process.env.JKKN_PHARMACY_INSTITUTION_ID?.trim()
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

    // Dynamic Supabase-driven content. Fail-soft: if env vars missing or table empty,
    // skip these — never break the build.
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID

      if (!supabaseUrl || !supabaseKey || !collegeId) {
        console.warn('[next-sitemap] Supabase env vars missing — skipping dynamic paths.')
        return paths
      }

      const { createClient } = require('@supabase/supabase-js')
      const supabase = createClient(supabaseUrl, supabaseKey)

      // Campus blog posts
      const { data: blogs } = await supabase
        .from('blogs')
        .select('slug, updated_at, created_at')
        .eq('college_id', collegeId)
        .eq('is_published', true)
      if (blogs?.length) {
        blogs.forEach(b => {
          if (!b.slug) return
          paths.push({
            loc: `/blog/campus/${b.slug}`,
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: new Date(b.updated_at || b.created_at || now).toISOString(),
          })
        })
        console.log(`[next-sitemap] Added ${blogs.length} campus blog posts`)
      }

      // Faculty profiles
      const { data: faculty } = await supabase
        .from('faculty')
        .select('slug, updated_at')
        .eq('college_id', collegeId)
        .not('slug', 'is', null)
      if (faculty?.length) {
        faculty.forEach(f => {
          if (!f.slug) return
          paths.push({
            loc: `/faculty/${f.slug}`,
            changefreq: 'monthly',
            priority: 0.6,
            lastmod: f.updated_at ? new Date(f.updated_at).toISOString() : now,
          })
        })
        console.log(`[next-sitemap] Added ${faculty.length} faculty profiles`)
      }

      // Events
      const { data: events } = await supabase
        .from('events')
        .select('slug, updated_at, created_at')
        .eq('college_id', collegeId)
        .not('slug', 'is', null)
      if (events?.length) {
        events.forEach(e => {
          if (!e.slug) return
          paths.push({
            loc: `/events/${e.slug}`,
            changefreq: 'monthly',
            priority: 0.5,
            lastmod: new Date(e.updated_at || e.created_at || now).toISOString(),
          })
        })
        console.log(`[next-sitemap] Added ${events.length} events`)
      }
    } catch (err) {
      console.warn('[next-sitemap] Supabase fetch failed — continuing without dynamic paths:', err.message)
    }

    return paths
  },
}
