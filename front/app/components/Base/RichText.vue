<template>
  <div>
    <div v-for="(block, index) in content" :key="index" class="rich-text-block">
      <!-- Headings -->
      <component 
        :is="`h${block.level}`" 
        v-if="block.type === 'heading'"
        :class="[
          'font-bold mb-4 text-text',
          headingClasses[block.level as keyof typeof headingClasses],
          'relative group hover:text-action transition-colors duration-300'
        ]"
      >
        <span class="relative">
          {{ getTextContent(block) }}
          <span class="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-action">
            #
          </span>
        </span>
      </component>

      <!-- Paragraphes -->
      <p v-else-if="block.type === 'paragraph'" 
        class="text-text mb-5 leading-relaxed"
        :class="{'first-letter:text-xl first-letter:font-medium first-letter:text-action': isFirstParagraph(index)}"
      >
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
      
      <!-- Listes -->
      <ul v-else-if="block.type === 'list' && block.format === 'unordered'" 
        class="pl-5 space-y-2 my-4">
        <li v-for="(item, itemIndex) in block.children" :key="itemIndex" 
          class="flex items-start">
          <UIcon name="i-lucide-circle" class="text-action mr-3 mt-1.5 text-[8px]" />
          <span>{{ getTextContent(item) }}</span>
        </li>
      </ul>
      
      <ol v-else-if="block.type === 'list' && block.format === 'ordered'" 
        class="pl-5 space-y-2 my-4 list-decimal">
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
  level?: number;
  children: RichTextChild[];
}

const props = defineProps({
  content: {
    type: Array as PropType<any[]>,
    required: true
  }
})

// Classes pour les différents niveaux de titres
const headingClasses = {
  1: 'text-4xl mb-6',
  2: 'text-3xl mb-5',
  3: 'text-2xl mb-4',
  4: 'text-xl mb-3',
  5: 'text-lg mb-2',
  6: 'text-base mb-2'
}

// Vérifie si c'est le premier paragraphe après un titre
const isFirstParagraph = (index: number): boolean | undefined => {
  if (index === 0) return true
  const previousBlock = props.content[index - 1]
  return previousBlock && previousBlock.type === 'heading'
}

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
.rich-text-block {
  margin-bottom: 1rem;
}

.rich-text-block p {
  line-height: 1.9;
  font-size: 1.05rem;
  transition: all 0.3s ease;
}

.rich-text-block p:hover {
  transform: translateX(4px);
}

.rich-text-block ul li,
.rich-text-block ol li {
  line-height: 1.6;
  transition: all 0.3s ease;
}

.rich-text-block ul li:hover,
.rich-text-block ol li:hover {
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

/* Animation pour les titres */
.rich-text-block h1,
.rich-text-block h2,
.rich-text-block h3,
.rich-text-block h4,
.rich-text-block h5,
.rich-text-block h6 {
  position: relative;
  overflow: hidden;
}

.rich-text-block h1::after,
.rich-text-block h2::after,
.rich-text-block h3::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 50px;
  height: 2px;
  background-color: var(--action);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.rich-text-block h1:hover::after,
.rich-text-block h2:hover::after,
.rich-text-block h3:hover::after {
  transform: translateX(0);
}
</style>