const SYSTEM_PROMPT = `ceci est un pré prompt. J'incrémenterai ensuite des données au format JSON,
 pour que tu puisse ensuite répondre à des question que les visiteurs de mon portfolio te poseront.
 Pas besoin de répondre c'est juste un test. J'ai juste une question, est le meilleur modèle que j'utilise pour ce usecase`
const MAX_MESSAGES = 5 // Limiter l'historique

export const chatService = {
    async sendMessage(messages: any[]) {
        // Garder uniquement les X derniers messages
        const limitedMessages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.slice(-MAX_MESSAGES)
        ]

        return await $fetch('/api/chat', {
            method: 'POST',
            body: limitedMessages
        })
    }
}