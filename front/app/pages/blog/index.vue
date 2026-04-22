<script setup lang="ts">
import type { BlogPost } from '~~/shared/types/Blog'

const route = useRoute()

// Fetch all blog posts
const { data: posts } = await useAsyncData<BlogPost[]>('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

// Get unique tags from all posts
const allTags = computed<string[]>(() => {
  if (!posts.value) return []
  const tags = posts.value.flatMap((post: any) => post.tags || []) as string[]
  return [...new Set(tags)].sort((a, b) => a.localeCompare(b, 'fr'))
})

// Items for the select menu (with an "All" option)
const ALL_TAGS_VALUE = '__all__'
const tagItems = computed(() => [
  { label: 'Tous les thèmes', value: ALL_TAGS_VALUE, icon: 'i-heroicons-squares-2x2' },
  ...allTags.value.map(tag => ({ label: tag, value: tag, icon: 'i-heroicons-hashtag' }))
])

// Selected tag for filtering
const selectedTag = ref<string | null>(route.query.tag as string || null)

// v-model for USelectMenu (string value, thanks to value-key="value")
const selectedTagValue = computed({
  get: () => selectedTag.value ?? ALL_TAGS_VALUE,
  set: (value: string | undefined) => {
    selectedTag.value = !value || value === ALL_TAGS_VALUE ? null : value
  }
})

// Filtered posts based on selected tag
const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (!selectedTag.value) return posts.value
  return posts.value.filter((post: any) => post.tags?.includes(selectedTag.value!))
})

// Update URL when tag changes
watch(selectedTag, (tag) => {
  navigateTo({
    query: tag ? { tag } : {}
  }, { replace: true })
})

// SEO
useSeoMeta({
  title: 'Blog Développement & Digitalisation | Conseils TPE/PME La Réunion — Yassin Abdulla',
  description: 'Conseils pratiques pour digitaliser votre entreprise à La Réunion. Articles sur le développement web, l\'IA, l\'automatisation et la transformation digitale des TPE/PME.',
  ogTitle: 'Blog | Développement Web & Digitalisation TPE/PME',
  ogDescription: 'Conseils pratiques pour digitaliser votre entreprise. Développement web, IA, automatisation — par un freelance basé à La Réunion.',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://yassin.abdulla.fr/blog'
    }
  ]
})
</script>

<template>
  <UPage>
    <UPageHero
      title="Blog"
      description="Conseils pratiques pour digitaliser votre TPE/PME à La Réunion. Développement web, IA, automatisation et transformation digitale — des articles pensés pour les entrepreneurs réunionnais."
    />

    <UPageBody>
      <UContainer>
        <!-- Tags filter -->
        <div v-if="allTags.length > 0" class="mb-8 flex flex-wrap items-center gap-3">
          <label for="blog-tag-filter" class="text-sm font-medium text-olive-100">
            Filtrer par thème :
          </label>
          <USelectMenu
            id="blog-tag-filter"
            v-model="selectedTagValue"
            :items="tagItems"
            :search-input="{ placeholder: 'Rechercher un thème...', icon: 'i-heroicons-magnifying-glass' }"
            value-key="value"
            placeholder="Choisir un thème"
            icon="i-heroicons-tag"
            size="md"
            class="min-w-[260px]"
          />
          <UButton
            v-if="selectedTag"
            variant="ghost"
            color="neutral"
            size="sm"
            icon="i-heroicons-x-mark"
            @click="selectedTag = null"
          >
            Réinitialiser
          </UButton>
          <span class="ml-auto text-sm text-olive-200">
            {{ filteredPosts.length }} article{{ filteredPosts.length > 1 ? 's' : '' }}
          </span>
        </div>

        <!-- Blog posts grid -->
        <UBlogPosts v-if="filteredPosts?.length">
          <UBlogPost
            v-for="post in filteredPosts"
            :key="post.path"
            :title="post.title"
            :description="post.description"
            :date="post.date"
            :image="post.image"
            :to="post.path"
            :authors="post.author ? [{ name: post.author.name, avatar: post.author.avatar ? { src: post.author.avatar } : undefined }] : undefined"
            :ui="{ body: 'bg-olive-600', 
                  date: 'text-white' , 
                  footer: 'bg-olive-600 '
             }"
          >
            <template #footer>
              <div v-if="post.tags?.length" class="flex flex-wrap gap-1 mt-1 p-3">
                <UBadge
                  v-for="tag in post.tags"
                  :key="tag"
                  color="primary"
                  variant="subtle"
                  size="md"
                  :ui="{ base: 'bg-earth-500 text-olive-100' }"
                >
                  {{ tag }}
                </UBadge>
              </div>
            </template>
          </UBlogPost>
        </UBlogPosts>

        <!-- Empty state -->
        <UEmpty
          v-else
          icon="i-heroicons-document-text"
          title="Aucun article"
          description="Il n'y a pas encore d'article dans cette catégorie."
        />
      </UContainer>
    </UPageBody>
  </UPage>
</template>

