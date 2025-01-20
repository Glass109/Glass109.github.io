// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
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
    generate:{
        nojekyll: true,
        fallback: '404.html'
    },
    target: 'static',

})