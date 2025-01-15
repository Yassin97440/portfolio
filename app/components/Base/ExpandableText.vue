<template>
    <div class="relative">
        <p :class="isExpanded ? 'line-clamp-none' : 'line-clamp-3 md:line-clamp-5 lg:line-clamp-8'">
            <slot />
        </p>
        <button v-show="hasOverflow" @click="isExpanded = !isExpanded"
            class="text-action hover:text-action-dark underline text-sm">
            {{ isExpanded ? 'Voir moins' : 'Voir plus' }}
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isExpanded = ref(false)
const hasOverflow = ref(false)

onMounted(() => {
    const el = document.querySelector('p')
    hasOverflow.value = el.scrollHeight > el.clientHeight
})
</script>