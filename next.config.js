/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
