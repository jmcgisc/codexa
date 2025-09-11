/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    unoptimized: true, // Requerido para export estático
  },
};

module.exports = nextConfig;      