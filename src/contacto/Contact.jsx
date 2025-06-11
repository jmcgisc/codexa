// src/components/sections/Contact.tsx
export default function Contact() {
  return (
    <section className="py-24 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Contáctanos</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        ¿Listo para empezar tu proyecto web? Envíanos un mensaje y te contactamos en menos de 24h.
      </p>
      <form className="max-w-xl mx-auto grid gap-4">
        <input type="text" placeholder="Nombre" className="border p-3 rounded-lg" />
        <input type="email" placeholder="Correo electrónico" className="border p-3 rounded-lg" />
        <textarea placeholder="Mensaje" rows={4} className="border p-3 rounded-lg" />
        <button type="submit" className="bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">
          Enviar mensaje
        </button>
      </form>
    </section>
  )
}
