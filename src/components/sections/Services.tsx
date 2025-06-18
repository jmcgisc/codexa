import { Code, Bot, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button"; // Asegúrate de tener este botón de shadcn/ui

const services = [
  {
    title: "Diseño Web & SEO Profesional",
    desc: "Sitios rápidos, responsivos y atractivos. Optimización técnica y de contenido.",
    icon: <Code className="h-8 w-8 text-cyan-500" />,
  },
  {
    title: "Chatbots Inteligentes y Asistentes Virtuales",
    desc: "Integración de IA. Conexión con CRM, APIs, bases de datos.",
    icon: <Bot className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Seguridad y LegalTech",
    desc: "Portales legales con control de versiones. Timestamping y validación blockchain.",
    icon: <ShieldCheck className="h-8 w-8 text-emerald-500" />,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50 text-center">
      <h2 className="text-4xl font-bold mb-16 text-gray-900">Servicios Destacados</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl border border-gray-100 hover:border-cyan-400 transition duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-center items-center mb-5">
                <div className="bg-cyan-50 p-4 rounded-full group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full group-hover:border-cyan-500">
                Saber más
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
