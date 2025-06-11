const services = [
  { title: "Diseño Web", desc: "Sitios rápidos, responsivos y atractivos." },
  { title: "SEO Profesional", desc: "Optimización técnica y de contenido." },
  { title: "E-commerce", desc: "Tiendas en línea personalizadas y funcionales." },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow  hover:shadow-[0_0_10px_1px_#00fff7] transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}