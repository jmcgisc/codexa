'use client'

import React from 'react'

interface NeonBorderCardProps {
  titulo: string;
  descripcion: string;
  imagen: string;
}

//

export default function NeonBorderCard({ titulo, descripcion, imagen }: NeonBorderCardProps) {
  return (
    <div className="relative group w-full max-w-sm mx-auto rounded-xl overflow-hidden">
      {/* Capa animada */}
      <div className="group relative bg-neutral-900 p-[2px] rounded-xl 
      hover: rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:20%_20%] animate-spin-gradient  brightness-125 z-0">
 
      {/* Contenido */}
      <div className="relative z-10 h-full w-full rounded-xl bg-white dark:bg-neutral-900 p-4">
        <img src={imagen} alt={titulo} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">{titulo}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{descripcion}</p>
      </div>
    </div>
      </div>
  );
}
