import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';
import axios from 'axios';
require('dotenv').config({
  path: process.env.NODE_ENV == 'development' ? '.env.development' : '.env'
});
// import shrinkRay from 'shrink-ray'
export default {
  mode: 'universal',
  // env: {
  //   PORT: process.env.PORT,
  //   HOST: process.env.HOST,
  //   SITE_URL: process.env.SITE_URL,
  //   API_URL: process.env.API_URL,
  //   RECAPTCHA_SITEKEY: process.env.RECAPTCHA_SITEKEY,
  //   BASE_URL: process.env.BASE_URL,
  //   BANK_RETURN_URL: process.env.BANK_RETURN_URL
  // },
  server: {
    port: process.env.PORT, // default: 3000
    host: process.env.HOST // default: localhost
  },
  axios: {
    proxy: true, // Can be also an object with default options
    prefix: '/api',
    port: process.env.PORT
  },
  proxy: {
    '/api/Mobile/': {
      target: 'http://resa-web.bsn.local'
    },
    '/api/MessageCallback/': {
      target: 'http://resa-web.bsn.local'
    },
    '/api/DoctorApp/': {
      target: 'http://resa-web.bsn.local'
    },
    '/api/': {
      target: process.env.API_URL,
      pathRewrite: {
        '^/api/': ''
      }
    }
  },
  serverMiddleware: [
    {
      path: '/patient/profile',
      handler: (req, res, next) => {
        res.spa = true;
        next();
      }
    }
  ],
  /*
   ** Headers of the page
   */
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    }
  },
  head: {
    title: 'رسا ، سامانه سلامت ایرانیان',
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
          'با استفاده از رسا تماس های غیر ضروری خود از سمت بیماران را حذف کنید و مکالمات غیر مربوط به روند درمانی را کاهش رایگان ثبت‌نام کنید و با دسترسی به پزشکان معرفی‌شده در وب‌سایت رسا، تماس مستقیم با بهترین پزشکان متخصص را با صرفه‌جویی در وقت و هزینه خود، تجربه کنید'
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
    // '~/assets/style/app.styl',
    '~/assets/style/vuetify_rtl.scss',
    'swiper/dist/css/swiper.css',
    '~/assets/style/main.scss',
    'vrwebdesign-nuxt/assets/style/main.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '~/plugins/vuetify.js',
    {
      src: '~/plugins/global.js'
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
  modules: [
    // 'nuxt-svg-loader',
    'nuxt-device-detect',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
    ['~/modules/nuxt-recaptcha'],
    [
      '~/modules/nuxt-validate',
      {
        lang: 'fa'
      }
    ],
    //'~/modules/nuxt-service',
    // [
    //   '@nuxtjs/google-analytics',
    //   {
    //     id: 'UA-135304047-1'
    //   }
    // ],
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/dotenv',
    'vrwebdesign-nuxt/modules/nuxt-toast',
    'vrwebdesign-nuxt/modules/nuxt-dialog'
    // [
    //   {
    //     filename:
    //
    //   }
    // ]
  ],
  vuetify: {
    rtl: true,
    materialIcons: false,
    theme: {
      primary: '#13d2f3',
      accent: '#35d6c1',
      secondary: '#35d6c1'
    },
    options: {
      customProperties: true
    }
  },
  // svgLoader: {
  //   svgoConfig: {
  //     plugins: [
  //       { prefixIds: false } // Disables prefixing for SVG IDs
  //     ]
  //   }
  // },
  // doctors sitemap
  sitemap: {
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      lastmodrealtime: true
    },
    hostname: process.env.SITE_URL,
    gzip: true,
    exclude: ['/patient/profile'],
    path: '/sitemap.xml',
    filter({ routes, options }) {
      return routes.map(route => {
        if (route.url == '/') {
          route.priority = 1;
          route.changefreq = 'daily';
        }
        return route;
      });
    },
    routes() {
      return axios
        .get(`${process.env.API_URL}/misc/sitemap`)
        .then(res =>
          res.data.result.doctorSubscriberNumbers.map(
            doctor => '/doctors/' + doctor
          )
        );
    }
  },

  // sitemap: {
  //   defaults: {
  //     changefreq: 'weekly',
  //     priority: 0.7,
  //     lastmod: new Date(),
  //     lastmodrealtime: true
  //   },
  //   hostname: process.env.SITE_URL,
  //   gzip: true,
  //   exclude: ['//patient/profile'],
  //   path: '/sitemap_specialities.xml',
  //   filter({ routes, options }) {
  //     return routes.map(route => {
  //       if (route.url == '/') {
  //         route.priority = 1;
  //         route.changefreq = 'daily';
  //       }
  //       return route;
  //     });
  //   }
  // },
  styleResources: {
    scss: ['assets/style/variables.scss']
  },
  /*
   ** Build configuration
   */
  // render: {
  //   compressor: shrinkRay({
  //     filter: (req, res) => {
  //       if (/^\/api/.test(req.originalUrl)) {
  //         return false
  //       }
  //       return shrinkRay.filter(req, res)
  //     }
  //   })
  // },
  build: {
    // transpile: ['vuetify/lib'],
    extractCSS: true,
    // plugins: [new VuetifyLoaderPlugin()],
    // loaders: {
    //   stylus: {
    //     import: ['~assets/style/variables.styl']
    //   }
    // },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            loader: 'vue-svg-loader'
          },
          {
            loader: 'file-loader',
            query: {
              name: 'assets/[name].[hash:8].[ext]'
            }
          }
        ]
      });
    }
  }
};
