'use client'

import { Disclosure, Dialog } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '../ThemeToggle'
import useScrollSpy from '../../hooks/useScrollSpy'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import FormularioContactoPopup from '../../components/email/FormularioContactoPopup'

const sections = ['hero', 'servicios', 'portfolio', 'contacto']

const MotionSection: React.FC<
  HTMLMotionProps<'section'> & React.HTMLAttributes<HTMLElement>
> = motion.section

export default function Navbar() {
  const activeId = useScrollSpy(sections, 80)
  const navRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Manejo de scroll para navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Movimiento parallax del mouse
  const handleMouseMove = (e: MouseEvent) => {
    const bounds = navRef.current?.getBoundingClientRect()
    if (!bounds) return
    mouseX.set(e.clientX - bounds.left)
    mouseY.set(e.clientY - bounds.top)
  }

  const background = useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, rgba(99,102,241,0.15), transparent 80%)`

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    nav.addEventListener('mousemove', handleMouseMove)
    return () => nav.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Función para hacer scroll suave a la sección
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80 // Altura del navbar fijo
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setMenuOpen(false) // Cierra menú móvil si está abierto
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <MotionSection
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-neutral-900/90 shadow-lg'
            : 'bg-white/80 dark:bg-neutral-900/80'
        } backdrop-blur-md`}
      >
        <Disclosure as="nav">
          {() => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                  
                  {/* Logo */}
                  <MotionSection whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <button onClick={() => handleScrollTo('hero')} aria-label="Ir al inicio">
                      <div className="flex items-center space-x-2">
                        <Image
                          src="/corporativo/stratik_logo_large.png"
                          alt="Logo STRATIK"
                          width={160}
                          height={50}
                          priority
                          className="h-28 w-auto object-contain"
                        />
                      </div>
                    </button>
                  </MotionSection>

                  {/* Links Desktop */}
                  <MotionSection
                    className="hidden md:flex items-center space-x-8"
                    variants={containerVariants}
                  >
                    {sections.map((id) => (
                      <motion.div key={id} variants={itemVariants}>
                        <button
                          onClick={() => handleScrollTo(id)}
                          className={`relative px-2 py-1 text-sm transition-colors ${
                            activeId === id
                              ? 'text-indigo-600 dark:text-indigo-400'
                              : 'text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400'
                          }`}
                          onMouseEnter={() => setHoveredLink(id)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          {id.charAt(0).toUpperCase() + id.slice(1)}
                          {(hoveredLink === id || activeId === id) && (
                            <MotionSection
                              layoutId="nav-underline"
                              className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 dark:bg-indigo-400"
                              initial={false}
                              transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                            />
                          )}
                        </button>
                      </motion.div>
                    ))}

                    {/* Botón Contactar */}
                    <motion.button
                      variants={itemVariants}
                      onClick={() => setIsOpen(true)}
                      className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-500 transition-colors"
                    >
                      Contactar
                    </motion.button>

                    <motion.div variants={itemVariants}>
                      <ThemeToggle />
                    </motion.div>
                  </MotionSection>

                  {/* Botón Menú Móvil */}
                  <MotionSection
                    className="md:hidden"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <button
                      onClick={() => setMenuOpen(!menuOpen)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                      aria-label="Toggle menu"
                    >
                      {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                  </MotionSection>
                </div>
              </div>

              {/* Menú móvil animado */}
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white dark:bg-neutral-900 px-4 py-4 border-t border-gray-200 dark:border-neutral-800"
                  >
                    <div className="flex flex-col space-y-3">
                      {sections.map((id) => (
                        <button
                          key={id}
                          onClick={() => handleScrollTo(id)}
                          className={`block py-2 px-3 text-base font-medium rounded-md transition-colors ${
                            activeId === id
                              ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300'
                              : 'text-gray-900 dark:text-gray-100 hover:bg-indigo-100 dark:hover:bg-indigo-800/50 hover:text-indigo-600 dark:hover:text-indigo-300'
                          }`}
                        >
                          {id.charAt(0).toUpperCase() + id.slice(1)}
                        </button>
                      ))}

                      {/* Botón contactar móvil */}
                      <button
                        onClick={() => {
                          setIsOpen(true)
                          setMenuOpen(false)
                        }}
                        className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-500 transition-colors"
                      >
                        Contactar
                      </button>

                      <div className="pt-2 px-3">
                        <ThemeToggle />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </Disclosure>
      </MotionSection>

      {/* Modal Contacto */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-[9999]">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white dark:bg-neutral-900 rounded-lg shadow-xl max-w-2xl w-full overflow-y-auto max-h-[90vh]">
            <FormularioContactoPopup onClose={() => setIsOpen(false)} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
