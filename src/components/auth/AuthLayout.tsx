'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Activity } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  illustrationTitle?: string;
  illustrationSubtitle?: string;
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  illustrationTitle = "El Sistema Operativo Inteligente para Clínicas Dentales.",
  illustrationSubtitle = "Únete a las clínicas de alto rendimiento que ya están automatizando sus operaciones."
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Mitad Izquierda: Formulario */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          <Link href="/" className="flex items-center gap-2 mb-10 group w-fit">
            <div className="bg-blue-600 text-white p-2 rounded-xl group-hover:scale-105 transition-transform shadow-md shadow-blue-200">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tight">Stratident</span>
          </Link>
          
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-500 mb-8">{subtitle}</p>

          <div className="bg-white">
            {children}
          </div>
        </div>
      </div>

      {/* Mitad Derecha: Ilustración Premium */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-blue-700 via-indigo-800 to-cyan-700 overflow-hidden">
        {/* Patrones de fondo y desenfoques */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900/80 to-transparent"></div>
        
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[100px]" />

        <div className="relative w-full h-full flex flex-col items-center justify-center p-12 text-center text-white z-10">
          <div className="w-full max-w-lg">
            <div className="mb-8 relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Imagen de muestra (Dashboard mockup) - usando un div simulado si no hay imagen real */}
              <div className="w-full h-72 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center p-6 relative">
                 <div className="absolute inset-0 bg-[url('/images/mockup.png')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                 <div className="flex flex-col gap-4 w-full h-full">
                    {/* Fake UI */}
                    <div className="flex gap-4 mb-2">
                       <div className="w-1/3 h-20 bg-white/10 rounded-xl animate-pulse delay-75 backdrop-blur-md border border-white/5"></div>
                       <div className="w-1/3 h-20 bg-white/10 rounded-xl animate-pulse delay-150 backdrop-blur-md border border-white/5"></div>
                       <div className="w-1/3 h-20 bg-white/10 rounded-xl animate-pulse delay-300 backdrop-blur-md border border-white/5"></div>
                    </div>
                    <div className="flex-1 w-full bg-white/10 rounded-xl backdrop-blur-md border border-white/5"></div>
                 </div>
              </div>
            </div>
            <h3 className="text-3xl font-black mb-4 tracking-tight leading-tight">{illustrationTitle}</h3>
            <p className="text-blue-100/80 text-lg">{illustrationSubtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
