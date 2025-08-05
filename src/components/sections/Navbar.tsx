'use client'

import { DisclosureButton, DisclosurePanel, Disclosure } from '@headlessui/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import ThemeToggle from '../ThemeToggle'
import useScrollSpy from '../../hooks/useScrollSpy'
import ContactModal from '../ContactModal'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion';

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

  // Efecto de scroll para cambiar estilo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Efecto de mouse parallax mejorado
  const handleMouseMove = (e: MouseEvent) => {
    const bounds = navRef.current?.getBoundingClientRect()
    if (!bounds) return

    mouseX.set(e.clientX - bounds.left)
    mouseY.set(e.clientY - bounds.top)
  }

  // Efecto de gradiente animado
  const background = useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.15), transparent 80%)`

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    nav.addEventListener('mousemove', handleMouseMove)
    return () => nav.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animación de entrada
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <MotionSection
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-neutral-900/90 shadow-lg' 
          : 'bg-white/80 dark:bg-neutral-900/80'
      } backdrop-blur-md`}
      style={{  }}
    >
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 items-center justify-between">
                
                {/* Logo con efecto de elevación */}
                <MotionSection
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10"
                >
                  <Link href="/" aria-label="Ir al inicio">
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
                  </Link>
                </MotionSection>

                {/* Desktop links con efecto de subrayado animado */}
                <MotionSection 
                  className="hidden md:flex items-center space-x-8"
                  variants={containerVariants}
                >
                  {sections.map((id) => (
                    <motion.div key={id} variants={itemVariants}>
                      <Link
                        href={`#${id}`}
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
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/configurador"
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    >
                      Configurador <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <ThemeToggle />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <ContactModal />
                  </motion.div>
                </MotionSection>

                {/* Mobile button con animación */}
                <MotionSection
                  className="md:hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <DisclosureButton 
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                    aria-label="Toggle menu"
                  >
                    {open ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </DisclosureButton>
                </MotionSection>
              </div>
            </div>

            {/* Mobile menu con animación */}
            <DisclosurePanel 
              as={MotionSection}
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: open ? 1 : 0, 
                height: open ? 'auto' : 0 
              }} 
              className="md:hidden bg-white/95 dark:bg-neutral-900/95 px-4 backdrop-blur-lg overflow-hidden"
            >
              <MotionSection
                className="flex flex-col space-y-3 py-4"
                variants={containerVariants}
              >
                {sections.map((id) => (
                  <motion.div key={id} variants={itemVariants}>
                    <Link
                      href={`#${id}`}
                      className={`block py-2 px-3 text-sm rounded-md transition-colors ${
                        activeId === id
                          ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800'
                      }`}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div variants={itemVariants}>
                  <Link
                    href="/configurador"
                    className="flex items-center py-2 px-3 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    Configurador <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </motion.div>
                
                <MotionSection 
                  variants={itemVariants}
                  className="pt-2 px-3"
                >
                  <ThemeToggle />
                </MotionSection>
              </MotionSection>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </MotionSection>
  )
}