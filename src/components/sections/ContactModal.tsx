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
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const templateParams = {
        from_name: formData.nombreCompleto,   // 👈 se alinea con EmailJS
        phone: formData.telefonoMovil,
        from_email: formData.email,
        message: formData.mensaje
      }

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams
      )

      console.log('EmailJS response:', result)
      setStatus('success')

      setFormData({
        nombreCompleto: '',
        telefonoMovil: '',
        email: '',
        mensaje: ''
      })

      setTimeout(() => {
        onClose()
        setStatus('idle')
      }, 3000)
    } catch (error) {
      console.error('❌ Error al enviar:', error)
      setStatus('error')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 h-2 w-full"></div>
          <div className="pt-6 pb-4 px-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Solicitar Cotización</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nombreCompleto"
                placeholder="Nombre completo"
                value={formData.nombreCompleto}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="tel"
                name="telefonoMovil"
                placeholder="Teléfono móvil"
                value={formData.telefonoMovil}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
              <textarea
                name="mensaje"
                placeholder="Tu mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar'}
              </button>
            </form>

            {status === 'success' && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                ✅ Mensaje enviado correctamente.
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                ❌ Error al enviar. Intenta de nuevo.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
