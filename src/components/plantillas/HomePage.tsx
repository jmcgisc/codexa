// pages/index.tsx
import { useState } from 'react';
import Hero from '../../components/plantillas/Hero';
import Servicios from '../../components/plantillas/Servicios';
import Footer from '../../components/plantillas/Footer';
import Configurador from '../pages/pages/configurador';
import FormularioContactoPopup from '../../components/email/FormularioContactoPopup';

export default function HomePage() {
  const [config, setConfig] = useState({
    title: 'Transforma tu presencia digital',
    subtitle: 'Diseños web que cautivan y convierten',
    buttonText: 'Contáctanos',
    backgroundImage: '/hero-background.jpg',
  });

  const servicios = [
    { title: 'Diseño Web', description: 'Creamos sitios web modernos y funcionales.', icon: '🌐' },
    { title: 'SEO', description: 'Optimizamos tu sitio para motores de búsqueda.', icon: '🔍' },
    { title: 'E-Commerce', description: 'Desarrollamos tiendas online eficientes.', icon: '🛒' },
  ];

  return (
    <div>
      {/* <Configurador onSave={setConfig} /> */}
      <Hero
        title={config.title}
        subtitle={config.subtitle}
        buttonText={config.buttonText}
        backgroundImage={config.backgroundImage}
        buttonLink="#contacto"
      />
      <Servicios servicios={servicios} />
      <Footer />
    </div>
  );
}
