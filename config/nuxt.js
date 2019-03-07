const pkg = require('../package')
const resolve = require('path').resolve


const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',
  env: {
    API_URL: 'https://webapi.resaa.net',
    RECAPTCHA_SITEKEY: '6Le6nngUAAAAAGiIJGJl0rCH5QvquMK0jRcZeBim',
    BASE_URL: '/',
    BANK_RETURN_URL: 'http://ressa.armin.pro/charge'
  },
  srcDir: resolve(__dirname, '..', 'resources'),
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  serverMiddleware: [{
    path: '/patient/profile',
    handler: (req, res, next) => {
      res.spa = true;
      next()
    }
  }],
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'google-site-verification',
        content: 'vT5f4dImWLU1X6AHgqqFniG46MVEcXZYyxoCVLX0jNc'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl=fa',
      defer: true,
      async: true
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    'material-design-icons-iconfont/dist/material-design-icons.css',
    '~/assets/style/app.styl',
    '~/assets/style/main.scss',
    '~/assets/style/vuetify_rtl.scss',
    'swiper/dist/css/swiper.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vuetify',
    {
      src: '~/plugins/global.js',
      ssr: false
    },
    {
      src: '~/plugins/swiper.js',
      ssr: false
    },
    {
      src: '~/plugins/scroll.js',
      ssr: false
    },
    {
      src: '~/plugins/map.js',
      ssr: false
    },
    {
      src: '~/plugins/resource.js',
      ssr: false
    },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [,
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    ['~/modules/nuxt-recaptcha'],
    ['~/modules/nuxt-validate', {
      lang: 'fa',
    }],
    '~/modules/nuxt-service',
    ['@nuxtjs/google-analytics', {
      id: 'UA-135235561-1'
    }]
  ],
  styleResources: {
    scss: [
      'assets/style/variables.scss',
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        //import: ["~assets/style/variables.styl"]
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      console.log(config);
    }
  }
}
