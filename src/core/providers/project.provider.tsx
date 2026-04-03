"use client"

import { createContext, useContext } from "react"
import { Project } from "../types/project"

const ProjectContext = createContext<Project | null>(null)

export const ProjectProvider = ({
    project,
    children
}: {
    project: Project
    children: React.ReactNode
}) => {
    return (
        <ProjectContext.Provider value={project}>
            {children}
        </ProjectContext.Provider>
    )
}

// Hook personalizado 🔥
export const useProject = () => {
    const context = useContext(ProjectContext)

    if (!context) {
        throw new Error("useProject must be used within ProjectProvider")
    }

    return context
}