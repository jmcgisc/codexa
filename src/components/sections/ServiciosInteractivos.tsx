"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code, Globe, ShoppingCart, TrendingUp, Edit, LayoutDashboard, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import type { HTMLMotionProps } from 'framer-motion';

  type Service = {
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  };

  const MotionSection: React.FC<
    HTMLMotionProps<'section'> & React.HTMLAttributes<HTMLElement>
  > = motion.section;

const services: Service[] = [
  {
    label: "Desarrollo de apps",
    description: "Transformamos ideas en productos tecnológicos que escalan.<br><br>Nuestro equipo de desarrollo construye aplicaciones móviles y web modernas, optimizadas y altamente funcionales con tecnologías como React Native, Flutter, Progressive Web Apps (PWA) y entornos serverless.<br><br>Nos encargamos de todo: desde la arquitectura del backend hasta el diseño del frontend, pasando por la gestión de bases de datos, APIs, seguridad, autenticación y despliegue en tiendas. Ya sea que estés lanzando tu startup, digitalizando procesos internos o creando una app de consumo masivo, en Stratik convertimos tu visión en código.",
    icon: Code,
  },
  {
    label: "Desarrollo web",
    description: "Tu sitio web es tu carta de presentación digital. En Stratik desarrollamos páginas ultra rápidas, con diseño moderno, SEO optimizado y una estructura pensada para escalar.<br><br>Creamos desde sitios informativos, landing pages, blogs, portfolios, hasta sistemas más robustos como marketplaces, plataformas educativas, CRMs y paneles de administración.<br><br>Trabajamos con tecnologías como Next.js, Astro, Vite, TailwindCSS y Supabase, garantizando compatibilidad, rendimiento y seguridad.<br><br>Todo lo que hacemos está pensado en resultados medibles y una experiencia de usuario sobresaliente.",
    icon: Globe,
  },
  {
    label: "Diseño UX/UI",
    description: "En Stratik creemos que un buen diseño no solo se ve bien, se siente bien.<br><br>Nuestra metodología de UX/UI se basa en comprender profundamente a tus usuarios, sus necesidades, frustraciones y motivaciones.<br><br>A través de investigaciones, entrevistas y pruebas reales, diseñamos interfaces que guían de forma natural y eficiente a tus usuarios hacia la conversión.<br><br>Desarrollamos prototipos interactivos, mapas de navegación y sistemas de diseño escalables, adaptados a cada dispositivo y contexto.<br><br>Ya sea una app compleja, un dashboard interno o una landing de alto impacto, creamos experiencias digitales funcionales, atractivas y centradas en el ser humano.",
    icon: LayoutDashboard,
  },
  {
    label: "Ecommerce",
    description: "En un mercado saturado, tu tienda online necesita destacar y convertir.<br><br>Diseñamos y desarrollamos soluciones eCommerce enfocadas en la experiencia del usuario y el crecimiento sostenido.<br><br>Integramos pasarelas de pago, métodos de envío dinámicos, administración de productos, automatizaciones de marketing y análisis de datos para que tengas control total del negocio.<br><br>Ya sea con plataformas como Shopify, WooCommerce, Prestashop o soluciones totalmente personalizadas, creamos tiendas listas para vender y escalar.",
    icon: ShoppingCart,
  },
  {
    label: "Optimización de Conversión",
    description: "Aumentar tus conversiones no es magia, es ciencia de datos y diseño estratégico.En Stratik analizamos el comportamiento de tus usuarios, identificamos cuellos de botella y oportunidades de mejora en tu embudo digital.<br><br>Usamos herramientas como Heatmaps, recordings, A/B testing, experimentación controlada y embudos de conversión para iterar mejoras constantes.<br><br>El resultado: más leads, más ventas, más interacciones. Todo sin gastar más en tráfico. Solo optimizando lo que ya tienes.",
    icon: TrendingUp,
  },
  {
    label: "Plantillas web configurables",
    description: "Imagina poder actualizar tu web sin depender de un desarrollador.En Stratik hacemos eso realidad.<br><br>Diseñamos e implementamos sitios con paneles de administración amigables que te permiten editar textos, imágenes, secciones, productos o publicaciones de forma simple y rápida.<br><br>Usamos soluciones flexibles como Sanity, WordPress Headless, Netlify CMS o paneles hechos a medida para darte autonomía, escalabilidad y total control de tu contenido.",
    icon: Edit,
  },
];

export default function ServicesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ActiveIcon = services[activeIndex].icon;

  return (
    <section className="w-full max-w-6xl mx-auto py-8 md:py-24 px-4 font-sans">
      {/* Versión móvil */}
      <div className="md:hidden">
        {/* Selector de servicios */}
        <div className="mb-6 relative">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-between w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <ActiveIcon className="w-5 h-5 text-primary" />
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {services[activeIndex].label}
              </span>
            </div>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <MotionSection
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute z-10 w-full mt-1 overflow-hidden"
              >
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-1">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveIndex(index);
                          setIsMobileMenuOpen(false);
                        }}
                        className={cn(
                          "flex items-center gap-3 w-full px-4 py-3 rounded-md text-left",
                          index === activeIndex
                            ? "bg-primary/10 text-primary"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{service.label}</span>
                      </button>
                    );
                  })}
                </div>
              </MotionSection>
            )}
          </AnimatePresence>
        </div>

        {/* Contenido del servicio seleccionado */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <ActiveIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {services[activeIndex].label}
            </h3>
          </div>
          <div 
            className="text-gray-600 dark:text-gray-400 space-y-4"
            dangerouslySetInnerHTML={{ __html: services[activeIndex].description }}
          />
        </div>
      </div>

      {/* Versión desktop */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {/* Menú lateral */}
        <div className="flex flex-col space-y-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex items-center space-x-3 text-left px-4 py-3 rounded-lg transition-colors duration-200",
                  index === activeIndex
                    ? "bg-primary/10 text-primary font-semibold border border-primary/20"
                    : "hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-600 dark:text-gray-400"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{service.label}</span>
              </button>
            );
          })}
        </div>

        {/* Contenido del servicio seleccionado */}
        <div className="col-span-2">
          <AnimatePresence mode="wait">
            <MotionSection
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <ActiveIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {services[activeIndex].label}
                </h3>
              </div>
              <div
                className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: services[activeIndex].description }}
              />
            </MotionSection>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}