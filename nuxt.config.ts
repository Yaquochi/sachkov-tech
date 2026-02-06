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
        "Курс C# ASP.NET Core и React | Обучение .NET Fullstack разработке с ментором",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Курс по C# и ASP.NET Core для становления Middle Fullstack разработчиком. Микросервисы, Docker, React, PostgreSQL. Личное менторство, код-ревью и гарантия поддержки до оффера.",
        },
        {
          name: "keywords",
          content:
            "курс c#, обучение asp.net core, курсы .net разработчика, fullstack разработка, react и c#, микросервисы обучение, docker для начинающих, ментор c#, код-ревью, трудоустройство программистом, backend разработка, postgresql, entity framework core, rabbitmq, redis, architecture, clean architecture, ddd, cqrs, обучение программированию с нуля",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://sachkov-dotnet.ru/" },
        {
          property: "og:title",
          content: "Курс C# ASP.NET Core | Стань Middle .NET разработчиком",
        },
        {
          property: "og:description",
          content:
            "Полный курс по C# и веб-разработке. Создаем сложный видеохостинг на микросервисах. Личное менторство Кирилла Сачкова.",
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
