/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
  // Si vous avez besoin du allowedDevOrigins
  experimental: {
    allowedDevOrigins: ['localhost', '192.168.1.11'],
  }
};

module.exports = nextConfig;