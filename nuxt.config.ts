export default defineNuxtConfig({
    ssr: true,
    app: {
        baseURL: '/glass109/', // Set the base path for GitHub Pages
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        '@nuxt/fonts',
        '@nuxt/scripts',
        '@nuxt/icon',
    ],
    tailwindcss: {
        config: {
            content: ['./public/dictionaries/*.{js,json,ts}'],
        },
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            failOnError: false,
        },
    },
    generate: {
        nojekyll: true,
        fallback: '404.html',
    },
    target: 'static',
});
