"use client"

import { useProject } from "@/src/core/providers/project.provider"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

// 🔥 Importa tus secciones reales
import Hero from "@/src/components/sections/Hero"
import Services from "@/src/components/sections/Services"
import Works from "@/src/components/portfolio/Works"
import FormularioContacto from "@/src/components/email/FormularioContacto"

// 🧠 Mapa de secciones
const sectionMap: Record<string, React.ReactNode> = {
    hero: <Hero />,
    servicios: <Services />,
    portfolio: <Works />,
    contacto: <FormularioContacto />,
    cta: (
        <div className="p-20 text-center text-2xl font-bold">
            🚀 CTA DINÁMICO
        </div>
    )
}

export const DynamicSections = () => {
    const project = useProject()
    const searchParams = useSearchParams()

    const variant = searchParams?.get("v")

    // 🔥 Estado dinámico
    const [sections, setSections] = useState<string[]>(project.config.sections)

    useEffect(() => {
        const fetchSections = async () => {
            try {
                const res = await fetch("/api/optimize", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        source: variant || "default"
                    })
                })

                const data = await res.json()

                if (data?.sections) {
                    setSections(data.sections)
                }
            } catch (error) {
                console.error("Error loading optimized sections:", error)

                // fallback si falla API
                setSections(project.config.sections)
            }
        }

        fetchSections()
    }, [variant, project.config.sections])

    return (
        <>
            {sections.map((section) => (
                <div key={section}>
                    {sectionMap[section] || null}
                </div>
            ))}
        </>
    )
}