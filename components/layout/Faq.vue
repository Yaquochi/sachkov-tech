<template>
  <section class="flex flex-row gap-10">
    <div class="card h-fit">
      <h3 class="card__title whitespace-nowrap">Остались вопросы?</h3>

      <a href="https://t.me/sachkova_mng" class="card__consult-btn">
        Получить консультацию
      </a>
    </div>

    <UAccordion
      color="white"
      variant="outline"
      size="xl"
      multiple
      :items="faq"
      open-icon="i-heroicons-plus"
      close-icon="i-heroicons-minus"
      :ui="{
        default: {
          class: 'text-xl mb-2.5 w-full',
        },
        item: {
          size: 'text-lg',
        },
      }"
    />
  </section>
</template>

<script setup>
const faq = [
  {
    label: "С чего начинается обучение?",
    content:
      "В среднем занятия проводятся 3 раза в неделю. Ты можешь присутствовать на занятиях и задавать любые вопросы. Все непонятные и сложные моменты мы обязательно разберем.",
  },
  {
    label: "С чего начинается обучение?",
    content:
      "В среднем занятия проводятся 3 раза в неделю. Ты можешь присутствовать на занятиях и задавать любые вопросы. Все непонятные и сложные моменты мы обязательно разберем.",
  },
  {
    label: "С чего начинается обучение?",
    content:
      "В среднем занятия проводятся 3 раза в неделю. Ты можешь присутствовать на занятиях и задавать любые вопросы. Все непонятные и сложные моменты мы обязательно разберем.",
  },
  {
    label: "С чего начинается обучение?",
    content:
      "В среднем занятия проводятся 3 раза в неделю. Ты можешь присутствовать на занятиях и задавать любые вопросы. Все непонятные и сложные моменты мы обязательно разберем.",
  },
  {
    label: "С чего начинается обучение?",
    content:
      "В среднем занятия проводятся 3 раза в неделю. Ты можешь присутствовать на занятиях и задавать любые вопросы. Все непонятные и сложные моменты мы обязательно разберем.",
  },
  {
    label: "С чего начинается обучение?",
    content:
      "В среднем занятия проводятся 3 раза в неделю. Ты можешь присутствовать на занятиях и задавать любые вопросы. Все непонятные и сложные моменты мы обязательно разберем.",
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
}

.card__consult-btn:hover {
  box-shadow: 0px 0px 15.1px 0px #e59cff inset;
  transition: box-shadow 0.2s ease-in-out;
}
</style>
