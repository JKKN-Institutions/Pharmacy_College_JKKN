/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@tiptap/react',
    '@tiptap/starter-kit',
    '@tiptap/core',
    '@tiptap/extension-underline',
    '@tiptap/extension-highlight',
    '@tiptap/extension-text-align',
    '@tiptap/extension-link',
    '@tiptap/extension-image',
    '@tiptap/extension-placeholder',
    '@tiptap/pm',
  ],
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'czjzizrzmqcdwgtxwuks.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), payment=()',
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://www.google-analytics.com",
              "frame-src 'self' https://www.youtube.com https://www.google.com",
              "report-uri /api/csp-report",
            ].join('; '),
          },
        ],
      },
    ]
  },
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
