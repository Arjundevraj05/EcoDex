/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false, // Disable SWC and use Babel for minification
  images: {
    domains: ['ui-avatars.com', 'another-domain.com'], // Add your image domains here
  },
};

export default nextConfig;
