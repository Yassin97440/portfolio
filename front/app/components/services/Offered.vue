<template>
    <section class="services-offered-section">
        <UCard class="services-offered-card" :ui="{ root: 'bg-background rounded-lg' }">
            <template #header>
                <h2 class="section-title">Mes 4 offres détaillées</h2>
            </template>
            <BaseSubCard>
                <div class="services-grid">
                    <div v-for="service in services" :key="service.id" class="service-item">
                        <div class="service-header">
                            <UIcon :name="service.icon" class="service-icon" />
                            <h3 class="service-title">{{ service.title }}</h3>
                        </div>

                        <p class="service-hook">{{ service.hook }}</p>

                        <div class="service-block">
                            <h4 class="block-label">Concrètement, je fais ça :</h4>
                            <ul class="service-features">
                                <li v-for="feature in service.features" :key="feature" class="service-feature">
                                    <UIcon name="i-lucide-check" class="feature-check" />
                                    {{ feature }}
                                </li>
                            </ul>
                        </div>

                        <div class="service-result">
                            <UIcon name="i-lucide-trending-up" class="result-icon" />
                            <p><strong>Ce que ça change :</strong> {{ service.result }}</p>
                        </div>

                        <div class="service-cta">
                            <a
                                :href="whatsappLink({ message: service.waMessage })"
                                target="_blank"
                                rel="noopener"
                                class="service-button"
                            >
                                <UIcon name="i-simple-icons-whatsapp" class="cta-icon" />
                                {{ service.cta }}
                            </a>
                        </div>
                    </div>
                </div>
            </BaseSubCard>
        </UCard>
    </section>
</template>

<script setup lang="ts">
const { whatsappLink, whatsappMessages } = useContactChannels()

const services = [
    {
        id: 1,
        icon: 'i-lucide-code',
        title: 'Votre site ou logiciel, fait exactement pour vous',
        hook: "Les logiciels standards ne collent jamais vraiment à votre métier ? Vous contournez leurs limites tous les jours avec des tableurs et des bouts de scotch digitaux ?",
        features: [
            "Je conçois avec vous un site internet ou un outil métier qui suit votre vraie façon de travailler",
            "Je m'occupe de tout : réflexion, réalisation, mise en ligne, formation de vos équipes",
            "Vous restez propriétaire de l'outil, je vous laisse la documentation et le code"
        ],
        result: "Vos équipes arrêtent de perdre 1 à 2 heures par jour sur des saisies manuelles — et vous, vous dormez mieux.",
        cta: "Décrire mon besoin sur WhatsApp",
        waMessage: whatsappMessages.webApp
    },
    {
        id: 2,
        icon: 'i-lucide-zap',
        title: "L'IA qui fait le sale boulot à votre place",
        hook: "Vos équipes passent des heures sur des tâches qui se répètent : répondre aux mêmes questions clients, relancer des factures, trier des e-mails, remplir des devis…",
        features: [
            "Un assistant virtuel qui répond à vos clients 24/7, même le dimanche",
            "Des relances de factures et des rappels de rendez-vous qui partent tout seuls",
            "Vos fichiers, e-mails et documents rangés automatiquement au bon endroit"
        ],
        result: "Votre équipe récupère l'équivalent d'un demi-poste à temps plein, sans embauche.",
        cta: "Voir ce qu'on peut automatiser",
        waMessage: whatsappMessages.ia
    },
    {
        id: 3,
        icon: 'i-lucide-users',
        title: "Votre conseiller digital, comme un directeur en freelance",
        hook: "Vous savez que le digital est important, mais vous n'avez pas le temps (ni l'envie) de devenir expert. Vous avez besoin de quelqu'un qui pense pour vous.",
        features: [
            "On fait le point sur votre activité et vos outils actuels, sans jugement",
            "Je vous propose un plan digital sur 6 à 12 mois, priorisé et chiffré",
            "Je vous accompagne à chaque étape, un point par mois ou par trimestre, à votre rythme"
        ],
        result: "Vous avancez sereinement, vous arrêtez de subir, et vos décisions technologiques cessent d'être des coups de poker.",
        cta: "Demander un premier échange",
        waMessage: whatsappMessages.conseil
    },
    {
        id: 4,
        icon: 'i-lucide-search',
        title: "Un regard neuf sur vos outils actuels",
        hook: "Vous avez accumulé logiciels, tableurs et applications au fil des années ? Vous sentez que ça fuit de partout mais vous ne savez pas par où reprendre ?",
        features: [
            "Je passe en revue l'ensemble de vos outils et processus en 2 à 5 jours",
            "Je vous dis ce qui tient la route, ce qu'il faut garder, simplifier ou refaire",
            "Je vous remets un rapport clair avec un plan d'action chiffré que vous pouvez utiliser avec n'importe quel prestataire"
        ],
        result: "Vous savez enfin où vous en êtes, combien ça coûte vraiment, et dans quel ordre agir.",
        cta: "Planifier un audit",
        waMessage: whatsappMessages.audit
    }
]
</script>

<style scoped>
.services-offered-section {
    margin-bottom: 3rem;
}

.services-offered-card {
    background-color: var(--background);
    border-radius: 0.5rem;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1rem;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
}

.service-item {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    padding: 1.75rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1.25rem;
}

.service-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
}

.service-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: var(--action);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.service-item:hover::before {
    transform: scaleX(1);
}

.service-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.service-icon {
    color: var(--action);
    font-size: 1.75rem;
}

.service-title {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--text);
    margin: 0;
    line-height: 1.3;
}

.service-hook {
    color: var(--text);
    line-height: 1.5;
    font-style: italic;
    opacity: 0.9;
    margin: 0;
}

.block-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--action);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin: 0 0 0.5rem 0;
}

.service-features {
    list-style: none;
    padding: 0;
    margin: 0;
}

.service-feature {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.6rem;
    color: var(--text);
    line-height: 1.5;
    font-size: 0.95rem;
}

.feature-check {
    color: var(--action);
    margin-right: 0.75rem;
    margin-top: 0.3rem;
    font-size: 0.875rem;
    flex-shrink: 0;
}

.service-result {
    display: flex;
    gap: 0.75rem;
    padding: 0.9rem 1rem;
    background-color: rgba(var(--action-rgb, 230, 180, 80), 0.12);
    border-left: 3px solid var(--action);
    border-radius: 0.5rem;
    margin-top: auto;
}

.service-result p {
    margin: 0;
    color: var(--text);
    line-height: 1.5;
    font-size: 0.95rem;
}

.result-icon {
    color: var(--action);
    font-size: 1.25rem;
    flex-shrink: 0;
    margin-top: 0.1rem;
}

.service-cta {
    margin-top: 0.5rem;
}

.service-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.875rem 1.25rem;
    background-color: #25D366;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
}

.service-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #1ebe5b;
}

.cta-icon {
    font-size: 1.25rem;
}

@media (max-width: 640px) {
    .services-grid {
        grid-template-columns: 1fr;
    }

    .service-item {
        padding: 1.25rem;
    }

    .service-title {
        font-size: 1.1rem;
    }

    .service-feature {
        font-size: 0.9rem;
    }
}

@media (min-width: 641px) and (max-width: 1023px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
