/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pharmacy.jkkn.ac.in',
  generateRobotsTxt: false, // We already created robots.txt manually
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    '/wp-content/*',
    '/api/*',
    '/excel',
    '/doctor-of-philosophy-phd',
    '/blog/top-10-career-options-after-bed-2026',
    '/nirf-2024',
    '/nirf-2025',
  ],
  transform: async (config, path) => {
    // Priority tiers based on page importance
    let priority = 0.6
    let changefreq = 'weekly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (['/b-pharmacy', '/m-pharmacy', '/pharm-d'].some(p => path.startsWith(p))) {
      priority = 0.9
      changefreq = 'weekly'
    } else if (['/admission-process', '/placement-cell', '/campus-recruitment', '/faculty-profile', '/naac', '/overview', '/nirf'].some(p => path === p || path === p + '/')) {
      priority = 0.85
      changefreq = 'weekly'
    } else if (['/coimbatore', '/erode', '/salem', '/namakkal', '/tiruppur'].some(p => path.startsWith(p))) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path.startsWith('/blog')) {
      priority = 0.75
      changefreq = 'weekly'
    } else if (['/pharmaceutical-analysis', '/pharmaceutical-chemistry', '/pharmacology', '/pharmaceutics', '/pharmacy-practice'].some(p => path.startsWith(p))) {
      priority = 0.8
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
