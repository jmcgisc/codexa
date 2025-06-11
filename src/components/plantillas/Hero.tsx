// components/plantillas/Hero.tsx
interface HeroProps {
    title: string;
    subtitle: string;
    buttonText: string;
    backgroundImage: string;
    buttonLink: string;
  }
  
  export default function Hero({
    title,
    subtitle,
    buttonText,
    backgroundImage,
    buttonLink,
  }: HeroProps) {
    return (
      <section
        className="relative bg-cover bg-center h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-white text-center px-6 py-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-6">{subtitle}</p>
          <a
            href={buttonLink}
            className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-500"
          >
            {buttonText}
          </a>
        </div>
      </section>
    );
  }
  