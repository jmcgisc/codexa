'use client'

import { useState } from 'react'

const faqs = [
  {
    question: '¿Cuánto tarda en estar lista mi página web?',
    answer: 'Depende del proyecto, pero en promedio entre 1 y 3 semanas.',
  },
  {
    question: '¿Puedo editar el contenido después?',
    answer: 'Sí, usamos plataformas que permiten a los clientes hacer cambios fácilmente.',
  },
  {
    question: '¿Diseñan tiendas online?',
    answer: 'Claro. Creamos ecommerce optimizados, funcionales y con pasarelas de pago.',
  },
  {
    question: '¿Ofrecen mantenimiento?',
    answer: 'Sí. Podemos encargarnos de actualizar, optimizar y proteger tu web mes a mes.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="bg-white dark:bg-neutral-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-neutral-200 dark:border-neutral-700 pb-4"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left text-lg font-medium text-neutral-700 dark:text-neutral-100 flex justify-between items-center"
              >
                {faq.question}
                <span className="ml-4">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>

              <div
                className={`mt-2 text-neutral-500 dark:text-neutral-400 transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                <p className="mt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
