/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Recomendado para despliegues
  reactStrictMode: true,
  images: {
    unoptimized: true, // Para evitar problemas en Netlify
  },
};

module.exports = nextConfig;