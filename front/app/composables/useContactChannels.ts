// Canaux de contact centralisés.
// ⚠️ À compléter avec le vrai numéro WhatsApp réunionnais (format international, sans + ni espaces).
// Exemple : '262692123456' pour +262 692 12 34 56

const WHATSAPP_NUMBER = '262692402002'
const EMAIL = 'yassin.abdulla.pro@protonmail.com'

export interface WhatsAppOptions {
    /** Numéro complet sans + ni espaces */
    number?: string
    /** Message pré-rempli */
    message?: string
}

export function useContactChannels() {
    const email = EMAIL
    const whatsappNumber = WHATSAPP_NUMBER

    const whatsappLink = (options: WhatsAppOptions = {}) => {
        const number = options.number ?? WHATSAPP_NUMBER
        const text = options.message
            ? `?text=${encodeURIComponent(options.message)}`
            : ''
        return `https://wa.me/${number}${text}`
    }

    /** Messages pré-remplis prêts à l'emploi */
    const whatsappMessages = {
        homepage:
            "Bonjour Yassin, je suis dirigeant d'entreprise à La Réunion et j'aimerais échanger avec vous sur un projet de digitalisation. Quand êtes-vous disponible ?",
        devis:
            "Bonjour Yassin, je souhaiterais un devis gratuit pour mon entreprise à La Réunion. Pouvez-vous me rappeler ?",
        landingAd:
            "Bonjour Yassin, j'ai vu votre publicité. Je dirige une entreprise à La Réunion et j'aimerais parler de digitalisation avec vous.",
        webApp:
            "Bonjour Yassin, je cherche à faire développer un site ou un logiciel sur-mesure pour mon activité. Quand pouvons-nous échanger ?",
        ia:
            "Bonjour Yassin, j'aimerais explorer comment l'IA ou l'automatisation pourraient faire gagner du temps à mon équipe.",
        conseil:
            "Bonjour Yassin, j'aurais besoin d'un accompagnement pour organiser la partie digitale de mon activité. Êtes-vous disponible pour un premier échange ?",
        audit:
            "Bonjour Yassin, j'aimerais un regard extérieur sur les outils digitaux que nous utilisons dans mon entreprise. Est-ce que vous proposez un audit ?",
        packEssentiel:
            "Bonjour Yassin, je suis intéressé par le Pack Essentiel Digital à 900€. Pouvez-vous m'en dire plus ?"
    } as const

    return {
        email,
        whatsappNumber,
        whatsappLink,
        whatsappMessages
    }
}
