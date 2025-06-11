'use client' 

import Navbar from "../components/sections/Navbar"
import Hero from "../components/sections/Hero"
import Services from "../components/sections/Services"
import Portfolio from "../components/sections/Portfolio"
import Testimonials from "../components/sections/Testimonials"
import Contact from "../components/sections/Contact"
import ClientCarousel from '../components/sections/ClientCarousel'
import ClientLogos from '../components/sections/ClientLogos'
import FAQ from '../components/FAQ'
import WhatsAppFloat from "../components/WhatsAppFloat"
import Footer from "../components/layout/Footer"
import FadeInSection from '../components/FadeInSection'
import Productos from "../components/sections/Productos"
import ScrollToTop from '../components/ScrollToTop'  
import InteractiveMap from "../components/InteractiveMap"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <ClientCarousel />
      <ClientLogos/>
      <InteractiveMap />
      <FAQ/> 
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