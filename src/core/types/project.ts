// src/core/types/project.ts
import { ProjectConfig } from "./config"

export type ProjectName =
    | "isla-diamante"
    | "stratik"
    | "cliente-x"

export interface Project {
    id: string
    name: ProjectName
    domain: string
    config: ProjectConfig
    isActive: boolean
    createdAt: string
}