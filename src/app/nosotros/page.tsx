'use client'

import { motion } from 'framer-motion'
import Navbar from '@/src/components/sections/Navbar'
import Footer from "@/src/components/layout/Footer"
import Image from 'next/image'
import { Rocket, Users, Target, Shield, Zap, Heart, ArrowRight, Star, Calendar } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Datos del equipo (valores principales)
const valoresPrincipales = [
  {
    name: 'Innovación',
    role: 'Creamos soluciones digitales únicas que transforman negocios.',
    icon: Rocket,
    color: 'text-blue-500'
  },
  {
    name: 'Confianza',
    role: 'Construimos relaciones sólidas y transparentes con nuestros clientes.',
    icon: Shield,
    color: 'text-green-500'
  },
  {
    name: 'Resultados',
    role: 'Nos enfocamos en generar crecimiento y retorno de inversión real.',
    icon: Target,
    color: 'text-orange-500'
  },
  {
    name: 'Colaboración',
    role: 'Trabajamos como extensiones de tu equipo para lograr objetivos comunes.',
    icon: Users,
    color: 'text-purple-500'
  }
]

// Valores adicionales con imágenes
const valoresExtra = [
  {
    title: "Tecnología de Vanguardia",
    desc: "Utilizamos las últimas herramientas digitales para asegurar que tu negocio esté siempre un paso adelante.",
    image: "/images/tecnologia-vanguardia.jpg",
    icon: Zap,
    stats: "100+"
  },
  {
    title: "Estrategia Personalizada",
    desc: "Cada cliente es único: diseñamos planes a medida que maximizan resultados.",
    image: "/images/estrategia-personalizadaa.jpg",
    icon: Target,
    stats: "50+"
  },
  {
    title: "Creatividad sin Límites",
    desc: "Nuestro equipo combina diseño y storytelling para crear experiencias memorables.",
    image: "/images/creatividad-sin-limites.jpg",
    icon: Heart,
    stats: "200+"
  }
]

// Estadísticas de la empresa
const stats = [
  { number: '20+', label: 'Proyectos Completados' },
  { number: '15+', label: 'Clientes Satisfechos' },
  { number: '3+', label: 'Años de Experiencia' },
  { number: '12+', label: 'Expertos en Equipo' }
]

// Testimonios
const testimonios = [
  {
    name: "María González",
    company: "EcoFood StartUp",
    text: "Stratik transformó completamente nuestra presencia digital. Increíble trabajo y dedicación.",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    company: "TechSolutions Inc.",
    text: "Profesionales excepcionales. Entregaron más de lo esperado en tiempo récord.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    company: "Fashion Boutique",
    text: "Su enfoque estratégico y creativo elevó nuestra marca a otro nivel.",
    rating: 4
  }
]

export default function Nosotros() {
  const router = useRouter()
  const legalPages = {
    privacyPolicy: "/politica-privacidad",
    termsOfService: "/terminos-servicio"
  };

  const navigateToContact = () => {
    router.push('/#contacto')
  }

  // Función para renderizar estrellas de rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
      />
    ))
  }

  return (
    <>
      <Navbar />

      {/* Hero Section con imagen de fondo */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Conoce <span className="text-blue-300">Nuestra Historia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Somos el equipo detrás de las transformaciones digitales más exitosas
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={navigateToContact}
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 group"
            >
              Trabajar con nosotros <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => router.push('/#portfolio')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Ver portafolio
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sección de introducción */}
      <section className="bg-white dark:bg-neutral-900 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Quiénes <span className="text-blue-600">Somos</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                En <span className="font-semibold text-blue-600">Stratik</span>, combinamos creatividad, 
                tecnología y estrategia para crear soluciones digitales que realmente importan. 
                Nacimos con la visión de democratizar el acceso a herramientas digitales de calidad 
                para empresas de todos los tamaños.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Desde nuestra fundación en 2020, hemos tenido el privilegio de trabajar con 
                startups ambiciosas y empresas establecidas, ayudándolas a alcanzar sus 
                objetivos digitales y superar expectativas.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-80 w-full rounded-2xl shadow-xl"></div>
              <div className="absolute -bottom-6 -right-6 bg-gray-800 h-64 w-64 rounded-2xl shadow-xl">
                <div className="h-full w-full bg-gradient-to-tr from-orange-500 to-pink-600 rounded-2xl opacity-90"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de estadísticas */}
      <section className="bg-gray-50 dark:bg-neutral-800 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16"
          >
            Números que <span className="text-blue-600">Hablan</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de valores principales */}
      <section className="bg-white dark:bg-neutral-900 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16"
          >
            Nuestros <span className="text-blue-600">Pilares</span>
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {valoresPrincipales.map((valor, index) => {
              const IconComponent = valor.icon
              return (
                <motion.div
                  key={valor.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-neutral-800 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-neutral-900 mb-6 group-hover:scale-110 transition-transform ${valor.color}`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {valor.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{valor.role}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sección de valores en acción */}
      <section className="bg-gray-50 dark:bg-neutral-800 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16"
          >
            Valores en <span className="text-blue-600">Acción</span>
          </motion.h2>

          <div className="grid gap-12 md:grid-cols-3">
            {valoresExtra.map((valor, index) => {
              const IconComponent = valor.icon
              return (
                <motion.div
                  key={valor.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-48 w-full bg-gradient-to-br from-blue-500 to-purple-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent size={48} className="text-white" />
                    </div>
                    <div className="absolute top-4 right-4 bg-white dark:bg-blue-600 text-blue-600 dark:text-white px-3 py-1 rounded-full font-bold text-sm">
                      {valor.stats}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {valor.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{valor.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sección de testimonios */}
      <section className="bg-white dark:bg-neutral-900 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16"
          >
            Lo que dicen <span className="text-blue-600">nuestros clientes</span>
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonios.map((testimonio, index) => (
              <motion.div
                key={testimonio.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-neutral-800 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex mb-4">
                  {renderStars(testimonio.rating)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonio.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonio.name}</div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">{testimonio.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            ¿Listo para comenzar tu proyecto?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8"
          >
            Nos encantaría conocer tus ideas y ayudarte a transformarlas en una solución digital exitosa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={navigateToContact}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 mx-auto group"
            >
              <Calendar size={20} />
              Agendar una consulta
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>


      {/* Sección con imágenes llamativas */}
      <section className="bg-white dark:bg-neutral-950 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16"
          >
            Nuestros Valores en Acción
          </motion.h2>

          <div className="grid gap-12 md:grid-cols-3">
            {valoresExtra.map((valor, i) => (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={valor.image}
                    alt={valor.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gray-50 dark:bg-neutral-900">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {valor.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{valor.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer legalPages={legalPages} />
    </>
  )
}