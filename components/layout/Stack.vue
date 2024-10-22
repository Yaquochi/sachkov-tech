<template>
  <section class="section">
    <div class="flex flex-col gap-10 max-[540px]:gap-6">
      <h2 class="section__title">Backend</h2>

      <div>
        <ul
          class="flex flex-row gap-x-[15px] mb-[22px] infinityleft pl-[15px] -ml-28"
        >
          <li class="item" v-for="back in fisrtBack" :key="back">{{ back }}</li>

          <li
            class="item"
            v-for="back in fisrtBack"
            :key="back"
            aria-hidden="true"
          >
            {{ back }}
          </li>
        </ul>

        <ul class="flex flex-row gap-x-[15px] infinityright pr-[15px] -ml-28">
          <li class="item" v-for="back in secondBack" :key="back">
            {{ back }}
          </li>

          <li
            class="item"
            v-for="back in secondBack"
            :key="back"
            aria-hidden="true"
          >
            {{ back }}
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col gap-10 max-[540px]:gap-6">
      <h2 class="section__title">Frontend</h2>

      <ul class="flex flex-row gap-x-[15px] infinityleft pl-[15px] -ml-28">
        <li class="item" v-for="fr in front" :key="fr">{{ fr }}</li>

        <li class="item" v-for="fr in front" :key="fr" aria-hidden="true">
          {{ fr }}
        </li>
      </ul>
    </div>

    <div class="flex flex-col gap-10 max-[540px]:gap-6">
      <h2 class="section__title">Инфраструктура</h2>

      <ul
        class="flex flex-row gap-x-[15px] gap-y-[22px] infinityright pr-[15px] -ml-28"
      >
        <li class="item" v-for="inf in infr" :key="inf">{{ inf }}</li>

        <li class="item" v-for="inf in infr" :key="inf" aria-hidden="true">
          {{ inf }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const fisrtBack = [
  "C#",
  "Asp Net Core",
  "EF Core",
  "Dapper",
  "Postgresql",
  "Redis",
  "Kafka",
  "RabbitMQ",
  "MinIO",
  "Fluent Validation",
  "CQRS",
  "Чистая архитектура",
];

const secondBack = [
  "Юнит и интеграционные тесты",
  "Аутентификация и авторизация",
  "DDD",
  "SignalR",
  "REST",
  "GRPC",
  "Telegram bot",
  "ElasticSearch",
  "Логирование",
  "Метрики",
];

const front = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "React Hook Form",
  "Axios",
  "Tailwind",
  "HTML",
  "CSS",
  "Grid Layout",
  "Flexbox",
  "Matrial UI",
  "Vite",
];

const infr = [
  "Docker",
  "docker compose",
  "github actions",
  "nginx",
  "Монолитная и микросервесная архитектура",
  "Паттерны проектирования",
  "Git",
  "GitHub",
];
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.section__title {
  font-size: 80px;
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
}

.item {
  border-radius: 12px;
  border: 1px solid #e59cff;
  padding: 10px 24px;
  font-size: 18px;
  font-weight: 400;
  background: linear-gradient(
    90deg,
    #e59cff 0.01%,
    #ba9cff 50.01%,
    #9cb2ff 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}

.infinityleft {
  width: max-content;
  animation: stream var(--speed, 30s) linear infinite var(--direction, forwards);
}

.infinityright {
  width: max-content;
  animation: stream var(--speed, 30s) linear infinite var(--direction, reverse);
}

@keyframes stream {
  to {
    transform: translateX(-50%);
  }
}

@media screen and (max-width: 540px) {
  .section {
    gap: 24px;
  }

  .section__title {
    font-size: 28px;
  }
}
</style>
