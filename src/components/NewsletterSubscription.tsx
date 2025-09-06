// components/NewsletterSubscription.tsx
'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Loader2, CheckCircle, XCircle } from 'lucide-react'

interface NewsletterSubscriptionProps {
  variant?: 'inline' | 'card'
}

export default function NewsletterSubscription({ variant = 'card' }: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  // Configuración de EmailJS - Reemplaza con tus credenciales
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'YOUR_SERVICE_ID', // Reemplaza con tu Service ID
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Reemplaza con tu Template ID
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY' // Reemplaza con tu Public Key
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Por favor ingresa un email válido')
      return
    }


  // Prevenir múltiples suscripciones
  if (localStorage.getItem('subscribed') === 'true') {
    setStatus('error')
    setMessage('Ya estás suscrito a nuestro newsletter')
    return
  }

    setIsLoading(true)
    setStatus('idle')

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          to_email: 'tu-email@empresa.com', // Email donde recibirás las suscripciones
          from_email: email,
          subject: 'Nueva suscripción al blog',
          message: `Nueva suscripción de: ${email}`,
          date: new Date().toLocaleDateString('es-MX'),
          subscriber_email: email
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setStatus('success')
      setMessage('¡Gracias por suscribirte! Te hemos enviado un email de confirmación.')
      setEmail('')
      
      // Opcional: Guardar en localStorage para evitar suscripciones duplicadas
      localStorage.setItem('subscribed', 'true')
      
    } catch (error) {
      console.error('Error al enviar suscripción:', error)
      setStatus('error')
      setMessage('Hubo un error al procesar tu suscripción. Por favor intenta nuevamente.')
    } finally {
      setIsLoading(false)
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }
  }

  if (variant === 'inline') {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Te gustó este artículo?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter para recibir más contenido como este directamente en tu correo.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Tu email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent disabled:opacity-50"
              required
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                'Suscribirse'
              )}
            </button>
          </form>

          {/* Mensajes de estado */}
          {status === 'success' && (
            <div className="mt-4 flex items-center justify-center gap-2 text-green-200">
              <CheckCircle size={20} />
              <span>{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 flex items-center justify-center gap-2 text-red-200">
              <XCircle size={20} />
              <span>{message}</span>
            </div>
          )}

          <p className="text-sm opacity-70 mt-4">
            Sin spam. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    )
  }

  // Variante card (para la página principal del blog)
  return (
    <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white shadow-lg">
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-bold mb-2">Suscríbete a nuestro blog</h3>
        <p className="mb-6 opacity-90">Recibe las últimas actualizaciones y artículos directamente en tu correo.</p>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input 
            type="email" 
            placeholder="Tu email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
            required
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-6 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              'Suscribirse'
            )}
          </button>
        </form>

        {/* Mensajes de estado */}
        {status === 'success' && (
          <div className="mt-4 flex items-center justify-center gap-2 text-green-200 text-sm">
            <CheckCircle size={16} />
            <span>{message}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-4 flex items-center justify-center gap-2 text-red-200 text-sm">
            <XCircle size={16} />
            <span>{message}</span>
          </div>
        )}

        <p className="text-sm opacity-70 mt-4">
          Sin spam. Cancelación en cualquier momento.
        </p>
      </div>
    </div>
  )
}