<template>
  <div>
    <div v-for="(block, index) in content" :key="index" class="rich-text-block text-text mb-5 leading-relaxed">
      <p v-if="block.type === 'paragraph'" class="first-letter:text-xl first-letter:font-medium first-letter:text-action">
        {{ getTextContent(block) }}
      </p>
      
      <ul v-else-if="block.type === 'list' && block.format === 'unordered'" class="pl-5 space-y-2 my-4">
        <li v-for="(item, itemIndex) in block.children" :key="itemIndex" 
          class="flex items-start">
          <i class="pi pi-circle-fill text-action mr-3 mt-1.5 text-[8px]"></i>
          <span>{{ getTextContent(item) }}</span>
        </li>
      </ul>
      
      <ol v-else-if="block.type === 'list' && block.format === 'ordered'" class="pl-5 space-y-2 my-4 list-decimal">
        <li v-for="(item, itemIndex) in block.children" :key="itemIndex" 
          class="ml-4 pl-2">
          {{ getTextContent(item) }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  content: {
    type: Array as PropType<any[]>,
    required: true
  }
})

// Extrait le texte d'un bloc rich text
const getTextContent = (block: any) => {
  if (!block.children || !block.children.length) return ''
  return block.children.map((child: any) => child.text || '').join('')
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

.rich-text-block ul li {
  line-height: 1.6;
  transition: all 0.3s ease;
}

.rich-text-block ul li:hover {
  transform: translateX(4px);
}
</style>