/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  basePath: '/new',       // Hardcode your folder
  assetPrefix: '/new/',   // Make assets load from /new
  images: {
    unoptimized: true,    // Required for static export
  },
};

module.exports = nextConfig;
