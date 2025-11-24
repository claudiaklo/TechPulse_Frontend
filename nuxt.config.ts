// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/css/main.scss'
  ],

  app: {
    head: {
      title: 'Tech Pulse - Blog Tech & Programmation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Blog sur les langages de programmation, l\'IA et l\'actualité tech'
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBase: 'https://techpulse-backend.onrender.com/api'
    }
  },

  modules: [],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'mixed-decls'],
          quietDeps: true
        }
      }
    }
  }
})
