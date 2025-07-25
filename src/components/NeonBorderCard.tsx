'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const NeonBorderCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="relative p-0.5 rounded-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto de gradiente animado */}
      <div 
        className={`
          absolute inset-0 rounded-lg 
          bg-gradient-to-r 
          from-purple-600 via-pink-500 to-cyan-500 
          opacity-70 group-hover:opacity-100
          transition-all duration-500
          ${isHovered ? 'blur-[2px]' : 'blur-[1px]'}
        `}
        style={{
          backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
          backgroundSize: '200% 200%'
        }}
      />
      
      {/* Brillo adicional al hacer hover */}
      {isHovered && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Contenido de la tarjeta */}
      <div className="relative z-10 h-full bg-gray-900 rounded-lg p-6 backdrop-blur-sm border border-gray-800 group-hover:border-transparent transition-all duration-300">
        {children}
      </div>

      {/* Efecto de partículas neón */}
      {isHovered && (
        <>
          <motion.span 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.span 
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </>
      )}
    </div>
  );
};

export default NeonBorderCard;