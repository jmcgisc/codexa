// src/components/sections/Hero.tsx
export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen">
      {/* Video de fondo de YouTube */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          className="w-full h-full object-cover" 
          src="https://www.youtube.com/embed/sA4FXGNdTHw?autoplay=1&loop=1&mute=1&playlist=sA4FXGNdTHw"
          allow="autoplay; encrypted-media" 
          allowFullScreen 
        />
      </div>

      {/* Fondo oscuro semitransparente con opacidad mejorada */}
      <div className="absolute inset-0 bg-black/80 z-10"></div> {/* Fondo más oscuro */}

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center text-white">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 text-yellow-500">
          Diseñamos tu futuro digital
        </h1>
        <p className="text-xl sm:text-2xl mb-6 text-white">
          Creando experiencias web únicas para tu marca
        </p>
        <a href="#services" className="bg-indigo-600 text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-indigo-700 transition">
          Explorar nuestros servicios
        </a>
      </div>
    </section>
  )
}
