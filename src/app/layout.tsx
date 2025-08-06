import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google" 

const inter = Inter({ subsets: ["latin"] })
const siteUrl = 'https://www.stratik.com.mx';

export const metadata: Metadata = { 
  metadataBase: new URL(siteUrl),
  title: 'Stratik',
  description: 'Diseño Web, SEO, E-commerce y LegalTech. El mejor diseño UX/UI y desarrollo web en México. Creamos experiencias digitales únicas y efectivas.',
  authors: [{ name: 'Stratik', url: siteUrl }],
  creator: 'Stratik',
  publisher: 'Strarik',
  icons: {
    icon: '/corporativo/favicon.ico', 
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'Stratik | Un nuevo estándar en diseño web y desarrollo digital',
    description: 'Cubrimos todas las necesidades digitales de tu empresa.',
    url: siteUrl,
    siteName: 'Stratik',
    // ¡IMPORTANTE! Crea una imagen de 1200x630px y pon la ruta aquí.
    images: [
      {
        url: '/og-image.png', // Ruta a tu imagen de Open Graph
        width: 1200,
        height: 630,
        alt: 'Equipo de Stratik, desarrollo web y diseño digital',
      },
    ],
    locale: 'es_MX', // Especifica el idioma y la región
    type: 'website',
  },
  // Twitter Cards: controla la vista previa en Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Mi Aplicación | Título para Twitter',
    description: 'Descripción para Twitter (puede ser más corta).',
    // ¡IMPORTANTE! La imagen de Open Graph se suele reutilizar aquí.
    images: ['/og-image.png'], 
    creator: '@tuUsuarioDeTwitter', // Tu usuario de Twitter
  },
  // URL Canónica: previene contenido duplicado
  alternates: {
    canonical: '/',
    languages: {
      'es-MX': '/',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

   const jsonLd = {
    "@context": "https://stratik.com.mx",
    "@type": "Diseño Web y Desarrollo Digital",
    "name": "Stratik",
    "image": "https://stratik/logo.png",
    "@id": "https://stratik.com.mx",
    "url": "https://stratik.com.mx",
    "telephone": "+525575630576",
    "address": {
      "@type": "Dirección",
      "streetAddress": "Jaime Torres Bodet 123",
      "addressLocality": "Ciudad de México",
      "postalCode": "06400",
      "addressCountry": "MX"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "21:00"
    }
  };


  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      >
      </script>
      
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');`}           
      </script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXX');
          `,
        }}
      ></script>  

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>   

        

      

      </body>
    </html>
  )
}