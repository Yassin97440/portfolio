import { defineStore } from 'pinia'
import { chatService } from '~~/services/chat'

type Message = {
  role: 'user' | 'system' | 'assistant'
  content: string
}

interface ChatStore {
  messages: Message[],
  isLoading: boolean
}

export const useChatStore = defineStore('chat', {
  state: (): ChatStore => ({
    messages: [],
    isLoading: false
  }),

  actions: {
    async sendMessage(content: string) {
      this.isLoading = true
      try {
        const newMessage: Message = { role: 'user', content }
        this.messages.push(newMessage)

        const response = await chatService.sendMessage(this.messages)
        if (!response)
          throw new Error('Pas de réponse de mistral');
        this.messages.push({
          role: 'assistant',
          content: typeof response === 'string' ? response : response.toString()
        })

      }
      catch (error) {
        console.error(error)
      }
      finally {
        this.isLoading = false
      }
    }
  }
}) 