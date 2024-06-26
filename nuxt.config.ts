import eslintPlugin from "vite-plugin-eslint"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    plugins: [eslintPlugin()]
  },

  css: [
    '@/assets/styles/tailwind.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
