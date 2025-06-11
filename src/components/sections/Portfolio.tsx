const projects = [
  { name: "Tienda de ropa", image: "/images/ropa.png" },
  { name: "Restaurante local", image: "/images/restaurante.png" },
  { name: "Agencia creativa", image: "/images/agencia.png" },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">Portafolio</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="group">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={p.image} alt={p.name} className="w-full h-60 object-cover group-hover:scale-105 transition-transform" />
            </div>
            <p className="mt-4 text-gray-700 font-medium">{p.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}