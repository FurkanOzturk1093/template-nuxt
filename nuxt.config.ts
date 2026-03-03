// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt App — Deployed with DeployWise',
      meta: [
        { name: 'description', content: 'A Nuxt SSR starter template deployed on your own VPS with DeployWise.' },
      ],
    },
  },
})
