'use client'

import Link from "next/link"
import Image from "next/image"
import { posts } from "@/src/data/posts"

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Nuestro Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <Image
              src={post.cover}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
              <span className="block mt-4 text-sm text-indigo-600">
                {new Date(post.date).toLocaleDateString("es-MX")}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
