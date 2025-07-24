// app/components/ServiciosInteractivos.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const servicios = [
  {
    titulo: 'Diseño UX/UI',
    descripcion: 'Creamos experiencias de usuario intuitivas, modernas y centradas en el usuario. Maquetación profesional para productos digitales.',
  },
  {
    titulo: 'Desarrollo de apps',
    descripcion: 'Desarrollo de aplicaciones móviles nativas e híbridas con alto rendimiento y excelente diseño funcional.',
  },
  {
    titulo: 'Desarrollo web',
    descripcion: 'Desde sitios institucionales hasta plataformas complejas, desarrollamos soluciones escalables y modernas.',
  },
  {
    titulo: 'Ecommerce',
    descripcion: 'Tiendas en línea rápidas, seguras y enfocadas en conversión. Integraciones con pasarelas de pago y sistemas de envío.',
  },
  {
    titulo: 'CRO',
    descripcion: 'Optimizamos tu sitio para maximizar conversiones, mejorando la experiencia del usuario y eliminando fricciones.',
  },
  {
    titulo: 'Sitios web autoadministrables',
    descripcion: 'Gestión de contenido sencilla con paneles intuitivos para que puedas editar tu sitio sin conocimientos técnicos.',
  },
  {
    titulo: 'Diseño gráfico',
    descripcion: 'Diseño visual de alta calidad para branding, presentaciones, redes sociales y más.',
  },
  {
    titulo: 'Reclutamiento IT y Staffing',
    descripcion: 'Conectamos empresas con talento tecnológico especializado. Staffing flexible, ágil y eficiente.',
  },
];

export default function ServiciosInteractivos() {
  const [activo, setActivo] = useState(0);

  return (
    <section className="bg-white dark:bg-neutral-900 py-16 font-sans">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Menú lateral */}
        <ul className="space-y-4">
          {servicios.map((servicio, index) => (
            <li key={index}>
              <button
                onClick={() => setActivo(index)}
                className={`text-left text-xl font-semibold transition-colors duration-300 ${
                  index === activo
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-neutral-500 hover:text-blue-600'
                }`}
              >
                {servicio.titulo}
              </button>
            </li>
          ))}
        </ul>

        {/* Panel de contenido */}
        <motion.div
          key={activo}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-neutral-700 dark:text-neutral-200"
        >
          <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            {servicios[activo].titulo}
          </h3>
          <p className="text-lg leading-relaxed">
            {servicios[activo].descripcion}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
