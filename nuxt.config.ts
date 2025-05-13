// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // app
  app: {
    baseURL: '/willdow.github.io/',
    head: {
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          hid: "segment",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R83ZVMKB85');
          `,
          type: "text/javascript",
          charset: "utf-8"
        }
      ],
      title: "Willyan LIN",
      titleTemplate: "%s - Sharing place",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "Willyan LIN",
          name: "Willyan LIN",
          content: "Blog"
        }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ["@/assets/css/main.css"],
  ssr: false,
  target: 'static'
});
