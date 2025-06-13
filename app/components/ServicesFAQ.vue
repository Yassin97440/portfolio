<template>
    <section class="services-faq-section">
        <Card class="services-faq-card">
            <template #title>
                <h2 class="section-title">Questions Fréquentes</h2>
            </template>
            <template #content>
                <BaseSubCard>
                    <div class="faq-content">
                        <div v-for="(faq, index) in faqs" :key="faq.id" class="faq-item">
                            <button @click="toggleFaq(index)" class="faq-question"
                                :class="{ active: activeFaq === index }">
                                <h3 class="question-text">{{ faq.question }}</h3>
                                <i :class="['pi', activeFaq === index ? 'pi-minus' : 'pi-plus', 'question-icon']"></i>
                            </button>

                            <div class="faq-answer" :class="{ active: activeFaq === index }">
                                <div class="answer-content">
                                    <p v-html="faq.answer"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </BaseSubCard>
            </template>
        </Card>
    </section>
</template>

<script setup lang="ts">
const activeFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
    activeFaq.value = activeFaq.value === index ? null : index
}

const faqs = [
    {
        id: 1,
        question: 'Travailles-tu avec des startups ?',
        answer: 'Absolument ! J\'accompagne des startups dans leur développement technique, la mise en place de leur SI, la conception du MVP au passage à l\'échelle. Mon approche agile et ma compréhension des enjeux startup me permettent de proposer des solutions adaptées à vos contraintes de budget et de délais.'
    },
    {
        id: 2,
        question: 'Proposes-tu des forfaits ou que du TJM ?',
        answer: 'Je propose les deux approches selon vos besoins :<br>• <strong>Forfaits</strong> pour les projets avec un périmètre bien défini et "spontanés" (MVP, intégration IA, audit...)<br>• <strong>TJM (Taux Journalier Moyen)</strong> pour l\'accompagnement technique, le développement itératif ou les missions longues<br>• <strong>Abonnements mensuels</strong> pour l\'accompagnement CTO ou le support technique récurrent'
    },
    {
        id: 3,
        question: 'Quelle est la techno la plus adaptée à mon besoin ?',
        answer: 'Cela dépend de votre contexte ! Lors de notre premier échange, j\'analyse vos besoins, contraintes techniques, budget et délais pour vous recommander la stack technologique la plus adaptée. Mon expertise couvre Nuxt 3, Spring Boot, Node.js, bases de données SQL/NoSQL, et bien d\'autres technologies.'
    },
    {
        id: 4,
        question: 'Peux-tu travailler avec une équipe existante ?',
        answer: 'Bien sûr ! J\'ai l\'habitude de m\'intégrer dans des équipes techniques existantes. Je peux intervenir en tant que :<br>• <strong>Lead développeur</strong> pour encadrer l\'équipe<br>• <strong>Expert technique</strong> sur un domaine spécifique<br>• <strong>Mentor</strong> pour monter en compétences vos développeurs<br>• <strong>Architecte</strong> pour structurer vos projets'
    },
    {
        id: 5,
        question: 'Combien de temps prend un projet type ?',
        answer: 'Les délais varient selon la complexité de vos besoins. En moyenne :<br>• <strong>Site vitrine</strong> : 1-2 semaines<br>• <strong>Application web simple</strong> : 1-2 mois<br>• <strong>SaaS complet</strong> : 3-6 mois<br>• <strong>Intégration IA</strong> : 2-4 semaines<br>• <strong>Audit technique</strong> : 1-2 jours<br>Je m\'engage sur des délais réalistes après analyse de vos besoins.'
    },
    {
        id: 6,
        question: 'Travailles-tu en remote ou sur site ?',
        answer: 'Je tiens toujours à être au moins une fois sur site pour un échange plus fluides et une meilleure compréhension de vos besoins. Je propose les deux modalités :<br>• <strong>100% remote</strong> : la plupart de mes missions<br>• <strong>Hybride</strong> : quelques jours sur site si nécessaire<br>• <strong>Sur site</strong> : possible pour Montpellier et La Réunion (974)<br>Je m\'adapte à vos préférences et contraintes organisationnelles.'
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

.faq-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.faq-item {
    border: 1px solid rgba(var(--text-rgb, 255, 255, 255), 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.3s ease;
}

.faq-item:hover {
    border-color: var(--action);
}

.faq-question {
    width: 100%;
    padding: 1.25rem;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    text-align: left;
}

.faq-question:hover {
    background-color: rgba(255, 255, 255, 0.05);
}

.faq-question.active {
    background-color: rgba(var(--action-rgb, 0, 0, 0), 0.1);
}

.question-text {
    color: var(--text);
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    flex: 1;
    padding-right: 1rem;
}

.question-icon {
    color: var(--action);
    font-size: 1.25rem;
    transition: transform 0.3s ease;
}

.faq-question.active .question-icon {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.faq-answer.active {
    max-height: 500px;
}

.answer-content {
    padding: 0 1.25rem 1.25rem 1.25rem;
    color: var(--text);
    line-height: 1.6;
    opacity: 0.9;
}

.answer-content p {
    margin: 0;
}

/* Responsive */
@media (max-width: 640px) {
    .faq-question {
        padding: 1rem;
    }

    .question-text {
        font-size: 1rem;
        padding-right: 0.75rem;
    }

    .question-icon {
        font-size: 1.1rem;
    }

    .answer-content {
        padding: 0 1rem 1rem 1rem;
        font-size: 0.95rem;
    }
}

@media (min-width: 1024px) {
    .faq-content {
        max-width: 800px;
        margin: 0 auto;
    }
}
</style>
