export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/thumbnaillab-site/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SVG Editor - Graphic Design with SVG on Android/iOS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "SVG Editor is a free (with in-app purchases) standalone app/tool that provides you with the tools to view, edit and create SVG (Vector Graphics) on your mobile device. Whether it's designing graphics for your Youtube channel or creating a UI wireframe for your latest web design project, SVG Editor will boost your graphic design productivity." },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-itunes-app', content: 'app-id=1624759841' },

      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/android-chrome-192x192.png' },

      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'mask-icon', color: '#5bbad5', href: '/favicon/safari-pinned-tab.svg' },

      { rel: 'manifest', href: '/favicon/site.webmanifest' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "./assets/styles/__global.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/dark-mode.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://thumbnaillab.app'
  },
  googleAnalytics: {
    id: 'UA-142283107-2'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
