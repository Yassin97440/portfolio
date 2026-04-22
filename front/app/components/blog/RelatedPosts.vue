<script setup lang="ts">
import type { BlogPost } from '~~/shared/types/Blog'

const props = defineProps<{
  posts: BlogPost[]
}>()

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
</script>

<template>
  <section v-if="posts.length > 0" class="related-articles mt-12 pt-8 border-t border-default">
    <h2 class="text-xl font-bold text-highlighted mb-6">
      Articles similaires
    </h2>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        class="related-card group"
      >
        <div v-if="post.image" class="related-image-wrapper">
          <img
            :src="post.image"
            :alt="post.title"
            class="related-image"
            loading="lazy"
          >
        </div>
        <div class="p-4">
          <div class="text-xs text-muted mb-2">
            {{ formatDate(post.date) }}
          </div>
          <h3 class="related-title">
            {{ post.title }}
          </h3>
          <p class="related-description">
            {{ post.description }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.related-card {
  display: block;
  background: var(--ui-bg-elevated);
  border: 1px solid var(--ui-border);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.related-card:hover {
  border-color: var(--ui-primary);
  transform: translateY(-2px);
}

.related-image-wrapper {
  width: 100%;
  height: 10rem;
  overflow: hidden;
}

.related-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.related-card:hover .related-image {
  transform: scale(1.03);
}

.related-title {
  color: var(--ui-text-highlighted);
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-description {
  color: var(--ui-text-muted);
  font-size: 0.875rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
