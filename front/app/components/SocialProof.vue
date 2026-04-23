<template>
    <section class="social-proof-section">
        <UCard class="social-proof-card" :ui="{ root: 'bg-background rounded-lg' }">
            <BaseSubCard>
                <div class="social-proof-content">
                    <div class="stats-grid">
                        <div class="stat-item" v-for="stat in stats" :key="stat.label">
                            <div class="stat-value">{{ stat.value }}</div>
                            <div class="stat-label">{{ stat.label }}</div>
                        </div>
                    </div>
                    <div class="trust-badges">
                        <div class="trust-badge" v-for="badge in badges" :key="badge.text">
                            <UIcon :name="badge.icon" class="badge-icon" />
                            <span>{{ badge.text }}</span>
                        </div>
                    </div>
                </div>
            </BaseSubCard>
        </UCard>
    </section>
</template>

<script setup lang="ts">
const stats = [
    { value: '5+', label: 'Années à développer des logiciels' },
    { value: '15+', label: 'Projets livrés' },
    { value: '24h', label: 'Réponse garantie' },
    { value: '974', label: 'Freelance péi, basé à La Réunion' }
]

const badges = [
    { icon: 'i-lucide-shield-check', text: 'Devis gratuit & sans engagement' },
    { icon: 'i-lucide-message-circle', text: 'Joignable sur WhatsApp' },
    { icon: 'i-lucide-map-pin', text: 'Déplacement possible sur l\'île' }
]
</script>

<style scoped>
.social-proof-section {
    margin-bottom: 3rem;
}

.social-proof-card {
    background-color: var(--background);
    border-radius: 0.5rem;
}

.social-proof-content {
    padding: 1rem 0;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.stat-item {
    text-align: center;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    transition: transform 0.3s ease;
}

.stat-item:hover {
    transform: translateY(-3px);
}

.stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: var(--action);
    line-height: 1.2;
}

.stat-label {
    font-size: 0.9rem;
    color: var(--text);
    opacity: 0.8;
    margin-top: 0.25rem;
}

.trust-badges {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.trust-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text);
    font-size: 0.9rem;
    font-weight: 500;
}

.badge-icon {
    color: var(--action);
    font-size: 1.25rem;
}

@media (min-width: 768px) {
    .stats-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 640px) {
    .stat-value {
        font-size: 1.5rem;
    }

    .stat-label {
        font-size: 0.8rem;
    }

    .trust-badges {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
}
</style>
