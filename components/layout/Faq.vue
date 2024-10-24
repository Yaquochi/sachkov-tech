<template>
  <section class="flex flex-row gap-10 max-[540px]:flex-col max-[540px]:gap-4">
    <div class="card h-fit max-[540px]:!hidden">
      <h3 class="card__title whitespace-nowrap">Остались вопросы?</h3>

      <a href="https://t.me/sachkova_mng" class="card__consult-btn">
        Получить консультацию
      </a>
    </div>

    <h2 class="hidden max-[540px]:inline title">FAQ</h2>

    <UAccordion
      color="white"
      variant="outline"
      :size="$viewport.isLessThan('desktopMedium') ? 'lg' : 'xl'"
      multiple
      :items="faq"
      open-icon="i-heroicons-plus"
      close-icon="i-heroicons-minus"
      :ui="{
        default: {
          class: 'text-xl mb-2.5 w-full max-[540px]:text-lg',
        },
        item: {
          size: 'text-lg max-[540px]:text-base',
        },
        transition: {
          enterActiveClass: 'duration-500',
          leaveActiveClass: 'duration-500',
        },
      }"
    />
  </section>
</template>

<script setup>
const { $viewport } = useNuxtApp();

const faq = [
  {
    label: "С чего начинается обучение?",
    content:
      "Я приглашаю вас в телеграм канал, в котором хранятся все записи занятий, задания, чаты с поддержкой. Ты сразу сможешь влиться в работу.",
  },
  {
    label: "Что мне нужно знать, чтобы начать курс? Я совсем не знаю фронтенд",
    content:
      "Фронтенд знать необязательно, его мы будем изучать с нуля. Тебе нужно знать только C# на базовом уровне.",
  },
  {
    label: "Сколько длится обучение?",
    content:
      "Курс стартанул 2 месяца назад, именно тогда я начал проводить онлайн занятия. Занятия по разработке будут проводиться ещё несколько месяцев, пока мы не изучим все темы. Полное прохождение всех тем займёт 5-6 месяцев, но всё зависит от ваших навыков, курс можно пройти быстрее. Но на этом курс не закончится. Проверка заданий, помощь с проектом, резюме, собеседованиями и со всем остальным будет постоянной, независимо от времени. Также курс будет улучшаться и дополняться новыми материалами.",
  },
  {
    label: "Мне придётся догонять основной поток, чтобы пройти курс?",
    content:
      "Нет, ты можешь в своём темпе смотреть занятия, выполнять задания, отправлять их на проверку с самого начала. Ты сможешь получить поддержку по любому вопросу в любой момент, даже если ты только приступил к курсу. Отдельные онлайн занятия будут посвящены актуальным проблемам учеников, принять участие сможет каждый.",
  },
  {
    label: "Каким образом предполагается помощь в трудоустройстве?",
    content:
      "Отдельные занятия полностью посвящены тому, что я учу вас, как находить вакансии, как составлять резюме и проходить собеседования. Мы регулярно проводим мок собеседования, чтобы натренировать вас перед реальным. ",
  },
  {
    label: "Курс рассчитан на начинающего или более опытного разработчика?",
    content:
      "На начинающего, но чем больше проходит занятий, тем сложнее и интереснее становятся задания и темы. С каждой неделей ученики становятся всё опытнее, а для более продвинутых есть возможность участвовать в разработке моего проекта, там мы забегаем вперёд. Моя цель - сделать из вас квалифицированного разработчика, чтобы вы без труда смогли устроиться на работу.",
  },
  {
    label: "Я не из РФ, как мне оплатить курс?",
    content:
      "Вопросы по оплате обсуждаются лично, мы постараемся найти решение.",
  },
  {
    label: "Если я уже был на курсе, мне нужно снова полностью оплачивать его?",
    content: "Нет, в таком случае мы лично рассчитаем для вас скидку.",
  },
];
</script>

<style scoped>
.card {
  border-radius: 30px;
  border: 1px solid #e59cff;
  background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 100%);
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 40px;
  gap: 48px;
}

.card__title {
  color: #0a0119;
  font-size: 40px;
  font-weight: 600;
  line-height: 110%;
}

.card__consult-btn {
  padding: 16px 32px;
  text-align: center;
  border-radius: 24px;
  border: 1px solid, #e59cff;
  background: #0a0119;
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
  color: #fff;
  font-size: 20px;
  line-height: 150%;
  transition: box-shadow 0.2s ease-in-out;
  text-wrap: nowrap;
}

.card__consult-btn:hover {
  box-shadow: 0px 0px 15.1px 0px #e59cff inset;
  transition: box-shadow 0.2s ease-in-out;
}

.title {
  font-size: 32px;
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

@media screen and (max-width: 1300px) {
  .card {
    border-radius: 24px;
    padding: 30px;
  }

  .card__title {
    font-size: 32px;
  }

  .card__consult-btn {
    padding: 14px 52px;
    border-radius: 18px;
    font-size: 18px;
  }
}
</style>
