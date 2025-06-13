/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Personal-Porfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Personal-Porfolio' : '',
}

module.exports = nextConfig 