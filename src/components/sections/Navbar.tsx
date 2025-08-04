'use client'

import { DisclosureButton, DisclosurePanel, Disclosure } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '../ThemeToggle'
import useScrollSpy from '../../hooks/useScrollSpy'
import ContactModal from '../ContactModal'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const sections = ['hero', 'servicios', 'portfolio', 'contacto']

export default function Navbar() {
  const activeId = useScrollSpy(sections, 80)
  const navRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Parallax effect for navbar
  const handleMouseMove = (e: MouseEvent) => {
    const bounds = navRef.current?.getBoundingClientRect()
    if (!bounds) return

    const x = (e.clientX - bounds.left - bounds.width / 2) / 25
    const y = (e.clientY - bounds.top - bounds.height / 2) / 25
    setMousePos({ x, y })
  }

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    nav.addEventListener('mousemove', handleMouseMove)
    return () => nav.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      ref={navRef}
      className="fixed w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-md transition-all"
    >
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                
                {/* Logo con parallax */}
                <motion.div
                  animate={{ x: mousePos.x, y: mousePos.y }}
                  transition={{ type: 'spring', stiffness: 80, damping: 20 }}
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
                </motion.div>

                {/* Desktop links con movimiento */}
                <motion.div
                  className="hidden md:flex items-center space-x-6"
                  animate={{ x: -mousePos.x / 2, y: -mousePos.y / 2 }}
                  transition={{ type: 'spring', stiffness: 70, damping: 18 }}
                >
                  {sections.map((id) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={`text-sm transition-transform duration-300 hover:scale-105 ${
                        activeId === id
                          ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  ))}
                  <Link
                    href="/configurador"
                    className="text-sm transition-colors hover:underline text-gray-700 dark:text-gray-300"
                  >
                    Configurador
                  </Link>
                  <ThemeToggle />
                  <ContactModal />
                </motion.div>

                {/* Mobile button */}
                <div className="md:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800">
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </DisclosureButton>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            <DisclosurePanel className="md:hidden bg-white/90 dark:bg-neutral-900/90 px-4 pt-4 pb-4 backdrop-blur">
              <div className="flex flex-col space-y-2">
                {sections.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`block py-2 text-sm rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800 ${
                      activeId === id
                        ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                ))}
                <Link
                  href="/configurador"
                  className="block py-2 text-sm rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300"
                >
                  Configurador
                </Link>
                <div className="pt-2">
                  <ThemeToggle />
                </div>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </motion.div>
  )
}
