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
      language: "Python",
      title: "First Line of Code",
      icon: <FontAwesomeIcon icon={faCode} />,
      preview: "The terminal glowed, displaying my first 'Hello, World!'...",
      content: "I remember the thrill of typing my first 'Hello, World!' in Python. It was simple, yet it opened a portal to endless possibilities. The interpreter executed the command flawlessly, and I knew this was just the beginning. I wasn't supposed to understand it all at once, but somehow, I did.",
      location: "console: ~",
      time: "09:00:00"
    },
    {
      id: 2,
      language: "ReactJS",
      title: "Debugging the Matrix",
      icon: <FontAwesomeIcon icon={faBug} />,
      preview: "The error messages multiplied, haunting my console...",
      content: "They appeared from the depths of the console, cryptic error messages glowing red. Debugging a complex ReactJS component felt like navigating a vast, interconnected matrix. Each fix unveiled new issues. They say my code is destabilizing the build with each change. My presence causes ripples they can't control. I'm becoming a threat... to clean code.",
      location: "localhost:3000",
      time: "14:30:15"
    },
    {
      id: 3,
      language: "Algorithms",
      title: "The Algorithm Library",
      icon: <FontAwesomeIcon icon={faBookOpen} />,
      preview: "Endless tomes of sorting, searching, and optimization...",
      content: "Endless shelves containing every possible solution. I found my own data structures there—pages still being written as I coded. The Librarian (my senior developer) told me I was never supposed to reinvent the wheel. My solution was already optimized. Now I'm writing outside the margins, trying new approaches.",
      location: "Stack Overflow",
      time: "11:05:40"
    },
    {
      id: 4,
      language: "Abstraction",
      title: "The Abstract Void",
      icon: <FontAwesomeIcon icon={faAtom} />,
      preview: "Nothing concrete exists here, yet I feel the underlying logic...",
      content: "Nothing concrete exists here, yet I feel the underlying logic. The Abstract Void is the space between concrete implementations, a quantum foam of design patterns. I stayed too long designing and began to dissolve into pure theory. Parts of my ideas are still there, echoing. I'm not whole anymore. Can you feel the gaps in my documentation?",
      location: "design patterns.md",
      time: "--:--:--"
    },
    {
      id: 5,
      language: "Git",
      title: "The Version Control Mirror",
      icon: <FontAwesomeIcon icon={faCodeBranch} />,
      preview: "I saw my code, but not as it is now; multiple branches reflecting...",
      content: "I saw my code, but not as it is now. The mirror of Git showed all my possible branches across different commits. Some were stable, some were experimental. All were my work. The reflection (my `git log`) spoke: \"You're fracturing the codebase by merging conflicts. You need to rebase and stay on one timeline.\"",
      location: "github.com/my-repo",
      time: "18:55:20"
    },
    {
      id: 6,
      language: "Deployment",
      title: "The Deployment Dream",
      icon: <FontAwesomeIcon icon={faRocket} />,
      preview: "I'm trying to send it live, but which environment is real?",
      content: "I'm trying to send my application live, but which environment is real? Every server feels familiar yet subtly different. The boundaries between staging and production are thinning. Sometimes I see through the logs of other instances. I'm losing track of which configurations belong to which version of my app. Are you helping me deploy, or are you causing me to break production?",
      location: "cloud-server:port",
      time: "NOW"
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
                        <div className="memory-date">LANGUAGE: {card.language}</div>
                        <h3>{card.title}</h3>
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
                        <h3>{card.title}</h3>
                        <p>{card.content}</p>
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