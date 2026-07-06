'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AuthLayout from '@/src/components/auth/AuthLayout';
import { Mail, Lock, Loader2, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorStatus, setErrorStatus] = useState<'none' | 'pending' | 'invalid'>('none');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorStatus('none');
    
    // Simular llamada al backend donde verificamos si el estado es Aprobado o Pendiente
    setTimeout(() => {
      setIsSubmitting(false);
      // Para propósitos de demostración, siempre mostramos que está pendiente
      setErrorStatus('pending');
    }, 1500);
  };

  return (
    <AuthLayout 
      title="Iniciar Sesión"
      subtitle="Accede a tu cuenta de Stratident para gestionar tu clínica."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Manejo de Errores */}
        {errorStatus === 'pending' && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-xl flex items-start gap-3 animate-in fade-in duration-300">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
            <div className="text-sm">
              <p className="font-bold">Acceso Pendiente de Aprobación</p>
              <p className="mt-1 opacity-90">Tu cuenta fue registrada exitosamente, pero aún está siendo validada por nuestro equipo de administración. Recibirás un correo cuando puedas acceder.</p>
            </div>
          </div>
        )}

        {errorStatus === 'invalid' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-center gap-3 animate-in fade-in duration-300">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            <p className="text-sm">Credenciales incorrectas. Intenta nuevamente.</p>
          </div>
        )}

        {/* Correo */}
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

        {/* Contraseña */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-700">¿Olvidaste tu contraseña?</a>
          </div>
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
          className="w-full mt-2 py-3.5 px-4 bg-gray-900 hover:bg-black text-white rounded-xl font-bold text-sm shadow-lg shadow-gray-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> Verificando...</>
          ) : (
            'Entrar al CRM'
          )}
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          ¿Aún no tienes acceso?{' '}
          <Link href="/registro" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
            Regístrate para solicitarlo
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
