// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Calendar, User, Clock, ArrowLeft, Share, BookOpen, MessageCircle, Eye, ArrowRight } from 'lucide-react'
import { getPostBySlug, getRelatedPosts, getAllPosts } from '../../../lib/posts'
import Navbar from '@/src/components/sections/Navbar'
import Footer from "@/src/components/layout/Footer"
import NewsletterSubscription from '@/src/components/NewsletterSubscription'

interface BlogPostParams {
  params: {
    slug: string
  }
}

// Función requerida para export estático
export async function generateStaticParams() {
  const posts = getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Metadata dinámica para SEO
export async function generateMetadata({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Artículo no encontrado | Blog de Stratik',
    }
  }
  
  return {
    title: `${post.title} | Blog de Stratik`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Stratik'],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const legalPages = {
    privacyPolicy: "/politica-privacidad",
    termsOfService: "/terminos-servicio"
  }

  const relatedPosts = getRelatedPosts(params.slug)

  // Función para obtener un color basado en el tag
  const getTagColor = (tag: string) => {
    const tagColors: Record<string, string> = {
      'Next.js': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'React': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
      'SEO': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'IA': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Marketing': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
      'LegalTech': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
      'Frontend': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Desarrollo Web': 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
      'Atención al Cliente': 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
      'Automatización': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'Transformación Digital': 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
      'Documentos': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
      'Productividad': 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300',
      'Contenido': 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300',
      'Estrategia Digital': 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300',
      'Posicionamiento': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    };
    
    return tagColors[tag] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  };

  // Componentes personalizados para ReactMarkdown
  const MarkdownComponents = {
    h1: ({node, ...props}: any) => <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4" {...props} />,
    h2: ({node, ...props}: any) => <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 border-b border-gray-200 dark:border-neutral-700 pb-2" {...props} />,
    h3: ({node, ...props}: any) => <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3" {...props} />,
    h4: ({node, ...props}: any) => <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2" {...props} />,
    p: ({node, ...props}: any) => <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed" {...props} />,
    ul: ({node, ...props}: any) => <ul className="list-disc list-inside mb-6 space-y-2" {...props} />,
    ol: ({node, ...props}: any) => <ol className="list-decimal list-inside mb-6 space-y-2" {...props} />,
    li: ({node, ...props}: any) => <li className="text-gray-600 dark:text-gray-300 leading-relaxed" {...props} />,
    blockquote: ({node, ...props}: any) => <blockquote className="border-l-4 border-blue-600 bg-blue-50 dark:bg-blue-900/20 px-6 py-4 my-6 italic text-gray-700 dark:text-gray-300" {...props} />,
    a: ({node, ...props}: any) => <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium" {...props} />,
    strong: ({node, ...props}: any) => <strong className="font-semibold text-gray-900 dark:text-white" {...props} />,
    code: ({node, ...props}: any) => <code className="bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded text-sm font-mono" {...props} />,
    pre: ({node, ...props}: any) => <pre className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg my-6 overflow-x-auto" {...props} />,
    table: ({node, ...props}: any) => <table className="w-full border-collapse my-6" {...props} />,
    th: ({node, ...props}: any) => <th className="border border-gray-200 dark:border-neutral-700 px-4 py-2 bg-gray-100 dark:bg-neutral-800 font-semibold text-left" {...props} />,
    td: ({node, ...props}: any) => <td className="border border-gray-200 dark:border-neutral-700 px-4 py-2" {...props} />,
  };

  return (
    <>
      <Navbar />
      
      <article className="min-h-screen bg-white dark:bg-neutral-900">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 pt-24 pb-16">
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent dark:from-neutral-900/80"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <Link 
              href="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors font-medium group"
            >
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver al blog
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1.5 text-sm rounded-full font-medium ${getTagColor(tag)}`}
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {post.author?.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                {new Date(post.date).toLocaleDateString('es-MX', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                {post.readTime} min de lectura
              </div>
              <div className="flex items-center">
                <Eye size={18} className="mr-2" />
                <span>1.2K vistas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                <div className="text-6xl font-bold opacity-20 text-blue-500 dark:text-blue-300">
                  {post.tags[0].charAt(0)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={MarkdownComponents}
            >
              {post.content as string}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-200 dark:border-neutral-700">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Etiquetas:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1.5 text-sm rounded-full ${getTagColor(tag)}`}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-gray-50 dark:bg-neutral-800 rounded-2xl">
            <span className="text-lg font-medium text-gray-700 dark:text-gray-300">Comparte este artículo:</span>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Share size={18} />
                Compartir
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-neutral-600 transition-colors">
                <MessageCircle size={18} />
                Comentar
              </button>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gray-50 dark:bg-neutral-800 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-sm">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {post.author?.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.author}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Especialista en {post.tags[0]} con experiencia en la industria. Apasionado por compartir conocimiento y mejores prácticas.
                </p>
              </div>
            </div>
            </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <BookOpen size={24} className="mr-3 text-blue-600 dark:text-blue-400" />
                Artículos relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block bg-white dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 group border border-gray-100 dark:border-neutral-700"
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Clock size={14} />
                      <span>{relatedPost.readTime} min</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm">
                      Leer artículo
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Newsletter Subscription */}
                <NewsletterSubscription variant="inline" />

      </article>

      <Footer legalPages={legalPages} />
    </>
  )
}