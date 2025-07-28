import React, { useState } from 'react';
import { UilTimes, UilArrowRight, UilExternalLinkAlt } from '@iconscout/react-unicons';
import { motion, AnimatePresence } from 'framer-motion';
import './Works.css';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const worksData = [
    {
      id: 1,
      title: "Web Design",
      category: "web",
      imgSrc: "https://i.postimg.cc/43Th5VXJ/work-1.png",
      description: "Two smartphones displaying a sleek, dark-themed dashboard interface with modern UI elements and smooth animations.",
      created: "22 Apr 2025",
      technologies: "React, Tailwind CSS, Framer Motion",
      role: "Frontend Developer",
      viewLink: "#"
    },
    {
      id: 2,
      title: "App Design",
      category: "app",
      imgSrc: "https://i.postimg.cc/sXLjnC5p/work-2.png",
      description: "A stylish burger restaurant mobile app interface with intuitive navigation and mouth-watering food visuals.",
      created: "15 Apr 2025",
      technologies: "Figma, Adobe XD, React Native",
      role: "UI/UX Designer",
      viewLink: "#"
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "design",
      imgSrc: "https://i.postimg.cc/QNB1jXYZ/work-3.png",
      description: "Complete brand identity package including logo, color palette, typography and marketing materials.",
      created: "10 Apr 2025",
      technologies: "Illustrator, Photoshop, InDesign",
      role: "Brand Designer",
      viewLink: "#"
    },
    {
      id: 4,
      title: "Fitness App",
      category: "app",
      imgSrc: "https://i.postimg.cc/s2DGqyG8/work-4.png",
      description: "Interactive fitness application with workout tracking, progress analytics and community features.",
      created: "4 Apr 2025",
      technologies: "React Native, Firebase, Node.js",
      role: "Full Stack Developer",
      viewLink: "#"
    },
    {
      id: 5,
      title: "E-commerce Platform",
      category: "web",
      imgSrc: "https://i.postimg.cc/TYVyPhrF/work-5.png",
      description: "High-performance e-commerce solution with seamless checkout and product management system.",
      created: "28 Mar 2025",
      technologies: "Next.js, Stripe, MongoDB",
      role: "Lead Developer",
      viewLink: "#"
    },
    {
      id: 6,
      title: "Food Delivery UI",
      category: "design",
      imgSrc: "https://i.postimg.cc/wMdqKcbv/work-6.png",
      description: "User-friendly food delivery interface with real-time order tracking and restaurant recommendations.",
      created: "20 Mar 2025",
      technologies: "Sketch, Principle, After Effects",
      role: "Interaction Designer",
      viewLink: "#"
    }
  ];

  const filteredWorks = activeFilter === 'all' 
    ? worksData 
    : worksData.filter(work => work.category === activeFilter);

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

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <section className="works-section py-20 px-4 md:px-8" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary mb-2">Portfolio</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Dejamos que nuestro trabaje hable por nosotros.</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Algunos de los proyectos recientes que combinan diseño moderno, velocidad y funcionalidad.
          </p>
        </div>

        {/* Filter Menu */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filterItems.map((item) => (
            <button
              key={item.filter}
              onClick={() => handleFilterClick(item.filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === item.filter
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                layout
                className="group relative overflow-hidden rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="overflow-hidden">
                  <img
                    src={work.imgSrc}
                    alt={work.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{work.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{work.description}</p>
                  <button
                    onClick={() => handleWorkClick(work)}
                    className="flex items-center text-primary hover:text-primary-light transition-colors"
                  >
                    View Project <UilArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Popup */}
        <AnimatePresence>
          {showPopup && selectedWork && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="relative">
                  <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800 rounded-full p-2 z-10"
                  >
                    <UilTimes size={24} />
                  </button>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="sticky top-0">
                      <img
                        src={selectedWork.imgSrc}
                        alt={selectedWork.title}
                        className="w-full h-auto rounded-t-xl md:rounded-l-xl md:rounded-tr-none object-cover"
                      />
                    </div>
                    <div className="p-8">
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
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">PROJECT DETAILS</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-500">Technologies</p>
                            <p className="text-sm text-white">{selectedWork.technologies}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Role</p>
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
                        Visit Project <UilExternalLinkAlt className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Works;