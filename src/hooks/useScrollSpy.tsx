import { useEffect, useState } from 'react'

export default function useScrollSpy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visibleSections.length > 0) {
          setActiveId(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: [0.1, 0.5, 1.0],
      }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, offset])

  return activeId
}
