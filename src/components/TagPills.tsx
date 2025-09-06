// /components/TagPills.tsx
"use client"
import { motion } from "framer-motion"

interface TagPillsProps {
  tags: string[]
  active?: string | null
  onSelect?: (tag: string | null) => void
}

export default function TagPills({ tags, active, onSelect }: TagPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onSelect?.(null)}
        aria-pressed={!active}
        className={`px-3 py-1 rounded-full text-sm ${
          !active ? "bg-primary text-white" : "bg-muted/40 text-muted-foreground"
        }`}
      >
        Todos
      </motion.button>

      {tags.map((t) => {
        const isActive = active === t
        return (
          <motion.button
            key={t}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect?.(t)}
            aria-pressed={isActive}
            className={`px-3 py-1 rounded-full text-sm ${
              isActive ? "bg-primary text-white" : "bg-muted/20 text-muted-foreground"
            }`}
          >
            {t}
          </motion.button>
        )
      })}
    </div>
  )
}
