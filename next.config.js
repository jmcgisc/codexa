/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Necesario para builds estáticos
  images: {
    unoptimized: true, // Requerido para export estático
  },
};

module.exports = nextConfig;      