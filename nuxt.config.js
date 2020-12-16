export default {

  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'HotelVillaMaria',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Merriweather&display=swap'}
    ]
  },

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
    icons: false
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
      },
      {
        name: 'Francais',
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.js'
      },


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
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

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

}

