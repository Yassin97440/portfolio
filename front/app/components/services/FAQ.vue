<template>
    <section class="services-faq-section">
        <UCard class="services-faq-card" :ui="{ root: 'bg-background rounded-lg' }">
            <template #header>
                <h2 class="section-title">Questions Fréquentes</h2>
            </template>
            <BaseSubCard>
                <UAccordion 
                    :items="faqItems" 
                    :ui="{
                        item: 'border border-secondary/20 rounded-lg mb-2',
                        trigger: 'px-4 py-3 hover:bg-primary/30 rounded-lg transition-colors',
                        content: 'px-4 pb-4 text-text/90'
                    }"
                >
                    <template #leading="{ item, open }">
                        <UIcon 
                            :name="open ? 'i-lucide-minus' : 'i-lucide-plus'" 
                            class="text-action"
                        />
                    </template>
                    <template #default="{ item }">
                        <span class="text-text font-semibold">{{ item.label }}</span>
                    </template>
                    <template #content="{ item }">
                        <p v-html="item.content" class="text-text/90 leading-relaxed" />
                    </template>
                </UAccordion>
            </BaseSubCard>
        </UCard>
    </section>
</template>

<script setup lang="ts">
const faqItems = [
    {
        label: "Je n'y connais rien en informatique, est-ce un problème ?",
        content: "Absolument pas, au contraire ! La plupart de mes clients ne sont pas techniques — c'est mon métier de traduire vos besoins. Vous me parlez de votre activité dans votre langage, je m'occupe de la partie technique. Vous ne verrez jamais une ligne de code si vous ne le souhaitez pas."
    },
    {
        label: "Combien ça coûte, un site ou un logiciel ?",
        content: "Ça dépend vraiment du besoin, mais voici quelques repères concrets :<br>• <strong>Pack Essentiel Digital</strong> (une action ciblée) : à partir de <strong>900 €</strong><br>• <strong>Audit complet de vos outils</strong> : à partir de <strong>1 500 €</strong><br>• <strong>Première version d'un logiciel métier (MVP)</strong> : à partir de <strong>4 000 €</strong><br><br>Le prix est toujours fixé et validé avant qu'on démarre. Pas de mauvaise surprise en fin de mois."
    },
    {
        label: "Combien de temps ça prend ?",
        content: "Quelques repères selon le type de projet :<br>• <strong>Un site internet vitrine</strong> : 1 à 2 semaines<br>• <strong>Une boutique en ligne ou un outil métier simple</strong> : 1 à 2 mois<br>• <strong>Un logiciel sur-mesure complet</strong> : 3 à 6 mois<br>• <strong>L'automatisation d'une tâche</strong> : 2 à 4 semaines<br>• <strong>Un audit de vos outils</strong> : 2 à 7 jours<br><br>Je m'engage sur un délai réaliste dès le devis."
    },
    {
        label: "Et si je n'ai besoin que d'un conseil ponctuel ?",
        content: "C'est possible. Vous pouvez me réserver quelques heures pour un conseil précis, un second avis sur un devis que vous avez reçu d'un autre prestataire, ou pour choisir un logiciel. Je facture à la demi-journée à partir de 250 €."
    },
    {
        label: "Je travaille déjà avec un prestataire, vous pouvez reprendre le chantier ?",
        content: "Oui. Je commence par comprendre ce qui a été fait, j'identifie ce qui fonctionne et ce qui pose problème, et je vous propose la meilleure suite : terminer avec le prestataire actuel, reprendre le projet ou repartir d'une base plus propre. C'est vous qui décidez en fin de compte."
    },
    {
        label: "Vous vous déplacez à La Réunion ?",
        content: "Bien sûr ! Je suis basé à La Réunion (974), je tiens à rencontrer mes clients au moins une fois en vrai — autour d'un café ou sur votre lieu d'activité selon ce qui vous arrange. Ensuite la plupart des échanges peuvent se faire par visio ou WhatsApp pour aller vite."
    },
    {
        label: "Est-ce que je resterai propriétaire de mon outil ?",
        content: "Oui, à 100 %. Vous possédez le code, les données, les accès, tout. Je vous fournis une documentation claire. Vous pouvez continuer avec moi, avec un autre prestataire, ou reprendre la main en interne — la liberté est totale."
    }
]
</script>

<style scoped>
.services-faq-section {
    margin-bottom: 3rem;
}

.services-faq-card {
    background-color: var(--background);
    border-radius: 0.5rem;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1rem;
}
</style>
