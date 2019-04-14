import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
const port = process.env.NODE_ENV == 'development' ? 3000 : 80
export default {
  mode: 'universal',
  env: {
    API_URL: 'https://webapi.resaa.net',
    RECAPTCHA_SITEKEY: '6Le6nngUAAAAAGiIJGJl0rCH5QvquMK0jRcZeBim',
    BASE_URL: '/',
    BANK_RETURN_URL: 'https://ressa.net/charge'
  },
  server: {
    port: port, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  axios: {
    proxy: true, // Can be also an object with default options
    port: port
  },
  proxy: {
    '/api/': { target: process.env.NODE_ENV == 'development' ? 'https://webapi.resaa.net' : 'http://resa-web-api.bsn.local', pathRewrite: { '^/api/': '' } }
  },
  serverMiddleware: [
    {
      path: '/patient/profile',
      handler: (req, res, next) => {
        res.spa = true
        next()
      }
    }
  ],
  /*
   ** Headers of the page
   */
  head: {
    title: '??? ? ?????? ????? ????????',
    meta: [
      {
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
        content:
          '?? ??????? ?? ??? ???? ??? ??? ????? ??? ?? ??? ??????? ?? ??? ???? ? ??????? ??? ????? ?? ???? ?????? ?? ???? ?????? ??????? ???? ? ?? ?????? ?? ?????? ????????? ?? ??????? ???? ???? ?????? ?? ?????? ?????? ????? ?? ?? ????????? ?? ??? ? ????? ???? ????? ????'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      {
        src:
          'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl=fa',
        defer: true,
        async: true
      }
    ]
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
    {
      src: '~/plugins/custom-scroll.js',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [,
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    ['~/modules/nuxt-recaptcha'],
    [
      '~/modules/nuxt-validate',
      {
        lang: 'fa'
      }
    ],
    //'~/modules/nuxt-service',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-135235561-1'
      }
    ],
    '@nuxtjs/axios',
  ],
  styleResources: {
    scss: ['assets/style/variables.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      // stylus: {
      //   import: ['~assets/style/variables.styl']
      // }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      console.log(config)
    }
  }
}
