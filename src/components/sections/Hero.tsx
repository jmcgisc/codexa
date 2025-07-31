// src/components/sections/Hero.tsx
import { motion, AnimatePresence } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

  const MotionSection: React.FC<
    HTMLMotionProps<'section'> & React.HTMLAttributes<HTMLElement>
  > = motion.section;
export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo con mejor rendimiento */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div> {/* Capa intermedia para mejor contraste */}
        <iframe 
          className="w-full h-full object-cover scale-110" 
          src="https://www.youtube.com/embed/sA4FXGNdTHw?autoplay=1&loop=1&mute=1&playlist=sA4FXGNdTHw&controls=0&modestbranding=1&rel=0"
          allow="autoplay; encrypted-media" 
          allowFullScreen
          title="Video de fondo"
        />
      </div>

      {/* Contenido central */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-6">
        <div className="max-w-5xl space-y-10 backdrop-blur-md bg-black/30 p-6 rounded-xl shadow-lg border border-white/10">
          
          {/* Título */}
          <MotionSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 drop-shadow-lg"
          >
            Diseñamos tu futuro digital
          </MotionSection>

          {/* Subtítulo */}
          <MotionSection
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed tracking-wide"
          >
            Desarrollo Web UX/UI • Marketing Digital • Branding • SEO <br className="hidden md:block" />
            E-commerce • Firmas Criptográficas • Blockchain • Web3 • IA • Chatbots
          </MotionSection>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="#services"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-7 py-3 text-base sm:text-lg font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 group"
            >
              Descubre nuestros servicios
              <motion.svg
                className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </a>
          </motion.div>
        </div>

        {/* Flecha de scroll */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
