<template>
    <div class="p-5 md:p-14 lg:p-20">
        <Card>
            <template #title>
                <h1 class="text-2xl">{{ project?.title }}</h1>
                <p class="text-secondary">{{ project?.type }}</p>
            </template>
            <template #content>
                <img v-if="project?.image" :src="project.image" :alt="project.title"
                    class="w-full h-64 object-cover rounded-lg mb-6" />

                <Fieldset legend="Description" :toggleable="true" class="border mb-10">
                    <MDC :value="project?.description || ''" tag="article" />
                </Fieldset>

                <Fieldset legend="Technologies utilisées" :toggleable="true" class="border mb-10">
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tech in project?.technologies" :key="tech"
                            class="px-3 py-1 bg-secondary rounded-full text-sm">
                            {{ tech }}
                        </span>
                    </div>
                </Fieldset>

                <div class="flex gap-4 mt-4">
                    <Button v-if="project?.demoUrl"
                        class="px-4 py-2 bg-action hover:bg-action/80 text-white rounded-lg text-sm transition-colors"
                        @click="openUrl(project.demoUrl)">
                        <i class="pi pi-external-link mr-2"></i>
                        Voir la démo
                    </Button>
                    <Button v-if="project?.githubUrl"
                        class="px-4 py-2 bg-secondary hover:bg-secondary/80 text-text rounded-lg text-sm transition-colors"
                        @click="openUrl(project.githubUrl)">
                        <i class="pi pi-github mr-2"></i>
                        Code source
                    </Button>
                </div>
            </template>
        </Card>
    </div>
</template>

<script lang="ts" setup>
import { usePortfolioStore } from '~/stores/portfolio'

const route = useRoute()
const projectId = route.params.id
const project = usePortfolioStore().getProjectById(Number(projectId))

const openUrl = (url: string | URL | undefined) => {
    if (typeof window !== 'undefined') {
        window.open(url, '_blank')
    }
}
</script>