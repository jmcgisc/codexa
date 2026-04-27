'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Code, Briefcase, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Reveal from '../effects/Reveal';

export default function NosotrosPreview() {
  const router = useRouter();

  const stats = [
    { icon: <Code className="h-6 w-6 text-blue-500" />, label: 'Proyectos Entregados', value: '+100' },
    { icon: <Users className="h-6 w-6 text-indigo-500" />, label: 'Clientes Satisfechos', value: '45+' },
    { icon: <Briefcase className="h-6 w-6 text-cyan-500" />, label: 'Años de Experiencia', value: '5+' },
    { icon: <Award className="h-6 w-6 text-purple-500" />, label: 'Especialistas', value: 'Web & IA' }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white flex items-center justify-center relative overflow-hidden">
        {/* Background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-indigo-50 opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column - Content */}
        <div className="lg:w-1/2 space-y-6 text-left">
          <Reveal direction="down">
            <h3 className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Sobre Nosotros</h3>
          </Reveal>
          
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Innovación digital para impulsar tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">verdadero potencial</span>
            </h2>
          </Reveal>
          
          <Reveal direction="up" delay={0.2}>
            <p className="text-gray-600 text-lg leading-relaxed">
              En Stratik no solo desarrollamos software; construimos los cimientos del futuro digital para cada uno de nuestros clientes. Fusionamos creatividad, estrategia, y el inmenso poder de la Inteligencia Artificial para entregar soluciones que resuelven problemas reales y generan impacto desde el primer día.
            </p>
          </Reveal>
          
          <Reveal direction="up" delay={0.3}>
            <motion.button 
              onClick={() => router.push('/nosotros')}
              className="mt-4 px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce nuestro ADN
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Reveal>
        </div>

        {/* Right Column - Stats Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
          {stats.map((stat, i) => (
            <Reveal key={i} direction="left" delay={0.1 + (i * 0.1)}>
              <motion.div 
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col gap-3"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h4>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
