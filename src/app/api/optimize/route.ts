import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const { source } = await req.json()

    let sections = ["hero", "servicios", "contacto"]

    if (source === "ads") {
        sections = ["hero", "cta", "contacto"]
    }

    if (source === "seo") {
        sections = ["hero", "servicios", "portfolio", "contacto"]
    }

    return NextResponse.json({ sections })
}