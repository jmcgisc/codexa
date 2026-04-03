"use client"

import { useProject } from "@/src/core/providers/project.provider"

export const DynamicLanding = () => {
    const project = useProject()

    return (
        <div className="p-10 space-y-6">
            <h1 className="text-4xl font-bold">
                🚀 Proyecto: {project.name}
            </h1>

            <p className="text-lg">
                Dominio: {project.domain}
            </p>

            <div className="p-4 rounded-lg border">
                <h2 className="font-semibold">🎨 Theme:</h2>
                <p>{project.config.theme}</p>
            </div>

            <div className="p-4 rounded-lg border">
                <h2 className="font-semibold">⚙️ Features:</h2>
                <ul className="list-disc ml-5">
                    <li>Blog: {project.config.features.blog ? "✅" : "❌"}</li>
                    <li>Testimonials: {project.config.features.testimonials ? "✅" : "❌"}</li>
                    <li>Chatbot: {project.config.features.chatbot ? "✅" : "❌"}</li>
                </ul>
            </div>
        </div>
    )
}