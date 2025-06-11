'use client'

import { useState } from 'react'

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSent(true)

    // Simular un envío real
    setTimeout(() => {
      setIsSent(false)
      setIsOpen(false)
    }, 2000)
  }

  return (
    <>
      {/* Botón que abre el modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
      >
        Contáctanos
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">Contacto rápido</h2>

            {isSent ? (
              <div className="text-green-600 dark:text-green-400 text-center py-10">
                ✅ ¡Tu mensaje ha sido enviado con éxito!
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full p-3 rounded-lg border dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 text-black dark:text-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full p-3 rounded-lg border dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 text-black dark:text-white"
                  required
                />
                <textarea
                  placeholder="Escribe tu mensaje..."
                  rows={4}
                  className="w-full p-3 rounded-lg border dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 text-black dark:text-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
