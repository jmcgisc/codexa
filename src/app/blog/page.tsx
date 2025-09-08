// app/blog/page.tsx
'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Input } from '../../components/ui/input'
import { Card, CardContent } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import Navbar from '@/src/components/sections/Navbar'
import Footer from "@/src/components/layout/Footer"

import { Search, Calendar, User, Clock, Tag, Filter, X, ArrowRight, BookOpen, Sparkles, Eye } from 'lucide-react'

// Importar los posts desde el archivo
import { posts, getAllTags } from '../../lib/posts'

export default function BlogPage() {
  const [query, setQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'date' | 'readTime' | 'popularity'>('date')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const legalPages = {
    privacyPolicy: "/politica-privacidad",
    termsOfService: "/terminos-servicio"
  };

  const allCategories = getAllTags()

  const filteredPosts = useMemo(() => {
    return posts
      .filter(post => {
        // Filtro por búsqueda
        const matchesSearch = 
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        
        // Filtro por categorías
        const matchesCategories = selectedCategories.length === 0 || 
          post.tags.some(tag => selectedCategories.includes(tag))
        
        return matchesSearch && matchesCategories
      })
      .sort((a, b) => {
        // Ordenar
        if (sortBy === 'date') {
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        } else if (sortBy === 'readTime') {
          return (b.readTime || 0) - (a.readTime || 0)
        } else {
          // Popularidad (simulada)
          return Math.random() - 0.5
        }
      })
  }, [query, selectedCategories, sortBy])

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    )
  }

  const clearFilters = () => {
    setQuery('')
    setSelectedCategories([])
  }

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

  return (
    <>    
      <Navbar />
      
      <section className="min-h-screen py-12 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Explora nuestro conocimiento</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Blog de <span className="text-blue-600 dark:text-blue-400">Stratik</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Descubre artículos, tutoriales y noticias sobre desarrollo web, marketing digital, chatbots IA y transformación digital.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Next.js', 'SEO', 'IA', 'Marketing', 'LegalTech'].map((tag) => (
              <span 
                key={tag}
                className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm border transition-all hover:scale-105 ${getTagColor(tag)}`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Filtros y búsqueda */}
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 mb-10">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 w-full h-12 text-lg border-2 focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="flex gap-3 items-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="md:hidden flex items-center gap-2 border-2"
                >
                  <Filter size={16} />
                  Filtros
                </Button>

                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'date' | 'readTime' | 'popularity')}
                  className="px-4 py-2 h-12 rounded-lg border-2 border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="date">Más recientes</option>
                  <option value="readTime">Tiempo de lectura</option>
                  <option value="popularity">Más populares</option>
                </select>
              </div>
            </div>

            {/* Filtros de categoría - Desktop */}
            <div className="hidden md:flex flex-wrap gap-2 mt-6">
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all ${getTagColor(category)} ${
                    selectedCategories.includes(category) ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                  }`}
                >
                  <Tag size={14} />
                  {category}
                </button>
              ))}
            </div>

            {/* Filtros activos */}
            {(query || selectedCategories.length > 0) && (
              <div className="flex items-center gap-3 mt-4 flex-wrap">
                <span className="text-sm text-gray-500 dark:text-gray-400">Filtros activos:</span>
                
                {query && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                    Búsqueda: "{query}"
                    <button onClick={() => setQuery('')} className="ml-1 hover:text-blue-900">
                      <X size={14} />
                    </button>
                  </span>
                )}
                
                {selectedCategories.map(category => (
                  <span key={category} className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                    {category}
                    <button onClick={() => toggleCategory(category)} className="ml-1 hover:text-blue-900">
                      <X size={14} />
                    </button>
                  </span>
                ))}
                
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-blue-600 dark:text-blue-400 text-sm">
                  Limpiar todos
                </Button>
              </div>
            )}
          </div>

          {/* Grid de posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.slug}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-neutral-800 dark:bg-neutral-800 rounded-2xl hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                      <div className="absolute inset-0 flex items-center justify-center text-blue-500 dark:text-blue-300 opacity-20">
                        <BookOpen size={64} />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 rounded-md shadow-sm text-xs font-medium ${getTagColor(post.tags[0])}`}>
                        {post.tags[0]}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      <span className="bg-white/90 dark:bg-neutral-900/90 text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
                        <Eye size={12} />
                        1.2K
                      </span>
                      <span className="bg-white/90 dark:bg-neutral-900/90 text-xs font-medium px-2 py-1 rounded-md">
                        {post.readTime} min
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar size={14} />
                      <span>
                        {new Date(post.date).toLocaleDateString('es-MX', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {post.author?.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 text-xs rounded-full ${getTagColor(tag)}`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30"
                    >
                      Leer artículo
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Search size={64} className="mx-auto opacity-50" />
              </div>
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-400 mb-2">
                No se encontraron publicaciones
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
                No hay resultados que coincidan con tu búsqueda. Intenta con otros términos o categorías.
              </p>
              <Button onClick={clearFilters} size="lg" className="gap-2">
                <X size={16} />
                Limpiar filtros
              </Button>
            </div>
          )}

          {/* Newsletter Subscription */}
          <div className="mt-16 bg-gradient-to-r from-blue-800 to-blue-400 rounded-2xl p-8 text-center text-white shadow-lg">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-2">Suscríbete a nuestro blog</h3>
              <p className="mb-6 opacity-90">Recibe las últimas actualizaciones y artículos directamente en tu correo.</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Tu email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 flex-1"
                />
                <Button className="bg-blue-400 text-blue-600 hover:bg-gray-100 h-12 px-6">
                  Suscribirse
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros móviles */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white dark:bg-neutral-900 shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Filtros</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-3 text-gray-900 dark:text-white">Categorías</h4>
              <div className="space-y-2">
                {allCategories.map(category => (
                  <label key={category} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 dark:text-gray-300">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={() => setMobileFiltersOpen(false)} 
              className="w-full bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              Aplicar filtros
            </Button>
          </div>
        </div>
      )}

      <Footer legalPages={legalPages} />
    </>
  )
}