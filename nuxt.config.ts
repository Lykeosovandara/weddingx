// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-01',

  // GitHub Pages deployment - baseURL is set dynamically via NUXT_APP_BASE_URL env variable
  // For local development, it defaults to '/'
  // For CI/CD, it's set based on branch name (e.g., /weddingx/ for main, /weddingx/staging/ for staging)
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  runtimeConfig: {
    public: {
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
      SPREAD_SHEET_ID: process.env.SPREAD_SHEET_ID,
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "vue3-carousel-nuxt"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
