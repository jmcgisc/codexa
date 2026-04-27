'use client';

import React, { useEffect, useState } from 'react';
import FormularioContactoPopup from '../../../components/email/FormularioContactoPopup';
import Reveal from '../../effects/Reveal';

interface MembershipCardsProps {
  className?: string;
}

const services = [
  {
    title: 'Desarrollo Web 💻',
    price: 'Desde $9,000.00 mxn',
    features: [
      'Sitios rápidos, modernos y responsivos',
      'Diseño UI/UX optimizado para conversión',
      'Integraciones con APIs y CMS',
      'Soporte y mantenimiento personalizado',
    ],
    btnLabel: 'Solicitar cotización',
    btnColor: 'border-pink-400 hover:bg-pink-400 hover:shadow-[0_0_16px_rgba(255,111,171,0.7)]',
    hue: '80',
    spread: '500',
  },
  {
    title: 'Agentes de IA 🤖',
    price: 'Desde $8,000.00 mxn',
    features: [
      'Atención al cliente automatizada 24/7',
      'Integración con WhatsApp, web y redes',
      'Análisis de datos y generación de reportes',
      'Automatización de procesos repetitivos',
    ],
    btnLabel: 'Contáctanos',
    btnColor: 'border-cyan-400 hover:bg-cyan-400 hover:shadow-[0_0_16px_rgba(22,181,250,0.7)]',
    hue: '200',
    spread: '300',
  },
  {
    title: 'CRM Personalizados 🔷',
    price: 'Desde $6,000.00 mxn',
    features: [
      'Embudos de ventas adaptados a tu negocio',
      'Automatización de tareas y seguimientos',
      'Dashboards integrados en tiempo real',
      'Integración con tus herramientas actuales',
    ],
    btnLabel: 'Automatizar procesos',
    btnColor: 'border-yellow-400 hover:bg-yellow-400 hover:shadow-[0_0_16px_rgba(251,192,17,0.7)]',
    hue: '220',
    spread: '200',
  },
];

const MembershipCards: React.FC<MembershipCardsProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty('--x', x.toFixed(2));
      document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
      document.documentElement.style.setProperty('--y', y.toFixed(2));
      document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
    };
    window.addEventListener('pointermove', syncPointer);
    return () => window.removeEventListener('pointermove', syncPointer);
  }, []);

  const handleOpenPopup = (service: string) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  return (
    <>
      {/* Scoped CSS sin styled-components para evitar problemas de SSR en Next.js */}
      <style>{`
        .mc-container {
          --backdrop: #111827;
          --radius: 14;
          --border: 3;
          --backup-border: #374151;
          --size: 200;
        }
        .mc-card {
          --border-size: calc(var(--border, 2) * 1px);
          --spotlight-size: calc(var(--size, 150) * 1px);
          --hue: calc(var(--base, 210) + (var(--xp, 0) * var(--spread, 0)));
          background-image: radial-gradient(
            var(--spotlight-size) var(--spotlight-size)
            at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
            hsl(var(--hue) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.08)),
            transparent
          );
          background-color: var(--backdrop, transparent);
          background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
          background-position: 50% 50%;
          border: var(--border-size) solid var(--backup-border);
          border-radius: calc(var(--radius) * 1px);
        }
        .mc-card::before,
        .mc-card::after {
          content: "";
          position: absolute;
          inset: calc(var(--border-size) * -1);
          border: var(--border-size) solid transparent;
          border-radius: calc(var(--radius) * 1px);
          background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
          background-repeat: no-repeat;
          background-position: 50% 50%;
          mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
          mask-clip: padding-box, border-box;
          mask-composite: intersect;
          pointer-events: none;
        }
        .mc-card::before {
          background-image: radial-gradient(
            calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75)
            at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
            hsl(var(--hue) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)),
            transparent 100%
          );
          filter: brightness(2);
        }
        .mc-card::after {
          background-image: radial-gradient(
            calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5)
            at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
            hsl(0 100% 100% / var(--border-light-opacity, 1)),
            transparent 100%
          );
        }
      `}</style>

      <div
        className={`mc-container w-full flex items-center justify-center py-16 px-4 ${className ?? ''}`}
      >
        <div className="flex flex-wrap gap-8 items-stretch justify-center w-full max-w-6xl">
          {services.map((svc, i) => (
            <Reveal key={i}>
              <article
                className="mc-card relative flex flex-col gap-4 p-6 min-h-[420px] w-[340px] max-w-full touch-none"
                style={{
                  ['--base' as string]: svc.hue,
                  ['--spread' as string]: svc.spread,
                }}
              >
                {/* Contenido */}
                <div className="flex flex-col h-full text-gray-200">
                  {/* Título */}
                  <h2 className="text-2xl font-semibold mb-4 text-[#2c9cd7]">{svc.title}</h2>

                  {/* Precio */}
                  <p className="mb-6 text-[rgb(205,49,163)]">
                    <span className="text-2xl font-bold text-[rgb(111,199,66)]">{svc.price}</span>
                    {' / proyecto'}
                  </p>

                  {/* Features */}
                  <ul className="list-disc pl-5 flex flex-col gap-4 mb-8 flex-1 text-sm text-gray-300">
                    {svc.features.map((f, j) => (
                      <li key={j}>{f}</li>
                    ))}
                  </ul>

                  {/* Botón */}
                  <button
                    onClick={() => handleOpenPopup(svc.title)}
                    className={`mt-auto self-center w-4/5 h-11 rounded-full border-2 bg-transparent text-white font-semibold text-base transition-all duration-300 cursor-pointer ${svc.btnColor}`}
                  >
                    {svc.btnLabel}
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {isOpen && (
        <FormularioContactoPopup
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default MembershipCards;
