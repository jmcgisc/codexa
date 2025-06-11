// components/plantillas/Servicios.tsx
interface Servicio {
    title: string;
    description: string;
    icon: string; // Usamos un icono para los servicios
  }
  
  interface ServiciosProps {
    servicios: Servicio[];
  }
  
  export default function Servicios({ servicios }: ServiciosProps) {
    return (
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl text-center font-bold mb-10">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
              <div className="text-blue-600 mb-4">{servicio.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{servicio.title}</h3>
              <p>{servicio.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  