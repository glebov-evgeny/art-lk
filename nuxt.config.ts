// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: false,
  debug: true,
  vite: {
    plugins: [],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/tools/_mixins.scss";',
        },
      },
    },
  },
  image: {
    format: ['webp'],
    presets: {
      cover: {
        modifiers: {
          fit: 'cover',
          format: 'png',
        },
      },
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon', '@nuxt/image'],
  app: {
    head: {
      title: 'Art LK',
      htmlAttrs: { lang: 'ru' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'og:title', property: 'og:title', content: 'artforyou-lk.ru' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Текст обо всём',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Искусство для каждого',
        },
        { hid: 'keywords', name: 'keywords', content: 'Искусство для каждого' },
        { name: 'theme-color', content: '#fff' },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: [
    '@/assets/styles/main.scss',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  components: {
    global: true,
    dirs: [
      '~/components/molecules',
      '~/components/atoms',
      '~/components/sections',
    ],
  },
  runtimeConfig: {
    public: {
      FB_API_KEY: process.env.FB_API_KEY,
      FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
      FB_PROJECT_ID: process.env.FB_PROJECT_ID,
      FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
      FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
      FB_APP_ID: process.env.FB_APP_ID,
      ADMIN_ID: process.env.ADMIN_ID,
    },
  },
  compatibilityDate: '2025-04-14',
});
