import PortfolioCard from "./moleculas/PortafolioCard";

const portfolioItems = [
  {
    title: "Sitio 1",
    description: "Tienda online con animaciones.",
    siteUrl: "https://desarrollosdiamante.com",
    fallbackImage: "/previews/site1.jpg",
    fallbackVideo: "/previews/site1.mp4",
  },
  {
    title: "Sitio 2",
    description: "Landing page para evento.",
    siteUrl: "https://vagamociontravel.com",
    fallbackImage: "/previews/site2.jpg",
  },
  {
    title: "Sitio 3",
    description: "Web empresarial con efectos.",
    siteUrl: "https://buceapp.com",
    fallbackVideo: "/previews/site3.mp4",
  },
  // Agrega más
];

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item, index) => (
        <PortfolioCard key={index} {...item} />
      ))}
    </div>
  );
}
