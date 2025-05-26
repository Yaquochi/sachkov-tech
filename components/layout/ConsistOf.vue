<template>
  <section class="flex flex-col gap-[50px] max-[540px]:gap-6">
    <h2 class="section__title">Из чего состоит курс</h2>

    <ul
      class="grid grid-cols-2 gap-10 text-white max-[540px]:grid-cols-1 max-[540px]:gap-3 max-[1300px]:gap-7"
    >
      <li class="section__card h-fit" v-for="item in items" :key="item.title">
        <img
          :src="item.img"
          :alt="item.title"
          class="h-[413px] w-full object-cover rounded-t-3xl max-[540px]:h-52 max-[540px]:rounded-t-xl max-[1300px]:h-80 max-[1300px]:rounded-t-2xl"
        />

        <div
          class="flex flex-col gap-4 p-6 pb-4 max-[540px]:gap-3 max-[540px]:p-4"
        >
          <h3 class="section__card-title">{{ item.title }}</h3>

          <p class="text-white/80 text-lg max-[1300px]:text-base min-h-[140px]">
            {{ item.descr }}
          </p>

          <UAccordion
            v-if="item.accTitle"
            color="white"
            variant="outline"
            :size="$viewport.isLessThan('desktopMedium') ? 'lg' : 'xl'"
            :items="[
              {
                label: item.accTitle,
              },
            ]"
            :ui="{
              transition: {
                enterActiveClass: 'duration-500',
                leaveActiveClass: 'duration-500',
              },
              default: {
                class: 'text-left',
                truncate: false,
              },
            }"
          >
            <template #item="">
              <ul class="flex flex-col gap-3 max-[540px]:gap-1">
                <li
                  v-for="(acc, index) in item.accContent"
                  :key="index"
                  class="flex flex-row items-start"
                >
                  <img
                    src="/icon/star.png"
                    alt="пункт."
                    class="object-contain max-[540px]:w-6 max-[1300px]:w-7"
                  />

                  <p class="text-lg text-white max-[1300px]:text-base">
                    {{ acc }}
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
import chat from "/img/consist/chat.png";
import intensive from "/img/consist/intensive.png";
import lesson from "/img/consist/lesson.png";
import review from "/img/consist/review.png";
import task from "/img/consist/task.png";
import work from "/img/consist/work.png";

const { $viewport } = useNuxtApp();

const items = [
  {
    img: lesson,
    title: "Записи онлайн занятий",
    descr:
      "У вас сразу будет доступ ко всем записям прошедших занятий, общей длительностью 100+ часов, где разобраны ключевые аспекты разработки, и курс продолжает пополняться новыми материалами.",
    accTitle: "Что конкретно на занятиях?",
    accContent: [
      "Работа над проектом. Я буду разрабатывать проект с нуля, начиная с проектирования до реализации конкретных фич, используя актуальные подходы коммерческой разработки. Все это ты будешь внедрять в свой проект.",
      "Поддержка и помощь. Все непонятные и сложные моменты мы обязательно разберем, в любой момент ты можешь обратиться за помощью.",
      "Разбор отдельных технологий и сложных тем. Часть занятий посвящена разбору конкретных технлогий или тем, с которыми часто возникают трудности.",
      "Best practices. Я буду показывать, как писать код, придерживаясь лучших практик, чтобы твой код был чистым, читаемым, поддерживаемым, легко расширяемым и тестируемым.",
      "Разбор репозиториев. На занятиях я буду разбирать репозитории учеников, указывая на их ошибки и давая советы по улучшению.",
      "Моковые собеседования. Некоторые занятия я буду посвящать мок собеседованиям, чтобы ты мог успешно подготовиться к реальным собеседованиям.",
    ],
  },
  {
    img: intensive,
    title: "Доступ ко всем интенсивам",
    descr:
      "Интенсивы - это набор записей, где я конкретно разбираю большие и сложные темы. Сейчас доступен 1 интенсив длительностью 13 часов. Тема - Архитектура и структура .NET веб-приложений. Проектирование ASP.NET Core сервисов. Интенсивы будут продолжать выходить. Также их можно приобрести отдельно.",
    accTitle: "Чем они отличаются от онлайн записей?",
    accContent: [
      "Более структурная информация - на онлайн занятиях темы растягивались на долгое время, из-за этого не так удобно получать нужную информацию. На интенсиве все записи структурированы и я подробно разбираю сложную тему по кусочкам.",
    ],
  },
  {
    img: task,
    title: "Задания и работа над проектом в команде",
    descr:
      "Самая важная часть обучения - это практика. Поэтому ты будешь разрабатывать пет-проект. Есть два варианта, либо ты придумываешь своё пет проект или я даю тебе готовые задания по заранее придуманному и спроектированному проекту. А если ты хочешь еще больше практики, то у тебя есть возможность поучаствовать в командной разработке моего проекта.",
    accTitle: "Подробнее про задания",
    accContent: [
      "Задания составлены таким образом, чтобы ты мог разработать полноценный проект, используя все возможные технологии, которые пригодятся тебе на работе.",
      "Сдавать задания на проверку ты будешь, как на реальной работе, в виде пулл-реквеста на GitHub.",
      "Ты можешь выполнять задания в удобном для тебя темпе, никаких дедлайнов тут нет.",
      "Задания поделены на бэкенд и фронтенд части, ты можешь выполнять их параллельно, но обязательно в том порядке, в каком они указаны.",
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
    title: "Доступ к сообществу",
    descr:
      "Ты сразу получишь доступ к сообществу в телеграмме. Там буду я и все остальные ученики. Здесь ты сможешь отправлять задачи на проверку, подключаться к занятиям, задавать вопросы, получать поддержку по техническим вопросам и общаться в любое время.",
  },
  {
    img: work,
    title: "Помощь и гайды по составлению резюме и поиску работы",
    descr:
      "На курсе уже много учеников нашли работу. Поэтому у меня есть верная стратегия по составлению резюме и поиску работы. Ты можешь не сомневаться в том, что твоё резюме будет качественно составленно и точно привлечёт внимание компаний.",
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

@media screen and (max-width: 1300px) {
  .section__title {
    font-size: 58px;
  }

  .section__card {
    border-radius: 16px;
  }

  .section__card-title {
    font-size: 30px;
  }
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
