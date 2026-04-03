"use client"

import { useProject } from "@/src/core/providers/project.provider"

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    const project = useProject()

    const themeClass =
        project.config.theme === "luxury"
            ? "bg-black text-yellow-400"
            : "bg-white text-black"

    return (
        <div className={themeClass}>
            {children}
        </div>
    )
}