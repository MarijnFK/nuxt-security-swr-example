// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  routeRules: {
    '*': {
      swr: 10,
    },
  },
  modules: ['nuxt-security'],
  security: {
    enabled: true,
    nonce: true, // Enables HTML nonce support in SSR mode
    ssg: {
      hashScripts: true,
      hashStyles: false,
    },
    headers: {
    crossOriginEmbedderPolicy: 'unsafe-none',
    contentSecurityPolicy: {
      'script-src': [
        "'self'",
        'https:',
        "'unsafe-inline'",
        "'strict-dynamic'",
        "'nonce-{{nonce}}'",
      ],
    },
    },
  },
});
