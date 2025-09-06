import { NextResponse } from "next/server"

export async function POST(req) {
  const body = await req.json()

  const phoneNumber = body.phoneNumber // cliente destino
  const message = body.message || "¡Hola desde Stratik 🚀!"

  const url = `https://graph.facebook.com/v17.0/${process.env.WHATSAPP_PHONE_ID}/messages`

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.WHATSAPP_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: phoneNumber,
      type: "text",
      text: { body: message }
    })
  })

  const data = await response.json()
  return NextResponse.json(data)
}
