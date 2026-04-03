import { useEffect, useState } from "react";

export default function Clients() {
    const [isVisible, setIsVisible] = useState(false);

    const clients = [
        {
            name: "Alen",
            logo: "/images/clientes/alen.png",
            description: "Empresa mexicana líder en productos de limpieza y cuidado del hogar."
        },
        {
            name: "Atento",
            logo: "/images/clientes/atento.png",
            description: "Empresa líder global en consultoría y externalización de procesos de negocio."
        },
        {
            name: "Gatorade",
            logo: "/images/clientes/gatorade.jpg",
            description: "Bebida isotónica líder, científicamente formulada para deportistas."
        },
        {
            name: "Justo",
            logo: "/images/clientes/justo.jpg",
            description: "Empresa mexicana 100% en línea."
        },
        {
            name: "Kavak",
            logo: "/images/clientes/kavak.jpeg",
            description: "Empresa mexicana de comercio electrónico de autos, revolucionaria en el mercado."
        },
        {
            name: "SHP",
            logo: "/images/clientes/shp.jpg",
            description: "Fabricante y líder mundial de empaques para cosméticos."
        },
        {
            name: "Soriana",
            logo: "/images/clientes/soriana.png",
            description: "Importante empresa mexicana de retail."
        },
        {
            name: "Vips",
            logo: "/images/clientes/vips.png",
            description: "Icónica cadena mexicana de restaurantes tipo cafetería."
        }
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            id="clientes"
            aria-labelledby="clientes-titulo"
            className="py-20 md:py-32 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div
                    className={`text-center mb-16 lg:mb-24 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <h2
                        id="clientes-titulo"
                        className="
              relative inline-block
              text-4xl md:text-5xl lg:text-6xl
              font-bold text-gray-900
              tracking-tight
              leading-tight
            "
                    >
                        Clientes que han depositado su confianza en nosotros

                        {/* Subrayado animado */}
                        <span
                            className={`
                absolute left-1/2 -bottom-4
                h-[3px] bg-blue-700 rounded-full
                transition-all duration-700 ease-out
                ${isVisible ? "w-24 -translate-x-1/2" : "w-0 -translate-x-1/2"}
              `}
                        />
                    </h2>

                    <p className="mt-10 text-lg text-gray-600 max-w-2xl mx-auto">
                        Empresas líderes que han confiado en nosotros para transformar su gestión de talento.
                    </p>
                </div>

                {/* Clientes */}
                <div
                    className="
            flex gap-6
            overflow-x-auto no-scrollbar
            pb-6
            snap-x snap-mandatory
            sm:grid sm:grid-cols-2
            lg:grid-cols-4
          "
                >
                    {clients.map((client, index) => (
                        <div
                            key={client.name}
                            className={`min-w-[280px] sm:min-w-0 snap-start transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            <div
                                className="
                  group relative h-[280px]
                  bg-white rounded-2xl
                  border border-gray-100
                  transition-all duration-300 ease-out
                  hover:border-blue-200
                  hover:-translate-y-[2px]
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]
                  flex flex-col items-center justify-center
                  p-8
                "
                            >
                                {/* Logo */}
                                <div className="flex items-center justify-center h-28 mb-6 ">
                                    <img
                                        src={client.logo}
                                        alt={`Logo de ${client.name}`}
                                        loading="lazy"
                                        className="
                      h-24
                      object-contain
                      grayscale opacity-80
                      rounded-lg
                      bg-white
                      p-2
                      transition-all duration-300
                      group-hover:grayscale-0
                      group-hover:opacity-100
                    "
                                    />
                                </div>

                                {/* Texto */}
                                <div className="text-center space-y-3">
                                    <p className="text-xl font-bold text-gray-900">
                                        {client.name}
                                    </p>
                                    <p className="
                    text-sm
                    font-serif
                    text-gray-500
                    leading-relaxed
                    tracking-wide
                    line-clamp-3
                  ">
                                        {client.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Estadística */}
                <div
                    className={`mt-20 transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div className="text-center">
                        <p className="text-4xl font-bold text-gray-900 mb-2">+50</p>
                        <p className="text-gray-600">
                            empresas han transformado su gestión de talento con nosotros
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
