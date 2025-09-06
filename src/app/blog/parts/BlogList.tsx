// /app/blog/parts/BlogList.tsx
"use client"
import { useMemo, useState } from "react"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import { Search } from "lucide-react"
import BlogCard from "../../../components/BlogCard"
import TagPills from "../../../components/TagPills"
import { getSortedPosts, getAllTags } from "../../../lib/posts"

export default function BlogList() {
const allPosts = getSortedPosts()
const tags = getAllTags()


const [q, setQ] = useState("")
const [tag, setTag] = useState<string | null>(null)


const filtered = useMemo(() => {
const byTag = tag ? allPosts.filter((p) => p.tags.includes(tag)) : allPosts
const bySearch = q
? byTag.filter((p) =>
(p.title + p.excerpt + p.tags.join(" ")).toLowerCase().includes(q.toLowerCase())
)
: byTag
return bySearch
}, [allPosts, q, tag])


return (
<div className="mt-8">
<div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
<div className="flex items-center gap-2 w-full md:w-80">
<div className="relative w-full">
<Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input
placeholder="Buscar artículos..."
className="pl-8"
value={q}
onChange={(e) => setQ(e.target.value)}
/>
</div>
{q && (
<Button variant="ghost" onClick={() => setQ("")}>Limpiar</Button>
)}
</div>
<TagPills tags={tags} active={tag} onSelect={setTag} />
</div>


<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{filtered.map((p) => (
<BlogCard key={p.slug} {...p} />
))}
</div>


{filtered.length === 0 && (
<div className="text-muted-foreground mt-10">No encontramos resultados con esos filtros.</div>
)}
</div>
)
}