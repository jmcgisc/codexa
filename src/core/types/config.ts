export interface ProjectConfig {
    theme: string
    features: {
        blog: boolean
        testimonials: boolean
        chatbot: boolean
    }
    sections: string[] // 🔥 NUEVO
}