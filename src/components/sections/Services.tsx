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

import * as DialogPrimitive from "@radix-ui/react-dialog" 
import { Button } from '../../components/ui/button';
import { Code, Bot, ShieldCheck, X } from 'lucide-react';
import React from 'react';

const selectedService = [
  {
    title: 'Diseño Web & SEO Profesional',
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
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-16 text-gray-900">Servicios Destacados</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {selectedService.map((service, i) => (
          <Dialog key={i}>
            <div className="bg-white p-8 rounded-3xl shadow-md border hover:shadow-lg group">
              <div className="flex justify-center mb-5">
                <div className="bg-cyan-50 p-4 rounded-full">
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
              <div className=" bg-white md:flex">
                {/* Botón cerrar */}
                <DialogClose >
                  <button className="absolute top-0 right-0 text-gray-500 hover:text-black p-1.5 rounded-full bg-white shadow">
                    <X className="w-5 h-5" />
                  </button>
                </DialogClose>

                {/* Lado izquierdo */}
                <div className={`w-full md:w-1/3 p-6 flex items-center justify-center ${service.color}`}>
                  <div className="bg-white p-4 rounded-full shadow">{service.icon}</div>
                </div>

                {/* Lado derecho */}
                <div className="w-full md:w-2/3 p-6 text-left">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold mb-2">{service.title}</DialogTitle>
                    <DialogDescription>{service.desc}</DialogDescription>
                  </DialogHeader>

                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    {service.details.map((d, j) => (
                      <li key={j} className="flex gap-2 items-start">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white">
                      Solicitar ahora
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Descargar PDF
                    </Button>
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