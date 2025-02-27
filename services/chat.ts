import SYSTEM_PROMPT_TOTAL from "./systemprompt"
const MAX_MESSAGES = 5 // Limiter l'historique

export const chatService = {
    async sendMessage(messages: any[]) {
        // Garder uniquement les X derniers messages
        const limitedMessages = [
            { role: 'system', content: SYSTEM_PROMPT_TOTAL },
            ...messages.slice(-MAX_MESSAGES)
        ]

        return await $fetch('/api/chat', {
            method: 'POST',
            body: limitedMessages
        })
    }
}