/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pharmacy.jkkn.ac.in',
  generateRobotsTxt: false, // We already created robots.txt manually
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/wp-content/*', '/api/*', '/excel', '/doctor-of-philosophy-phd'],
}
