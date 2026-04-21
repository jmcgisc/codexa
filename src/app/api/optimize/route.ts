import { NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
    try {
        const { source } = await req.json()

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "Eres un experto en conversión de landing pages. Responde solo con un array de secciones."
                },
                {
                    role: "user",
                    content: `Usuario viene de ${source}. Devuelve un array de secciones optimizado como: ["hero","cta","contacto"]`
                }
            ]
        })

        const content = response.choices[0].message.content

        // ⚠️ parseo simple (luego lo mejoramos)
        let sections = ["hero", "servicios", "contacto"]

        try {
            sections = JSON.parse(content || "[]")
        } catch {
            console.warn("Respuesta no parseable, usando fallback")
        }

        return NextResponse.json({ sections })

    } catch (error) {
        console.error(error)

        return NextResponse.json({
            sections: ["hero", "servicios", "contacto"]
        })
    }
}