import React from 'react';

const servicios = [
  {
    id: 'web',
    title: 'Desarrollo Web',
    description:
      'Creamos sitios web modernos, rápidos, responsivos y enfocados en conversión. Desde landing pages hasta plataformas completas.',
    image: '/images/web-dev.svg',
    bg: 'bg-white',
  },
  {
    id: 'seo',
    title: 'SEO & Analítica',
    description:
      'Mejoramos tu visibilidad en buscadores con SEO técnico y de contenido. Implementamos analítica para medir y escalar resultados.',
    image: '/images/seo-analytics.svg',
    bg: 'bg-gray-50',
  },
  {
    id: 'marketing',
    title: 'Campañas y Marketing Digital',
    description:
      'Diseñamos campañas en Google, Meta y más, con foco en resultados reales. Automatización, segmentación y optimización constante.',
    image: '/images/marketing.svg',
    bg: 'bg-white',
  },
];

export default function Servicios() {
  return (
    <div className="w-full">
      {servicios.map((servicio, index) => (
        <section
          key={servicio.id}
          className={`${servicio.bg} py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {servicio.title}
            </h2>
            <p className="text-lg text-gray-600">{servicio.description}</p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={servicio.image}
              alt={servicio.title}
              className="w-full max-w-md mx-auto"
            />
          </div>
        </section>
      ))}
    </div>
  );
}
