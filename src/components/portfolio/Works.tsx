import React, { useState } from 'react';
import { UilTimes, UilArrowRight, UilExternalLinkAlt } from '@iconscout/react-unicons';
import { motion, AnimatePresence } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

type Work = {
  id: number;
  title: string;
  category: string;
  imgSrc: string;
  description: string;
  created: string;
  technologies: string;
  role: string;
  viewLink: string;
};

const MotionSection: React.FC<
  HTMLMotionProps<'section'> & React.HTMLAttributes<HTMLElement>
> = motion.section;


const Works = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const worksData: Work[] = [
    {
      id: 1,
      title: "💻 Desarrollo Web",
      category: "web",
      imgSrc: "https://i.postimg.cc/4dFJk9ZX/imagenes-combinadas-optimizadas.png",
      description: "Construimos sitios rápidos, seguros y escalables utilizando tecnologías modernas.",
      created: "22 Apr 2025",
      technologies: "React, Tailwind CSS, Framer Motion",
      role: "Frontend Developer",
      viewLink: "https://vagamociontravel.com"
    },
    {
      id: 2,
      title: "📱 App Mobile",
      category: "app",
      imgSrc: "https://i.postimg.cc/43Th5VXJ/work-1.png",
      description: "Creamos aplicaciones móviles de alto rendimiento con Kotlin, Swift y React Native. Desarrollamos con foco en seguridad, escalabilidad y experiencia fluida, tanto para iOS como Android.",
      created: "15 Apr 2025",
      technologies: "Figma, Adobe XD, React Native",
      role: "Android & iOS Developer",
      viewLink: "#"
    },
    {
      id: 3,
      title: "🎨 Diseño UX/UI",
      category: "design",
      imgSrc: "https://i.postimg.cc/L6k8hh33/Chat-GPT-Image-8-ago-2025-12-58-28-p-m-1.png",
      description: "Transformamos ideas en experiencias visuales efectivas. Aplicamos metodologías ágiles, diseño centrado en el usuario, prototipos funcionales y tests A/B para garantizar interfaces intuitivas y atractivas.",
      created: "10 Apr 2025",
      technologies: "Illustrator, Photoshop, InDesign",
      role: "Mockup & Graphic Designer",
      viewLink: "https://buceapp.com"
    },
    {
      id: 4,
      title: "📱 Reservaciones y Citas Online",
      category: "app",
      imgSrc: "https://i.postimg.cc/TYHWqCs3/Chat-GPT-Image-10-ago-2025-11-52-26-copia.png",
      description: "Buceapp es el marketplace que une a centros y escuelas de buceo con miles de buzos y turistas listos para su próxima inmersión.",
      created: "Apr 2022",
      technologies: "Stripe, Firebase, Node.js",
      role: "Deportes y Fitness",
      viewLink: "https://buceapp.com"
    },
    {
      id: 5,
      title: " 🌊 Desarrollos Inmobiliarios",
      category: "web",
      imgSrc: "https://i.postimg.cc/3NmJXw57/imagenes-unidas-reducida.png",
      description: "Convierte visitas en clientes con un sitio web diseñado para el sector inmobiliario. Desde la primera impresión, tus desarrollos se verán profesionales, atractivos y optimizados para aparecer en Google.",
      created: "Julio 2025",
      technologies: "Next.js, React, Tailwind CSS",
      role: "Desarrollos Inmobiliarios",
      viewLink: "https://desarrollosdiamante.com"
    },
    {
      id: 6,
      title: "🎨 Diseño de Marca & Prototipado",
      category: "design",
      imgSrc: "https://i.postimg.cc/wMdqKcbv/work-6.png",
      description: "Creamos identidades visuales que conectan con tu audiencia. Desde el branding hasta el diseño de interfaces y prototipos interactivos en Figma o Adobe XD. Agilidad, coherencia visual y foco en conversión.",
      created: "20 Mar 2025",
      technologies: "Sketch, Principle, After Effects",
      role: "Interaction Designer",
      viewLink: "#"
    }
  ];

  // Definición correcta de filteredWorks antes de su uso
  const filteredWorks = worksData.filter(work =>
    activeFilter === 'all' || work.category === activeFilter
  );

  const filterItems = [
    { name: 'All', filter: 'all' },
    { name: 'Web', filter: 'web' },
    { name: 'App', filter: 'app' },
    { name: 'Design', filter: 'design' }
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleWorkClick = (work) => {
    setSelectedWork(work);
    setShowPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="works-section py-20 px-4 md:px-8" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">Nuestros trabajos destacados</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proyectos recientes que combinan diseño, tecnología y funcionalidad.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filterItems.map((item) => (
            <button
              key={item.filter}
              onClick={() => handleFilterClick(item.filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === item.filter
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <motion.section
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="group relative overflow-hidden rounded-xl bg-gray-800 hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                onClick={() => handleWorkClick(work)}
              >
                <div className="overflow-hidden h-60">
                  <img
                    src={work.imgSrc}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{work.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{work.description}</p>
                  <div className="flex items-center text-stratik-turquesa hover:text-primary-light transition-colors">
                    Ver detalles <UilArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Popup */}
        <AnimatePresence>
          {showPopup && selectedWork && (
            <MotionSection
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
            >
              <MotionSection
                className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative p-6 md:p-8">
                  <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-700 rounded-full p-2"
                  >
                    <UilTimes size={24} />
                  </button>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img
                        src={selectedWork.imgSrc}
                        alt={selectedWork.title}
                        className="w-full rounded-xl object-cover"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {selectedWork.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {selectedWork.created}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">{selectedWork.title}</h3>
                      <p className="text-gray-300 mb-6">{selectedWork.description}</p>

                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">DETALLES TÉCNICOS</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-500">Tecnologías</p>
                            <p className="text-sm text-white">{selectedWork.technologies}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Rol</p>
                            <p className="text-sm text-white">{selectedWork.role}</p>
                          </div>
                        </div>
                      </div>

                      <a
                        href={selectedWork.viewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                      >
                        Ver proyecto <UilExternalLinkAlt className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </MotionSection>
            </MotionSection>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Works;