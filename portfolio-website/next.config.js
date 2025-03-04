/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    // This helps with Vercel deployments
    swcMinify: true,
  };
  
  module.exports = nextConfig;