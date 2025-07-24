import React from "react";
import { Code, Bot, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button"; 

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const selectedService = [
  {
    title: "Diseño Web & SEO Profesional",
    desc: "Creamos sitios visualmente impactantes, rápidos y pensados para posicionarte en los primeros resultados de Google.",
    icon: <Code className="h-8 w-8 text-cyan-500" />,
    details: [
      "Diseño web personalizado y adaptable (responsive)",
      "Tecnologías modernas (Next.js, React, Tailwind CSS, etc.)",
      "Optimización de velocidad y rendimiento",
      "Integración de CMS (WordPress, Strapi, Sanity)",
      "Integración  Analytics, Search Console, y mapas de calor",
      "Implementación de SEO técnico y on-page + contenido estratégico",
      "Estrategias de contenido, marketing digital, métricas",
    ],
  },
  {
    title: "Chatbots Inteligentes y Asistentes Virtuales",
    desc: "Conecta con tus usuarios 24/7 con una experiencia conversacional moderna.",
    icon: <Bot className="h-8 w-8 text-purple-500" />,details: [
      "Creación de chatbots con IA generativa (GPT)",
      "Entrenamiento con tus documentos, FAQs y base de conocimientos",
      "Integración con WhatsApp, Telegram y web",
      "Automatización de respuestas frecuentes y formularios",
      "Captura de leads y conexión con bases de datos",
      "Análisis de conversaciones y métricas",
      "Soporte multicanal y escalabilidad",
      "Personalidad de marca e idioma personalizado",
    ],
  },
  {
    title: "Seguridad y LegalTech",
    desc: "Convierte tus procesos legales en experiencias digitales seguras, eficientes y trazables.",
    icon: <ShieldCheck className="h-8 w-8 text-emerald-500" />,details: [
      "Generación y firma digital de contratos y documentos (PDF, audio)",
      "Validación con timestamp y blockchain",  
      "Versionado legal con control de auditoría",
      "Integración con plataformas de pago y notificaciones legales",
      "Aseguramiento de datos sensibles (KYC, políticas, identidades)",
      "Cumplimiento normativo (GDPR, LOPD, eIDAS)",
    ],
  },
];
export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50 text-center">
      <h2 className="text-4xl font-bold mb-16 text-gray-900">Servicios Destacados</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {selectedService.map((service, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl border border-gray-100 hover:border-cyan-400 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
          >
            {/* Efecto de brillo al hover */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/0 via-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
            
            <div>
              <div className="flex justify-center items-center mb-5">
                <div className="bg-cyan-50 p-4 rounded-full group-hover:scale-110 transition-transform duration-300 group-hover:rotate-[15deg]">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
            <div className="mt-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full group-hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-300 hover:shadow-[0_5px_20px_-5px_rgba(0,0,0,0.1)] relative overflow-hidden">
                    <span className="relative z-10">Saber más</span>
                    {/* Efecto de onda al hover */}
                    <span className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-10 group-hover:animate-[pulse_1.5s_ease-in-out_infinite] rounded-md"></span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl rounded-2xl p-0 overflow-hidden border-0 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] animate-[fadeIn_0.3s_ease-out]">
                  {/* Efecto de partículas flotantes */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(10)].map((_, i) => (
                      <div 
                        key={i}
                        className={`absolute rounded-full opacity-10 ${
                          i % 3 === 0 ? 'bg-cyan-500' : 
                          i % 3 === 1 ? 'bg-purple-500' : 
                          'bg-emerald-500'
                        }`}
                        style={{
                          width: `${Math.random() * 10 + 5}px`,
                          height: `${Math.random() * 10 + 5}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                          animationDelay: `${Math.random() * 5}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="flex flex-col md:flex-row relative z-10">
                    {/* Sección izquierda con efecto de gradiente animado */}
                    <div className={`w-full md:w-1/3 p-8 flex flex-col items-center justify-center relative overflow-hidden ${
                      i === 0 ? 'bg-cyan-100' : 
                      i === 1 ? 'bg-purple-100' : 
                      'bg-emerald-100'
                    }`}>
                      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                      <div className="bg-white p-5 rounded-full shadow-md mb-4 transform transition-transform duration-500 hover:scale-110 hover:rotate-12">
                        {React.cloneElement(service.icon, { className: "h-10 w-10" })}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 text-center relative">
                        {service.title}
                        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-current opacity-30"></span>
                      </h3>
                    </div>
                    
                    {/* Sección derecha con contenido */}
                    <div className="w-full md:w-2/3 p-8 bg-white/90 backdrop-blur-sm">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-left text-gray-800 mb-2 animate-[slideIn_0.4s_ease-out]">
                          Detalles del servicio
                        </DialogTitle>
                        <DialogDescription className="text-left text-gray-600 animate-[slideIn_0.5s_ease-out]">
                          {service.desc}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="mt-6 space-y-4">
                        <div className="animate-[slideIn_0.6s_ease-out]">
                          <h4 className="text-lg font-semibold text-gray-700 flex items-center">
                            <span className="flex items-center justify-center w-6 h-6 mr-2 bg-cyan-100 rounded-full text-cyan-600">
                              ✓
                            </span>
                            Qué incluye:
                          </h4>
                          <ul className="mt-2 space-y-2 pl-2">
                            {service.details.map((detail, i) => (
                              <li 
                                key={i} 
                                className="flex items-start animate-[fadeIn_0.${0.7 + i * 0.1}s_ease-out]"
                              >
                                <span className="flex-shrink-0 mt-1 mr-2 text-cyan-500 animate-[bounceIn_0.5s_ease-out]">
                                  •
                                </span>
                                <span className="text-gray-600">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-gray-100 animate-[slideIn_0.8s_ease-out]">
                          <h4 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                            <span className="w-4 h-4 mr-2 bg-cyan-500 rounded-full animate-pulse"></span>
                            ¿Te interesa este servicio?
                          </h4>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button className="flex-1 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5">
                              Solicitar ahora
                            </Button>
                            <Button variant="outline" className="flex-1 border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:shadow-md">
                              Descargar PDF
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>

      {/* Agrega esto en tu archivo global CSS o como estilo JSX */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0); }
          60% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.05); opacity: 0.15; }
          100% { transform: scale(1); opacity: 0.1; }
        }
      `}</style>
    </section>
  );
}