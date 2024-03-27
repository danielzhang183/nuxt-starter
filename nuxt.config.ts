// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/default-theme.css',
    '~/styles/global.css',
    '~/styles/vars.css',
  ],
  colorMode: {
    classSuffix: '',
  },
})
