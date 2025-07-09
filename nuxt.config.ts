// import { defineNuxtConfig } from 'nuxt/config'
// import defaultMeta from './config/defaultMeta'
const version = process.env.npm_package_version
const isDev = () =>
  process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development'

let noIndexing: { hid: string; name: string; content: string }[] = []
const isStaging = Number(process.env.IS_STAGING) === 1

if (isStaging) {
  noIndexing = [
    {
      hid: 'robots',
      name: 'robots',
      content: 'noindex',
    },
    {
      hid: 'googlebot',
      name: 'googlebot',
      content: 'noindex',
    },
  ]
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: !isDev() ? 'assets' : '/_nuxt/',
    head: {
      // title: 'Baze Nuxt 3',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [...noIndexing],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // devtools: {
  //   enabled: true,

  //   timeline: {
  //     enabled: true,
  //   },
  // },

  routeRules: {
    // Homepage pre-rendered at build time
    // '/': { prerender: true },
    '/api/app/**': {
      cache: { maxAge: 30 },
      cors: true,
    },
    '/favicon.ico': { cache: { maxAge: 60 * 60 } },
    '/icon.png': { cache: { maxAge: 60 * 60 } },
  },

  imports: {
    dirs: ['composables', 'composables/**', 'utils', './store'],
  },

  runtimeConfig: {
    API_URL: process.env.API_URL,
    API_LAIN: process.env.API_LAIN,
    NUXT_SECRET: process.env.NUXT_SECRET,
    public: {
      BASE_URL: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },

  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },

  auth: {
    // originEnvKey: 'API_URL',
    baseURL: process.env.NUXT_PUBLIC_SITE_URL,
    provider: {
      type: 'local',
      pages: {
        login: '/login',
      },
      endpoints: {
        signIn: { path: '/api/auth/login' },
        signOut: { path: '/api/auth/logout' },
        // signUp: { path: '/auth/register', method: 'post' },
        getSession: { path: '/api/auth/user' },
      },
      token: {
        signInResponseTokenPointer: '/token/accessToken',
      },
      session: {
        dataType: {
          id: 'string',
          email: 'string',
          username: 'string',
          firstName: 'string',
          lastName: 'string',
        },
        dataResponsePointer: '/',
      },
      // refresh: {
      //   // This is usually a static configuration `true` or `false`.
      //   // We do an environment variable for E2E testing both options.
      //   isEnabled: process.env.NUXT_AUTH_REFRESH_ENABLED !== 'false',
      //   endpoint: { path: '/refresh', method: 'post' },
      //   token: {
      //     signInResponseRefreshTokenPointer: '/token/refreshToken',
      //     refreshResponseTokenPointer: '',
      //     refreshRequestTokenPointer: '/refreshToken',
      //   },
      // },
    },
    globalAppMiddleware: {
      isEnabled: false,
    },
  },

  css: ['~/assets/css/main.css'],

  plugins: [
    // { src: '~/plugins/vue-select.js' },
    // { src: '~/plugins/recaptcha.js' },
  ],

  modules: [
    '@sidebase/nuxt-auth',
    // '@nuxtjs/tailwindcss',
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-jsonld',
    'nuxt-icons',
    // '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/eslint-module',
    '@nuxt/fonts',
    './modules/auto-import-eslint.ts',
  ],

  pinia: {
    // autoImports: [
    //   // automatically imports `defineStore`
    //   'defineStore',
    // ],
    storesDirs: ['./store/**'],
  },

  fonts: {
    families: [
      {
        name: 'Instrument Sans',
        provider: 'google',
        weights: [400, 500, 600, 700],
        styles: ['normal', 'italic'],
      },
    ],
    defaults: {
      weights: [400],
      styles: ['normal', 'italic'],
    },
  },

  build: {
    transpile: ['jsonwebtoken'],
  },

  image: {
    domains: [
      'assets.suitdev.com',
      'suitdev.com',
      'assets-suitdev.s3.ap-southeast-1.amazonaws.com',
    ],
    // alias: {
    //   suitmedia: isStaging
    //     ? 'https://assets.suitdev.com'
    //     : 'https://suitmedia.static-assets.id',
    //   youtube: 'https://img.youtube.com',
    // },
    // https://assets-suitdev.s3.ap-southeast-1.amazonaws.com/lake_trees_fantasy_world_nature_scenery_2k_wallpaper_uhdpaper_com_682_0_j_caee8246c6.jpg
    presets: {
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 450,
          height: 254,
        },
      },
      client: {
        modifiers: {
          format: 'webp',
          width: 204,
          height: 204,
        },
      },
      heroDetail: {
        modifiers: {
          format: 'webp',
          width: 960,
          height: 540,
        },
      },
    },
    provider: 'ipx',
    ipx: {
      maxAge: 60000,
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },

  // This is the amount of milliseconds to cache the sitemap for.
  sitemap: {
    defaults: {
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date(),
    },
    cacheTtl: 1000 * 60 * 60 * 24, // 1 day
  },

  vite: {
    plugins: [
      // sentryVitePlugin({
      //   url: process.env.SENTRY_DSN,
      //   org: 'suitmedia',
      //   project: 'suitmedia-frontend'
      // })
    ],
    optimizeDeps: { exclude: ['fsevents'] },

    build: {
      rollupOptions: {
        output: {
          entryFileNames: `assets/[hash]-${version}.js`,
          chunkFileNames: `assets/[hash]-${version}.js`,
          assetFileNames: assetInfo => {
            if (assetInfo?.name?.endsWith('.css'))
              return `assets/css/[hash]-${version}[extname]`
            if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo?.name || ''))
              return `assets/img/[hash]-${version}[extname]`
            if (/\.(woff|woff2|eot|ttf|otf)$/i.test(assetInfo?.name || ''))
              return `assets/fonts/[hash]-${version}[extname]`
            if (/\.(mp4|webm|ogv)$/i.test(assetInfo?.name || ''))
              return `assets/videos/[hash]-${version}[extname]`
            return `assets/[hash]-${version}[extname]`
          },
        },
      },
    },

    css: {
      // preprocessorOptions: {
      //   scss: {
      //     // additionalData: '@use "~/assets/scss/partials/_variables.scss" as *;',
      //   },
      // },
    },
  },

  compatibilityDate: '2024-11-01',
})
