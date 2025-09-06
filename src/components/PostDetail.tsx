// /components/PostDetail.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Post, getRelatedPosts } from '../lib/posts';
import PostsList from './PostsList';

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {post.image && (
        <div className="relative h-64 md:h-96 w-full mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center justify-between mb-4">
          <div className="flex items-center">
            {post.author && (
              <>
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-800">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </>
            )}
          </div>
          
          {post.readTime && (
            <span className="text-sm text-gray-500">{post.readTime} min read</span>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      
      <div className="prose prose-lg max-w-none mb-12">
        {post.content}
      </div>
      
      <div className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold mb-6">Posts relacionados</h2>
        <PostsList initialPosts={relatedPosts} showFilters={false} />
      </div>
      
      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Volver al blog
        </Link>
      </div>
    </article>
  );
}