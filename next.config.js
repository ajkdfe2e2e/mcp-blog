/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mcp-blog' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/mcp-blog' : '',
}

module.exports = nextConfig