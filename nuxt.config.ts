import { execaSync } from 'execa'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    'floating-vue/nuxt',
    '@nuxt/content',
  ],
  runtimeConfig: {
    public: {
      buildTime: Date.now(),
      gitSha: execaSync('git', ['rev-parse', 'HEAD']).stdout.trim(),
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    'floating-vue/dist/style.css',
    '~/styles/default-theme.css',
    '~/styles/global.css',
    '~/styles/vars.css',
    '~/styles/dropdown.css',
    '~/styles/prose.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  app: {
    head: {
      titleTemplate: '%s - Template',
      htmlAttrs: {
        lang: 'en-US',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
    markdown: {
      remarkPlugins: [
        'remark-external-links',
      ],
    },
    experimental: {
      search: {},
    },
  },
})
