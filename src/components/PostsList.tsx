// /components/PostsList.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Post, getAllTags, getPostsByTag, getSortedPosts } from '../lib/posts';
import Image from 'next/image';

interface PostsListProps {
  initialPosts?: Post[];
  showFilters?: boolean;
}

export default function PostsList({ initialPosts, showFilters = true }: PostsListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const allTags = getAllTags();
  const posts = selectedTag ? getPostsByTag(selectedTag) : (initialPosts || getSortedPosts());

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {showFilters && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Filtrar por categoría</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedTag === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Todos
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {post.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">{post.date}</span>
                {post.readTime && (
                  <span className="text-sm text-gray-500">{post.readTime} min read</span>
                )}
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-900 hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              {post.author && (
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Por {post.author}</span>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedTag(tag);
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Leer más →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">No se encontraron posts</h3>
          <p className="text-gray-500 mt-2">Intenta con otra categoría</p>
        </div>
      )}
    </div>
  );
}