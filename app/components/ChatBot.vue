<template>
  <div>
    <!-- Bouton flottant pour ouvrir le chat -->
    <Button
      class="chat-trigger fixed bottom-6 right-6 !rounded-full !w-14 !h-14 !p-0 shadow-lg flex items-center justify-center"
      @click="handleClick">
      <i class="pi text-xl pi-comments"></i>
    </Button>

    <!-- Dialog du chat -->
    <Dialog v-model:visible="isOpen" header="Chat" pt:root:class="!border-0 !bg-background dark:!bg-gray-900" pt:header:class="!bg-background dark:!bg-gray-900 text-text" pt:content:class="!bg-background dark:!bg-gray-900 text-text" :modal="false" position="bottomright" :style="{ width: '400px' }" >
      <!-- Zone des messages -->
      <div class="chat-messages flex flex-col gap-4 overflow-y-auto" ref="messagesContainer">
        <!-- Message d'accueil quand il n'y a pas de messages -->
        <div v-if="chatStore.messages.length === 0" class="welcome-message text-center p-4 text-sm opacity-80">
          <div class="mb-3">
            <i class="pi pi-info-circle text-2xl"></i>
          </div>
          <p class="mb-2">Bonjour ! Je suis l'assistant IA de Yassin.</p>
          <p class="mb-4">Je peux vous aider à découvrir son parcours, ses compétences ou ses projets. N'hésitez pas à
            me poser des
            questions !</p>

          <!-- Suggestions de questions rapides -->
          <div class="quick-questions flex flex-wrap gap-2 justify-center mt-3">
            <Button v-for="question in quickQuestions" :key="question"
              class="p-button-rounded p-button-outlined p-button-sm px-1" @click="askQuickQuestion(question)">
              {{ question }}
            </Button>
          </div>
        </div>

        <div v-for="(message, index) in chatStore.messages" :key="index" class="flex"
          :class="message.role === 'user' ? 'justify-end' : 'justify-start'">
          <div class="message max-w-[80%] rounded-lg p-3 text-text"
            :class="message.role === 'user' ? 'bg-primary ' : 'bg-secondary'">
            {{ message.content }}
          </div>
        </div>

        <!-- Indicateur de chargement -->
        <div v-if="chatStore.isLoading" class="flex justify-start">
          <div class="message bg-surface-100 rounded-lg p-3">
            <i class="pi pi-spin pi-spinner"></i>
          </div>
        </div>
      </div>

      <!-- Zone de saisie -->
      <div class="flex gap-2 mt-4">
        <InputText v-model="userInput" placeholder="Écrivez votre message..." class="flex-1 bg-background text-text"
          :disabled="chatStore.isLoading" @keyup.enter="sendMessage" />
        <Button icon="pi pi-send" @click="sendMessage" :disabled="!userInput.trim() || chatStore.isLoading"
          :loading="chatStore.isLoading" />
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
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

const handleClick = () => {
  isOpen.value = !isOpen.value
}

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
  z-index: 1000;
}

.chat-trigger i {
  color: white;
}



.chat-messages {
  height: 300px;
  padding: 1rem;
}

:deep(.p-dialog-content) {
  padding: 0 1rem 1rem 1rem;
}

.quick-questions .p-button {
  font-size: 0.75rem;
  background-color: transparent;
  border-color: var(--secondary);
  color: var(--text);
  transition: all 0.2s;
}

.quick-questions .p-button:hover {
  background-color: var(--secondary);
  color: var(--background);
}
</style>