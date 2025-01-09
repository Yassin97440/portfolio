<template>
    <div class="relative mb-2 block">
        <div :class="[getLineClampClass]">
            <slot />
        </div>
        <button v-if="shouldShowExpandButton" @click="toggleExpand"
            class="text-action hover:text-action-dark underline absolute bottom-0 right-0 bg-primary pl-1">
            ...voir plus
        </button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isExpanded = ref(false);

const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
};

const getLineClampClass = computed(() => {
    if (isExpanded.value) {
        return 'line-clamp-8 sm:line-clamp-none';
    }
    return 'line-clamp-3 sm:line-clamp-none md:line-clamp-5';
});

const shouldShowExpandButton = computed(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 640 && !isExpanded.value;
});
</script>