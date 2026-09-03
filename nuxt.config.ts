// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/root.css'],
  modules: ['@nuxt/image', '@nuxtjs/sanity', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    sanityReadToken: '',
    public: {
      sanityProjectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || '',
      sanityDataset: process.env.NUXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production',
      sanityApiVersion: process.env.NUXT_PUBLIC_SANITY_API_VERSION || '2025-02-19',
      sanityUseCdn: process.env.NUXT_PUBLIC_SANITY_USE_CDN !== 'false',
    }
  },
  sanity: {
    configFile: '~~/sanity.config',
    projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || '',
    dataset: process.env.NUXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production',
    apiVersion: process.env.NUXT_PUBLIC_SANITY_API_VERSION || '2025-02-19',
    useCdn: process.env.NUXT_PUBLIC_SANITY_USE_CDN !== 'false',
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ]
    }
  },
})
