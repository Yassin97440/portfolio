import SYSTEM_PROMPT_TOTAL from "./systemprompt"
const MAX_MESSAGES = 5 // Limiter l'historique

export const chatService = {
    async sendMessage(messages: any[]) {
        console.log('in chat service')
        // Garder uniquement les X derniers messages
        const limitedMessages = [
            { role: 'system', content: SYSTEM_PROMPT_TOTAL },
            ...messages.slice(-MAX_MESSAGES)
        ]

        try {
            const response = await $fetch('/api/chat', {
                method: 'POST',
                body: limitedMessages,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return response
        } catch (error: any) {
            console.error('Erreur détaillée:', {
                status: error.status,
                message: error.message,
                data: error.data,
                stack: error.stack
            })
            throw error
        }
    }
}