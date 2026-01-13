export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  const websiteId = config.public.umamiWebsiteId
  const host = config.public.umamiHost

  // Ne charge pas le script si pas de Website ID configuré
  if (!websiteId) {
    console.warn('[Umami] Website ID non configuré - Analytics désactivé')
    return
  }

  // Créer et injecter le script Umami
  const script = document.createElement('script')
  script.defer = true
  script.src = `${host}/script.js`
  script.setAttribute('data-website-id', websiteId)
  
  document.head.appendChild(script)
})

