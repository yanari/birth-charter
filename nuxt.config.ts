// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'fade', mode: 'out-in' },
  },
  runtimeConfig: {
  },
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
  ],
  build: {
    transpile: ['@vuepic/vue-datepicker']
  }
});
