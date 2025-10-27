import { defineStore } from 'pinia'
const config = useRuntimeConfig()
const strapiUrl = config.public.strapiUrl
export const useMyStrapiContentStore = defineStore({
  id: 'myStrapiContentStore',
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
    async findProjectBySlug(slug: string) {
      const strapi = useStrapi()
      const response = await strapi.findOne(StrapiTypes.PROJECT, {filters: {slug: slug}}, {populate: ['technologies', 'coverImage', 'skills']})
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
      return strapiUrl + coverImage?.url
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
