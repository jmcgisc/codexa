'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Reveal from '../effects/Reveal';

export default function BlogPreview() {
  const router = useRouter();

  const posts = [
    {
      id: 1,
      title: 'El futuro del Diseño Web con IA en 2026',
      excerpt: 'Descubre cómo los agentes conversacionales y la generación de componentes están cambiando la manera de crear interfaces interactivas.',
      category: 'Desarrollo Web',
      date: '25 Abr 2026',
      author: 'Jose Carreiro',
      image: '/images/desarrollo-web.jpg', // Reusing an existing image placeholder
      color: 'text-blue-600 bg-blue-50'
    },
    {
      id: 2,
      title: 'Mejores prácticas SEO para posicionamiento rápido',
      excerpt: 'El algoritmo cambia, pero los fundamentos técnicos siguen siendo tu mejor herramienta. Aprende a estructurar un sitio optimizado.',
      category: 'Marketing',
      date: '18 Mar 2026',
      author: 'Equipo Stratik',
      image: '/images/seo-marketing-digital.jpg',
      color: 'text-green-600 bg-green-50'
    },
    {
      id: 3,
      title: 'Cómo asegurar tus contratos digitales en la Web3',
      excerpt: 'Firmas electrónicas y blockchain: la combinación perfecta para blindar la legalidad de tus acuerdos B2B online.',
      category: 'LegalTech',
      date: '02 Feb 2026',
      author: 'Legal Stratik',
      image: '/images/firmas-criptograficas.jpg',
      color: 'text-purple-600 bg-purple-50'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <Reveal direction="down">
              <h3 className="text-gray-500 font-semibold tracking-wider uppercase text-sm mb-2 flex items-center gap-2">
                <BookOpen size={16} /> Blog y Noticias
              </h3>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Mantente al día con lo último en tecnología
              </h2>
            </Reveal>
          </div>
          
          <Reveal direction="left" delay={0.2}>
            <motion.button 
              onClick={() => router.push('/blog')}
              className="px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center gap-2 group whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver todos los artículos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Reveal>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.id} direction="up" delay={0.1 + (i * 0.1)}>
              <motion.article 
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full group"
                whileHover={{ y: -8 }}
                onClick={() => router.push('/blog')}
              >
                {/* Image placeholder with gradient fallback */}
                <div className="h-56 w-full bg-gray-200 relative overflow-hidden">
                  {/* Imagen optimizada u original iría aquí. Mientras, un div estético o uso de Image */}
                   <div 
                     className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                     style={{ backgroundImage: `url(${post.image})` }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-80" />
                   <div className="absolute bottom-4 left-4">
                     <span className={`px-3 py-1 rounded-full text-xs font-semibold ${post.color} backdrop-blur-md bg-white/90`}>
                       {post.category}
                     </span>
                   </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs tracking-wide text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-blue-600 font-medium text-sm group-hover:gap-1 transition-all">
                    Leer más <ArrowRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
