import React from 'react';
import TarjetaProducto from '../TarjetaProducto';
import NeonBorderCard from "../NeonBorderCard"

const productos = [
  {
    nombre: 'Material de Laboratorio',
    descripcion: 'Distribuidores de equipo y material de laboratorio diseñados para satisfacer las necesidades de la ciencia y la salud en México y Latinoamérica.',
    imagen: '/imagenes/material-laboratorio.jpg',
    enlace: '/material-laboratorio',
  },
  {
    nombre: 'Dispositivos Médicos',
    descripcion: 'Dispositivos médicos seguros y eficientes para el bienestar de tus pacientes. Explora soluciones innovadoras para el cuidado de la salud.',
    imagen: '/imagenes/dispositivos-medicos.jpg',
    enlace: '/dispositivos-medicos',
  },
  {
    nombre: 'Medicamentos',
    descripcion: 'Variedad de medicamentos de calidad que cumplen con los más altos estándares, diseñados para satisfacer las necesidades de la comunidad médica.',
    imagen: '/imagenes/medicamentos.jpg',
    enlace: '/medicamentos',
  },
  {
    nombre: 'Trasplante de Órganos',
    descripcion: 'Soluciones integrales para mejorar la vida de los pacientes que esperan un nuevo comienzo mediante trasplantes de órganos.',
    imagen: '/imagenes/trasplante-organos.jpg',
    enlace: '/trasplante-organos',
  },
];

export default function NuestrosProductos() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Nuestros Productos
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Soluciones innovadoras para cubrir todas tus necesidades. Explora nuestros productos líderes en la industria.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productos.map((producto, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {producto.nombre}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {producto.descripcion}
                </p>
                <a
                  href={producto.enlace}
                  className="inline-block px-4 py-2 border text-sm font-medium rounded-md text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  Ver más
                </a>
              </div>
            </div>
          ))}
        </div>
        <section>

        </section>

        <div className=" rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] animate-spin-gradient blur-sm brightness-125 z-0">


<NeonBorderCard
    titulo="Producto 9"
    descripcion="Un producto innovador con tecnología de punta."
    imagen="/images/producto1.jpg"
  />
</div>
    <section className="py-16 px-6 bg-gradient-to-br from-black via-neutral-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Nuestros Productos</h2>
        <p className="text-gray-400">Conoce nuestra línea especializada de suplementos y soluciones de bienestar.</p>
      
      
      </div>

      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8
      ">
        <TarjetaProducto
          titulo="Suplemento A"
          descripcion="Energía natural para tu día a día."
          imagen="/productos/producto1.jpg"
        />
        <TarjetaProducto
          titulo="Suplemento B"
          descripcion="Defensas fuertes para cada temporada."
          imagen="/productos/producto2.jpg"
        />
        <TarjetaProducto
          titulo="Suplemento C"
          descripcion="Rendimiento físico y mental óptimo."
          imagen="/productos/producto3.jpg"
        />

      <div className="relative w-full max-w-sm rounded-xl overflow-hidden group">
        {/* Border animado */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,cyan,blue,magenta,cyan)] animate-spin-slow blur-sm opacity-60 group-hover:opacity-100 transition duration-500 rounded-xl"></div>

        {/* Contenido con fondo y padding para el borde */}
        <div className="relative z-10 bg-white dark:bg-neutral-900 rounded-xl p-5">
          <img src="/img/producto.jpg" alt="Producto" className="rounded-md mb-4" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Nombre del Producto</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Descripción breve del producto</p>
        </div>
      </div>

    <NeonBorderCard
        titulo="Producto 1"
        descripcion="Un producto innovador con tecnología de punta."
        imagen="/images/producto1.jpg"
      />
      </div>
          
    </section>

    <section> 
    
     </section>



      </div>
    </section>
  );
}
