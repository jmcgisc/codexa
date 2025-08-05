'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { useState } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  const MotionSection: React.FC<
    HTMLMotionProps<'section'> & React.HTMLAttributes<HTMLElement>
  > = motion.section

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/525575630576"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center"
        aria-label="Chatea por WhatsApp"   
      >
        {/* Botón principal */}
        <MotionSection
          className="bg-green-500 p-4 rounded-full shadow-xl flex items-center justify-center"
          initial={false}
          animate={{
            boxShadow: isHovered 
              ? '0 10px 25px -5px rgba(16, 185, 129, 0.4)'
              : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path d="M20.52 3.48A11.78 11.78 0 0012 0a12 12 0 00-10.29 17.94L0 24l6.33-1.66A12 12 0 1012 0h.01c2.57 0 5.07.84 7.08 2.42a11.76 11.76 0 001.43 1.06zM12 22a9.95 9.95 0 01-5.18-1.47l-.37-.22-3.74 1 .99-3.65-.24-.38A10 10 0 1122 12 9.94 9.94 0 0112 22zm5.37-7.53c-.28-.14-1.64-.81-1.89-.9s-.44-.14-.62.14-.72.9-.88 1.08-.33.21-.61.07a8.2 8.2 0 01-2.41-1.49 9.12 9.12 0 01-1.69-2.1c-.18-.31 0-.48.13-.63s.28-.33.43-.5a2.1 2.1 0 00.28-.47.55.55 0 000-.52c-.14-.14-.61-1.47-.83-2s-.44-.46-.62-.47h-.53a1 1 0 00-.72.34c-.25.27-.97.95-.97 2.3s1 2.66 1.14 2.84a10.34 10.34 0 002.18 2.5c1.49 1.28 3.2 1.68 4.37 1.83.45.07.86.05 1.18.03a2 2 0 001.3-.91 1.64 1.64 0 00.11-.91c-.05-.08-.2-.13-.42-.23z" />
          </svg>
        </MotionSection>

        {/* Etiqueta flotante */}
        <AnimatePresence>
          {isHovered && (
            <MotionSection
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute right-16 bg-white dark:bg-neutral-800 px-4 py-2 rounded-lg shadow-md whitespace-nowrap flex items-center"
            >
              <Phone className="h-4 w-4 mr-2 text-green-500" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                ¿Necesitas ayuda?
              </span>
              <div className="absolute right-0 w-2 h-2 bg-white dark:bg-neutral-800 transform rotate-45 translate-x-1"></div>
            </MotionSection>
          )}
        </AnimatePresence>
      </a>

      {/* Efecto de pulso */}
      <MotionSection
        className="absolute inset-0 rounded-full bg-green-400 opacity-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeOut"
        }}
      />
    </div>
  );
}