'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { UilArrowRight, UilRocket, UilShieldCheck, UilChartLine } from '@iconscout/react-unicons';
import type { HTMLMotionProps } from 'framer-motion';

const servicios = [
  {
    id: 'web',
    title: 'Desarrollo Web',
    description: 'Creamos experiencias digitales impactantes con React, Next.js y tecnologías de vanguardia.',
    image: '/images/desarrollo-web.jpg',
    icon: <UilRocket className="text-blue-500" size={36} />,
    color: 'bg-gradient-to-br from-blue-50 to-white',
    btnColor: 'bg-blue-500 hover:bg-blue-600',
    cta: 'Explorar proyectos',
    reverse: false,
  },
  {
    id: 'crypto',
    title: 'Seguridad Digital',
    description: 'Protección de datos con cifrado avanzado, firmas digitales y blockchain.',
    image: '/images/firmas-criptograficas.jpg',
    icon: <UilShieldCheck className="text-purple-500" size={36} />,
    color: 'bg-gradient-to-br from-purple-50 to-white',
    btnColor: 'bg-purple-500 hover:bg-purple-600',
    cta: 'Proteger mi empresa',
    reverse: true,
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    description: 'Campañas de alto rendimiento en Google Ads, Meta y LinkedIn con seguimiento avanzado.',
    image: '/images/seo-marketing-digital.jpg',
    icon: <UilChartLine className="text-green-500" size={36} />,
    color: 'bg-gradient-to-br from-green-50 to-white',
    btnColor: 'bg-green-500 hover:bg-green-600',
    cta: 'Optimizar mi ROI',
    reverse: false,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MotionSection: React.FC<
  HTMLMotionProps<'section'> & React.HTMLAttributes<HTMLElement>
> = motion.section;

const ServiceSection = ({ servicio }: { servicio: typeof servicios[0] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [servicio.reverse ? -80 : 80, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 1], [0.95, 1]);

  return (
    <section
      ref={ref}
      style={{ transform: `translateY(${y})` }}
      className={`${servicio.color} py-20 px-6 md:px-12 lg:px-24 flex flex-col ${
        servicio.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center gap-12`}
    >
      <div className="w-full md:w-1/2 space-y-6">
        <div className="flex items-center gap-4">
          <MotionSection
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="p-3 bg-white rounded-full shadow-sm"
          >
            {servicio.icon}
          </MotionSection>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{servicio.title}</h2>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">{servicio.description}</p>

        <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.97 }}>
          <button
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium shadow-md ${servicio.btnColor} transition-all`}
          >
            {servicio.cta}
            <UilArrowRight className="ml-1" />
          </button>
        </motion.div>
      </div>

      <MotionSection
        className="w-full md:w-1/2 relative" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-lg group h-80 md:h-96">
          <MotionSection
            className="w-full h-full"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={servicio.image}
              alt={servicio.title}
              fill
              className="object-cover rounded-2xl"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </MotionSection>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="text-white font-medium">Ver detalles →</span>
          </div>
        </div>
      </MotionSection>
    </section>
  );
};

export default function Servicios() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {servicios.map((servicio) => (
        <ServiceSection key={servicio.id} servicio={servicio} />
      ))}
    </div>
  );
}
