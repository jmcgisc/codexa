'use client'

import { useState, useEffect } from 'react'
import { X, ArrowRight } from 'lucide-react'
import emailjs from '@emailjs/browser'

interface Props {
  onClose: () => void
}

export default function ContactModal({ onClose }: Props) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      setStatus('success')
      setFormData({ nombre: '', email: '', mensaje: '' })
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
            <label className="block text-sm font-medium mb-1">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-white"
              required
            ></textarea>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar solicitud'}
              <ArrowRight size={16} />
            </button>
          </div>

          {status === 'success' && (
            <p className="mt-3 text-green-600 text-sm">✅ Mensaje enviado correctamente.</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-red-600 text-sm">❌ Error al enviar. Intenta más tarde.</p>
          )}
        </form>
      </div>
    </div>
  )
}
