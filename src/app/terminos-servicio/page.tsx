import Navbar from '@/src/components/sections/Navbar';
import TerminosServicio from "@/src/pages/footer/terminos-servicio";
import Footer from '@/src/components/layout/Footer';

export default function PoliticaPrivacidadPage() {
  return (
  <>
    
    <Navbar />
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <TerminosServicio />
        </div>
      </main>
    </div>
    <Footer legalPages={{ privacyPolicy: '/politica-privacidad', termsOfService: '/terminos-servicio' }} />
  </>
  );
}