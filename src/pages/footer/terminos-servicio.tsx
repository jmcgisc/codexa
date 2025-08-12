"use client"

import Link from "next/link"

export default function TerminosServicio() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6 text-justify">
      <h1 className="text-3xl font-bold mb-4">Términos de Servicio</h1>
      <p className="text-sm text-neutral-500 mb-6">Última actualización: 11 de agosto de 2025</p>
      
      <section className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
        Términos y Condiciones de Servicio
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        Última actualización: 11 de agosto de 2025
      </p>

      <p className="mb-6">
        Bienvenido a <strong>STRATIK S.A.S. de C.V.</strong> (“STRATIK”). Al contratar, acceder o
        utilizar nuestros servicios, usted acepta estos Términos y Condiciones. Si no está de acuerdo
        con alguno de ellos, le recomendamos no utilizar nuestros servicios.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Servicios ofrecidos</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Desarrollo, diseño y mantenimiento de sitios web.</li>
        <li>Servicios de firma criptográfica y validación de documentos electrónicos con validez legal.</li>
        <li>Campañas de marketing digital y posicionamiento SEO.</li>
        <li>Gestión de cookies y tecnologías de seguimiento para personalización y análisis.</li>
        <li>Envío de correos electrónicos y mensajes para campañas publicitarias.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Uso autorizado</h2>
      <p className="mb-6">
        El usuario se compromete a utilizar los servicios únicamente para fines legales y legítimos,
        absteniéndose de:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Realizar actividades ilícitas o fraudulentas.</li>
        <li>Vulnerar derechos de propiedad intelectual o industrial de terceros.</li>
        <li>Alterar, hackear o interferir con la seguridad de nuestras plataformas.</li>
        <li>Enviar spam o contenido malicioso a través de nuestras herramientas.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Responsabilidades del cliente</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Proporcionar información veraz, completa y actualizada.</li>
        <li>Garantizar que posee los derechos sobre los contenidos y materiales que nos proporcione.</li>
        <li>Respetar los plazos y términos acordados para entregas y pagos.</li>
        <li>Implementar las recomendaciones técnicas necesarias para el correcto funcionamiento de los servicios.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Propiedad intelectual</h2>
      <p className="mb-6">
        Todo el contenido, código, diseños, logotipos y materiales desarrollados por STRATIK son
        propiedad exclusiva de STRATIK, salvo que se indique lo contrario en el contrato. El cliente
        recibe una licencia de uso no exclusiva y no transferible, limitada al alcance del proyecto
        contratado.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Firmas criptográficas</h2>
      <p className="mb-6">
        Los servicios de firma criptográfica proporcionados por STRATIK cumplen con la normativa
        aplicable en México y tienen validez legal siempre que el usuario cumpla con los requisitos
        técnicos y de autenticación establecidos. STRATIK no será responsable por el uso indebido o
        fraudulento de dichas firmas por parte del usuario o terceros.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">6. Limitación de responsabilidad</h2>
      <p className="mb-6">
        STRATIK no será responsable por daños indirectos, pérdida de datos, lucro cesante o cualquier
        consecuencia derivada del uso o imposibilidad de uso de los servicios, excepto cuando lo
        disponga expresamente la ley.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">7. Pagos y facturación</h2>
      <p className="mb-6">
        Los precios y condiciones de pago serán acordados en el contrato o propuesta comercial.
        STRATIK emitirá facturas electrónicas conforme a la legislación fiscal mexicana. El incumplimiento
        en los pagos podrá derivar en la suspensión o cancelación de los servicios.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">8. Confidencialidad</h2>
      <p className="mb-6">
        STRATIK se compromete a mantener la confidencialidad de la información que el cliente
        proporcione, salvo que su divulgación sea requerida por ley o por autoridad competente.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">9. Modificaciones</h2>
      <p className="mb-6">
        STRATIK podrá modificar estos Términos y Condiciones en cualquier momento. La versión más
        reciente estará disponible en{" "}
        <Link
          href="https://stratik.com.mx/terminos-de-servicio"
          target="_blank"
          className="text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          https://stratik.com.mx/terminos-de-servicio
        </Link>
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">10. Contacto</h2>
      <p className="mb-6">
        Para cualquier duda o aclaración sobre estos términos, puede comunicarse al correo:{" "}
        <Link
          href="mailto:contacto@stratik.com.mx"
          className="text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          contacto@stratik.com.mx
        </Link>
      </p>
    </section>

    </div>
  )
}
