<template>
    <section class="testimonials-section">
        <UCard class="testimonials-card" :ui="{ root: 'bg-background rounded-lg' }">
            <template #header>
                <h2 class="section-title">Témoignages</h2>
            </template>
            <BaseSubCard>
                <div class="testimonials-content">
                    <div v-if="testimonials.length > 0" class="testimonials-grid">
                        <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-item">
                            <div class="testimonial-header">
                                <div class="testimonial-avatar">
                                    <UIcon name="i-lucide-user" class="text-action text-2xl" />
                                </div>
                                <div class="testimonial-info">
                                    <h4 class="testimonial-name">{{ testimonial.name }}</h4>
                                    <p class="testimonial-role">{{ testimonial.role }}</p>
                                </div>
                            </div>
                            <div class="testimonial-rating">
                                <UIcon 
                                    v-for="i in 5" 
                                    :key="i"
                                    :name="i <= testimonial.rating ? 'i-lucide-star' : 'i-lucide-star'"
                                    :class="['star-icon', i <= testimonial.rating ? 'filled' : 'empty']"
                                />
                            </div>
                            <p class="testimonial-text">{{ testimonial.text }}</p>
                        </div>
                    </div>

                    <div v-else class="testimonials-placeholder">
                        <div class="placeholder-icon">
                            <UIcon name="i-lucide-message-circle" class="text-action text-4xl" />
                        </div>
                        <h3 class="placeholder-title">Témoignages à venir</h3>
                        <p class="placeholder-text">
                            Les retours de mes clients seront bientôt disponibles ici.
                        </p>
                    </div>
                </div>
            </BaseSubCard>
        </UCard>
    </section>
</template>

<script setup lang="ts">
// ⚠️ Ces témoignages servent de base rédactionnelle — à valider / remplacer
// avec de vrais retours clients avant publication.
const testimonials = ref([
    {
        id: 1,
        name: 'Jean-Marc Payet',
        role: 'Gérant, Boutique de prêt-à-porter — Saint-Pierre (974)',
        rating: 5,
        text: "Avant Yassin, je passais mes dimanches à recompter les stocks sur papier. Il m'a monté un outil simple sur mon téléphone : je scanne un produit, c'est à jour partout. J'ai gagné 6 à 8 heures par semaine et je ne fais plus d'erreurs de caisse. En plus il a pris le temps de tout m'expliquer, comme un membre de la famille."
    },
    {
        id: 2,
        name: 'Patrick Hoarau',
        role: 'Artisan plaquiste, PTH Aménagement — Saint-Paul (974)',
        rating: 5,
        text: "Nous cherchions à arrêter les devis sur Word et les plannings sur feuille volante. Yassin a compris le métier tout de suite, il est venu sur un chantier pour voir comment on travaillait. Résultat : un outil qui tient dans la poche, devis envoyés en 5 minutes au lieu de 30, et plus de chantiers oubliés. Relation humaine, prix honnête, je le recommande les yeux fermés."
    },
    {
        id: 3,
        name: 'Sandrine Técher',
        role: 'Gérante, Salon de coiffure Éclat — Saint-Denis (974)',
        rating: 5,
        text: "J'ai trois coiffeuses et je gérais les rendez-vous par téléphone toute la journée. Yassin m'a mis en place une prise de rendez-vous en ligne connectée à mon agenda, plus un petit rappel automatique par SMS. En 2 mois, j'ai récupéré 30 % de créneaux qui partaient en \"no-show\" et mes clientes adorent. On a fait ça sans que je comprenne un mot de technique, et c'est ça le plus fort."
    }
])
</script>

<style scoped>
.testimonials-section {
    margin-bottom: 3rem;
}

.testimonials-card {
    background-color: var(--background);
    border-radius: 0.5rem;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1rem;
}

.testimonials-content {
    min-height: 300px;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    width: 100%;
}

.testimonial-item {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    padding: 1.5rem;
    transition: transform 0.3s ease;
    width: 100%;
    box-sizing: border-box;
}

.testimonial-item:hover {
    transform: translateY(-5px);
}

.testimonial-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.testimonial-avatar {
    width: 50px;
    height: 50px;
    background-color: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.testimonial-info {
    flex: 1;
}

.testimonial-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text);
    margin: 0;
}

.testimonial-role {
    color: var(--text);
    opacity: 0.7;
    font-size: 0.9rem;
    margin: 0;
}

.testimonial-rating {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 1rem;
}

.star-icon {
    font-size: 1rem;
}

.star-icon.filled {
    color: var(--action);
}

.star-icon.empty {
    color: var(--text);
    opacity: 0.3;
}

.testimonial-text {
    color: var(--text);
    line-height: 1.6;
    font-style: italic;
}

.testimonials-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem;
    text-align: center;
}

.placeholder-icon {
    width: 80px;
    height: 80px;
    background-color: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.placeholder-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1rem;
}

.placeholder-text {
    color: var(--text);
    opacity: 0.8;
    max-width: 400px;
    line-height: 1.6;
}

/* Responsive */
@media (max-width: 640px) {
    .testimonials-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .testimonial-item {
        padding: 1.25rem;
        width: 100%;
        min-width: 0;
    }

    .testimonial-header {
        gap: 0.75rem;
    }

    .testimonial-avatar {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
    }

    .testimonial-info {
        min-width: 0;
        flex: 1;
    }

    .testimonial-name {
        font-size: 1rem;
    }

    .testimonial-role {
        font-size: 0.85rem;
    }

    .testimonial-text {
        font-size: 0.95rem;
        word-wrap: break-word;
    }

    .placeholder-icon {
        width: 60px;
        height: 60px;
    }

    .placeholder-title {
        font-size: 1.25rem;
    }

    .placeholder-text {
        font-size: 0.95rem;
    }
}

@media (min-width: 641px) and (max-width: 1023px) {
    .testimonials-grid {
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }

    .testimonial-item {
        width: 100%;
        min-width: 0;
    }
}

@media (min-width: 1024px) {
    .testimonials-grid {
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
}
</style>
