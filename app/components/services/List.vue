<template>
    <section class="services-list-section">
        <Card class="services-list-card">
            <template #title>
                <h2 class="section-title">Mes services</h2>
            </template>
            <template #content>
                <BaseSubCard>
                    <div class="services-grid">
                        <div v-for="service in services" :key="service.id" class="service-item">
                            <div class="service-header">
                                <i :class="service.icon" class="service-icon"></i>
                                <h3 class="service-title">{{ service.title }}</h3>
                            </div>
                        </div>
                    </div>
                </BaseSubCard>
            </template>
        </Card>
    </section>
</template>

<script setup lang="ts">
const services = [
    {
        id: 1,
        icon: 'pi pi-search',
        title: 'Audit et conseil'
    },
    {
        id: 2,
        icon: 'pi pi-cog',
        title: 'Analyse et optimisation des processus métiers'
    },
    {
        id: 6,
        icon: 'pi pi-users',
        title: 'Accompagnement direction/référent technique'
    },
    {
        id: 3,
        icon: 'pi pi-sitemap',
        title: 'Architecture logicielle'
    },
    {
        id: 4,
        icon: 'pi pi-code',
        title: 'Développement web fullstack'
    },
    {
        id: 5,
        icon: 'pi pi-wrench',
        title: 'Solutions sur-mesure'
    },
    {
        id: 7,
        icon: 'pi pi-bolt',
        title: 'IA / Automatisation intelligente'
    }
]
</script>

<style scoped>
.services-list-section {
    margin-bottom: 3rem;
}

.services-list-card {
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.service-item {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
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
    margin-bottom: 0;
}

.service-icon {
    color: var(--action);
    font-size: 1.5rem;
    margin-right: 0.75rem;
}

.service-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text);
    margin: 0;
}

/* Responsive */
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
}

@media (min-width: 641px) and (max-width: 1023px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>