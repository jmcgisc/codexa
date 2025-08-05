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
import { Code, Bot, ShieldCheck, X } from 'lucide-react';
import React from 'react';

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
  return (
    <section className="py-24 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-16 text-gray-900">Servicios Destacados</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {selectedService.map((service, i) => (
          <Dialog key={i}>
            <div className="bg-white p-8 rounded-3xl shadow-md border hover:shadow-lg group transition-shadow duration-300">
              <div className="flex justify-center mb-5">
                <div className={`p-4 rounded-full ${service.color}`}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
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
        ))}
      </div>
    </section>
  );
}