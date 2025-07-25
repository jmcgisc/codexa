import { useState } from "react";
import { Card, CardContent } from "..src/components/ui/card";  
import { motion } from "framer-motion";
import { Badge } from "../../components/ui/bedge";

const proyectos = [
  {
    titulo: "Isla Diamante",
    categoria: "Landing Page",
    imagen: "/img/isla-diamante.webp",
    descripcion: "Desarrollo de sitio de inversión inmobiliaria con enfoque en conversión y posicionamiento SEO.",
    link: "/proyectos/isla-diamante"
  },
  {
    titulo: "Santorini Mediterránea",
    categoria: "E-commerce",
    imagen: "/img/santorini.webp",
    descripcion: "Tienda online con catálogo dinámico y sistema de cotización integrado.",
    link: "/proyectos/santorini"
  },
  {
    titulo: "Alexa Delgado",
    categoria: "Branding + Web",
    imagen: "/img/alexa-delgado.webp",
    descripcion: "Imagen de marca, sitio web responsive y chatbot automatizado.",
    link: "/proyectos/alexa-delgado"
  }
];

const categorias = ["Todos", "Landing Page", "E-commerce", "Branding + Web"];

export default function PortafolioSection() {
  const [filtro, setFiltro] = useState("Todos");

  const filtrados = filtro === "Todos" ? proyectos : proyectos.filter(p => p.categoria === filtro);

  return (
    <section className="py-16 px-4 bg-background">
      <h2 className="text-4xl font-bold text-center mb-6">Portafolio</h2>
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {categorias.map(cat => (
          <Badge key={cat} variant={filtro === cat ? "default" : "outline"} onClick={() => setFiltro(cat)} className="cursor-pointer">
            {cat}
          </Badge>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtrados.map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="transition-all">
            <Card className="overflow-hidden shadow-md hover:shadow-xl">
              <img src={p.imagen} alt={p.titulo} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">{p.titulo}</h3>
                <p className="text-muted-foreground text-sm mb-2">{p.categoria}</p>
                <p className="text-sm">{p.descripcion}</p>
                <a href={p.link} className="text-primary hover:underline mt-2 inline-block">Ver proyecto →</a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
