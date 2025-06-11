'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'Ana Pérez',
    role: 'CEO de E-commerce X',
    testimonial: '¡Increíble experiencia! La página web que crearon ha aumentado nuestras ventas un 25% en 3 meses.',
    rating: 5,
  },
  {
    name: 'Carlos Sánchez',
    role: 'Founder de StartUp Y',
    testimonial: 'El equipo es muy profesional y entregaron el proyecto a tiempo. ¡Recomendados al 100%!',
    rating: 4,
  },
  {
    name: 'María Gómez',
    role: 'CMO en Empresa Z',
    testimonial: 'Diseño moderno y funcional, superaron nuestras expectativas. El soporte post-lanzamiento es excelente.',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div id="testimoniales" className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? 'gold' : 'gray'}
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-neutral-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Lo que dicen nuestros clientes
        </h2>

        <div className="space-y-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-xl shadow-md">
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
                "{testimonial.testimonial}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">{testimonial.role}</p>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
