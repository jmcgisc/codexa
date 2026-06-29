'use client'

import { useEffect } from 'react'
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import ServiciosInteractivos from "../components/sections/ServiciosInteractivos";
import MembershipCards from "../components/sections/Testimonios/MembershipCards";
import Secciones from "../components/sections/Secciones";
import Works from "../components/portfolio/Works";
import NosotrosPreview from "../components/sections/NosotrosPreview";
import BlogPreview from "../components/sections/BlogPreview";
import RecursosPreview from "../components/sections/RecursosPreview";
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

      {/* BANNER PROMOCIONAL CRM */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 text-center scroll-mt-28 mt-20 relative z-40 shadow-sm border-b border-blue-800">
        <p className="font-medium text-sm sm:text-base flex items-center justify-center gap-2">
          <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Nuevo</span>
          Conoce Stratident: El Sistema Operativo Inteligente para Clínicas Dentales.
          <a href="/stratident" target='blank' className="underline font-bold ml-1 text-cyan-200 hover:text-white transition-colors">
            Descúbrelo aquí &rarr;
          </a>
        </p>
      </section>

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

      {/* BLOG (Nuevo) */}
      <section id="blog" className="scroll-mt-28">
        <BlogPreview />
      </section>

      {/* CONTACTO (ancla "contacto") */}
      <section id="contacto" className="scroll-mt-28">
        <FormularioContacto />
      </section>

      {/* MAPA */}
      <section className="scroll-mt-28">
        <InteractiveMap />
      </section>

      {/* RECURSOS (Nuevo) */}
      <section id="recursos" className="scroll-mt-28">
        <RecursosPreview />
      </section>

      {/* NOSOTROS (Nuevo) */}
      <section id="nosotros" className="scroll-mt-28">
        <NosotrosPreview />
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
