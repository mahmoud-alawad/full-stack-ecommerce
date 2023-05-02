// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxtjs/strapi',
    '@nuxtjs/tailwindcss',
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  i18n: {
    /* module options */
    vueI18n: './i18n.config.ts',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        file: 'en-US.json'
      },
      {
        code: 'it',
        file: 'it-IT.json'
      },
      {
        code: 'ar',
        file: 'ar-AR.json'
      },
      {
        code: 'de',
        file: 'de-DE.json'
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'it'
  },
});
