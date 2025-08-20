// src/components/sections/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { HTMLMotionProps } from 'framer-motion'
import FormularioContactoPopup from '../email/FormularioContactoPopup'

const MotionSection: React.FC<
  HTMLMotionProps<'section'> & React.HTMLAttributes<HTMLElement>
> = motion.section

export default function Hero() {
  const [showCTA, setShowCTA] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Mostrar CTA después de 200px de scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowCTA(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <iframe
          className="w-full h-full object-cover scale-110"
          src="https://www.youtube.com/embed/sA4FXGNdTHw?autoplay=1&loop=1&mute=1&playlist=sA4FXGNdTHw&controls=0&modestbranding=1&rel=0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video de fondo"
        />
      </div>

      {/* Contenido central */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-6">
        <div className="max-w-5xl space-y-10 backdrop-blur-md bg-black/30 p-6 rounded-xl shadow-lg border border-white/10">
          <MotionSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 drop-shadow-lg"
          >
            Diseñamos tu futuro digital
          </MotionSection>

          <MotionSection
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed tracking-wide"
          >
            Desarrollo Web UX/UI • Marketing Digital • Branding • SEO <br className="hidden md:block" />
            E-commerce • Firmas Criptográficas • Blockchain • Web3 • IA • Chatbots
          </MotionSection>

          {/* CTA original */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-7 py-3 text-base sm:text-lg font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 group"
            >
              Descubre nuestros servicios
              <motion.svg
                className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </button>
          </motion.div>
        </div>

        {/* Flecha scroll */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* CTA persistente (solo visible tras scroll) */}
      {showCTA && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-20 left-6 z-50"
        >
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
          >
            Contáctanos
          </button>
        </motion.div>
      )}

      {/* Popup de contacto */}
      {isOpen && (
        <FormularioContactoPopup onClose={() => setIsOpen(false)} />
      )}
    </section>
  )
}
