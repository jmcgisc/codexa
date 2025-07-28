'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { UilArrowRight, UilRocket, UilShieldCheck, UilChartLine } from '@iconscout/react-unicons';

const servicios = [
  {
    id: 'web',
    title: 'Desarrollo Web',
    description: 'Creamos experiencias digitales impactantes con React, Next.js y tecnologías de vanguardia. Diseños responsivos, optimizados para SEO y conversión.',
    image: '/images/desarrollo-web.jpg',
    icon: <UilRocket className="text-blue-500" size={36} />,
    color: 'bg-gradient-to-br from-blue-50 to-white',
    btnColor: 'bg-blue-500 hover:bg-blue-600',
    cta: 'Explorar proyectos',
    reverse: false
  },
  {
    id: 'crypto',
    title: 'Seguridad Digital',
    description: 'Protección de datos con cifrado avanzado, firmas digitales y blockchain. Soluciones a medida para garantizar la integridad de tu información.',
    image: '/images/firmas-criptograficas.jpg',
    icon: <UilShieldCheck className="text-purple-500" size={36} />,
    color: 'bg-gradient-to-br from-purple-50 to-white',
    btnColor: 'bg-purple-500 hover:bg-purple-600',
    cta: 'Proteger mi empresa',
    reverse: true // ← este se invierte
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    description: 'Estrategias data-driven con análisis en tiempo real. Campañas de alto rendimiento en Google Ads, Meta y LinkedIn con seguimiento avanzado.',
    image: '/images/seo-marketing-digital.jpg',
    icon: <UilChartLine className="text-green-500" size={36} />,
    color: 'bg-gradient-to-br from-green-50 to-white',
    btnColor: 'bg-green-500 hover:bg-green-600',
    cta: 'Optimizar mi ROI',
    reverse: false
  }
];

const fadeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ServiceSection = ({ servicio, index }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [servicio.reverse ? -80 : 80, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 1], [0.95, 1]);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className={`${servicio.color} py-20 px-6 md:px-12 lg:px-24 flex flex-col ${
        servicio.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center gap-12`}
    >
      {/* Texto */}
      <motion.div 
        className="w-full md:w-1/2 space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={fadeVariants}
      >
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="p-3 bg-white rounded-full shadow-sm"
          >
            {servicio.icon}
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800"
            whileHover={{ scale: 1.01 }}
          >
            {servicio.title}
          </motion.h2>
        </div>

        <motion.p 
          className="text-lg text-gray-600 leading-relaxed"
          variants={fadeVariants}
        >
          {servicio.description}
        </motion.p>

        <motion.button
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.97 }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium shadow-md ${servicio.btnColor} transition-all`}
          variants={fadeVariants}
        >
          {servicio.cta}
          <UilArrowRight className="ml-1" />
        </motion.button>
      </motion.div>

      {/* Imagen */}
      <motion.div 
        className="w-full md:w-1/2 relative"
        style={{ scale }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeVariants}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-lg group h-80 md:h-96">
          <motion.img
            src={servicio.image}
            alt={servicio.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="text-white font-medium">Ver detalles →</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default function Servicios() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {servicios.map((servicio, index) => (
        <ServiceSection key={servicio.id} servicio={servicio} index={index} />
      ))}
    </div>
  );
}
