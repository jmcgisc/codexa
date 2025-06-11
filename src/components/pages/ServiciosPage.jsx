import { Card, CardContent } from "@/components/ui/card";

const servicios = [
  {
    categoria: "Diseño y Desarrollo Web",
    items: [
      "Diseño web responsive (corporativos, landing pages, portafolios)",
      "Tiendas online con Shopify, WooCommerce o desarrollo a medida",
      "Webs autoadministrables con panel personalizado (sin CMS tradicional)",
      "Desarrollo web con efectos modernos y microinteracciones",
      "Integraciones personalizadas (pasarelas de pago, CRMs, APIs)",
    ],
  },
  {
    categoria: "Marketing Digital",
    items: [
      "Estrategias de posicionamiento SEO (on-page y off-page)",
      "Campañas de Google Ads y Facebook/Instagram Ads",
      "Embudos de conversión personalizados (landing + campaña)",
      "Email marketing automatizado y segmentado",
      "Análisis de métricas y reportes mensuales",
    ],
  },
  {
    categoria: "Identidad e Imagen de Marca",
    items: [
      "Naming y conceptualización de marca",
      "Diseño de logotipo y manual de identidad visual",
      "Paleta de colores, tipografías y estilo gráfico unificado",
      "Branding emocional y storytelling de marca",
    ],
  },
  {
    categoria: "Contenido y Redes Sociales",
    items: [
      "Gestión de contenido para Instagram, Facebook, TikTok y LinkedIn",
      "Creación de calendario editorial mensual",
      "Diseño de carruseles, reels y videos cortos para redes",
      "Copywriting enfocado en engagement y conversión",
      "Community management y atención a clientes vía DM",
    ],
  },
  {
    categoria: "Consultoría y Optimización",
    items: [
      "Consultoría UX/UI para mejorar conversión y experiencia",
      "Optimización de velocidad, accesibilidad y usabilidad",
      "Auditoría web completa (SEO, rendimiento, UX)",
      "Mantenimiento técnico y soporte continuo",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-8 md:px-20">
      <h2 className="text-3xl< md:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicios.map((servicio, idx) => (
          <Card key={idx} className="rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 hover:shadow-[0_0_12px_1px_#00fff7] transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                {servicio.categoria}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {servicio.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
