// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/root.css'],
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    public: {
      sanityProjectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || '',
      sanityDataset: process.env.NUXT_PUBLIC_SANITY_DATASET || '',
      sanityApiVersion: process.env.NUXT_PUBLIC_SANITY_API_VERSION || '2025-02-19',
      sanityUseCdn: process.env.NUXT_PUBLIC_SANITY_USE_CDN !== 'false',
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ]
    }
  },
})
