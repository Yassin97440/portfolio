<template>
  <div>
    <div v-for="(block, index) in project.description" :key="index"
                  class="rich-text-block text-text mb-5 leading-relaxed">
                  <p v-if="block.type === 'paragraph'" 
                    class="first-letter:text-xl first-letter:font-medium first-letter:text-action">
                    {{ getTextContent(block) }}
                  </p>
                </div>
  </div>

</template>

<script lang="ts" setup>

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})
// Extrait le texte d'un bloc rich text
const getTextContent = (block: { children: { text: string }[] }) => {
  if (!block.children || !block.children.length) return ''
  return block.children.map(child => child.text || '').join('')
}

</script>

<style>
.rich-text-block p {
  line-height: 1.9;
  font-size: 1.05rem;
  transition: all 0.3s ease;
}

.rich-text-block p:hover {
  transform: translateX(4px);
}
</style>