import React from 'react';

export default function HeroUXUIDesarrollo() {
  return (
    <section className="bg-gradient-to-br from-sky-50 to-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            ¡Tu partner ideal para el <span className="text-blue-600">diseño UX/UI</span> y <span className="text-blue-600">desarrollo de plataformas digitales</span>!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Convertimos ideas en experiencias digitales intuitivas, funcionales y atractivas. Creamos plataformas a medida, centradas en el usuario y con visión de negocio.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all">
            Ver nuestros proyectos
          </button>
        </div>

        {/* Imagen o Ilustración */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/ux-ui-team.svg"
            alt="Diseño UX UI y Desarrollo"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
