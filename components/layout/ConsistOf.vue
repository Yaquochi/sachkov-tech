<template>
  <section class="flex flex-col gap-[50px] max-[540px]:gap-6">
    <h2 class="section__title">Из чего состоит курс</h2>

    <ul
      class="grid grid-cols-2 gap-8 text-white max-[540px]:grid-cols-1 max-[540px]:gap-4 max-[1300px]:gap-6"
    >
      <li
        class="section__card section__card--main h-fit"
        v-for="item in items"
        :key="item.title"
      >
        <div>
          <img
            :src="item.img"
            :alt="item.title"
            class="h-[360px] w-full object-cover rounded-2xl mb-6 max-[540px]:h-52 max-[1300px]:h-64"
          />
          <h3 class="section__card-title mb-4">{{ item.title }}</h3>
        </div>

        <p
          class="text-white/80 text-lg max-[1300px]:text-base max-[540px]:text-sm leading-relaxed"
        >
          {{ item.descr }}
        </p>

        <ul class="flex flex-col gap-3 max-[540px]:gap-2 mt-4">
          <li
            v-for="(point, index) in item.points"
            :key="index"
            class="flex flex-row items-start gap-2"
          >
            <img
              src="/icon/star.png"
              alt="•"
              class="w-6 h-6 flex-shrink-0 max-[540px]:w-5 max-[540px]:h-5"
            />
            <span class="text-white/90 text-base max-[540px]:text-sm">{{
              point
            }}</span>
          </li>
        </ul>

        <UAccordion
          v-if="item.accTitle"
          color="white"
          variant="outline"
          :size="$viewport.isLessThan('desktopMedium') ? 'lg' : 'xl'"
          :items="[{ label: item.accTitle }]"
          class="mt-6"
          :ui="{
            transition: {
              enterActiveClass: 'duration-500',
              leaveActiveClass: 'duration-500',
            },
            default: { class: 'text-left', truncate: false },
          }"
        >
          <template #item="">
            <ul class="flex flex-col gap-2 max-[540px]:gap-1">
              <li
                v-for="(acc, index) in item.accContent"
                :key="index"
                class="flex flex-row items-start gap-2"
              >
                <span class="text-purple-400 flex-shrink-0">→</span>
                <p class="text-base text-white/80 max-[540px]:text-sm">
                  {{ acc }}
                </p>
              </li>
            </ul>
          </template>
        </UAccordion>
      </li>
    </ul>
  </section>
</template>

<script setup>
import chat from "/img/consist/chat.png";
import lesson from "/img/consist/lesson.png";
import review from "/img/consist/review.png";
import task from "/img/consist/task.png";

const { $viewport } = useNuxtApp();

const items = [
  {
    img: lesson,
    title: "100+ видеоуроков",
    descr:
      "Полная программа обучения fullstack-разработке на современном стеке. От базовых концепций до продвинутых тем — каждый урок включает теорию и практику. Вы научитесь создавать веб-приложения, микросервисы и деплоить их в продакшен.",
    points: [
      "ASP.NET Core, Entity Framework, PostgreSQL, Redis",
      "React, TypeScript, Redux, Tailwind CSS",
      "Docker, RabbitMQ, микросервисная архитектура",
      "CQRS, DDD, Clean Architecture, Vertical Slice Architecture",
      "Тестирование, CI/CD, деплой на сервер",
    ],
    accTitle: "Подробнее о формате уроков",
    accContent: [
      "Разработка проекта с нуля: от проектирования до реализации фич с использованием подходов коммерческой разработки",
      "Разбор сложных тем и технологий на отдельных занятиях",
      "Best practices: чистый, читаемый, поддерживаемый и тестируемый код",
      "Разбор репозиториев учеников с указанием ошибок и советами по улучшению",
      "Курс постоянно пополняется новыми материалами",
    ],
  },
  {
    img: task,
    title: "Практические задания",
    descr:
      "Главное в обучении — практика. Вы будете разрабатывать настоящие микросервисы, как на реальной работе. Каждое задание — это отдельная фича, которая закрепляет пройденную тему.",
    points: [
      "Работа под разные бизнес требования и микросервисы",
      "Сложные запросы к базам данных и оптимизация",
      "Работа с файлами, загрузка и хранение в S3/MinIO",
      "Разработка видеохостинга и стриминг контента",
      "Frontend на React с современным UI",
      "Деплой всего проекта и настройка инфраструктуры",
    ],
    accTitle: "Как устроены задания",
    accContent: [
      "Задания составлены для разработки полноценного проекта со всеми технологиями, нужными на работе",
      "Сдача заданий через Pull Request на GitHub — как в реальной компании",
      "Задания поделены на backend и frontend, можно выполнять параллельно",
      "Свой темп — никаких дедлайнов",
      "Возможность участвовать в командной разработке реального проекта",
    ],
  },
  {
    img: review,
    title: "Личная поддержка ментора",
    descr:
      "Вы не останетесь один на один с материалом. Я являюсь единственным ментором на курсе, поэтому вы получаете качественную обратную связь лично от меня с самого старта и до получения оффера.",
    points: [
      "Код-ревью каждого Pull Request с детальным разбором",
      "Еженедельные онлайн-созвоны с разбором вопросов",
      "Ревью и помощь в составлении резюме",
      "Мок-интервью для подготовки к собеседованиям",
      "Поддержка навсегда (до получения оффера и дальше)",
      "Личная связь в Telegram",
    ],
  },
  {
    img: chat,
    title: "Живое сообщество",
    descr:
      "Активное комьюнити в Telegram, где всегда помогут. Многие ученики уже работают разработчиками и делятся реальным опытом с рынка.",
    points: [
      "Опытные разработчики, которые нашли работу через курс",
      "Мотивированные ученики на разных этапах обучения",
      "Быстрые ответы на технические вопросы",
      "Обмен опытом прохождения собеседований",
      "Взаимопомощь и поддержка 24/7",
    ],
  },
];
</script>

<style scoped>
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
}

.section__card {
  border-radius: 24px;
  border: 1px solid #e59cff;
  background: rgba(10, 1, 25, 0.6);
  display: flex;
  flex-direction: column;
  padding: 32px;
}

.section__card--main {
  box-shadow: inset 0 0 20px rgba(198, 135, 234, 0.3);
  transition: all 0.3s ease;
}

.section__card--main:hover {
  box-shadow:
    inset 0 0 30px rgba(198, 135, 234, 0.5),
    0 0 20px rgba(229, 156, 255, 0.2);
}

.section__card-title {
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(90deg, #e59cff 0%, #ba9cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
