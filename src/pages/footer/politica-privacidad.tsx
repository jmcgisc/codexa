'use client'
import Link from "next/link"

export const metadata = {
  title: "Stratik – Agencia Web",
  description: "Diseñamos sitios modernos con SEO optimizado. Seguridad Digital. IA.",
  openGraph: {
    title: "Stratik – Agencia Web",
    description: "Diseñamos sitios modernos con React + Next.js y SEO optimizado.",
    url: "https://stratik.com.mx",
    siteName: "Stratik",
    images: ["/images/imagen.jpg"],
    locale: "es_MX",
    type: "website",
  },
}
export default function PoliticaPrivacidad() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6 text-justify">
      <h1 className="text-3xl font-bold mb-4">Aviso de Privacidad de Stratik</h1>
      <p className="text-sm text-neutral-500 mb-6">Última actualización: 11 de agosto de 2025</p>
      
         <section className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
        Aviso de Privacidad de STRATIK
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        Última actualización: 11 de agosto de 2025
      </p>

      <p className="mb-6">
        <strong>STRATIK S.A.S. de C.V.</strong> (en lo sucesivo, “STRATIK”), con domicilio en{" "}
        <em>[DIRECCIÓN FISCAL O COMERCIAL]</em>, es responsable del tratamiento de sus datos
        personales conforme a lo dispuesto en la{" "}
        <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>{" "}
        y demás disposiciones aplicables.
      </p>

      <p className="mb-8">
        Este Aviso de Privacidad describe cómo recabamos, utilizamos, protegemos y compartimos la
        información personal que obtenemos a través de nuestros sitios web, aplicaciones, plataformas
        digitales, formularios de contacto, campañas publicitarias, servicios de firma criptográfica,
        marketing digital, posicionamiento SEO, desarrollo web y cualquier otro servicio relacionado.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Datos personales que recabamos</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Datos de identificación: nombre completo, razón social, RFC, firma autógrafa o electrónica avanzada.</li>
        <li>Datos de contacto: correo electrónico, teléfono, dirección física y/o fiscal.</li>
        <li>Datos profesionales o comerciales: nombre de empresa, puesto, área de trabajo, giro comercial.</li>
        <li>Datos técnicos y de navegación: IP, navegador, sistema operativo, ubicación aproximada, cookies.</li>
        <li>Preferencias y hábitos de consumo: intereses, interacciones con nuestras campañas y sitios web.</li>
      </ul>
      <p className="mb-8">
        No solicitamos ni tratamos datos personales sensibles, salvo que sean estrictamente necesarios
        para la ejecución de servicios de firma criptográfica o cumplimiento de obligaciones legales,
        en cuyo caso recabaremos su consentimiento expreso.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Finalidades del tratamiento</h2>
      <p className="mb-4 font-semibold">Finalidades primarias:</p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Proporcionar servicios de firma criptográfica y validación de documentos.</li>
        <li>Diseñar, desarrollar y mantener páginas web.</li>
        <li>Ejecutar campañas de marketing digital y SEO.</li>
        <li>Gestionar cuentas, accesos y soporte técnico.</li>
        <li>Emitir facturas y cumplir obligaciones fiscales.</li>
      </ul>
      <p className="mb-4 font-semibold">Finalidades secundarias:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Enviar publicidad y promociones.</li>
        <li>Elaborar estadísticas y análisis de mercado.</li>
        <li>Personalizar la experiencia del usuario.</li>
        <li>Enviar boletines informativos (newsletters).</li>
      </ul>
      <p className="mb-8">
        Si no desea que sus datos sean tratados para estas finalidades secundarias, puede enviar un
        correo a:{" "}
        <Link href="mailto:privacidad@stratik.com.mx" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          privacidad@stratik.com.mx
        </Link>
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Uso de cookies y tecnologías</h2>
      <p className="mb-6">
        Utilizamos cookies, balizas web y tecnologías similares para recordar preferencias, analizar
        tráfico y mostrar publicidad personalizada. Puede deshabilitarlas en la configuración de su
        navegador, aunque algunas funciones pueden verse limitadas.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Transferencia de datos</h2>
      <p className="mb-6">
        Podemos compartir sus datos con proveedores de hosting, email marketing, pasarelas de pago,
        certificación de firmas electrónicas y autoridades competentes cuando la ley lo requiera. No
        vendemos ni rentamos datos personales.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Medidas de seguridad</h2>
      <p className="mb-6">
        Implementamos medidas administrativas, técnicas y físicas para proteger sus datos, incluyendo
        cifrado, HTTPS y autenticación robusta.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">6. Derechos ARCO</h2>
      <p className="mb-6">
        Usted puede acceder, rectificar, cancelar u oponerse al tratamiento de sus datos, así como
        revocar su consentimiento, enviando un correo a:{" "}
        <Link href="mailto:privacidad@stratik.com.mx" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          privacidad@stratik.com.mx
        </Link>
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">7. Cambios al Aviso</h2>
      <p className="mb-6">
        Nos reservamos el derecho de modificar este Aviso para adaptarlo a cambios legislativos o
        nuevos servicios. La versión más reciente estará disponible en{" "}
        <Link href="https://stratik.com.mx/aviso-de-privacidad" target="_blank" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          https://stratik.com.mx/aviso-de-privacidad
        </Link>
      </p>
    </section>
  )
    </div>
  )
}


 
