// src/core/services/project.service.ts

import { Project } from "../types/project"
import { useSearchParams } from "next/navigation"

const mockProjects: Project[] = [
    {
        id: "1",
        name: "isla-diamante",
        domain: "desarrollosdiamante.com",
        isActive: true,
        createdAt: new Date().toISOString(),
        config: {
            theme: "luxury",
            features: {
                blog: true,
                testimonials: true,
                chatbot: true
            },
            sections: ["hero", "cta"]
        }
    },
    {
        id: "2",
        name: "stratik",
        domain: "stratik.com",
        isActive: true,
        createdAt: new Date().toISOString(),
        config: {
            theme: "modern",
            features: {
                blog: true,
                testimonials: true,
                chatbot: true
            },
            sections: ["hero", "cta"]
        }
    }
]

// 🔍 Detectar por dominio
export const getProjectByDomain = (domain: string): Project | null => {
    return mockProjects.find(p => domain.includes(p.domain)) || null
}

// 🧠 Fallback inteligente
export const getDefaultProject = (): Project => {
    return mockProjects[0]
}