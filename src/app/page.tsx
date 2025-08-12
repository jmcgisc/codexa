'use client'

import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import ServiciosInteractivos from "../components/sections/ServiciosInteractivos";
import MembershipCards from "../components/sections/Testimonios/MembershipCards";
import Secciones from "../components/sections/Secciones";
import Works from "../components/portfolio/Works";
import Services from "../components/sections/Services";
import FAQ from '../components/FAQ';
import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/layout/Footer";
import InteractiveMap from "../components/InteractiveMap"; 
import MemoryCarousel from "../components/MemoryCarousel";
import FormularioContacto from "../components/email/FormularioContacto";
import './globals.css';

export default function Home() {
  const legalPages = {
    privacyPolicy: "/politica-privacidad",
    termsOfService: "/terminos-servicio"
  };

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
      <MembershipCards />
      <FormularioContacto />
      <InteractiveMap />
      <FAQ /> 
      <WhatsAppFloat />
      <Footer legalPages={legalPages} />
    </main>
  );
}
