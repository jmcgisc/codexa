'use client'

import { useState, useEffect } from 'react'
import { X, ArrowRight } from 'lucide-react'
import emailjs from '@emailjs/browser'

interface Props {
  onClose: () => void
}

export default function ContactModal({ onClose }: Props) {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    telefonoMovil: '',
    email: '',
    mensaje: ''
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Inicializar EmailJS con tu public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Enviar el correo usando EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          nombreCompleto: formData.nombreCompleto,
          telefonoMovil: formData.telefonoMovil,
          email: formData.email,
          mensaje: formData.mensaje
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      
      setStatus('success')
      // Resetear el formulario
      setFormData({
        nombreCompleto: '',
        telefonoMovil: '',
        email: '',
        mensaje: ''
      })
      
      // Cerrar el modal después de 3 segundos
      setTimeout(() => {
        onClose()
      }, 3000)
    } catch (error) {
      console.error('❌ Error al enviar:', error)
      setStatus('error')
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 h-2 w-full"></div>
      <div className="pt-6 pb-4 px-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Solicitar Cotización</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nombre completo *
            </label>
            <input
              type="text"
              name="nombreCompleto"
              value={formData.nombreCompleto}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white transition-colors"
              placeholder="Tu nombre completo"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Teléfono móvil *
            </label>
            <input
              type="tel"
              name="telefonoMovil"
              value={formData.telefonoMovil}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white transition-colors"
              placeholder="Tu número de teléfono"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Correo electrónico *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white transition-colors"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mensaje *
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white transition-colors"
              placeholder="Describe tu proyecto o necesidades"
              required
            ></textarea>
          </div>

          <div className="px-6 pb-6 pt-4 bg-gray-50 dark:bg-neutral-800/50">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors font-medium"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                <ArrowRight size={16} className={status === 'sending' ? 'hidden' : 'block'} />
              </button>
            </div>
          </div>

          {status === 'success' && (
            <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
              ✅ Mensaje enviado correctamente. Te contactaremos pronto.
            </div>
          )}
          
          {status === 'error' && (
            <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
              ❌ Error al enviar el mensaje. Por favor, intenta nuevamente.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}