'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Configurador() {
  const [color, setColor] = useState('blue');
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [isOpen, setIsOpen] = useState(true);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(parseInt(e.target.value));
  };

  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
  };

  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };

  // Menú lateral
  const menuItems = [
    { name: 'General', link: '/config/general' },
    { name: 'Estilo', link: '/config/estilo' },
    { name: 'Colores', link: '/config/colores' },
    { name: 'Fuentes', link: '/config/fuentes' },
    { name: 'Imagen de fondo', link: '/config/fondo' },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar de configuración */}
      <div className={`flex flex-col items-center w-full space-y-6 p-6 bg-neutral-900 text-white transition-all ${isOpen ? 'lg:w-64' : 'lg:w-20'}`}>
        {/* Toggle Sidebar Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white transition-colors hover:text-indigo-500"
        >
          {isOpen ? (
            <ChevronLeft className="h-6 w-6" />
          ) : (
            <ChevronRight className="h-6 w-6" />
          )}
        </button>

        {/* Menu Items */}
        <div className="space-y-4">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.link}>
              <span
                className={`block text-sm transition-colors duration-200 hover:text-indigo-500 ${isOpen ? '' : 'text-center'}`}
              >
                {isOpen ? item.name : item.name.charAt(0)}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Contenido principal (derecha) */}
      <div className="flex-1 p-6 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Configuraciones del sitio</h2>

        {/* Sección General */}
        <div className="mb-6">
          <label htmlFor="color" className="text-lg font-medium">Color de texto:</label>
          <input
            type="color"
            id="color"
            name="color"
            value={color}
            onChange={handleColorChange}
            className="ml-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Sección de Tamaño de Fuente */}
        <div className="mb-6">
          <label htmlFor="font-size" className="text-lg font-medium">Tamaño de Fuente:</label>
          <input
            type="range"
            id="font-size"
            min="12"
            max="32"
            value={fontSize}
            onChange={handleFontSizeChange}
            className="ml-2 w-full"
          />
        </div>

        {/* Sección de Fuente */}
        <div className="mb-6">
          <label htmlFor="font-family" className="text-lg font-medium">Fuente:</label>
          <select
            id="font-family"
            name="font-family"
            value={fontFamily}
            onChange={handleFontFamilyChange}
            className="ml-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
        </div>

        {/* Sección de Color de Fondo */}
        <div className="mb-6">
          <label htmlFor="background-color" className="text-lg font-medium">Color de Fondo:</label>
          <input
            type="color"
            id="background-color"
            name="background-color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
            className="ml-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Vista previa */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Vista Previa</h2>
          <div
            className="border p-6 rounded-lg shadow-xl mt-4"
            style={{
              backgroundColor: backgroundColor,
              color: color,
              fontSize: `${fontSize}px`,
              fontFamily: fontFamily, // Aplicamos la fuente seleccionada
            }}
          >
            <p className="mb-4">¡Esta es tu plantilla personalizada!</p>
            <p>Texto de ejemplo. El fondo, color y tamaño de la fuente cambian con los controles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
