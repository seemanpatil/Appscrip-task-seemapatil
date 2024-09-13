/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['fakestoreapi.com'],  // Allow images from fakestoreapi.com
    },
  };
  
  module.exports = nextConfig;  // Use CommonJS syntax
  