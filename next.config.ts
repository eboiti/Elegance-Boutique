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
  
  // Ajouter cette configuration
  allowedDevOrigins: [
    '192.168.1.11', // Votre adresse IP locale
    'localhost',
  ],
}

module.exports = nextConfig