import { defineStore } from 'pinia'
import experiences from '~/data/experiences.json'
import education from '~/data/education.json'

export const usePortfolioStore = defineStore('portfolio', {
    state: () => ({
        experiences,
        education
    })
}) 