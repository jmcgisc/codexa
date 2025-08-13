'use client'

import { useState } from 'react'

const faqs = [
  { question: '¿Cuánto tarda en estar lista mi página web?', answer: 'Depende del proyecto, pero en promedio entre 1 y 3 semanas.' },
  { question: '¿Puedo editar el contenido después?', answer: 'Sí, usamos plataformas que permiten a los clientes hacer cambios fácilmente.' },
  { question: '¿Diseñan tiendas online?', answer: 'Claro. Creamos ecommerce optimizados, funcionales y con pasarelas de pago.' },
  { question: '¿Ofrecen mantenimiento?', answer: 'Sí. Podemos encargarnos de actualizar, optimizar y proteger tu web mes a mes.' },
  { question: '¿Desarrollan aplicaciones móviles?', answer: 'Sí. Creamos apps para iOS y Android, optimizadas y seguras, con diseño atractivo y funcional.' },
  { question: '¿Cómo mejoran el posicionamiento en Google?', answer: 'Aplicamos estrategias SEO técnicas y de contenido para mejorar tu visibilidad y atraer más clientes.' },
  { question: '¿Ofrecen campañas de marketing digital?', answer: 'Sí. Creamos y gestionamos campañas en Google Ads, redes sociales y email marketing para aumentar tu alcance.' },
  { question: '¿Implementan chatbots e inteligencia artificial?', answer: 'Desarrollamos chatbots personalizados con IA para automatizar atención al cliente y mejorar la experiencia de los usuarios.' },
  { question: '¿Pueden ayudarme a mejorar mi presencia digital?', answer: 'Sí. Trabajamos tu marca en web, redes sociales, buscadores y medios digitales para aumentar tu visibilidad.' },
  { question: '¿Qué medidas de seguridad digital implementan?', answer: 'Incluimos protocolos HTTPS, cifrado, autenticación de dos factores y protección contra ataques cibernéticos.' },
  { question: '¿Qué es una firma criptográfica?', answer: 'Es un método de validación digital que garantiza la autenticidad e integridad de documentos y transacciones en línea.' },
  { question: '¿Diseñan con enfoque UX/UI?', answer: 'Sí. Nuestros diseños priorizan la experiencia de usuario (UX) y una interfaz atractiva e intuitiva (UI).' },
  { question: '¿Puedo contratar solo uno de sus servicios?', answer: 'Sí, puedes contratar un servicio individual o un paquete a medida según tus necesidades.' },
  { question: '¿Trabajan con clientes internacionales?', answer: 'Sí. Tenemos experiencia trabajando con clientes en distintos países, adaptándonos a sus mercados y horarios.' },
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
                <span className="ml-4 text-xl font-bold">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out overflow-hidden`}
                style={{
                  gridTemplateRows: openIndex === i ? '1fr' : '0fr',
                }}
              >
                <div className="overflow-hidden">
                  <p className="mt-2 text-neutral-500 dark:text-neutral-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
