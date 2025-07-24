'use client' 
{/* Header */}
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";

{/* Moléculas   Secciones */}
{/* Organismos  Secciones */}
{/* Plantillas  Secciones */}
{/* Paginas     Secciones */}
import PortafolioSection from "../components/sections/PortafolioSection";
import ServiciosInteractivos from "../components/sections/ServiciosInteractivos";

{/* Atomos      Secciones */}
import Secciones from "../components/sections/Secciones";

import HeroUXUIDesarrollo from "../components/sections/HeroUXUIDesarrollo";

{/* Atomos Secciones */}
import PortfolioGrid from "../components/sections/atoms/PortfolioGrid";

import Services from "../components/sections/Services";

import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import ClientCarousel from '../components/sections/ClientCarousel';
import FAQ from '../components/FAQ';
import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/layout/Footer";
import FadeInSection from '../components/FadeInSection';
import Productos from "../components/sections/Productos";
import ScrollToTop from '../components/ScrollToTop';
import InteractiveMap from "../components/InteractiveMap"; 
import MemoryCarousel from "../components/MemoryCarousel";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero /> 
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <MemoryCarousel />
    </div> 
      <Services /> 
      <Secciones />
      <ServiciosInteractivos />
      <HeroUXUIDesarrollo />
      <PortfolioGrid />  
      <PortafolioSection/>
      <Testimonials />
      <Contact />
      <ClientCarousel />
      <InteractiveMap />
      <FAQ /> 
      <Productos/>
      <ScrollToTop />
      <WhatsAppFloat />
      
        <span className="text-white">WhatsApp</span>

      <Footer/>

      <FadeInSection>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Diseño que impacta</h2>
          <p className="text-gray-500 dark:text-gray-300">Creamos experiencias únicas para tu negocio.</p>
        </div>
      </FadeInSection>
      </main>
  )
}