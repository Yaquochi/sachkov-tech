<template>
  <section class="flex flex-col gap-[50px] max-[540px]:gap-6">
    <h2 class="section__title">Из чего состоит курс</h2>

    <ul
      class="grid grid-cols-2 gap-10 text-white max-[540px]:grid-cols-1 max-[540px]:gap-3"
    >
      <li class="section__card h-fit" v-for="item in items" :key="item.title">
        <img
          :src="item.img"
          :alt="item.title"
          class="h-[413px] w-full object-cover rounded-t-3xl max-[540px]:h-52 max-[540px]:rounded-t-xl"
        />

        <div
          class="flex flex-col gap-4 p-6 pb-4 max-[540px]:gap-3 max-[540px]:p-4"
        >
          <h3 class="section__card-title">{{ item.title }}</h3>

          <p class="text-white/80 text-lg max-[540px]:text-base">
            {{ item.descr }}
          </p>

          <UAccordion
            v-if="item.accTitle"
            color="white"
            variant="outline"
            :size="$viewport.isLessThan('tablet') ? 'lg' : 'xl'"
            :items="[
              {
                label: item.accTitle,
              },
            ]"
          >
            <template #item="">
              <ul class="flex flex-col gap-3 max-[540px]:gap-1">
                <li
                  v-for="acc in item.accContent"
                  :key="acc.text"
                  class="flex flex-row items-start"
                >
                  <img
                    src="~/assets/icon/star.png"
                    alt="пункт."
                    class="object-contain max-[540px]:w-6"
                  />

                  <p class="text-lg text-white max-[540px]:text-base">
                    <span>{{ acc.title }}</span>
                    {{ acc.text }}
                  </p>
                </li>
              </ul>
            </template>
          </UAccordion>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import lesson from "~/assets/img/consist/lesson-ds.jpg";
import task from "~/assets/img/consist/task.jpg";
import review from "~/assets/img/consist/review.jpg";
import chat from "~/assets/img/consist/chat.png";

const { $viewport } = useNuxtApp();

const items = [
  {
    img: lesson,
    title: "Онлайн занятия",
    descr:
      "В среднем занятия проводятся 3 раза в неделю. Ты можешь присутствовать на занятиях и задавать любые вопросы. Все непонятные и сложные моменты мы обязательно разберем.",
    accTitle: "Что конкретно будет на занятиях?",
    accContent: [
      {
        title: "Работа над проектом. ",
        text: "Я буду разрабатывать проект с нуля, в котором буду применять все свои знания и актуальный стэк, объясняя и разжёвывая все темы. Все это ты сможешь внедрить в свой проект.",
      },
      {
        title: "Разбор сложных тем. ",
        text: "На занятиях мы регулярно разбираем сложные темы и технологии.",
      },
      {
        title: "Лучшие практики. ",
        text: "Я буду показывать, как писать код, придерживаясь лучших практик, чтобы твой код был чистым, читаемым, поддерживаемым, легко расширяемым и тестируемым.",
      },
      {
        title: "Разбор репозиториев. ",
        text: "На занятиях я могу разбирать репозитории учеников, указывая на их ошибки и давая советы по улучшению.",
      },
      {
        title: "Моковые собеседования. ",
        text: "Некоторые занятия я буду посвящать мок собеседованиям, чтобы ты мог успешно подготовиться к реальным собеседованиям.",
      },
    ],
  },
  {
    img: task,
    title: "Задания",
    descr:
      "Самая важная часть обучения - это практика. Поэтому ты будешь разрабатывать пет-проект. Я уже придумал идею проекта и полностью спроектировал его, поэтому я буду выступать в роли тим-лида.",
    accTitle: "Подробнее про задания",
    accContent: [
      {
        title: "",
        text: "Задания поделены на бэкенд и фронтенд части, ты можешь выполнять их параллельно, но обязательно в том порядке, в каком они указаны.",
      },
      {
        title: "",
        text: "Ты можешь выполнять задания в удобном для тебя темпе, никаких дедлайнов тут нет. Сдавать задания на проверку ты будешь, как на реальной работе, в виде пулл-реквеста на GitHub",
      },
      {
        title: "",
        text: "В процессе проведения новых занятий, задания могут изменяться и дополняться.",
      },
    ],
  },
  {
    img: review,
    title: "Ревью кода",
    descr:
      "После того, как ты выполнишь задание и создашь пулл-реквест, я буду проводить код-ревью. Я буду проверять твой код, указывать на ошибки и места, где можно что-то улучшить или доработать. В итоге ты будешь получать полную обратную связь по своему коду.",
  },
  {
    img: chat,
    title: "Общие чаты",
    descr:
      "Ты сразу получишь доступ к чату в телеграме и серверу в дискорде. Там буду я и все остальные ученики. Там ты сможешь задавать вопросы, общаться в любое время, делать задачи в команде, проводить доклады и собеседования, а также помогать другим, отвечая на их вопросы.",
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
}

.section__card-title {
  font-size: 40px;
  font-weight: 600;
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

@media screen and (max-width: 540px) {
  .section__title {
    font-size: 28px;
  }

  .section__card {
    border-radius: 12px;
  }

  .section__card-title {
    font-size: 20px;
  }
}
</style>
