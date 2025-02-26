<template>
  <div>
    <!-- Bouton flottant pour ouvrir le chat -->
    <Button
      class="chat-trigger fixed bottom-6 right-6 !rounded-full !w-14 !h-14 !p-0 shadow-lg flex items-center justify-center"
      @click="handleClick">
      <i class="pi text-xl pi-comments"></i>
    </Button>

    <!-- Dialog du chat -->
    <Dialog v-model:visible="isOpen" header="Chat" :modal="false" position="bottomright" :style="{ width: '400px' }">
      <!-- Zone des messages -->
      <div class="chat-messages flex flex-col gap-4 overflow-y-auto" ref="messagesContainer">
        <div v-for="(message, index) in chatStore.messages" :key="index" class="flex"
          :class="message.role === 'user' ? 'justify-end' : 'justify-start'">
          <div class="message max-w-[80%] rounded-lg p-3"
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
        <InputText v-model="userInput" placeholder="Écrivez votre message..." class="flex-1"
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

const handleClick = () => {
  isOpen.value = !isOpen.value
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
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
  background-color: var(--primary-color) !important;
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
</style>