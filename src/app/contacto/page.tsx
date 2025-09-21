"use client"

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Navbar from '@/src/components/sections/Navbar'
import Footer from "@/src/components/layout/Footer"
import { useRouter } from 'next/navigation'

export default function ContactSection() {
  const router = useRouter()
  const legalPages = {
    privacyPolicy: "/politica-privacidad",
    termsOfService: "/terminos-servicio"
  };

  const [isCopied, setIsCopied] = useState(false)
  const [copiedItem, setCopiedItem] = useState("")
  
  const socials = [
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61579306967777",
      icon: Facebook,
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:from-blue-600 hover:to-blue-800"
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/stratiksoftware/",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/stratik-software-333156380/",
      icon: Linkedin,
      color: "from-sky-600 to-blue-800",
      hoverColor: "hover:from-sky-700 hover:to-blue-900"
    },
    {
      id: "twitter",
      label: "Twitter/X",
      href: "https://twitter.com/stratik",
      icon: Twitter,
      color: "from-gray-700 to-black",
      hoverColor: "hover:from-gray-800 hover:to-gray-900"
    },
  ]

  const copyToClipboard = (text: string, item: string) => {
    navigator.clipboard.writeText(text)
    setIsCopied(true)
    setCopiedItem(item)
    setTimeout(() => setIsCopied(false), 2000)
  }

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <>

      <Navbar />
    
      <section id="contacto" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <motion.div 
            className="absolute top-10% left-5% w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-10% right-5% w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              animate="float"
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6"
            >
              <MessageCircle className="h-10 w-10 text-white" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              Conectemos
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Estamos listos para llevar tu proyecto al siguiente nivel. 
              <span className="block mt-2 font-medium text-blue-600 dark:text-blue-400">Contáctanos y hagamos realidad tus ideas.</span>
            </p>
          </motion.div>

          {/* Redes Sociales en Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center justify-center rounded-2xl p-8 text-white transition-all duration-500 shadow-xl bg-gradient-to-r ${social.color} ${social.hoverColor} group overflow-hidden relative`}
                >
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="bg-white/20 p-4 rounded-full mb-5 transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10" />
                  </div>
                  <span className="text-xl font-bold mb-1">{social.label}</span>
                  <span className="text-sm opacity-90">Síguenos</span>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Información de contacto rápida */}
          <motion.div 
            className="grid md:grid-cols-3 gap-10 text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 dark:border-neutral-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-bl-full"></div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-2xl mb-6">
                <Mail className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Correo</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">stratiksoftware@gmail.com</p>
              <div className="flex justify-center gap-3">
                <motion.a
                  href="mailto:stratiksoftware@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium shadow-lg hover:bg-blue-700 transition-colors"
                >
                  Enviar mensaje
                </motion.a>
                <motion.button
                  onClick={() => copyToClipboard("stratiksoftware@gmail.com", "email")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors"
                >
                  Copiar
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-100 dark:border-neutral-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-bl-full"></div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-2xl mb-6">
                <Phone className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Teléfono</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">+52 55 7563 0576</p>
              <div className="flex justify-center gap-3">
                <motion.a
                  href="tel:+525575630576"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-green-600 text-white rounded-xl font-medium shadow-lg hover:bg-green-700 transition-colors"
                >
                  Llamar ahora
                </motion.a>
                <motion.button
                  onClick={() => copyToClipboard("+52 55 7563 0576", "teléfono")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors"
                >
                  Copiar
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-100 dark:border-neutral-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 rounded-bl-full"></div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 dark:bg-amber-900/20 rounded-2xl mb-6">
                <MapPin className="h-10 w-10 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Ubicación</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">Cancún, México</p>
              <div className="flex justify-center gap-3">
                <motion.a
                  href="https://maps.google.com/?q=Cancún,México"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-amber-600 text-white rounded-xl font-medium shadow-lg hover:bg-amber-700 transition-colors"
                >
                  Ver en mapa
                </motion.a>
                <motion.button
                  onClick={() => copyToClipboard("Cancún, México", "ubicación")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors"
                >
                  Copiar
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA adicional */}
          <motion.div 
            className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-300 rounded-full filter blur-3xl"></div>
            </div>
            
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8"
              animate="float"
            >
              <Calendar className="h-12 w-12 text-white" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Agenda una consulta gratuita con nuestro equipo y descubre cómo podemos ayudar 
              a hacer crecer tu negocio con soluciones digitales innovadoras.
            </p>
            
            <motion.a
              href="#"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-50 transition-colors"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Agendar consulta gratuita
            </motion.a>
            
            <p className="text-blue-200 mt-6 text-sm">
              Respuesta en menos de 24 horas
            </p>
          </motion.div>
        </div>

        {/* Notificación de copiado */}
        <AnimatePresence>
          {isCopied && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 50, x: "-50%" }}
              className="fixed left-1/2 bottom-10 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{copiedItem} copiado al portapapeles</span>
            </motion.div>
          )}
        </AnimatePresence>
      </section>


      <Footer legalPages={legalPages} />
    </>
  )
}

// Componente AnimatePresence para las animaciones de entrada/salida
const AnimatePresence = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}