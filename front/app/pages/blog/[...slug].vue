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
const { data: post } = await useAsyncData<BlogPost>(`blog-${slugPath.value}`, () =>
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

      <template #bottom>
        <div v-if="post.tags?.length" class="flex flex-wrap gap-2 mt-4">
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
              <ContentRenderer v-if="post.body" :value="post" />
            </div>

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
  --tw-prose-body: var(--ui-text);
  --tw-prose-headings: var(--ui-text-highlighted);
  --tw-prose-links: var(--ui-primary);
  --tw-prose-bold: var(--ui-text-highlighted);
  --tw-prose-quotes: var(--ui-text-muted);
  --tw-prose-code: var(--ui-text-highlighted);
  --tw-prose-hr: var(--ui-border);
}
</style>

