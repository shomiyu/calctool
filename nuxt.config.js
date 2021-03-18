require('dotenv').config()
const { KIT_ID } = process.env
const { API_KEY } = process.env
const { API_URL } = process.env

const title = 'コーディング単位計算ツール'
const description =
  '面倒なpxからemへの変換や、line-heightの計算、レスポンシブを考慮した横幅可変の計算など、コーディング時に計算機が必要になる値の変換をまとめて行えるツールです。'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title,
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [
    'ress',
    '~/assets/scss/base.scss',
    '~/assets/scss/common.scss',
    '~/assets/scss/tips.scss',
    '~/assets/scss/animation.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/adobe-fonts',
    '~/plugins/axios',
    '~/plugins/utils',
    { src: '~/plugins/local-storage', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-clipboard2',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** dotenv module configuration
   */
  dotenv: {
    path: process.cwd(),
  },
  privateRuntimeConfig: {
    kitId: KIT_ID,
    apiKey: API_KEY,
    apiUrl: API_URL,
  },
  /*
   ** style-resources module configuration
   ** use global sass settings
   */
  styleResources: {
    scss: [
      '~/assets/scss/settings/_functions.scss',
      '~/assets/scss/settings/_mixins.scss',
      '~/assets/scss/settings/_variables.scss',
    ],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
