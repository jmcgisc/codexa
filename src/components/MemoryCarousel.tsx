import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faBug, 
  faBookOpen, 
  faAtom, 
  faCodeBranch, 
  faRocket,
  faChevronLeft,
  faChevronRight, 
  faLocationDot,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import './MemoryCarousel.css'; // We'll extract the CSS separately

interface MemoryCard {
  id: number;
  language: string;
  title: string;
  icon: React.ReactNode;
  preview: string;
  content: string;
  location: string;
  time: string;
}

const MemoryCarousel: React.FC = () => {
  const [theta, setTheta] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const radius = window.innerWidth <= 768 ? 250 : 400;

  const memoryCards: MemoryCard[] = [
    {
      id: 1,
      language: "Visivilidad y Credibilidad  🖥 ️",
      title: "Diseño Web",
      icon: <FontAwesomeIcon icon={faCode} />,
      preview: "Un diseño a medida para cada cliente...",
      content: "Diseñamos sitios web modernos, rápidos y adaptables.<br/><br/> Desde landing pages hasta plataformas personalizadas.<br/><br/>🚀 Tecnología actual <br/><br/> 🎨 Diseño responsivo<br/><br/>🛠️ Código optimizado<br/>",
      location: "Mexico & España",
      time: "Desde 3sem"
    },
    {
      id: 2,
      language: "Seguridad Digital & Legalidad 🔐",
      title: "Seguridad y Firmas Digitales",
      icon: <FontAwesomeIcon icon={faBug} />,
      preview: "Incluimos firmas electrónicas, de audio y...",
      content: "Protege tus contratos y asegura la identidad digital.<br><br>Incluimos firmas electrónicas, de audio y verificación de integridad.<br><br>🔐 Certificación segura<br><br>🎙️ Firma por voz<br><br>📄 Evidencia legal",
      location: "Mexico",
      time: "Desde 5sem"
    },
    {
      id: 3,
      language: "Presencia Destacada 🈂",
      title: "SEO & Analítica",
      icon: <FontAwesomeIcon icon={faBookOpen} />,
      preview: "Implementamos estrategias de SEO técnico y contenido...",
      content: "Haz que tu web sea encontrada y entendida.<br> <br>Implementamos estrategias de SEO técnico y contenido.<br><br>📈 Google Search Console<br><br>🔍 Auditorías SEO<br><br>📊 Analítica de cookies y tráfico",
      location: "Mexico & España",
      time: "Desde 5sem"
    },
    {
      id: 4,
      language: "IA & Velocidad de Respuesta 🤖",
      title: "Automatización e Inteligencia Artificial",
      icon: <FontAwesomeIcon icon={faAtom} />,
      preview: "Desde respuestas automáticas hasta asistentes con IA...",
      content: "Ahorra tiempo con herramientas inteligentes.<br><br>Desde respuestas automáticas hasta asistentes con IA.<br><br>🤖 Bots personalizados<br><br>🧠 Integración GPT y APIs<br><br>⚙️ Automatización de procesos",
      location: "Mexico & España",
      time: "Desde 2sem"
    },
    {
      id: 5,
      language: "Soluciones & Experiencia 🛠️",
      title: "Extras Técnicos",
      icon: <FontAwesomeIcon icon={faCodeBranch} />,
      preview: "Consultoría, servidores, bases de datos y más...",
      content: "Soluciones a medida para necesidades avanzadas.<br><br> Consultoría, servidores, bases de datos y más.<br><br> 🛠️ Backends ligeros<br><br> 💾 Supabase y Firebase<br><br> ☁️ Deploy automatizado",
      location: "Mexico & España",
      time: "Depende del proyecto"
    },
    {
      id: 6,
      language: "Campañas y Marketing Digital 🚀",
      title: "Campañas y Marketing Digital",
      icon: <FontAwesomeIcon icon={faRocket} />,
      preview: "I'm trying to send it live, but which environment is real?",
      content: "Atrae clientes con campañas efectivas.<br><br>Gestionamos tu publicidad en Google, Meta y más.<br><br>🎯 Anuncios inteligentes<br><br>📩 Captación de leads<br><br>📅 Calendarios de contenido",
      location: "Mexico & Colombia",
      time: "Desde 1mes "
    }
  ];

  useEffect(() => {
    arrangeCards();
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const arrangeCards = () => {
    const angle = 360 / memoryCards.length;
    const cards = document.querySelectorAll('.memory-card');
    
    cards.forEach((card: Element, index: number) => {
      const cardElement = card as HTMLElement;
      const cardAngle = angle * index;
      cardElement.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
    });
  };

  const rotateCarousel = (newTheta: number) => {
    setTheta(newTheta);
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${newTheta}deg)`;
    }

    // Update current card index
    const anglePerCard = 360 / memoryCards.length;
    const newIndex = Math.round(Math.abs(newTheta / anglePerCard) % memoryCards.length);
    setCurrentIndex(newIndex >= memoryCards.length ? 0 : newIndex);
  };

  const nextCard = () => {
    const anglePerCard = 360 / memoryCards.length;
    const newTheta = theta - anglePerCard;
    rotateCarousel(newTheta);
  };

  const prevCard = () => {
    const anglePerCard = 360 / memoryCards.length;
    const newTheta = theta + anglePerCard;
    rotateCarousel(newTheta);
  };

  const flipCard = (index: number) => {
    if (index === currentIndex) {
      const card = document.querySelector(`.memory-card[data-index="${index}"]`);
      if (card) {
        card.classList.toggle('flipped');
      }
    }
  };

  const handleResize = () => {
    arrangeCards();
    rotateCarousel(theta);
  };

  const dragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const drag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const diffX = clientX - startX;

    const sensitivity = 0.5;
    const newTheta = theta + diffX * sensitivity;

    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${newTheta}deg)`;
    }
  };

  const dragEnd = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const clientX = 'changedTouches' in e ? 
      e.changedTouches[0].clientX : 
      (e as MouseEvent).clientX;
    const diffX = clientX - startX;

    if (Math.abs(diffX) > 20) {
      if (diffX > 0) {
        prevCard();
      } else {
        nextCard();
      }
    } else {
      const anglePerCard = 360 / memoryCards.length;
      const snapAngle = Math.round(theta / anglePerCard) * anglePerCard;
      rotateCarousel(snapAngle);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      nextCard();
    } else if (e.key === 'ArrowRight') {
      prevCard();
    } else if (e.key === 'Enter' || e.key === ' ') {
      const card = document.querySelector(`.memory-card[data-index="${currentIndex}"]`);
      if (card) {
        card.classList.toggle('flipped');
      }
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', drag);
      document.addEventListener('touchmove', drag as EventListener);
      document.addEventListener('mouseup', dragEnd);
      document.addEventListener('touchend', dragEnd);
    }

    return () => {
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('touchmove', drag as EventListener);
      document.removeEventListener('mouseup', dragEnd);
      document.removeEventListener('touchend', dragEnd);
    };
  }, [isDragging, theta, startX]);

  return (
    <div className="memory-carousel-container">
      <div className="cosmos-background">
        <div className="stars-container"></div>
      </div>

      <div className="container-fluid h-100 d-flex flex-column">
        <main className="flex-grow-1 d-flex align-items-center justify-content-center position-relative">
          <div className="carousel-container">
            <div className="carousel" id="memory-carousel" ref={carouselRef}
              onMouseDown={dragStart}
              onTouchStart={dragStart}>
              {memoryCards.map((card, index) => (
                <div 
                  key={card.id}
                  className="memory-card" 
                  data-index={index}
                  onClick={() => flipCard(index)}>
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="card-content">
                        <div className="memory-date">OBJETIVO: {card.language}</div>
                        <h3 className='text-emerald-600'>{card.title}</h3>
                        <div className="memory-image">
                          {card.icon}
                          <div className="glitch-effect"></div>
                        </div>
                        <p className="memory-preview">{card.preview}</p>
                        <div className="card-glow"></div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="card-content">
                        <h3 className='text-emerald-700'>{card.title}</h3>
                        <div className='text-violet-300' dangerouslySetInnerHTML={{ __html: card.content }} />

                        <div className="memory-coordinates">
                          <span><FontAwesomeIcon icon={faLocationDot} /> {card.location}</span>
                          <span className="time-stamp"><FontAwesomeIcon icon={faClock} /> {card.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button id="prev-btn" className="control-btn" onClick={prevCard}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button id="next-btn" className="control-btn" onClick={nextCard}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MemoryCarousel;