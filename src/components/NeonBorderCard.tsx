'use client';

import { Card, CardBody, CardHeader } from '@/components/ui/card';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
// Update the import path if needed, or define a fallback utility function here if the file does not exist.
import { cn } from '../lib/utils';
// If the above path is incorrect, adjust it to the actual location of your utils file.
// Alternatively, define a simple cn function as a fallback:
// const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

const cards = [
  {
    title: 'Diseño UX/UI',
    description: `
      Creamos experiencias digitales intuitivas, centradas en el usuario y orientadas a resultados.
      Nuestro equipo combina estética, usabilidad y estrategia para diseñar interfaces atractivas que guían a tus usuarios hacia conversiones.
      Desde wireframes hasta prototipos interactivos, cuidamos cada detalle.
    `,
  },
  {
    title: 'Desarrollo de apps',
    description: `
      Desarrollamos aplicaciones móviles y de escritorio nativas o híbridas, escalables y seguras.
      Nuestro enfoque agile asegura entregas constantes y un producto alineado con tus necesidades.
      Utilizamos tecnologías como React Native, Flutter y más.
    `,
  },
  {
    title: 'Desarrollo web',
    description: `
      Creamos sitios web rápidos, modernos y adaptativos.
      Desde landing pages hasta sistemas complejos de gestión, nuestros desarrollos son escalables, accesibles y optimizados para SEO y conversión.
    `,
  },
  {
    title: 'Ecommerce',
    description: `
      Diseñamos y desarrollamos tiendas en línea que venden.
      Integraciones con pasarelas de pago, gestión de inventario, automatización de procesos y experiencias de usuario que generan confianza.
    `,
  },
  {
    title: 'CRO',
    description: `
      Mejoramos tus tasas de conversión mediante análisis, pruebas A/B y optimización de experiencia de usuario.
      Identificamos cuellos de botella y proponemos soluciones que generan impacto real en tus KPIs.
    `,
  },
  {
    title: 'Sitios web autoadministrables',
    description: `
      Desarrollamos sitios con panel de control personalizado para que tu equipo pueda actualizar contenido fácilmente.
      Usamos CMS modernos (como Sanity o Headless WordPress) o soluciones 100% personalizadas según tu flujo.
    `,
  },
  {
    title: 'Diseño gráfico',
    description: `
      Creamos identidad visual, branding, piezas publicitarias y recursos visuales para todos tus canales.
      El diseño es el primer contacto con tu cliente, y nos aseguramos de que comunique tu esencia.
    `,
  },
  {
    title: 'Reclutamiento IT y Staffing',
    description: `
      Conectamos a tu empresa con el talento tecnológico que necesitas.
      Reclutamos desarrolladores, diseñadores, product managers y más, con procesos rápidos y perfiles verificados.
    `,
  },
];

export function MembershipCards() {
  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty('--x', x.toFixed(2));
      document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
      document.documentElement.style.setProperty('--y', y.toFixed(2));
      document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
    };

    document.body.addEventListener('pointermove', syncPointer);
    return () => {
      document.body.removeEventListener('pointermove', syncPointer);
    };
  }, []);

  return (
    <section className="relative py-20">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              {...{ className: "relative group" }}
            >
              <Card
                className={cn(
                  'relative h-full cursor-pointer border border-white/20 bg-gradient-to-br from-white/5 to-white/10 p-4 backdrop-blur-sm transition duration-300 hover:border-white/30 hover:shadow-lg',
                  'rounded-2xl'
                )}
              >
                <CardHeader className="text-xl font-semibold text-white">
                  {card.title}
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-white/80 whitespace-pre-line">
                    {card.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
