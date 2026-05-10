// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon-precomposed.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ]
    }
  },
})
