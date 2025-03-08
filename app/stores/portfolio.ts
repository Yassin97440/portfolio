import { defineStore } from 'pinia'
import experiences from '~/data/experiences.json'
import education from '~/data/education.json'
import myselfData from '~/data/myselfData.json'
import { projects } from '~/data/projects'
export const usePortfolioStore = defineStore('portfolio', {
    state: () => ({
        experiences,
        education,
        myselfData,
        projects
    }),
    getters: {
        getExperienceById: (state) => (id: number) => state.experiences.find((exp) => exp.id === id),
        getProjectById: (state) => (id: number) => {
            return state.projects.find(project => project.id === id)
        }
    }
}) 