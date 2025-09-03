'use client';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '../../components/ui/dialog';
import DownloadButton from '../../components/buttons/download/DownloadButton';
import { Button } from '../../components/ui/button';
import { Code, Bot, ShieldCheck, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../effects/Reveal';
import React, { useState, useEffect } from 'react';

const selectedService = [
  {
    title: 'Diseño Web & SEO',
    desc: 'Creamos sitios visualmente impactantes, rápidos y pensados para posicionarte en Google.',
    icon: <Code className="h-8 w-8 text-cyan-500" />,
    details: [
      'Diseño web responsive',
      'Next.js, React, Tailwind',
      'Optimización SEO',
      'CMS: WordPress, Sanity',
      'Search Console & Analytics',
    ],
    color: 'bg-cyan-100',
    downloadText: 'Descargar folleto de Diseño Web',
    pdfUrl: '/pdfs/diseno-web-seo-stratik.pdf', 
    fileName: 'diseno-web-seo-stratik.pdf' 
  },
  {
    title: 'Chatbots Inteligentes',
    desc: 'Conecta 24/7 con tus clientes con IA integrada.',
    icon: <Bot className="h-8 w-8 text-purple-500" />,
    details: [
      'Chatbots GPT',
      'WhatsApp y Web',
      'Entrenamiento personalizado',
      'Captura de leads',
      'Soporte automático',
    ],
    color: 'bg-purple-100',
    downloadText: 'Descargar guía de Chatbots',
    pdfUrl: '/pdfs/chatbots-ia-stratik.pdf',
    fileName: 'chatbots-ia-stratik.pdf'
  },
  {
    title: 'LegalTech y Seguridad',
    desc: 'Digitaliza y protege documentos legales.',
    icon: <ShieldCheck className="h-8 w-8 text-emerald-500" />,
    details: [
      'Firma digital de documentos',
      'Blockchain & Timestamp',
      'Cumplimiento GDPR',
      'Auditoría legal',
    ],
    color: 'bg-emerald-100',
    downloadText: 'Descargar PDF LegalTech',
    pdfUrl: '/pdfs/legaltech-stratik.pdf',
    fileName: 'legaltech-stratik.pdf'
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Verificar si es dispositivo móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === selectedService.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? selectedService.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-16 text-gray-900">Servicios Destacados</h2>

      {/* Contenedor del carrusel para móviles y grid para desktop */}
      <div className="relative max-w-6xl mx-auto">
        {/* Grid para desktop (oculto en móviles) */}
        <div className="hidden md:grid md:grid-cols-3 gap-10">
          {selectedService.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>

        {/* Carrusel para móviles (oculto en desktop) */}
        <div className="md:hidden relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {selectedService.map((service, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
          
          {/* Controles de navegación */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Servicio anterior"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Siguiente servicio"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
          
          {/* Indicadores de paginación */}
          <div className="flex justify-center mt-6 space-x-2">
            {selectedService.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 w-2 rounded-full ${
                  i === currentIndex ? 'bg-gray-700' : 'bg-gray-300'
                }`}
                aria-label={`Ir al servicio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente de tarjeta de servicio separado para reutilizar
function ServiceCard({ service }: { service: typeof selectedService[0] }) {
  return (
    <Dialog>
      <div className="bg-white p-8 rounded-3xl shadow-md border hover:shadow-lg group transition-shadow duration-300">
        <div className="flex justify-center mb-5">
          <div className={`p-4 rounded-full ${service.color}`}>
            <Reveal direction="down">
              {service.icon}
            </Reveal>
          </div>
        </div>
        <Reveal direction="up">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
        </Reveal>
        <Reveal direction="left">
          <p className="text-gray-600 text-sm">{service.desc}</p>
        </Reveal>
        <div className="mt-6">
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Saber más
            </Button>
          </DialogTrigger>
        </div>
      </div>

      <DialogContent className="w-[90vw] max-w-3xl rounded-2xl p-0 overflow-hidden">
        <DialogClose className="absolute top-4 right-4 p-2 rounded-full bg-black transition-colors">
          <X className="w-5 h-5 text-gray-100" />
        </DialogClose>

        <div className="bg-white md:flex">
          <div className={`w-full md:w-1/3 p-8 flex items-center justify-center ${service.color}`}>
            <div className="bg-white p-6 rounded-full shadow-lg">{service.icon}</div>
          </div>

          <div className="w-full md:w-2/3 p-8 text-left">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-3 text-gray-900">
                {service.title}
              </DialogTitle> 
              
              <DialogDescription className="text-gray-600 mb-6">
                {service.desc}
              </DialogDescription>
            </DialogHeader>

            <ul className="mt-4 space-y-3 text-gray-700">
              {service.details.map((d, j) => (
                <li key={j} className="flex gap-3 items-start">
                  <span className={`mt-1 ${
                    service.color.includes('cyan') ? 'text-cyan-500' :
                    service.color.includes('purple') ? 'text-purple-500' :
                    'text-emerald-500'
                  }`}>•</span>
                  <span className="text-gray-700">{d}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <DownloadButton 
                pdfUrl={service.pdfUrl} 
                fileName={service.fileName}
              />
              <p className="text-xs text-gray-500 mt-2 text-center">
                {service.downloadText}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}