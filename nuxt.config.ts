// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'fade', mode: 'out-in' },
    head: {
      script: [
        {
          async: true,
          src: `https://maps.googleapis.com/maps/api/js?key=${process.env.NUXT_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`,
        },
        {
          innerHTML: 'window.initMap = function() {}'
        }
      ],
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: 'https://api.birth-chart-calculator.yanari.dev/horoscope',
    },
  },
  css: ['@/assets/css/main.css'],
  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },
});
