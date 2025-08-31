'use client'

import { motion } from "framer-motion"
import { BookOpen, FileText, Wrench, Video } from "lucide-react"

export default function Recursos() {
  const categorias = [
    { id: 1, label: "Guías & Ebooks", icon: BookOpen, desc: "Aprende estrategias y técnicas paso a paso." },
    { id: 2, label: "Plantillas", icon: FileText, desc: "Descarga formatos editables listos para usar." },
    { id: 3, label: "Herramientas", icon: Wrench, desc: "Accede a utilidades prácticas para tu negocio." },
    { id: 4, label: "Webinars & Videos", icon: Video, desc: "Capacitación en vivo y grabada con expertos." },
  ]

  const recursos = [
    { id: 1, title: "Guía de SEO Local 2025", desc: "Estrategias para posicionar tu negocio en búsquedas cercanas.", cta: "Descargar Gratis" },
    { id: 2, title: "Plantilla Calendario de Contenido", desc: "Organiza y planifica tus publicaciones de forma efectiva.", cta: "Descargar XLS" },
    { id: 3, title: "Simulador de ROI SEO", desc: "Calcula el retorno de inversión de tus campañas.", cta: "Probar Ahora" },
    { id: 4, title: "Webinar: Ventas con IA", desc: "Aprende cómo aplicar inteligencia artificial en tu negocio.", cta: "Ver Gratis" },
  ]

  return (
    <main className="bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          📚 Recursos Stratik
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-lg max-w-2xl mx-auto"
        >
          Todo lo que necesitas para impulsar tu negocio digital: guías, plantillas, herramientas y más.
        </motion.p>
      </section>

      {/* Categorías */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categorias.map((cat, i) => {
          const Icon = cat.icon
          return (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-neutral-900 shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/40 mb-4">
                <Icon size={32} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{cat.label}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{cat.desc}</p>
            </motion.div>
          )
        })}
      </section>

      {/* Recursos destacados */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">✨ Recursos Destacados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {recursos.map((res, i) => (
            <motion.div 
              key={res.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{res.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{res.desc}</p>
              <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 transition">
                {res.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bloque de suscripción */}
      <section className="py-16 bg-gray-100 dark:bg-neutral-900 text-center">
        <h2 className="text-2xl font-bold mb-4">📩 Suscríbete y recibe recursos exclusivos cada mes</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Únete a más de 500 emprendedores que ya reciben tips y materiales gratuitos.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 w-full dark:bg-neutral-800 dark:text-white"
          />
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 transition">
            Suscribirme
          </button>
        </div>
      </section>

      {/* Blog dinámico */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">📰 Últimos artículos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-neutral-900 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2">Artículo {i}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Descripción breve del artículo {i}, con insights útiles.</p>
              <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Leer más →</a>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
