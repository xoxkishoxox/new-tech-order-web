// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/eslint', 'nuxt-aos', 'nuxt-swiper'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'New Tech Order',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  $development: {
    app: {
      head: {
        title: 'DEV',
      },
    },
  },
  $production: {
    app: {
      head: {
        title: 'PROD',
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/_colors.sass" as *\n',
        },
      },
    },
  },
  aos: {
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,

    offset: 120,
    delay: 50,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  },
})
