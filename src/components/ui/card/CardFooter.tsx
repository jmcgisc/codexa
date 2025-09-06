// app/blog/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from '../../../components/ui/input'
import { Card, CardContent } from '../../../components/ui/card'

// Simulación de posts
const posts = [
  {
    slug: 'primer-post',
    title: 'Primer Post',
    description: 'Este es un post de prueba para el blog.',
    date: '2025-09-04',
    tags: ['Next.js', 'Blog'],
  },
  {
    slug: 'segundo-post',
    title: 'Segundo Post',
    description: 'Otro ejemplo de publicación con etiquetas.',
    date: '2025-09-01',
    tags: ['React', 'Tips'],
  },
]

export default function BlogPage() {
  const [query, setQuery] = useState('')

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.description.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Explora nuestras últimas publicaciones.
        </p>

        {/* Buscador */}
        <div className="mb-10">
          <Input
            type="text"
            placeholder="Buscar posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-md"
          />
        </div>

        {/* Grid de posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card
                key={post.slug}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {new Date(post.date).toLocaleDateString('es-MX', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      Leer más →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            No se encontraron publicaciones.
          </p>
        )}
      </div>
    </section>
  )
}
