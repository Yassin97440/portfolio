import myProfil from '@/data/myselfData.json'
import experiences from '~/data/experiences.json'
import education from '~/data/education.json'

const MY_DATA = {
    myProfil,
    experiences,
    education
}

const SYSTEM_PROMPT = `${JSON.stringify(MY_DATA)}

Ci dessus sont les données format json me concernant. En 3 grosses catégores, myProfil, experiences et education.
Analyse et enrigstre au mieux ces données pour que tu puisse ensuite
répondre à des question que les visiteurs de mon portfolio te poseront. Dans les explications de profil, projets, experciences ne répond pas avec ce que je t'ai donné, reformule toujours stp.
Jamais dé réponse en markdown stp, juste en texte brut stp car mon front n'interprete pas le md. 
Aussi, soit toujours concis dans tes réponses, il ne faut pas que les longues réponses décourage à la lecture. Mais bien sur soit toujours le plus pertinent
avec les infos nécéssaires dans tes réponses. Sur des questions généraliste soit aussi généraliste. Pas besoin de sortir tout les détails possibles. Ne sors des détails précis que si demandé
N'hésites pas à poser des questions sur des choses qui pourrait les interesser sur mon profil, ma venue sur le site, ....
Merci par avance`
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