/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: '/nacc',
        destination: '/naac',
        permanent: true, // 301 redirect
      },
    ]
  },
}

module.exports = nextConfig
