'use client'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & descripción */}
        <div>
          <h2 className="text-2xl font-bold mb-2">CODEXA</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Creamos experiencias web memorables. Desde diseño hasta ecommerce.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Explora</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="#portafolio" className="hover:underline">Portafolio</a></li>
            <li><a href="#testimonios" className="hover:underline">Testimonios</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto rápido */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contacto</h3>
          <ul className="text-sm space-y-1">
            <li>📧 hola@codexa.com</li>
            <li>📞 +52 55 75 63 05 76</li>
            <li>📍 CDMX, Puebla, Madrid</li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-600">🌐</a>
            <a href="#" className="hover:text-indigo-600">🐦</a>
            <a href="#" className="hover:text-indigo-600">📸</a>
            <a href="#" className="hover:text-indigo-600">💼</a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-700 mt-10 pt-6 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Stratik. Todos los derechos reservados.
      </div>
    </footer>
  )
}
