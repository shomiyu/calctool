require('dotenv').config()
const { KIT_ID } = process.env
const { API_KEY } = process.env
const { API_URL } = process.env

const title = '計算が苦手な文系のための コーディング単位計算ツール'
const uri = 'https://coding-calc.com/'
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
    titleTemplate: '%s |' + ' ' + title,
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:site_name', property: 'og:site_name', content: title },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: uri },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: uri + 'images/img_ogp.jpg',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@MykiiTech' },
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
  plugins: ['~/plugins/adobe-fonts', '~/plugins/axios', '~/plugins/utils'],
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
    '@nuxtjs/gtm',
  ],
  gtm: {
    id: process.env.GTM_ID,
    pageTracking: true,
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
    'nuxt-clipboard2',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /**
   * Sitemap module configuration
   */
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://coding-calc.com/',
  },
  /*
   ** dotenv module configuration
   */
  dotenv: {
    path: process.cwd(),
  },
  publicRuntimeConfig: {
    kitId: KIT_ID,
  },
  privateRuntimeConfig: {
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
