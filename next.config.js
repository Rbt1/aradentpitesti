/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'aradentpitesti.ro' }],
        destination: 'https://www.aradentpitesti.ro/',
        permanent: true,
      },
      {
        source: '/:path+',
        has: [{ type: 'host', value: 'aradentpitesti.ro' }],
        destination: 'https://www.aradentpitesti.ro/:path+',
        permanent: true,
      },
      {
        source: '/blog/cat-costa-implant-dentar-ara-dent-pitesti',
        destination: '/blog/cat-costa-implant-dentar-pitesti-2026',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
