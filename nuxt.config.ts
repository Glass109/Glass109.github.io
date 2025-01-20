// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: [
      '@nuxtjs/tailwindcss',
      '@vueuse/nuxt',
      '@nuxt/fonts',
      '@nuxt/scripts',
      '@nuxt/icon'
    ],
    tailwindcss: {
        config: {
            content: [
                './public/dictionaries/*.{js,json,ts}'
            ]
        }
    },
    nitro: {
        baseURL: 'https://glass109.github.io',
        siteName: 'Glass109',
        prerender: {
            crawlLinks: true,
            failOnError: false,
        }
    },
    generate:{
        nojekyll: true,
        fallback: '404.html'
    },
    target: 'static',

})