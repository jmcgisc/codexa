import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { headers } from "next/headers"

import { ThemeWrapper } from "@/src/components/providers/ThemeWrapper"
import { ProjectProvider } from "@/src/core/providers/project.provider"
import { getProjectByDomain, getDefaultProject } from "@/src/core/services/project.service"

const inter = Inter({ subsets: ["latin"] })
const siteUrl = 'https://www.stratik.com.mx';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Stratik',
  description: 'Diseño Web, SEO, E-commerce y LegalTech...',
  authors: [{ name: 'Stratik', url: siteUrl }],
  creator: 'Stratik',
  publisher: 'Strarik',
  icons: {
    icon: '/corporativo/stratik_full_logo_square.ico',
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
    title: 'Stratik | Un nuevo estándar...',
    description: 'Cubrimos todas las necesidades digitales...',
    url: siteUrl,
    siteName: 'Stratik',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Equipo de Stratik',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stratik | Diseño Web',
    description: 'Diseño Web y Desarrollo Digital en México.',
    images: ['/og-image.png'],
    creator: '@tuUsuarioDeTwitter',
  },
  alternates: {
    canonical: '/',
    languages: {
      'es-MX': '/',
    },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  // 🧠 Detectar proyecto dinámicamente
  const headersList = await headers()
  const host = headersList.get("host") || ""

  let project = getProjectByDomain(host)

  if (!project) {
    project = getDefaultProject()
  }

  return (
    <html lang="es" className="scroll-smooth">
      <head></head>

      <body className={inter.className}>

        <ProjectProvider project={project}>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </ProjectProvider>
        {/* GTM (igual que lo tenías) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TLSP8889');
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLSP8889"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

      </body>
    </html>
  )
}