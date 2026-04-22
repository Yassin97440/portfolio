<script setup lang="ts">
import type { BlogPost } from '~~/shared/types/Blog'

const route = useRoute()

// Build the path from the slug
const slugPath = computed(() => {
  const slug = route.params.slug
  if (Array.isArray(slug)) {
    return '/blog/' + slug.join('/')
  }
  return '/blog/' + slug
})

// Fetch the blog post
const { data: post } = await useAsyncData(`blog-${slugPath.value}`, () =>
  queryCollection('blog').path(slugPath.value).first()
)

// 404 if post not found
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article non trouvé',
    fatal: true
  })
}

// Fetch all posts to build series navigation and related articles
const { data: allPosts } = await useAsyncData('blog-all-meta', () =>
  queryCollection('blog').all()
)

// Episodes of the same series (including current), sorted by episode number
const seriesEpisodes = computed(() => {
  const seriesName = post.value?.series?.name
  if (!seriesName || !allPosts.value) return [] as BlogPost[]
  return allPosts.value.filter(
    (p): p is typeof p & { series: { name: string, episode: number } } =>
      p.series?.name === seriesName
  ) as unknown as BlogPost[]
})

// Related posts: explicit `related` list first, then fallback by tag overlap
const relatedPosts = computed(() => {
  if (!post.value || !allPosts.value) return [] as BlogPost[]

  const currentPath = post.value.path
  const seriesName = post.value.series?.name
  const explicitPaths: string[] = post.value.related ?? []

  const byPath = new Map(allPosts.value.map(p => [p.path, p]))

  const explicit = explicitPaths
    .map(p => byPath.get(p))
    .filter((p): p is NonNullable<typeof p> => !!p && p.path !== currentPath)

  const picked = new Set(explicit.map(p => p.path))
  const currentTags = new Set<string>(post.value.tags ?? [])

  // Fallback: articles sharing at least one tag, excluding current and series episodes
  const fallback = allPosts.value
    .filter(p =>
      p.path !== currentPath
      && !picked.has(p.path)
      && (!seriesName || p.series?.name !== seriesName)
      && (p.tags ?? []).some((t: string) => currentTags.has(t))
    )
    .map(p => ({
      post: p,
      score: (p.tags ?? []).filter((t: string) => currentTags.has(t)).length
    }))
    .sort((a, b) => b.score - a.score)
    .map(x => x.post)

  return [...explicit, ...fallback].slice(0, 3) as unknown as BlogPost[]
})

// Dynamic SEO meta tags
useSeoMeta({
  title: () => post.value?.title ? `${post.value.title} | Blog | Yassin Abdulla` : 'Blog | Yassin Abdulla',
  description: () => post.value?.description || '',
  ogTitle: () => post.value?.title || 'Blog | Yassin Abdulla',
  ogDescription: () => post.value?.description || '',
  ogImage: () => post.value?.image || '/images/og-image.jpg',
  ogType: 'article',
  articlePublishedTime: () => post.value?.date || '',
  articleAuthor: () => [post.value?.author?.name || 'Yassin Abdulla'],
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://yassin.abdulla.fr/blog/' + slugPath.value
    }
  ]
})
// Format date for display
const formattedDate = computed(() => {
  if (!post.value?.date) return ''
  return new Date(post.value.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<template>
  <UPage v-if="post">
    <UPageHeader
      :title="post.title"
      :description="post.description"
    >
      <template #headline>
        <div class="flex items-center gap-3 text-sm text-muted">
          <span>{{ formattedDate }}</span>
          <span v-if="post.author">•</span>
          <span v-if="post.author">{{ post.author.name }}</span>
        </div>
      </template>

      <template #links>
        <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2 mt-4">
          <UBadge
            v-for="tag in post.tags"
            :key="tag"
            color="neutral"
            variant="subtle"
            :to="{ path: '/blog', query: { tag } }"
          >
            {{ tag }}
          </UBadge>
        </div>
      </template>
    </UPageHeader>

    <!-- Cover image -->
    <div v-if="post.image && post.image !== ''" class="mb-8">
      <UContainer>
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-64 md:h-96 object-cover rounded-lg"
        >
      </UContainer>
    </div>

    <UPageBody>
      <UContainer>
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <!-- Main content -->
          <div class="lg:col-span-8">
            <div class="prose prose-lg max-w-none">
              <ContentRenderer v-if="post.body" :value="post" class="content-renderer"/>
            </div>

            <!-- Series navigation (previous / next episode) -->
            <BlogSeriesNav
              v-if="post.series && seriesEpisodes.length > 1"
              :current="post"
              :episodes="seriesEpisodes"
            />

            <!-- Related articles -->
            <BlogRelatedPosts :posts="relatedPosts" />

            <!-- Back to blog link -->
            <div class="mt-12 pt-8 border-t border-default">
              <UButton
                to="/blog"
                variant="ghost"
                icon="i-heroicons-arrow-left"
                :ui="{ base: 'text-olive-300' }"
              >
                Retour au blog
              </UButton>
            </div>
          </div>

          <!-- Table of contents sidebar -->
          <aside v-if="post?.body?.toc?.links?.length" class="hidden lg:block lg:col-span-4">
            <UContentToc
              :links="post.body.toc.links"
              title="Sommaire"
              highlight
              :ui="{ content: 'bg-olive-600 rounded-lg' }"
            />
          </aside>
        </div>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<style scoped>
/* Custom prose styling to match the site theme */
.prose {
  --tw-prose-body: white;
  --tw-prose-headings: var(--ui-text-highlighted);
  --tw-prose-links: var(--ui-primary);
  --tw-prose-bold: var(--ui-text-highlighted);
  --tw-prose-quotes: var(--ui-text-muted);
  --tw-prose-code: var(--ui-text-highlighted);
  --tw-prose-hr: var(--ui-border);
}

.content-renderer {
  color: white;
}
</style>

