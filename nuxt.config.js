export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blogerpedia',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/auth',
    '@nuxtjs/sitemap',

  ],

  sitemap: {
    hostname: 'https://blogerpedia.com',
    gzip: true,
    exclude: [
      '/error',
      '/register/**',
      '/private/**',
    ],
    routes: [
      '/posts/1',
      '/posts/3',
      '/posts/5',
      '/posts/17',
      '/posts/4',
      '/posts/2',
      '/posts/19',

    ]
  },

  markdownit: {
    runtime: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.blogerpedia.com',
    browserBaseURL: 'https://api.blogerpedia.com',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {

      config.node= {
         fs: 'empty'
       }
   }
  },
  auth: {
    strategies: {
    local: {
    endpoints: {
    login: {
    url: 'auth/local',
    method: 'post',
    propertyName: 'jwt'
    },
    user: {
    url: 'users/me',
    method: 'get',
    propertyName: false
    },
    logout: false
    }
    }
    }
   },
}
