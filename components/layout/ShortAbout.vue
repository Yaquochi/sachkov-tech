<template>
  <ul class="grid grid-cols-3 gap-10">
    <li
      v-for="item in items"
      :key="item.label"
      class="card p-10 flex flex-col gap-6 items-center justify-center"
    >
      <img :src="item.icon" :alt="item.label" />

      <span class="text-white text-lg">{{ item.label }}</span>
    </li>
  </ul>
</template>

<script setup>
import intensive from "~/assets/img/short/intensive.png";
import stack from "~/assets/img/short/stack.png";
import review from "~/assets/img/short/review.png";
import resume from "~/assets/img/short/resume.png";
import students from "~/assets/img/short/students.png";
import interview from "~/assets/img/short/interview.png";

const items = [
  {
    label: "Интенсивное обучение и практика",
    icon: intensive,
  },
  {
    label: "Современный стэк",
    icon: stack,
  },
  {
    label: "Регулярное код-ревью",
    icon: review,
  },
  {
    label: "Помощь в составлении резюме",
    icon: resume,
  },
  {
    label: "Сообщество мотивированных учеников",
    icon: students,
  },
  {
    label: "Подготовка к собеседованию",
    icon: interview,
  },
];
</script>

<style scoped>
.card {
  border-radius: 30px;
  border: 1px solid #e59cff;
  background: rgba(10, 1, 25, 0.6);
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
}
</style>
