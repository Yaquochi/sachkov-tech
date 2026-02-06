// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Play: true,
        },
      },
    ],
    "@nuxt/ui",
    "vue3-carousel-nuxt",
    "nuxt-viewport",
    "@nuxtjs/sitemap",
  ],
  site: {
    url: "https://sachkov-dotnet.ru",
  },
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/thtml.ts"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    preference: "dark",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      title:
        "Курс .NET Fullstack разработчик — от нуля до оффера | Кирилл Сачков",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Практический курс по .NET fullstack разработке. 100+ видеоуроков, ASP.NET Core, React, Docker, микросервисы. Код-ревью, поддержка ментора, помощь с трудоустройством. Ученики получают офферы 100-150к.",
        },
        {
          name: "keywords",
          content:
            "курс .NET, ASP.NET Core, C# обучение, fullstack разработчик, React курс, микросервисы, Docker, курс программирования, трудоустройство программист",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://sachkov-dotnet.ru/" },
        {
          property: "og:title",
          content: "Курс .NET Fullstack разработчик — от нуля до оффера",
        },
        {
          property: "og:description",
          content:
            "Практический курс по .NET fullstack разработке. 100+ видеоуроков, код-ревью, поддержка ментора. Ученики получают офферы 100-150к.",
        },
        {
          property: "og:image",
          content: "https://sachkov-dotnet.ru/img/og-image.png",
        },
        { property: "og:locale", content: "ru_RU" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Курс .NET Fullstack разработчик" },
        {
          name: "twitter:description",
          content:
            "Практический курс по .NET fullstack разработке с поддержкой до оффера.",
        },
        {
          name: "twitter:image",
          content: "https://sachkov-dotnet.ru/img/og-image.png",
        },
      ],
      link: [
        { rel: "canonical", href: "https://sachkov-dotnet.ru/" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
});
