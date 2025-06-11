'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const logos = [
  '/logos/cliente1.svg',
  '/logos/cliente2.svg',
  '/logos/cliente3.svg',
  '/logos/cliente4.svg',
  '/logos/cliente5.svg',
  '/logos/cliente6.svg',
]

export default function ClientLogos() {
  const [paused, setPaused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % logos.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [paused])

  return (
    <section className="py-20 bg-white dark:bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 relative overflow-hidden">
        {/* Fades laterales */}
        <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-neutral-900 to-transparent backdrop-blur-sm z-10" />
        <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-neutral-900 to-transparent backdrop-blur-sm z-10" />

        {/* Título animado */}
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase animate-fade-up animate-once animate-duration-1000 animate-ease-out">
            Clientes felices
          </span>
          <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white mt-2 animate-fade-up animate-delay-300 animate-once animate-duration-1000 animate-ease-out">
            Confían en nosotros
          </h2>
        </div>

        {/* Carrusel */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={`flex gap-24 w-max items-center ${
              paused ? '' : 'animate-marquee'
            }`}
          >
            {[...logos, ...logos].map((src, idx) => (
              <div
                key={idx}
                className="grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <Image
                  src={src}
                  alt={`Logo cliente ${idx}`}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {logos.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === activeIndex
                  ? 'bg-gray-800 dark:bg-white scale-125'
                  : 'bg-gray-400 dark:bg-gray-600'
              } transition-all`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}