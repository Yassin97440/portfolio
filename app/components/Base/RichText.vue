<template>
  <div>
    <div v-for="(block, index) in content" :key="index" class="rich-text-block text-text mb-5 leading-relaxed">
      <p v-if="block.type === 'paragraph'" class="first-letter:text-xl first-letter:font-medium first-letter:text-action">
        <template v-for="(child, childIndex) in block.children" :key="childIndex">
          <template v-if="child.type === 'text'">{{ child.text }}</template>
          
          <a v-else-if="child.type === 'link'"
             :href="child.url"
             target="_blank"
             class="text-action hover:text-action/80 underline transition-colors duration-300">
            {{ getTextContent(child) }}
          </a>
          
          <template v-else>{{ getTextContent(child) }}</template>
        </template>
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
interface RichTextChild {
  type: string;
  text?: string;
  children?: RichTextChild[];
  url?: string;
}

interface RichTextBlock {
  type: string;
  format?: string;
  children: RichTextChild[];
}

const props = defineProps({
  content: {
    type: Array as PropType<RichTextBlock[]>,
    required: true
  }
})

// Fonction récursive pour extraire le texte
const getTextContent = (block: RichTextChild): string => {
  if (!block) return ''
  
  if (block.text !== undefined) return block.text
  
  if (block.children && block.children.length) {
    return block.children.map(child => getTextContent(child)).join('')
  }
  
  return ''
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

.rich-text-block a {
  position: relative;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
}

.rich-text-block a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: -1px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.rich-text-block a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>