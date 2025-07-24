'use client'

import { useState } from 'react';

export default function Footer() {
  const [cardsToggled, setCardsToggled] = useState(false);

  const toggleCards = () => {
    setCardsToggled(!cardsToggled);
  };

  return (
    <footer className="bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & descripción */}
        <div>
          <h2 className="text-2xl font-bold mb-2">STRATRIK</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Creamos experiencias web memorables. Desde diseño hasta ecommerce.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Explora</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="#portafolio" className="hover:underline">Portafolio</a></li>
            <li><a href="#testimonios" className="hover:underline">Testimonios</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto rápido */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contacto</h3>
          <ul className="text-sm space-y-1">
            <li>📧 hola@statrik.com</li>
            <li>📞 +52 55 75 63 05 76</li>
            <li>📍 México & España</li>
          </ul>
        </div>

        {/* Redes Sociales - Componente original integrado */}
        <div className="relative">
          
          <div className="main" style={{ minHeight: '220px' }}>
            <div className="share-btn" onClick={toggleCards}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px" fill="currentColor">
                <path fillRule="evenodd"
                  d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                  clipRule="evenodd" />
              </svg>
            </div>

            <div className="up">
              <button 
                data-toggle1={cardsToggled.toString()} 
                className={`card1 ${cardsToggled ? 'toggled' : ''}`}
              >
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="30px" height="30px" className="instagram">
                    <g transform="scale(8,8)">
                      <path
                        d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z">
                      </path>
                    </g>
                  </svg>
                </div>
              </button>

              <button 
                data-toggle2={cardsToggled.toString()} 
                className={`card2 ${cardsToggled ? 'toggled' : ''}`}
              >
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" className="twitter">
                    <path
                      d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429">
                    </path>
                  </svg>
                </div>
              </button>
            </div>

            <div className="down">
              <button 
                data-toggle3={cardsToggled.toString()} 
                className={`card3 ${cardsToggled ? 'toggled' : ''}`}
              >
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" className="github">
                    <path
                      d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z">
                    </path>
                  </svg>
                </div>
              </button>

              <button 
                data-toggle4={cardsToggled.toString()} 
                className={`card4 ${cardsToggled ? 'toggled' : ''}`}
              >
                <div className="icon-container">
                  <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="discord">
                    <path
                      d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z">
                    </path>
                  </svg>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-700 mt-10 pt-6 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} STATRIK. Todos los derechos reservados.
      </div>

      <style>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5em;
          position: relative;
          height: 220px;
          margin-bottom: 1rem;
        }

        .share-btn {
          position: absolute;
          display: flex;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          background-color: #6c757d;
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .share-btn:hover {
          background-color: #5a6268;
          transform: scale(1.1);
        }

        .up {
          display: flex;
          flex-direction: row;
          gap: 0.5em;
        }

        .down {
          display: flex;
          flex-direction: row;
          gap: 0.5em;
        }

        .card1, .card2, .card3, .card4 {
          width: 70px;
          height: 70px;
          outline: none;
          border: none;
          background: white;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card1 {
          border-radius: 70px 5px 5px 5px;
        }

        .card1.toggled {
          transform: translateY(40px) translateX(50px) scale(0);
        }

        .card2 {
          border-radius: 5px 70px 5px 5px;
        }

        .card2.toggled {
          transform: translateY(40px) translateX(-50px) scale(0);
        }

        .card3 {
          border-radius: 5px 5px 5px 70px;
        }

        .card3.toggled {
          transform: translateY(-40px) translateX(50px) scale(0);
        }

        .card4 {
          border-radius: 5px 5px 70px 5px;
        }

        .card4.toggled {
          transform: translateY(-40px) translateX(-50px) scale(0);
        }

        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .instagram {
          fill: #cc39a4;
        }

        .twitter {
          fill: #03A9F4;
        }

        .github {
          fill: #000000;
        }

        .discord {
          fill: #8c9eff;
        }

        .card1:hover {
          cursor: pointer;
          transform: scale(1.1);
          background-color: #cc39a4;
        }

        .card1:hover .instagram {
          fill: white;
        }

        .card2:hover {
          cursor: pointer;
          transform: scale(1.1);
          background-color: #03A9F4;
        }

        .card2:hover .twitter {
          fill: white;
        }

        .card3:hover {
          cursor: pointer;
          transform: scale(1.1);
          background-color: rgb(39, 39, 39);
        }

        .card3:hover .github {
          fill: white;
        }

        .card4:hover {
          cursor: pointer;
          transform: scale(1.1);
          background-color: #8c9eff;
        }

        .card4:hover .discord {
          fill: white;
        }
      `}</style>
    </footer>
  )
}