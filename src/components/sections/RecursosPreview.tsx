'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Video, Code, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Reveal from '../effects/Reveal';

export default function RecursosPreview() {
  const router = useRouter();

  const recursos = [
    {
      id: 'guias',
      title: 'Guías Prácticas',
      description: 'Manuales completos y paso a paso para implementar estrategias digitales.',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-400',
      bgHover: 'hover:bg-blue-50'
    },
    {
      id: 'plantillas',
      title: 'Plantillas',
      description: 'Recursos descargables para acelerar tu diseño y documentación legal.',
      icon: <Download className="h-8 w-8" />,
      color: 'from-emerald-500 to-teal-400',
      bgHover: 'hover:bg-emerald-50'
    },
    {
      id: 'tutoriales',
      title: 'Tutoriales',
      description: 'Videotutoriales y webinars grabados sobre SEO, Web y automatización.',
      icon: <Video className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-400',
      bgHover: 'hover:bg-purple-50'
    },
    {
      id: 'herramientas',
      title: 'Herramientas Libres',
      description: 'Software, scripts y utilidades creadas por nuestro equipo para ti.',
      icon: <Code className="h-8 w-8" />,
      color: 'from-orange-500 to-red-400',
      bgHover: 'hover:bg-orange-50'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center max-w-2xl mb-16">
          <Reveal direction="down">
            <h3 className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2">Biblioteca Gratis</h3>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Recursos para impulsar tu negocio
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-gray-600 text-lg">
              Te compartimos el conocimiento y las herramientas que usamos en nuestro día a día. Descarga de forma gratuita todo lo que necesitas para crecer tu presencia digital.
            </p>
          </Reveal>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {recursos.map((rec, i) => (
            <Reveal key={rec.id} direction="up" delay={0.1 + (i * 0.1)}>
              <motion.div 
                className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-sm cursor-pointer transition-colors duration-300 group flex flex-col h-full ${rec.bgHover}`}
                whileHover={{ y: -5 }}
                onClick={() => router.push('/recursos')}
              >
                <div className={`mb-6 inline-flex p-4 rounded-xl bg-gradient-to-tr ${rec.color} text-white shadow-lg`}>
                  {rec.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{rec.title}</h4>
                <p className="text-gray-600 flex-grow mb-6">{rec.description}</p>
                <div className="text-gray-900 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto pt-4 border-t border-gray-100">
                  Explorar <ArrowRight size={16} />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.5}>
          <motion.button 
            onClick={() => router.push('/recursos')}
            className="px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todos los recursos disponibles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Reveal>

      </div>
    </section>
  );
}
