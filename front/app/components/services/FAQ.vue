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
        label: 'Travailles-tu avec des startups ?',
        content: 'Absolument ! J\'accompagne des startups dans leur développement technique, la mise en place de leur SI, la conception du MVP au passage à l\'échelle. Mon approche agile et ma compréhension des enjeux startup me permettent de proposer des solutions adaptées à vos contraintes de budget et de délais.'
    },
    {
        label: 'Proposes-tu des forfaits ou que du TJM ?',
        content: 'Je propose les deux approches selon vos besoins :<br>• <strong>Forfaits</strong> pour les projets avec un périmètre bien défini et "spontanés" (MVP, intégration IA, audit...)<br>• <strong>TJM (Taux Journalier Moyen)</strong> pour l\'accompagnement technique, le développement itératif ou les missions longues<br>• <strong>Abonnements mensuels</strong> pour l\'accompagnement CTO ou le support technique récurrent'
    },
    {
        label: 'Quelle est la techno la plus adaptée à mon besoin ?',
        content: 'Cela dépend de votre contexte ! Lors de notre premier échange, j\'analyse vos besoins, contraintes techniques, budget et délais pour vous recommander la stack technologique la plus adaptée. Mon expertise couvre Nuxt 3, Spring Boot, Node.js, bases de données SQL/NoSQL, et bien d\'autres technologies.'
    },
    {
        label: 'Peux-tu travailler avec une équipe existante ?',
        content: 'Bien sûr ! J\'ai l\'habitude de m\'intégrer dans des équipes techniques existantes. Je peux intervenir en tant que :<br>• <strong>Lead développeur</strong> pour encadrer l\'équipe<br>• <strong>Expert technique</strong> sur un domaine spécifique<br>• <strong>Mentor</strong> pour monter en compétences vos développeurs<br>• <strong>Architecte</strong> pour structurer vos projets'
    },
    {
        label: 'Combien de temps prend un projet type ?',
        content: 'Les délais varient selon la complexité de vos besoins. En moyenne :<br>• <strong>Site vitrine</strong> : 1-2 semaines<br>• <strong>Application web simple</strong> : 1-2 mois<br>• <strong>SaaS complet</strong> : 3-6 mois<br>• <strong>Intégration IA</strong> : 2-4 semaines<br>• <strong>Audit technique</strong> : 1-2 jours<br>Je m\'engage sur des délais réalistes après analyse de vos besoins.'
    },
    {
        label: 'Travailles-tu en remote ou sur site ?',
        content: 'Je tiens toujours à être au moins une fois sur site pour un échange plus fluides et une meilleure compréhension de vos besoins. Je propose les deux modalités :<br>• <strong>100% remote</strong> : la plupart de mes missions<br>• <strong>Hybride</strong> : quelques jours sur site si nécessaire<br>• <strong>Sur site</strong> : possible pour Montpellier et La Réunion (974)<br>Je m\'adapte à vos préférences et contraintes organisationnelles.'
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
