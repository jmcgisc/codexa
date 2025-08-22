'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { UilArrowRight, UilRocket, UilShieldCheck, UilChartLine } from '@iconscout/react-unicons';
import Reveal from '../effects/Reveal';
import type { HTMLMotionProps } from 'framer-motion';
import FormularioContactoPopup from '../email/FormularioContactoPopup'; // ← ruta desde /components/sections

const servicios = [
  {
    id: 'web',
    title: 'Desarrollo Web',
    description: 'Creamos experiencias digitales impactantes con React, Next.js y tecnologías de vanguardia.',
    details: [
      'Sitios web rápidos y optimizados para SEO',
      'Integraciones con CMS (Headless/Tradicional)',
      'Experiencias responsivas para móvil y desktop',
    ],
    image: '/images/desarrollo-web.jpg',
    icon: <UilRocket className="text-blue-500" size={36} />,
    color: 'bg-gradient-to-br from-blue-50 to-white',
    btnColor: 'bg-blue-500 hover:bg-blue-600',
    cta: 'Explorar proyectos',
    action: 'portfolio', // abre portafolio
    reverse: false,
  },
  {
    id: 'crypto',
    title: 'Seguridad Digital',
    description: 'Protección de datos con cifrado avanzado, firmas digitales y blockchain.',
    details: [
      'Implementación de firmas y certificados digitales',
      'Hardening y auditoría de seguridad',
      'Integración con wallets y Web3',
    ],
    image: '/images/firmas-criptograficas.jpg',
    icon: <UilShieldCheck className="text-purple-500" size={36} />,
    color: 'bg-gradient-to-br from-purple-50 to-white',
    btnColor: 'bg-purple-500 hover:bg-purple-600',
    cta: 'Proteger mi empresa',
    action: 'form', // abre formulario de contacto
    reverse: true,
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    description: 'Campañas de alto rendimiento en Google Ads, Meta y LinkedIn con seguimiento avanzado.',
    details: [
      'Optimización continua con IA',
      'Dashboards y métricas en tiempo real',
      'Estrategias por nicho y objetivo',
    ],
    image: '/images/seo-marketing-digital.jpg',
    icon: <UilChartLine className="text-green-500" size={36} />,
    color: 'bg-gradient-to-br from-green-50 to-white',
    btnColor: 'bg-green-500 hover:bg-green-600',
    cta: 'Optimizar mi ROI',
    action: 'meeting', // abre enlace externo (Calendly/WhatsApp)
    reverse: false,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServiceSection = ({ servicio }: { servicio: typeof servicios[0] }) => {
  const ref = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const { scrollYProgress } = useScroll({});
  const y = useTransform(scrollYProgress, [0, 1], [servicio.reverse ? -50 : 50, 0]);

  // Cerrar con ESC + bloquear/desbloquear scroll cuando hay modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowPopup(false);
        setShowForm(false);
      }
    };

    const anyOpen = showPopup || showForm;
    if (anyOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [showPopup, showForm]);

  const MotionSection: React.FC<
    HTMLMotionProps<'section'> & React.HTMLAttributes<HTMLElement>
  > = motion.section;

  // Acción dinámica del CTA dentro del popup
  const handleCTA = () => {
    if (servicio.action === 'form') {
      setShowPopup(false);
      setShowForm(true);
    } else if (servicio.action === 'portfolio') {
      window.location.href = '/portafolio';
    } else if (servicio.action === 'meeting') {
      window.open('https://calendly.com/stratiksoftware', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* Sección con parallax sutil */}
      <MotionSection
        ref={ref}
        className={`${servicio.color} py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col ${
          servicio.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center gap-8 md:gap-12`}
        style={{ y }} // ← usar motion value correctamente
      >
        {/* Texto */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
          <div className="flex items-center gap-3 md:gap-4">
            <MotionSection
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="p-2 md:p-3 bg-white rounded-full shadow-sm"
            >
              {React.cloneElement(servicio.icon, { size: 24 })}
            </MotionSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              {servicio.title}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {servicio.description}
          </p>

          <MotionSection whileHover={{ x: 5 }} whileTap={{ scale: 0.97 }} className="mt-4">
            <button
              className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-white font-medium shadow-md ${servicio.btnColor} transition-all text-sm sm:text-base`}
              onClick={() => setShowPopup(true)}
            >
              {servicio.cta}
              <UilArrowRight className="ml-1" size={16} />
            </button>
          </MotionSection>
        </div>

        {/* Imagen */}
        <motion.section
          className="w-full md:w-1/2 relative mt-8 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group h-64 sm:h-80 md:h-96">
            <motion.div className="w-full h-full" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Image
                src={servicio.image}
                alt={servicio.title}
                fill
                className="object-cover rounded-xl sm:rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                loading="lazy"
              />
            </motion.div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6 cursor-pointer"
              onClick={() => setShowPopup(true)}
            >
              <span className="text-white font-medium text-sm sm:text-base">Ver detalles →</span>
            </div>
          </div>
        </motion.section>
      </MotionSection>

      {/* Popup de detalle */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)} // click fuera cierra
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl w-full max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.17, 0.55, 0.55, 1] }}
              onClick={(e) => e.stopPropagation()} // prevenir cierre al hacer click dentro
            >
              {/* Botón de cierre */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-transform hover:scale-110"
                onClick={() => setShowPopup(false)}
                aria-label="Cerrar"
              >
                ✕
              </button>

              {/* Imagen */}
              <Image
                src={servicio.image}
                alt={servicio.title}
                width={900}
                height={500}
                className="rounded-lg object-cover mb-4"
              />

              {/* Contenido */}
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{servicio.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{servicio.description}</p>

              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                {servicio.details?.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {/* CTA dinámico acorde al texto del botón */}
              <button
                onClick={handleCTA}
                className={`w-full px-5 py-3 rounded-lg text-white font-medium ${servicio.btnColor}`}
              >
                {servicio.cta}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Formulario de contacto — SOLO se monta cuando showForm === true */}
      {showForm && (
        <FormularioContactoPopup
          onClose={() => setShowForm(false)}
          // puedes pasar un identificador/servicio si tu popup lo usa:
          // servicio={servicio.title}
        />
      )}
    </>
  );
};

export default function Servicios() {
  return (
    <Reveal direction="left">
      <div className="w-full bg-white overflow-hidden">
        {servicios.map((servicio) => (
          <ServiceSection key={servicio.id} servicio={servicio} />
        ))}
      </div>
    </Reveal>
  );
}
