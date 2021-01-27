export default {

  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)

  head: {
    title: 'Hotel Villa Maria - Ravello Amalfi Coast',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'},
      {
        hid: 'description',
        name: 'description',
        content: 'Owned by the Palumbo family, offers to the guest the romantic atmosphere of the enchanting Ravello. It is in a central position, situated among Villa Rufolo, the main square and Villa Cimbrone. Restaurant with sea view terraces, wide parking and solarium.'
      },
      {
        name: 'keywords',
        content: 'ravello,  villa maria, villa, maria, coast, amalfi coast, amalfitana, costiera, costiera amalfitana, amalfitana coast, praiano, sorrento, atrani, maiori, minori, tramonti, salerno, napoli, naples, campania, italia, italy, paestum, hotel, albergo, alberghi, cilento, turismo, viaggi, tourism, travel'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Merriweather&display=swap'}
    ]
  }
  ,


  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [    // SCSS file in the project
    '@/assets/scss/style.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{
    src: '~/plugins/aos.js',
    mode: 'client',
  },
    {
      src: '~/plugins/slick-carousel.js',
      mode: 'client',
    },
    {
      src: '~/plugins/datepicker.js',
      ssr: false,
      mode: 'client'
    },
    {
      src: '~/plugins/lightgallery.js',
      mode: 'client',
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/date-fns',
    '@nuxtjs/fontawesome',
    '@nuxtjs/color-mode',
    '@nuxtjs/dotenv'
  ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true,
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    'nuxt-cookie-control',
    ['vue-scrollto/nuxt', {duration: 1000}],
    ['nuxt-gmaps', {
      key: process.env.GOOGLE_MAPS_KEY,
      //you can use libraries: ['places']
    }]

  ],

  bootstrapVue: {
    icons: false,
  },

  i18n: {
    lazy: true,
    locales: [
      {
        name: 'Italiano',
        code: 'it',
        iso: 'it-IT',
        file: 'it-IT.js'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      },/*
      {
        name: 'Francais',
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.js'
      },*/


    ],
    langDir: 'lang/',
    defaultLocale: 'it',
    parsePages: false,   // Disable babel parsing
    pages: {
      about: {
        it: '/chisiamo', // -> accessible at /about-us (no prefix since it's the default locale)
        en: '/about', // -> accessible at /fr/a-propos
      },

      'rooms/index': {
        it: '/camere',
        en: '/rooms',
      },

      'rooms/_id/index': {
        it: '/camere/:id',
        en: '/rooms/:id'
      },

      restaurant: {
        it: '/ristorante',
        en: '/restaurant',
      },
      services: {
        it: '/servizi',
        en: '/services',
      },
      contacts: {
        it: '/contatti',
        en: '/contacts',
      }
    },
    vueI18nLoader: true,
    loadLanguagesAsync: true,
    seo: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  },

  loading: {
    color: '#c0392b',
    height: '2px'
  },
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference old is system
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

  script: [
    {src: 'bootstrap-material-datetimepicker.js', body: true},
  ],

  router: {
    linkExactActiveClass: "nuxt-link-exact-active"
  },

  cookies: {
    necessary: [
      {
        //if multilanguage
        name: {
          en: 'Default Cookies'
        },
        //else

        //if multilanguage
        description: {
          en: 'Used for cookie control.'
        },
        //else

        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name: 'Google Analitycs',
        //if you don't set identifier, slugified name will be used
        identifier: 'ga',
        //if multilanguage
        description: {
          en: 'Google GTM is ...'
        },
        //else

        initialState: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
        async: true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
        },
        declined: () => {
        }
      }
    ]
  }


}

