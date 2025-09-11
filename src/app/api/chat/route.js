import { NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

// Inicializar OpenAI y Supabase
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// 🚦 Memoria simple en servidor (ideal migrar a Redis o DB si quieres más control)
const sessionUsage = {}; // { ip: { count: number, lastMessage: timestamp } }
const MAX_MESSAGES = 10;
const RATE_LIMIT_MS = 5000;

export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ response: "❌ Mensaje vacío." }, { status: 400 });
    }

    // 📌 Identificar usuario por IP (mejor usar auth en proyectos serios)
    const ip = req.headers.get("x-forwarded-for") || "anon";
    const now = Date.now();

    if (!sessionUsage[ip]) {
      sessionUsage[ip] = { count: 0, lastMessage: 0 };
    }

    const usage = sessionUsage[ip];

    // 1. Límite de mensajes
    if (usage.count >= MAX_MESSAGES) {
      return NextResponse.json(
        { response: "⚠️ Has alcanzado el límite de mensajes en esta sesión." },
        { status: 429 }
      );
    }

    // 2. Rate limit
    if (now - usage.lastMessage < RATE_LIMIT_MS) {
      return NextResponse.json(
        { response: "⚠️ Espera unos segundos antes de enviar otro mensaje." },
        { status: 429 }
      );
    }

    // Actualizar uso
    usage.count++;
    usage.lastMessage = now;

    // 🔹 Crear embedding
    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
    });
    const embedding = embeddingRes.data[0].embedding;

    // 🔹 Buscar contexto en Supabase
    let context = "";
    try {
      const { data: matches, error } = await supabase.rpc("match_documents", {
        query_embedding: embedding,
        match_threshold: 0.5,
        match_count: 3,
      });

      if (error) console.error("❌ Error Supabase:", error);

      context =
        matches && matches.length > 0
          ? matches.map((m) => m.content).join("\n")
          : "No encontré información en la base de datos.";
    } catch (err) {
      console.error("❌ Error consultando Supabase:", err);
      context = "Error al buscar en la base de datos.";
    }

    // 🔹 Generar respuesta con OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Eres Evelyn, asistente virtual de Stratik. Usa la siguiente información para responder:\n${context}`,
        },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;

    return NextResponse.json({ response: reply });
  } catch (error) {
    console.error("❌ Error general en /api/chat:", error);
    return NextResponse.json(
      { response: "Error interno en el servidor", details: error.message },
      { status: 500 }
    );
  }
}
