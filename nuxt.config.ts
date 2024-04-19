// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  routeRules: {
    '*': {
      swr: 60,
    },
  },
  modules: ['nuxt-security'],
  security: {
    enabled: false,
    nonce: true, // Enables HTML nonce support in SSR mode
    ssg: {
      hashScripts: true,
      hashStyles: false,
    },
    // headers: {
    //crossOriginEmbedderPolicy: 'require-corp',
    // contentSecurityPolicy: {
    //   'script-src': [
    //     "'self'",
    //     'https:',
    //     "'unsafe-inline'",
    //     "'strict-dynamic'",
    //     "'nonce-{{nonce}}'",
    //   ],
    //   'style-src': ["'self'", 'https:', "'unsafe-inline'"],
    //   'img-src': ["'self'", 'data:', 'blob:'],
    //   'font-src': ["'self'", 'https:', 'data:'],
    //   'base-uri': ["'none'"],
    //   'object-src': ["'none'"],
    //   'script-src-attr': ["'none'"],
    //   'form-action': ["'self'"],
    //   'frame-ancestors': ["'self'"],
    // },
    // },
  },
});
