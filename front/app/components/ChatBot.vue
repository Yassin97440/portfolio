<template>
  <div>
    <!-- Bouton flottant pour ouvrir le chat -->
    <UButton
      class="chat-trigger fixed bottom-6 right-6 !rounded-full !w-14 !h-14 !p-0 shadow-lg flex items-center justify-center z-50"
      color="primary"
      icon="i-lucide-message-circle"
      size="xl"
      @click="isOpen = !isOpen"
      aria-label="Ouvrir le chat"
    />

    <!-- Modal du chat -->
    <UModal 
      v-model:open="isOpen" 
      title="Chat"
      :ui="{
        content: 'bg-background border border-secondary/20 w-[400px] max-w-[95vw]',
        header: 'bg-background text-text border-b border-secondary/20',
        body: 'bg-background text-text p-0',
        footer: 'bg-background border-t border-secondary/20'
      }"
    >
      <!-- Slot par défaut vide car on contrôle l'ouverture via le bouton flottant -->
      <template #default />
      
      <template #body>
        <!-- Zone des messages -->
        <div class="chat-messages flex flex-col gap-4 overflow-y-auto p-4" ref="messagesContainer">
          <!-- Message d'accueil quand il n'y a pas de messages -->
          <div v-if="chatStore.messages.length === 0" class="welcome-message text-center p-4 text-sm opacity-80">
            <div class="mb-3">
              <UIcon name="i-lucide-info" class="text-2xl text-action" />
            </div>
            <p class="mb-2 text-text">Bonjour ! Je suis l'assistant IA de Yassin.</p>
            <p class="mb-4 text-text">Je peux vous aider à découvrir son parcours, ses compétences ou ses projets. N'hésitez pas à me poser des questions !</p>

            <!-- Suggestions de questions rapides -->
            <div class="quick-questions flex flex-wrap gap-2 justify-center mt-3">
              <UButton 
                v-for="question in quickQuestions" 
                :key="question"
                variant="outline"
                color="neutral"
                size="xs"
                @click="askQuickQuestion(question)"
              >
                {{ question }}
              </UButton>
            </div>
          </div>

          <div v-for="(message, index) in chatStore.messages" :key="index" class="flex"
            :class="message.role === 'user' ? 'justify-end' : 'justify-start'">
            <div class="message max-w-[80%] rounded-lg p-3 text-text"
              :class="message.role === 'user' ? 'bg-primary' : 'bg-secondary'">
              {{ message.content }}
            </div>
          </div>

          <!-- Indicateur de chargement -->
          <div v-if="chatStore.isLoading" class="flex justify-start">
            <div class="message bg-secondary/50 rounded-lg p-3">
              <UIcon name="i-lucide-loader-2" class="animate-spin text-action" />
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <!-- Zone de saisie -->
        <div class="flex gap-2 w-full">
          <UInput 
            v-model="userInput" 
            placeholder="Écrivez votre message..." 
            class="flex-1"
            :disabled="chatStore.isLoading" 
            @keyup.enter="sendMessage"
            :ui="{ root: 'bg-background text-text' }"
          />
          <UButton 
            icon="i-lucide-send" 
            @click="sendMessage" 
            :disabled="!userInput.trim() || chatStore.isLoading"
            :loading="chatStore.isLoading"
          />
        </div>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { useChatStore } from '~/stores/chat'

const chatStore = useChatStore()
const isOpen = ref(false)
const userInput = ref('')
const messagesContainer = ref<HTMLElement | null>(null)

// Questions rapides suggérées
const quickQuestions = [
  "Quel est son parcours ?",
  "Quelles sont ses compétences ?",
  "Parle-moi de ses projets"
]

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const askQuickQuestion = (question: string) => {
  userInput.value = question
  sendMessage()
}

const sendMessage = async () => {
  if (!userInput.value.trim() || chatStore.isLoading) return

  await chatStore.sendMessage(userInput.value)
  userInput.value = ''
  await scrollToBottom()
}

// Scroll automatique quand de nouveaux messages arrivent
watch(() => chatStore.messages, scrollToBottom, { deep: true })
</script>

<style scoped>
.chat-trigger {
  background-color: var(--action) !important;
}

.chat-messages {
  height: 300px;
}

.quick-questions :deep(.p-button) {
  font-size: 0.75rem;
  background-color: transparent;
  border-color: var(--secondary);
  color: var(--text);
  transition: all 0.2s;
}

.quick-questions :deep(.p-button:hover) {
  background-color: var(--secondary);
  color: var(--background);
}
</style>
