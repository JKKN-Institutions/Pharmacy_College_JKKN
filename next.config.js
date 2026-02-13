/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/nacc',
        destination: '/naac',
        permanent: true, // 301 redirect
      },
      {
        source: '/doctor-of-philosophy-phd',
        destination: '/phd',
        permanent: true, // 301 redirect - old PhD URL to new URL
      },
      {
        source: '/excel',
        destination: '/',
        permanent: true, // 301 redirect - dead link to homepage
      },
      // Block old WordPress paths
      {
        source: '/wp-content/:path*',
        destination: '/404',
        permanent: true, // 301 redirect - old WordPress uploads to 404
      },
      {
        source: '/wp-includes/:path*',
        destination: '/404',
        permanent: true, // 301 redirect - old WordPress core files to 404
      },
      {
        source: '/wp-admin/:path*',
        destination: '/404',
        permanent: true, // 301 redirect - old WordPress admin to 404
      },
      {
        source: '/wp-json/:path*',
        destination: '/404',
        permanent: true, // 301 redirect - old WordPress REST API to 404
      },
      {
        source: '/xmlrpc.php',
        destination: '/404',
        permanent: true, // 301 redirect - old WordPress XML-RPC to 404
      },
      // Fix duplicate URL - redirect wrong format to correct format
      {
        source: '/b-pharmacylateral-entry',
        destination: '/b-pharmacy-lateral-entry',
        permanent: true, // 301 redirect - consolidate SEO ranking to correct URL
      },
    ]
  },
}

module.exports = nextConfig
