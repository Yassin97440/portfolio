import { defineStore } from 'pinia'
import experiences from '~/data/experiences.json'
import education from '~/data/education.json'
import myselfData from '~/data/myselfData.json'
export const usePortfolioStore = defineStore('portfolio', {
    state: () => ({
        experiences,
        education,
        myselfData
    }),
    getters: {
        getExperienceById: (state) => (id: number) => state.experiences.find((exp) => exp.id === id)
    }
}) 