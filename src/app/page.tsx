'use client' 
{/* Header */}
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import ServiciosInteractivos from "../components/sections/ServiciosInteractivos";

import MembershipCards from "../components/sections/Testimonios/MembershipCards"

{/* Atomos      Secciones */}
import Secciones from "../components/sections/Secciones";

{/* Atomos Secciones */}
import PortfolioGrid from "../components/sections/atoms/PortfolioGrid";
import Works from "../components/portfolio/Works";

import Services from "../components/sections/Services";

import Testimonials from "../components/sections/Testimonios/Testimonials";
import FAQ from '../components/FAQ';
import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/layout/Footer";
import FadeInSection from '../components/FadeInSection';
import InteractiveMap from "../components/InteractiveMap"; 
import MemoryCarousel from "../components/MemoryCarousel";
import FormularioContacto from "../components/email/FormularioContacto";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero /> 
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <MemoryCarousel />
      </div> 
      <Services /> 
      <ServiciosInteractivos />
      <Secciones />

      <Works />
      {/* The Work component is where the portfolio items are displayed */}
      
      {/* Additional sections can be added here */}
      <PortfolioGrid />  
      <Testimonials />
      <MembershipCards />
      <FormularioContacto />
      <InteractiveMap />
      <FAQ /> 
      <WhatsAppFloat />

      <Footer/>

      </main>
  )
}