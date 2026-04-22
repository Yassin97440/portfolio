<script setup lang="ts">
import type { BlogPost } from '~~/shared/types/Blog'

const props = defineProps<{
  current: BlogPost
  episodes: BlogPost[]
}>()

const sorted = computed(() =>
  [...props.episodes].sort(
    (a, b) => (a.series?.episode ?? 0) - (b.series?.episode ?? 0)
  )
)

const currentIndex = computed(() =>
  sorted.value.findIndex(e => e.path === props.current.path)
)

const previous = computed(() =>
  currentIndex.value > 0 ? sorted.value[currentIndex.value - 1] : null
)

const next = computed(() =>
  currentIndex.value >= 0 && currentIndex.value < sorted.value.length - 1
    ? sorted.value[currentIndex.value + 1]
    : null
)

const seriesName = computed(() => props.current.series?.name ?? '')
const totalEpisodes = computed(() => sorted.value.length)
</script>

<template>
  <section v-if="current.series" class="series-nav mt-12 pt-8 border-t border-default">
    <div class="mb-6">
      <UBadge color="secondary" variant="subtle" size="md" class="mb-2">
        Série · Épisode {{ current.series.episode }}/{{ totalEpisodes }}
      </UBadge>
      <h2 class="text-xl font-bold text-highlighted">
        {{ seriesName }}
      </h2>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <NuxtLink
        v-if="previous"
        :to="previous.path"
        class="episode-card group"
      >
        <div class="flex items-center gap-2 text-sm text-muted mb-2">
          <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" />
          <span>Épisode précédent · {{ previous.series?.episode }}</span>
        </div>
        <div class="episode-title">
          {{ previous.title }}
        </div>
      </NuxtLink>
      <div v-else class="episode-card episode-empty">
        <div class="text-sm text-muted">Début de la série</div>
      </div>

      <NuxtLink
        v-if="next"
        :to="next.path"
        class="episode-card group text-right"
      >
        <div class="flex items-center justify-end gap-2 text-sm text-muted mb-2">
          <span>Épisode suivant · {{ next.series?.episode }}</span>
          <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
        </div>
        <div class="episode-title">
          {{ next.title }}
        </div>
      </NuxtLink>
      <div v-else class="episode-card episode-empty text-right">
        <div class="text-sm text-muted">Fin de la série</div>
      </div>
    </div>

    <details v-if="sorted.length > 0" class="mt-6 episodes-list">
      <summary class="cursor-pointer text-sm text-muted hover:text-highlighted">
        Voir tous les épisodes de la série
      </summary>
      <ol class="mt-3 space-y-2">
        <li
          v-for="ep in sorted"
          :key="ep.path"
          class="flex items-start gap-2"
        >
          <span class="text-sm text-muted w-8 shrink-0">{{ ep.series?.episode }}.</span>
          <NuxtLink
            v-if="ep.path !== current.path"
            :to="ep.path"
            class="text-sm hover:underline"
          >
            {{ ep.title }}
          </NuxtLink>
          <span v-else class="text-sm font-semibold text-highlighted">
            {{ ep.title }} <span class="text-muted">(en cours de lecture)</span>
          </span>
        </li>
      </ol>
    </details>
  </section>
</template>

<style scoped>
.episode-card {
  display: block;
  padding: 1rem 1.25rem;
  background: var(--ui-bg-elevated);
  border: 1px solid var(--ui-border);
  border-radius: 0.5rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.episode-card:hover:not(.episode-empty) {
  border-color: var(--ui-primary);
  transform: translateY(-1px);
}

.episode-empty {
  opacity: 0.5;
  cursor: default;
}

.episode-title {
  color: var(--ui-text-highlighted);
  font-weight: 600;
  line-height: 1.3;
}
</style>
