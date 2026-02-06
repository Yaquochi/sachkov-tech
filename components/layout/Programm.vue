<template>
  <section class="section">
    <h2 class="section__title">Программа обучения</h2>

    <div>
      <UAccordion
        class="accordion"
        color="white"
        variant="soft"
        :size="$viewport.isLessThan('desktopMedium') ? 'lg' : 'xl'"
        multiple
        :items="items"
        :ui="{
          default: {
            class: 'text-2xl w-full max-[540px]:text-lg text-left',
            truncate: false,
          },
          item: {
            size: 'text-lg max-[540px]:text-base',
            padding: 'pt-0 pb-6',
          },
          container:
            'border-b border-white/20 pb-4 mb-4 last:border-0 last:mb-0',
          transition: {
            enterActiveClass: 'duration-500',
            leaveActiveClass: 'duration-500',
          },
        }"
      >
        <template #item="{ item }">
          <div
            class="text-white/80 section__card p-6"
            v-thtml="item.content"
          ></div>
        </template>
      </UAccordion>
    </div>

    <LayoutStack />
  </section>
</template>

<script setup>
const { $viewport } = useNuxtApp();

const items = [
  {
    label: "Модуль 1: Архитектура .NET веб приложений",
    defaultOpen: true,
    content: `
            <p class="mb-4">Проектируем правильную архитектуру для масштабируемых приложений. От монолита к микросервисам.</p>
            <ul class="flex flex-col gap-2">
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Vertical Slice Architecture и Clean Architecture</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Правильное мышление при работе с микросервисами</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Модульный монолит: разделение на модули и контексты</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Работа с паттернами проектирования (CQRS, Result, Options, etc.)</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Wolverine: синхронная и асинхронная коммуникация</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Фоновые процессы и планировщики (Quartz.NET)</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Интеграция с фронтендом, контракты API</li>
            </ul>
        `,
  },
  {
    label: "Модуль 2: Базы данных, EF Core и Highload",
    content: `
            <p class="mb-4">Глубокое погружение в PostgreSQL и ORM. Не просто "как сохранить", а как сделать это быстро, надежно и правильно.</p>
            <ul class="flex flex-col gap-2">
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> PostgreSQL: индексы, транзакции, ACID, уровни изоляции</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> EF Core: конфигурации, миграции, оптимизация запросов</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Dapper: написание сырых SQL запросов для максимальной скорости</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Параллельный доступ: Optimistic & Pessimistic Locking</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Сложные запросы: JOIN, Window Functions, CTE</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Работа с деревьями и иерархическими структурами в БД</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Redis: кэширование и оптимизация производительности</li>
            </ul>
        `,
  },
  {
    label: "Модуль 3: Масштабный Fullstack проект (Марафон)",
    content: `
            <p class="mb-4">Разработка полноценного видеохостинга на микросервисной архитектуре — от первой строки кода до деплоя.</p>
            <ul class="flex flex-col gap-2">
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> <strong>Backend:</strong> ASP.NET Core, PostgreSQL, RabbitMQ, Redis, SignalR</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> <strong>Frontend:</strong> React, TypeScript, React Query, Tailwind, Shadcn</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> S3 MinIO (хранение файлов), FFmpeg (обработка видео)</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Transaction Outbox паттерн для надежной коммуникации</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Multipart-загрузка больших файлов и фоновая обработка</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Инфраструктура: Docker, Docker Compose, Nginx, Linux</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Мониторинг: Prometheus, Grafana, Loki</li>
            </ul>
        `,
  },
  {
    label: "Модуль 4: Frontend на React & Next.js",
    content: `
            <p class="mb-4">Разработка современного UI для нашего бэкенда.</p>
            <ul class="flex flex-col gap-2">
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> React Hooks: useState, useEffect, Custom Hooks</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Next.js: Routing, SSR, Layouts</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> State Management: Zustand, React Query (TanStack Query)</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Формы и валидация: React Hook Form + Zod</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Взаимодействие с API, обработка ошибок, бесконечный скролл</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Drag and Drop загрузка файлов</li>
            </ul>
        `,
  },
  {
    label: "Модуль 5: Аутентификация и Авторизация",
    content: `
            <p class="mb-4">Построение безопасной системы доступа пользователей.</p>
            <ul class="flex flex-col gap-2">
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> OAuth 2.0, OpenID Connect (OIDC), JWT, Refresh Tokens</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Keycloak: настройка и интеграция Identity Provider</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> ASP.NET Core Identity и Identity Server</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Role Based Access Control (RBAC) и Claims</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Безопасность API: HTTPS, CORS, защита от атак</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> SSO (Single Sign-On) решения</li>
            </ul>
        `,
  },
  {
    label: "Модуль 6: DevOps и CI/CD",
    content: `
            <p class="mb-4">Деплой, автоматизация и эксплуатация в продакшене.</p>
            <ul class="flex flex-col gap-2">
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> CI/CD Pipelines: GitLab CI, GitHub Actions</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Docker: упаковка приложений, оптимизация образов</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Деплой на Linux сервер: настройка VPS, Nginx, Systemd</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Логирование (ELK/Seq) и Трассировка (OpenTelemetry, Jaeger)</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Метрики и алертинг: Prometheus, Grafana</li>
                <li class="flex items-start gap-2"><span class="text-purple-400">→</span> Управление секретами (Vault) и конфигурациями</li>
            </ul>
        `,
  },
];
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.section__title {
  font-size: 90px;
  font-weight: 800;
  line-height: 110%;
  background: linear-gradient(
    90deg,
    #e59cff 0.01%,
    #ba9cff 50.01%,
    #9cb2ff 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;
}

.section__card {
  border-radius: 24px;
  /*  border: 1px solid #e59cff; */
  background: rgba(10, 1, 25, 0.6);
}

@media screen and (max-width: 1300px) {
  .section__title {
    font-size: 58px;
  }
}

@media screen and (max-width: 540px) {
  .section__title {
    font-size: 28px;
  }
}
</style>
