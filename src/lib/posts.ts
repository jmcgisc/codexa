// /lib/posts.ts
export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  content: string // Cambiado de React.ReactNode a string
  image?: string
  author?: string
  readTime?: number
}

export const posts: Post[] = [
  {
    slug: "diseno-web-nextjs",
    title: "Diseño Web Moderno con Next.js",
    excerpt: "Aprende las mejores prácticas para crear sitios web modernos y rápidos con Next.js y React.",
    date: "2025-09-10",
    tags: ["Next.js", "React", "Desarrollo Web", "Frontend"],
    image: "/images/blog/nextjs-design.jpg",
    author: "Ana Martínez",
    readTime: 8,
    content: `# Diseño Web Moderno con Next.js

En el mundo actual, tener un sitio web rápido, atractivo y funcional ya no es una opción, sino una necesidad. Next.js se ha posicionado como uno de los frameworks más poderosos para el desarrollo web moderno.

## ¿Por qué Next.js?

Next.js ofrece ventajas significativas sobre otras soluciones:

- **Renderizado híbrido**: Combina Static Site Generation (SSG) y Server-Side Rendering (SSR)
- **Optimización automática**: Mejora el rendimiento con code splitting y optimización de imágenes
- **TypeScript nativo**: Soporte completo para TypeScript sin configuración adicional
- **Ecosistema robusto**: Integración perfecta con Vercel y otras plataformas de despliegue

## Mejores Prácticas

### 1. Estructura de proyecto
Organiza tu código de manera escalable desde el principio:
- Usa la estructura de carpetas que Next.js recomienda
- Separa componentes reutilizables en una carpeta components
- Mantén los estilos organizados con CSS modules o Tailwind CSS

### 2. Optimización de imágenes
Next.js incluye un componente Image que optimiza automáticamente:
- Reducción de tamaño sin pérdida de calidad
- Soporte para formatos modernos como WebP
- Lazy loading integrado

### 3. SEO integrado
Con Next.js, el SEO viene integrado:
- Meta tags fácilmente configurables
- URLs amigables con el sistema de routing
- Sitemaps generados automáticamente

## Conclusión

Next.js ha revolucionado el desarrollo frontend al ofrecer un framework completo que soluciona los problemas más comunes de rendimiento, SEO y experiencia de usuario.

> ¿Necesitas una web moderna y rápida? [Contáctanos](/contacto) para hablar sobre tu proyecto.`
  },
  {
    slug: "seo-2025-tendencias",
    title: "Tendencias SEO para 2025",
    excerpt: "Descubre las estrategias de SEO que dominarán el próximo año y cómo prepararte para ellas.",
    date: "2025-09-04",
    tags: ["SEO", "Marketing Digital", "Posicionamiento"],
    image: "/images/blog/seo-trends.jpg",
    author: "Carlos López",
    readTime: 6,
    content: `# Tendencias SEO para 2025

El SEO evoluciona constantemente, и 2025 no será la excepción. Las estrategias que funcionaban hace dos años ya no son suficientes para competir en los resultados de búsqueda.

## Las 5 Tendencias Clave para 2025

### 1. Búsqueda por voz y asistencia virtual
Con el crecimiento de dispositivos inteligentes, la búsqueda por voz seguirá aumentando:
- Optimiza para preguntas conversacionales
- Crea contenido que responda a preguntas específicas
- Incluye schema markup para preguntas frecuentes

### 2. Experiencia de usuario como factor de ranking
Google prioriza sitios que ofrecen una excelente experiencia:
- Core Web Vitals seguirán siendo cruciales
- Diseño mobile-first no es negociable
- Tiempo de permanencia en la página importa más que nunca

### 3. Contenido E-A-T (Expertise, Authoritativeness, Trustworthiness)
La calidad del contenido sigue ganando importancia:
- Incluye credenciales de autores expertos
- Cita fuentes confiables y estudios
- Mantén la información actualizada

### 4. Inteligencia Artificial en SEO
Herramientas IA para análisis y optimización:
- Análisis predictivo de keywords
- Generación de meta descripciones optimizadas
- Identificación automática de oportunidades

### 5. Video como contenido principal
El video seguirá dominando el engagement:
- Optimiza videos con transcripciones
- Utiliza miniaturas atractivas
- Incluye videos en fragmentos destacados

## Preparación para 2025

Comienza hoy mismo a implementar estas estrategias para estar preparado para los cambios del próximo año. La consistencia y la calidad seguirán siendo los pilares del SEO exitoso.

> ¿Quieres que auditemos tu SEO? [Solicita un análisis gratuito](/servicios/seo).`
  },
  {
    slug: "chatbots-ia",
    title: "Chatbots con IA: Revolucionando la Atención al Cliente",
    excerpt: "Cómo implementar chatbots inteligentes que mejoran la experiencia del cliente y reducen costos.",
    date: "2025-09-01",
    tags: ["IA", "Chatbots", "Atención al Cliente", "Automatización"],
    image: "/images/blog/chatbots-ia.jpg",
    author: "María González",
    readTime: 10,
    content: `# Chatbots con IA: Revolucionando la Atención al Cliente

La inteligencia artificial está transformando radicalmente cómo las empresas interactúan con sus clientes. Los chatbots modernos ya no son simples scripts de respuestas predefinidas, sino asistentes inteligentes capaces de mantener conversaciones naturales.

## ¿Por qué implementar chatbots con IA?

### Beneficios clave:
- **Disponibilidad 24/7**: Atención ininterrumpida sin costos adicionales
- **Escalabilidad**: Maneja miles de conversaciones simultáneas
- **Reducción de costos**: Disminuye la carga del equipo de soporte
- **Consistencia**: Respuestas uniformes y precisas
- **Análisis de datos**: Recopila insights valiosos sobre tus clientes

## Tipos de Chatbots Inteligentes

### 1. Chatbots basados en reglas
Funcionan con flujos predefinidos y son ideales para:
- Preguntas frecuentes (FAQ)
- Procesos de onboarding
- Solicitudes simples

### 2. Chatbots con NLP (Procesamiento de Lenguaje Natural)
Entienden la intención del usuario incluso con frases no predefinidas:
- Asistentes virtuales avanzados
- Soporte técnico complejo
- Recomendaciones personalizadas

### 3. Chatbots con Machine Learning
Mejoran continuamente con cada interacción:
- Sistemas de recomendación
- Detección de fraudes
- Análisis de sentimientos

## Implementación Exitosa

### Pasos para implementar un chatbot efectivo:

1. **Define objetivos claros**: ¿Qué problemas resolverá tu chatbot?
2. **Diseña conversaciones naturales**: Evita respuestas robóticas
3. **Integra con tus sistemas**: CRM, bases de datos, etc.
4. **Prueba exhaustivamente**: Diferentes escenarios y usuarios
5. **Mide y optimiza**: Analiza métricas de efectividad

## Ejemplos de Uso Exitoso

### E-commerce:
- Asistencia en proceso de compra
- Seguimiento de pedidos
- Recomendaciones de productos

### Salud:
- Triage inicial de síntomas
- Recordatorios de medicación
- Agendamiento de citas

### Banca:
- Consultas de saldo y movimientos
- Asistencia para fraudes
- Educación financiera

## El Futuro de los Chatbots

Para 2025, se espera que los chatbots:
- Sean casi indistinguibles de humanos en conversaciones
- Anticipen necesidades antes de que el usuario las exprese
- Integren multimodalidad (voz, texto, imágenes)

> ¿Interesado en implementar un chatbot? [Descubre nuestras soluciones](/servicios/chatbots).`
  },
  {
    slug: "legaltech-documentos-digitales",
    title: "LegalTech: Digitalización de Documentos Legales",
    excerpt: "La transformación digital en el sector legal y cómo está cambiando la gestión documental.",
    date: "2025-08-28",
    tags: ["LegalTech", "Transformación Digital", "Documentos"],
    image: "/images/blog/legaltech.jpg",
    author: "Javier Rodríguez",
    readTime: 7,
    content: `# LegalTech: Digitalización de Documentos Legales

El sector legal tradicionalmente ha sido uno de los más reticentes a la transformación digital, pero esto está cambiando rápidamente. La tecnología legal (LegalTech) está revolucionando cómo se gestionan, almacenan y procesan los documentos legales.

## La Importancia de la Digitalización Legal

### Problemas de la gestión documental tradicional:
- **Almacenamiento físico costoso**: Archivadores, espacio físico, mantenimiento
- **Inacessibilidad**: Documentos difíciles de encontrar y compartir
- **Riesgo de pérdida**: Incendios, inundaciones o extravíos
- **Ineficiencia**: Tiempo perdido en búsquedas y gestiones manuales

## Tecnologías Clave en LegalTech

### 1. Blockchain para documentos legales
- **Inmutabilidad**: Registros que no pueden alterarse
- **Timestamping**: Verificación de fecha y hora exacta
- **Smart contracts**: Ejecución automática de cláusulas

### 2. Inteligencia Artificial
- **Revisión de contratos**: Análisis de cláusulas y detección de riesgos
- **Búsqueda predictiva**: Encuentra documentos y precedentes relevantes
- **Automatización**: Generación de documentos estándar

### 3. Firma digital avanzada
- **Validez legal**: Reconocida por entidades gubernamentales
- **Seguridad**: Cifrado de grado militar
- **Auditoría**: Trazabilidad completa del proceso de firma

## Beneficios de la Digitalización Legal

### Para bufetes y departamentos legales:
- **Ahorro de costos**: Reducción de hasta 60% en gestión documental
- **Mayor productividad**: Automatización de tareas repetitivas
- **Mejor servicio**: Respuestas más rápidas a clientes
- **Ventaja competitiva**: Diferenciación en el mercado

### Para clientes:
- **Acceso 24/7**: Documentos disponibles en cualquier momento
- **Transparencia**: Seguimiento del estado de sus casos
- **Comodidad**: Firmas digitales sin desplazamientos

## Implementación Paso a Paso

### 1. Evaluación inicial
Análisis de procesos existentes y identificación de oportunidades

### 2. Digitalización de archivos
Conversión de documentos físicos a formatos digitales con OCR

### 3. Implementación de software
Sistemas de gestión documental y plataformas de firma digital

### 4. Capacitación
Formación a equipos legales en el uso de nuevas herramientas

### 5. Migración y optimización
Transición completa con mejora continua

## Caso de Éxito: Bufete Hernández & Asociados

Después de implementar nuestra solución LegalTech:
- **75% menos tiempo** en gestión documental
- **Ahorro de $20,000 anuales** en almacenamiento
- **Satisfacción del cliente aumentada** en 40%

> ¿Listo para modernizar tu práctica legal? [Agenda una consultoría gratuita](/servicios/legaltech).`
  },
  {
    slug: "tailwind-css-productividad",
    title: "Aumenta tu Productividad con Tailwind CSS",
    excerpt: "Cómo Tailwind CSS puede acelerar tu flujo de trabajo de desarrollo frontend.",
    date: "2025-08-25",
    tags: ["Tailwind CSS", "Frontend", "Productividad"],
    image: "/images/blog/tailwind.jpg",
    author: "Laura Fernández",
    readTime: 5,
    content: `# Aumenta tu Productividad con Tailwind CSS

Tailwind CSS ha revolucionado la forma en que los desarrolladores frontend trabajan, ofreciendo un enfoque utility-first que acelera el desarrollo y mantiene la consistencia visual.

## ¿Qué es Tailwind CSS?

Tailwind es un framework CSS utility-first que permite construir diseños personalizados directamente en tu HTML, sin necesidad de escribir CSS personalizado en la mayoría de los casos.

### Ventajas sobre frameworks tradicionales:

- **Personalización total**: Sin limitarte to componentes predefinidos
- **Consistencia visual**: Utilizando un sistema de diseño unificado
- **CSS mínimo**: Genera solo las clases que usas, sin código innecesario
- **Responsive fácil**: Clases integradas para todos los breakpoints

## Mejores Prácticas con Tailwind

### 1. Configuración personalizada
Personaliza tu archivo tailwind.config.js para:
- Definir colores de marca
- Establecer fuentes corporativas
- Crear spacing y sizing consistentes

### 2. Componentes con @apply
Para elementos reutilizables, extrae clases a CSS:
\`\`\`css
.btn-primary {
  @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
}
\`\`\`

### 3. Organización de clases
Mantén el orden para mejor legibilidad:
\`\`\`html
<!-- Orden recomendado -->
<div class="
  /* Posicionamiento */
  absolute inset-0 z-10
  
  /* Display & Box Model */
  flex items-center justify-center
  w-full h-64 p-4 m-2
  border border-gray-200 rounded-lg
  
  /* Color */
  bg-white text-gray-800
  
  /* Texto */
  text-lg font-medium
  
  /* Efectos */
  shadow-md hover:shadow-lg
  transition-all duration-200
"></div>
\`\`\`

## Plugins y Herramientas Útiles

### 1. Tailwind CSS IntelliSense
Extensión de VS Code que ofrece autocompletado y sugerencias

### 2. Headless UI
Componentes accesibles y sin estilos para usar con Tailwind

### 3. Heroicons
Biblioteca de iconos diseñada por los creadores de Tailwind

## Comparativa de Velocidad

En un proyecto promedio con 10 páginas:
- **Bootstrap**: ~40 horas de desarrollo
- **CSS personalizado**: ~35 horas de desarrollo
- **Tailwind CSS**: ~25 horas de desarrollo

**Ahorro estimado: 37%** menos tiempo de desarrollo

## Conclusión

Tailwind CSS no es solo otro framework CSS, es una filosofía de trabajo que prioriza la productividad, la consistencia y el mantenimiento a largo plazo.

> ¿Quieres implementar Tailwind en tus proyectos? [Conoce nuestros servicios de desarrollo](/servicios/desarrollo-web).`
  },
  {
    slug: "estrategias-contenido-digital",
    title: "Estrategias de Contenido para el 2025",
    excerpt: "Planifica tu estrategia de contenido con las tendencias que marcarán el próximo año.",
    date: "2025-08-20",
    tags: ["Marketing", "Contenido", "Estrategia Digital"],
    image: "/images/blog/content-strategy.jpg",
    author: "Pedro Sánchez",
    readTime: 9,
    content: `# Estrategias de Contenido para el 2025

El contenido sigue siendo el rey en el marketing digital, pero las reglas del juego están cambiando. Para destacar en 2025, necesitas una estrategia que aproveche las nuevas tendencias y tecnologías.

## Tendencias Clave para 2025

### 1. Contenido Hyper-Personalizado
La personalización masiva será estándar:
- Segmentación basada en comportamiento en tiempo real
- Contenido dinámico que se adapta a cada usuario
- IA para recomendar contenido relevante automáticamente

### 2. Audio y Voice Search Optimization
Con el crecimiento de dispositivos de voz:
- Podcasts y audio contenido en auge
- Optimización para búsquedas por voz
- Contenido en formatos conversacionales

### 3. Contenido Interactivo
Los usuarios esperan participar, no solo consumir:
- Calculadoras personalizadas
- Quizzes y evaluaciones
- Herramientas interactivas
- Realidad aumentada experiencial

### 4. E-A-T (Expertise, Authoritativeness, Trustworthiness)
Google prioriza contenido de calidad:
- Contenido creado por expertos verificables
- Citas de fuentes autorizadas
- Actualización constante de información

## Pilares de una Estrategia Exitosa

### 1. Auditoría de Contenido
Antes de crear nuevo contenido:
- Identifica qué contenido existente tiene mejor desempeño
- Encuentra oportunidades de optimización
- Elimina o actualiza contenido obsoleo

### 2. Customer Journey Mapping
Crea contenido para cada etapa del funnel:
- **Concienciación**: Blog posts, infografías, videos educativos
- **Consideración**: Webinars, casos de estudio, comparativas
- **Decisión**: Demos, testimonios, trials gratuitos

### 3. Distribución Multicanál
No basta con crear buen contenido, hay que distribuirlo:
- Redes sociales específicas para tu audiencia
- Email marketing segmentado
- Plataformas de audio y video
- Partnerships y colaboraciones

## Metricas Clave para 2025

### 1. Engagement Rate
No solo vistas, sino interacción real

### 2. Conversión de Contenido
Cómo el contenido contribuye a conversiones

### 3. Valor por Visitante
Impacto económico del contenido

### 4. Share of Voice
Presencia en comparación con competidores

## Plan de Acción para 2025

### Trimestre 1: Investigación y Planificación
- Auditoría de contenido actual
- Investigación de keywords y temas
- Plan editorial para el año

### Trimestre 2: Producción y Optimización
- Creación de contenido pillar
- Optimización de contenido existente
- Implementación de personalización

### Trimestre 3: Distribución y Amplificación
- Estrategia de redistribución
- Campañas de promoción
- Colaboraciones con influencers

### Trimestre 4: Análisis y Ajuste
- Medición de resultados
- Ajuste de estrategia
- Planificación para el próximo año

## Conclusión

El contenido seguirá siendo el pilar fundamental del marketing digital en 2025, pero las estrategias exitosas serán aquellas que se adapten a las nuevas tecnologías y expectativas de los usuarios.

> ¿Necesitas ayuda con tu estrategia de contenido? [Hablemos sobre tu proyecto](/contacto).`
  }
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllTags(): string[] {
  const s = new Set<string>()
  posts.forEach((p) => p.tags.forEach((t) => s.add(t)))
  return Array.from(s).sort()
}

export function getSortedPosts(): Post[] {
  return [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter((p) => p.tags.includes(tag))
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): Post[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];
  
  const related = posts
    .filter(post => post.slug !== currentSlug)
    .filter(post => post.tags.some(tag => currentPost.tags.includes(tag)))
    .slice(0, limit);
  
  // Si no hay suficientes posts relacionados, completar con los más recientes
  if (related.length < limit) {
    const additional = posts
      .filter(post => post.slug !== currentSlug && !related.includes(post))
      .slice(0, limit - related.length);
    
    return [...related, ...additional];
  }
  
  return related;
}

// Función adicional para obtener todos los posts
export function getAllPosts(): Post[] {
  return posts;
}