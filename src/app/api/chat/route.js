import { NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET() {
  return NextResponse.json({ status: "ok", message: "API de Evelyn funcionando ✅" });
}
export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ response: "❌ Mensaje vacío." }, { status: 400 });
    }

    // 1. Crear embedding
    let embedding;
    try {
      const embeddingRes = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: message,
      });
      embedding = embeddingRes.data[0].embedding;
    } catch (err) {
      console.error("❌ Error creando embedding:", err);
      return NextResponse.json({ response: "Error creando embedding" }, { status: 500 });
    }

    // 2. Buscar en Supabase
    let context = "";
    try {
      const { data: matches, error } = await supabase.rpc("match_documents", {
        query_embedding: embedding,
        match_threshold: 0.5,
        match_count: 3,
      });

      if (error) {
        console.error("❌ Error Supabase:", error);
      }

      context =
        matches && matches.length > 0
          ? matches.map((m) => m.content).join("\n")
          : "No encontré información en la base de datos.";
    } catch (err) {
      console.error("❌ Error consultando Supabase:", err);
      context = "Error al buscar en la base de datos.";
    }

    // 3. Generar respuesta con OpenAI
    let reply;
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `
              Eres Evelyn, asistente virtual de Stratik.
              Usa la siguiente información para responder:
              ${context}
            `,
          },
          { role: "user", content: message },
        ],
      });

      reply = completion.choices[0].message.content;
    } catch (err) {
      console.error("❌ Error creando respuesta con OpenAI:", err);
      reply = "Error al generar la respuesta con OpenAI.";
    }

    return NextResponse.json({ response: reply });
  } catch (error) {
    console.error("❌ Error general en /api/chat:", error);
    return NextResponse.json(
      { response: "Error interno en el servidor", details: error.message },
      { status: 500 }
    );
  }
}
