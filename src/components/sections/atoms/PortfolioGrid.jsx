import PortfolioCard from "./moleculas/PortafolioCard";

const portfolioItems = [
  {
    title: "Inversiones Inmobiliaria",
    description: "https://desarrollosdiamante.com",
    siteUrl: "https://desarrollosdiamante.com",
    fallbackImage: "/previews/site1.jpg",
    fallbackVideo: "/previews/site1.mp4",
  },
  {
    title: "Agencia de Viajes",
    description: "https://vagamociontravel.com",
    siteUrl: "https://vagamociontravel.com",
    fallbackImage: "/previews/site2.jpg",
  },
  {
    title: "Market Place de Centros de Buceo",
    description: "https://buceapp.com",
    siteUrl: "https://buceapp.com",
    fallbackVideo: "/previews/site3.mp4",
  },
];

export default function PortfolioGrid() {
  return (
    <section id="portafolio" className="py-24 px-6 bg-background">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item, index) => (
        <PortfolioCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}