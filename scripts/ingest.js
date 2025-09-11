import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY 
);

const documents = [
  "Stratik ofrece desarrollo web moderno con React y Next.js.",
  "La empresa crea agentes de inteligencia artificial personalizados.",
  "Stratik brinda servicios de marketing digital y SEO.",
  "Se especializan en seguridad digital y firmas criptográficas.",
  "Diseñan y desarrollan tiendas online seguras y escalables.",
];

async function ingest() {
  for (const doc of documents) {
    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: doc,
    });

    const { error } = await supabase.from("documents").insert({
      content: doc,
      embedding: embedding.data[0].embedding,
    });

    if (error) {
      console.error("❌ Error insertando:", error);
    } else {
      console.log("✅ Insertado:", doc);
    }
  }
}

ingest();