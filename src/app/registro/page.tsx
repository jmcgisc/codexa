'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AuthLayout from '@/src/components/auth/AuthLayout';
import { Mail, Lock, User, Building2, Phone, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

export default function RegistroPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular el registro y el proceso de enviar a base de datos como "Pendiente"
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <AuthLayout 
        title="Solicitud Recibida"
        subtitle="Tu cuenta ha sido creada exitosamente y está pendiente de aprobación."
      >
        <div className="flex flex-col items-center justify-center text-center py-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 border-8 border-green-50 shadow-sm animate-in zoom-in duration-500">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">En revisión de acceso</h3>
          <p className="text-gray-500 mb-8 max-w-sm">
            Para mantener la exclusividad y seguridad de nuestra plataforma, un administrador revisará tu perfil. 
            Te enviaremos un correo electrónico en cuanto tu acceso al CRM sea aprobado.
          </p>
          <Link 
            href="/"
            className="px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-black transition-colors flex items-center gap-2"
          >
            Volver al inicio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Crea tu cuenta"
      subtitle="Regístrate para solicitar acceso al ecosistema CRM Dental de Stratik."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              required
              className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" 
              placeholder="Dr. Juan Pérez" 
            />
          </div>
        </div>

        {/* Clínica */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la Clínica</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Building2 className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              required
              className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" 
              placeholder="Dental Care Center" 
            />
          </div>
        </div>

        {/* Teléfono y Correo en 2 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="tel" 
                required
                className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" 
                placeholder="55 1234 5678" 
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="email" 
                required
                className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" 
                placeholder="doctor@clinica.com" 
              />
            </div>
          </div>
        </div>

        {/* Contraseña */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="password" 
              required
              className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" 
              placeholder="••••••••" 
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full mt-6 py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> Registrando...</>
          ) : (
            'Solicitar Registro'
          )}
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          ¿Ya tienes cuenta y fue aprobada?{' '}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
            Inicia Sesión aquí
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
