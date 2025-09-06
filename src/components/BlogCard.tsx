// /components/BlogCard.tsx
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent} from "../components/ui/card"
// /components/BlogCard.tsx
export default function BlogCard({
  slug,
  title,
  excerpt,
  cover,
  tags,
  date,
  readingTime,
}: {
  slug: string
  title: string
  excerpt: string
  cover?: string
  tags: string[]
  date: string
  readingTime?: string
}) {
  const dt = new Date(date)
  const formatted = dt.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  })

  return (
    <Link href={`/blog/${slug}`} className="group">
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
        {cover && (
          <div className="relative aspect-[16/9]">
            <Image src={cover} alt={title} fill className="object-cover group-hover:scale-105 transition-transform" />
          </div>
        )}
        <CardContent className="p-4 md:p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="text-sm text-muted-foreground flex items-center gap-2 mb-3">
            <span>{formatted}</span>
            {readingTime && <span>• {readingTime}</span>}
          </div>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>

          <div className="mt-3 flex gap-2 flex-wrap">
            {tags.map((t) => (
              <span key={t} className="text-xs rounded-full px-2 py-1 bg-muted/30">{t}</span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
