import { defineStore } from 'pinia'
import experiences from '~/data/experiences.json'
import education from '~/data/education.json'
import myself from '~/data/myself.json'
export const usePortfolioStore = defineStore('portfolio', {
    state: () => ({
        experiences,
        education,
        myself
    }),
    getters: {
        getExperienceById: (state) => (id: number) => state.experiences.find((exp) => exp.id === id)
    }
}) 