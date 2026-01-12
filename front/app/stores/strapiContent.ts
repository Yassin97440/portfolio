import { defineStore } from 'pinia'

export const useStrapiContentStore = defineStore('strapiContentStore', {
  state: () => ({ }),
  actions: {
    async findProjects() {
      const strapi = useStrapi()
      const response = await strapi.find(StrapiTypes.PROJECT)
      return response.data
    },
    async findProjectById(id: string) {
      const strapi = useStrapi()
      const response = await strapi.findOne(StrapiTypes.PROJECT, id, {populate: ['technologies', 'coverImage', 'skills']})
      return response.data
    },
    async findProject(id: string) {
      const strapi = useStrapi()
      const response = await strapi.findOne(StrapiTypes.PROJECT, id,
        {populate: ['technologies', 'coverImage', 'skills'] as any})
      return response.data
    },
    async findExperiences() {
      const strapi = useStrapi()
      const response = await strapi.find(StrapiTypes.EXPERIENCE)
      return response.data
    },
    async findExperienceById(id: string) {
      const strapi = useStrapi()
      const response = await strapi.findOne(StrapiTypes.EXPERIENCE, id, {populate: ['skills']})
      return response.data
    },
    getCoverImageUrl(coverImage: any) {
      const media = useStrapiMedia(coverImage?.url)
      return media
    },
    getTechnologies(technologies: any[]) {
      return technologies.map((technology: any) => {
        return {
          name: technology.name,
          icon: technology.type
        }
      })
    }

  }
})
