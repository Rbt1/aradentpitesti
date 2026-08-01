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
    ]
  },
}

module.exports = nextConfig
