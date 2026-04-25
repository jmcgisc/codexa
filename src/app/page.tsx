'use client'

import { useEffect } from 'react'
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
import ChatWindow from "../components/ChatWindow";
import ChatWidget from "../components/ChatWidget";
import FormularioContacto from "../components/email/FormularioContacto";
import './globals.css';
import { DynamicLanding } from "@/src/components/DynamicLanding"
import { DynamicSections } from "@/src/components/DynamicSections"


export default function Home() {
  const legalPages = {
    privacyPolicy: "/politica-privacidad",
    termsOfService: "/terminos-servicio"
  };

  // ----- Scroll con offset para anclas (#id) -----
  useEffect(() => {
    const NAV_OFFSET = 88; // ~h-20 (5rem) + margen

    const scrollToId = (id: string) => {
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };

    // Si la página carga con hash
    if (window.location.hash) {
      scrollToId(window.location.hash.slice(1));
    }

    // Reaplicar offset cuando cambie el hash (click en el navbar, back/forward, etc.)
    const onHashChange = () => {
      scrollToId(window.location.hash.slice(1));
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  // -----------------------------------------------

  return (
    <main className="flex flex-col">

      {/* 🎯 NUEVO: Landing dinámico */}
      {/* <DynamicSections /> */}
      {/* <DynamicLanding /> */}

      <Navbar />

      {/* HERO */}
      <section id="hero" className="scroll-mt-28">
        <Hero />
      </section>

      {/* BLOQUE MEMORIAS */}
      <section className="scroll-mt-28">
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <MemoryCarousel />
        </div>
      </section>

      {/* SERVICIOS (ancla principal "servicios") */}
      <section id="servicios" className="scroll-mt-28">
        <Services />
      </section>

      {/* Extras de servicios */}
      <section className="scroll-mt-28">
        <ServiciosInteractivos />
      </section>

      {/* SECCIONES DESTACADAS */}
      <Secciones />

      {/* PORTAFOLIO (ancla "portfolio") */}
      <section id="portfolio" className="scroll-mt-28">
        <Works />
      </section>

      {/* TESTIMONIOS / MEMBERSHIP */}
      <section className="scroll-mt-28">
        <MembershipCards />
      </section>

      {/* CONTACTO (ancla "contacto") */}
      <section id="contacto" className="scroll-mt-28">
        <FormularioContacto />
      </section>

      {/* MAPA */}
      <section className="scroll-mt-28">
        <InteractiveMap />
      </section>

      {/* FAQ */}
      <section className="scroll-mt-28">
        <FAQ />
      </section>

      {/* Burbuja flotante */}
      <ChatWidget />
      {/* <WhatsAppFloat /> */}
      <Footer legalPages={legalPages} />
    </main>
  );
}
