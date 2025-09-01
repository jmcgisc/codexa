'use client'

import { Menu, X, ChevronDown, ArrowRight, Star, Calendar, Users, FileText, Globe, Search, Scale, Palette, BookOpen, Download, Video, Code } from 'lucide-react'
import ThemeToggle from '../ThemeToggle'
import useScrollSpy from '../../hooks/useScrollSpy'
import Image from 'next/image'
import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

// Iconos para los servicios
const serviceIcons = {
  web: Globe,
  seo: Search,
  legal: Scale,
  design: Palette
};

// Iconos para los recursos
const resourceIcons = {
  guias: BookOpen,
  plantillas: Download,
  tutoriales: Video,
  herramientas: Code
};

const serviciosDropdown = [
  {
    id: 'web',
    label: 'Desarrollo Web',
    desc: 'Sitios modernos y rápidos con React + Next.js',
    features: ['Responsive Design', 'Optimización SEO', 'Alto Rendimiento']
  },
  {
    id: 'seo',
    label: 'SEO & Marketing',
    desc: 'Mejora tu visibilidad y atrae clientes',
    features: ['Análisis de Keywords', 'Estrategia Content', 'Link Building']
  },
  {
    id: 'legal',
    label: 'LegalTech',
    desc: 'Contratos digitales y firmas electrónicas seguras',
    features: ['Firma Electrónica', 'Documentación Segura', 'Cumplimiento Normativo']
  },
  {
    id: 'design',
    label: 'Branding & Diseño',
    desc: 'Construimos tu identidad visual con impacto',
    features: ['Identidad de Marca', 'Diseño UI/UX', 'Material Promocional']
  },
]

const recursosDropdown = [
  {
    id: 'guias',
    label: 'Guías Prácticas',
    desc: 'Manuales completos para implementar estrategias digitales',
    features: ['Guías paso a paso', 'Casos de estudio', 'Mejores prácticas']
  },
  {
    id: 'plantillas',
    label: 'Plantillas',
    desc: 'Recursos descargables para acelerar tu trabajo',
    features: ['Plantillas web', 'Documentos legales', 'Recursos de diseño']
  },
  {
    id: 'tutoriales',
    label: 'Tutoriales',
    desc: 'Videotutoriales y contenido educativo',
    features: ['Videotutoriales', 'Webinars grabados', 'Cursos rápidos']
  },
  {
    id: 'herramientas',
    label: 'Herramientas',
    desc: 'Software y utilidades para potenciar tu negocio',
    features: ['Herramientas SEO', 'Generadores de contenido', 'Software legal']
  }
]

const extraLinks = [
  { id: 'about', label: 'Nosotros', icon: Users },
  { id: 'blog', label: 'Blog', icon: FileText },
  { id: 'projects', label: 'Proyectos', icon: Star },
  { id: 'contact', label: 'Contacto', icon: Calendar },
]

export default function PremiumNavbar() {
  const router = useRouter()
  const activeId = useScrollSpy(['hero', 'servicios', 'portfolio', 'contacto'], 80)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [showServicesMenu, setShowServicesMenu] = useState(false)
  const [showResourcesMenu, setShowResourcesMenu] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [activeResource, setActiveResource] = useState(0)
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Manejar hover para servicios
  const handleServicesMouseEnter = useCallback(() => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current)
    }
    setShowResourcesMenu(false) // Cerrar menú de recursos
    setShowServicesMenu(true)
  }, [])

  const handleServicesMouseLeave = useCallback(() => {
    servicesTimeoutRef.current = setTimeout(() => {
      setShowServicesMenu(false)
    }, 300)
  }, [])

  // Manejar hover para recursos
  const handleResourcesMouseEnter = useCallback(() => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current)
    }
    setShowServicesMenu(false) // Cerrar menú de servicios
    setShowResourcesMenu(true)
  }, [])

  const handleResourcesMouseLeave = useCallback(() => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setShowResourcesMenu(false)
    }, 300)
  }, [])

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current)
      }
      if (resourcesTimeoutRef.current) {
        clearTimeout(resourcesTimeoutRef.current)
      }
    }
  }, [])

  const handleScrollTo = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setMenuOpen(false)
      setShowServicesMenu(false)
      setShowResourcesMenu(false)
    }
  }, [])

  // Función para navegar a la página Nosotros
  const navigateToAbout = useCallback(() => {
    setMenuOpen(false)
    setShowServicesMenu(false)
    setShowResourcesMenu(false)
    router.push('/nosotros')
  }, [router])

  // Función para abrir modal de contacto
  const openContactModal = useCallback(() => {
    setIsContactOpen(true)
    setMenuOpen(false)
    setShowServicesMenu(false)
    setShowResourcesMenu(false)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuOpen && window.innerWidth < 768) {
        const navElement = document.querySelector('nav')
        if (navElement && !navElement.contains(e.target as Node)) {
          setMenuOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  return (
    <>
      {/* Navbar Premium */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 dark:bg-neutral-950/95 shadow-lg border-b border-gray-200/20 backdrop-blur-xl'
            : 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => handleScrollTo('hero')}
              aria-label="Ir al inicio"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <Image 
                  src="/corporativo/stratik_logo_large.png" 
                  alt="Logo STRATIK" 
                  width={180} 
                  height={50} 
                  priority 
                  className="h-28 w-auto object-contain" 
                />
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Menú de Servicios */}
              <div 
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2.5 transition-all font-medium group relative"
                  aria-expanded={showServicesMenu}
                  aria-haspopup="true"
                >
                  <span>Servicios</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${showServicesMenu ? 'rotate-180' : ''} group-hover:translate-y-0.5`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>

              {/* Menú de Recursos */}
              <div 
                className="relative"
                onMouseEnter={handleResourcesMouseEnter}
                onMouseLeave={handleResourcesMouseLeave}
              >
                <button
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2.5 transition-all font-medium group relative"
                  aria-expanded={showResourcesMenu}
                  aria-haspopup="true"
                >
                  <span>Recursos</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${showResourcesMenu ? 'rotate-180' : ''} group-hover:translate-y-0.5`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>

              {extraLinks.map((link) => {
                const IconComponent = link.icon;
                
                // Renderizar enlace de navegación para "Nosotros"
                if (link.id === 'about') {
                  return (
                    <button
                      key={link.id}
                      onClick={navigateToAbout}
                      className="px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-all duration-300 group relative flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <IconComponent size={16} />
                      <span>{link.label}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  )
                }
                
                // Renderizar enlace normal para otros items
                return (
                  <button
                    key={link.id}
                    onClick={() => handleScrollTo(link.id)}
                    className={`px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-all duration-300 group relative flex items-center gap-2 ${
                      activeId === link.id
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    <IconComponent size={16} />
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )
              })}
              
              <div className="flex items-center space-x-3 ml-4">
                <ThemeToggle />
                <motion.button
                  onClick={openContactModal}
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Cotizar ahora</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>

            {/* Mobile toggle */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              whileTap={{ scale: 0.95 }}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-neutral-900 shadow-xl border-t border-gray-200/50 dark:border-neutral-800"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {/* Menú de Servicios móvil */}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      handleScrollTo('servicios')
                      setMenuOpen(false)
                    }}
                    className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg flex items-center justify-between font-medium group"
                  >
                    <span className="flex items-center gap-3">
                      <div className="h-6 w-6 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center">
                        <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                      </div>
                      Servicios
                    </span>
                    <ChevronDown size={16} />
                  </button>
                  
                  <div className="pl-6 mt-2 space-y-2 border-l border-gray-200 dark:border-neutral-700 ml-4">
                    {serviciosDropdown.map((item) => {
                      const ServiceIcon = serviceIcons[item.id as keyof typeof serviceIcons];
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            handleScrollTo('servicios')
                            setMenuOpen(false)
                          }}
                          className="w-full text-left px-4 py-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg flex items-center gap-3 transition-colors group"
                        >
                          {ServiceIcon && <ServiceIcon size={16} className="text-blue-500" />}
                          {item.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Menú de Recursos móvil */}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      // Navegar a recursos o abrir submenú
                      setMenuOpen(false)
                    }}
                    className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg flex items-center justify-between font-medium group"
                  >
                    <span className="flex items-center gap-3">
                      <div className="h-6 w-6 bg-green-100 dark:bg-green-900/30 rounded flex items-center justify-center">
                        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                      </div>
                      Recursos
                    </span>
                    <ChevronDown size={16} />
                  </button>
                  
                  <div className="pl-6 mt-2 space-y-2 border-l border-gray-200 dark:border-neutral-700 ml-4">
                    {recursosDropdown.map((item) => {
                      const ResourceIcon = resourceIcons[item.id as keyof typeof resourceIcons];
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            // Navegar al recurso específico
                            setMenuOpen(false)
                          }}
                          className="w-full text-left px-4 py-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg flex items-center gap-3 transition-colors group"
                        >
                          {ResourceIcon && <ResourceIcon size={16} className="text-green-500" />}
                          {item.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
                
                {extraLinks.map((link) => {
                  const IconComponent = link.icon;
                  
                  // Enlace de navegación para "Nosotros" en móvil
                  if (link.id === 'about') {
                    return (
                      <button
                        key={link.id}
                        onClick={navigateToAbout}
                        className="w-full text-left px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
                      >
                        <IconComponent size={18} />
                        {link.label}
                      </button>
                    )
                  }
                  
                  // Enlace normal para otros items en móvil
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleScrollTo(link.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-3 ${
                        activeId === link.id
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800'
                      }`}
                    >
                      <IconComponent size={18} />
                      {link.label}
                    </button>
                  )
                })}
                
                <div className="pt-4 border-t border-gray-200 dark:border-neutral-800 mt-4">
                  <div className="flex justify-center mb-4">
                    <ThemeToggle />
                  </div>
                  <motion.button
                    onClick={openContactModal}
                    className="w-full text-center px-4 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Cotizar ahora</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mega menú de Servicios */}
      <AnimatePresence>
        {showServicesMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-20 z-40 bg-white/98 dark:bg-neutral-950/98 backdrop-blur-xl border-b border-gray-200/30 dark:border-neutral-800 shadow-2xl"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
            role="dialog"
            aria-label="Menú de servicios"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="flex">
                {/* Navegación de servicios */}
                <div className="w-1/3 pr-8 border-r border-gray-100 dark:border-neutral-800">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 px-2">Nuestros Servicios</h3>
                  <div className="space-y-2">
                    {serviciosDropdown.map((service, index) => {
                      const ServiceIcon = serviceIcons[service.id as keyof typeof serviceIcons];
                      return (
                        <button
                          key={service.id}
                          onMouseEnter={() => setActiveService(index)}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                            index === activeService 
                              ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shadow-sm' 
                              : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800/50'
                          }`}
                        >
                          <div className={`h-10 w-10 rounded-lg flex items-center justify-center transition-colors ${
                            index === activeService 
                              ? 'bg-blue-100 dark:bg-blue-900/30' 
                              : 'bg-gray-100 dark:bg-neutral-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20'
                          }`}>
                            {ServiceIcon && (
                              <ServiceIcon 
                                size={20} 
                                className={`transition-colors ${
                                  index === activeService 
                                    ? 'text-blue-600' 
                                    : 'text-gray-500 group-hover:text-blue-500'
                                }`} 
                              />
                            )}
                          </div>
                          <span className="font-medium">{service.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Detalles del servicio activo */}
                <div className="w-2/3 pl-10">
                  {serviciosDropdown.map((service, index) => {
                    const ServiceIcon = serviceIcons[service.id as keyof typeof serviceIcons];
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === activeService ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`${index === activeService ? 'block' : 'hidden'}`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          {ServiceIcon && (
                            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                              <ServiceIcon size={24} className="text-blue-600 dark:text-blue-400" />
                            </div>
                          )}
                          <h4 className="text-2xl font-bold text-gray-800 dark:text-white">{service.label}</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{service.desc}</p>
                        
                        <div className="mb-8">
                          <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Características principales</h5>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <div className="h-5 w-5 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                                </div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <motion.button
                          onClick={() => {
                            handleScrollTo('servicios')
                            setShowServicesMenu(false)
                          }}
                          className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 group"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Explorar servicio</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mega menú de Recursos */}
      <AnimatePresence>
        {showResourcesMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-20 z-40 bg-white/98 dark:bg-neutral-950/98 backdrop-blur-xl border-b border-gray-200/30 dark:border-neutral-800 shadow-2xl"
            onMouseEnter={handleResourcesMouseEnter}
            onMouseLeave={handleResourcesMouseLeave}
            role="dialog"
            aria-label="Menú de recursos"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="flex">
                {/* Navegación de recursos */}
                <div className="w-1/3 pr-8 border-r border-gray-100 dark:border-neutral-800">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 px-2">Nuestros Recursos</h3>
                  <div className="space-y-2">
                    {recursosDropdown.map((resource, index) => {
                      const ResourceIcon = resourceIcons[resource.id as keyof typeof resourceIcons];
                      return (
                        <button
                          key={resource.id}
                          onMouseEnter={() => setActiveResource(index)}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                            index === activeResource 
                              ? 'bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 shadow-sm' 
                              : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800/50'
                          }`}
                        >
                          <div className={`h-10 w-10 rounded-lg flex items-center justify-center transition-colors ${
                            index === activeResource 
                              ? 'bg-green-100 dark:bg-green-900/30' 
                              : 'bg-gray-100 dark:bg-neutral-800 group-hover:bg-green-100 dark:group-hover:bg-green-900/20'
                          }`}>
                            {ResourceIcon && (
                              <ResourceIcon 
                                size={20} 
                                className={`transition-colors ${
                                  index === activeResource 
                                    ? 'text-green-600' 
                                    : 'text-gray-500 group-hover:text-green-500'
                                }`} 
                              />
                            )}
                          </div>
                          <span className="font-medium">{resource.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Detalles del recurso activo */}
                <div className="w-2/3 pl-10">
                  {recursosDropdown.map((resource, index) => {
                    const ResourceIcon = resourceIcons[resource.id as keyof typeof resourceIcons];
                    return (
                      <motion.div
                        key={resource.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === activeResource ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`${index === activeResource ? 'block' : 'hidden'}`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          {ResourceIcon && (
                            <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                              <ResourceIcon size={24} className="text-green-600 dark:text-green-400" />
                            </div>
                          )}
                          <h4 className="text-2xl font-bold text-gray-800 dark:text-white">{resource.label}</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{resource.desc}</p>
                        
                        <div className="mb-8">
                          <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Lo que encontrarás</h5>
                          <ul className="space-y-2">
                            {resource.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <div className="h-5 w-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                </div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <motion.button
                          onClick={() => {
                            // Navegar a la sección de recursos
                            setShowResourcesMenu(false)
                          }}
                          className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-teal-700 text-white hover:from-green-700 hover:to-teal-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium shadow-lg hover:shadow-green-500/30 flex items-center gap-2 group"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Explorar recursos</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de contacto simplificado */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsContactOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 h-2 w-full"></div>
                <div className="pt-6 pb-4 px-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Solicitar Cotización</h3>
                    <button
                      onClick={() => setIsContactOpen(false)}
                      className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre completo</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white transition-colors" 
                        placeholder="Tu nombre"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo electrónico</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white transition-colors" 
                        placeholder="tu@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Servicio de interés</label>
                      <select className="w-full px-4 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white transition-colors">
                        <option>Selecciona un servicio</option>
                        {serviciosDropdown.map(service => (
                          <option key={service.id}>{service.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
                      <textarea 
                        rows={3} 
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white transition-colors" 
                        placeholder="Describe tu proyecto o necesidades"
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6 pt-4 bg-gray-50 dark:bg-neutral-800/50">
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsContactOpen(false)}
                      className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors font-medium"
                    >
                      Cancelar
                    </button>
                    <motion.button
                      onClick={() => setIsContactOpen(false)}
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Enviar solicitud</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}