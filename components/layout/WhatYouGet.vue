<template>
  <section class="section">
    <h2 class="section__title">Что ты получишь за время обучения</h2>

    <ul class="grid grid-cols-2 gap-10 max-[540px]:hidden max-[1300px]:gap-7">
      <li class="section__card flex" v-for="item in items" :key="item.id">
        <h3 class="section__card-title">
          {{ item.title }}
        </h3>

        <p>
          {{ item.text }}
        </p>
      </li>
    </ul>

    <article class="section__card hidden max-[540px]:flex min-h-[343px]">
      <h3
        class="section__card-title cardText"
        :class="{ cardTextChange: animation }"
      >
        {{ curItem.title }}
      </h3>

      <p class="cardText" :class="{ cardTextChange: animation }">
        {{ curItem.text }}
      </p>

      <div class="flex flex-row gap-2 justify-center mt-auto mb-0">
        <UButton
          icon="i-heroicons-arrow-left"
          size="sm"
          color="gray"
          square
          variant="link"
          @click="delCurPage"
        />
        <span class="text-gray-500">
          {{ curItemId + "/" + items.length }}
        </span>
        <UButton
          icon="i-heroicons-arrow-right"
          size="sm"
          color="gray"
          square
          variant="link"
          @click="addCurPage"
        />
      </div>
    </article>
  </section>
</template>

<script setup>
let curItemId = ref(1);
let animation = ref(false);

const addCurPage = () => {
  animation.value = true;

  setTimeout(() => {
    curItemId.value === 4 ? (curItemId.value = 1) : curItemId.value++;
    animation.value = false;
  }, 600);
};

const delCurPage = () => {
  animation.value = true;
  setTimeout(() => {
    curItemId.value === 1 ? (curItemId.value = 4) : curItemId.value--;
    animation.value = false;
  }, 600);
};

const items = [
  {
    id: 1,
    title: "Уникальный опыт и практика",
    text: "Ты получишь бесценный опыт разработки сложного коммерческого продукта. Мы не пишем 'Hello World', мы создаем реальные системы с микросервисами, очередями, кешированием и S3. Это именно тот опыт, который ищут работодатели.",
  },
  {
    id: 2,
    title: "Востребованная профессия",
    text: "Изучив .NET Core, React, Docker и Kubernetes, ты станешь Fullstack-разработчиком уровня Middle. Это одни из самых высокооплачиваемых и стабильных технологий на рынке, которые используют крупные компании и энтерпрайз.",
  },
  {
    id: 3,
    title: "Готовое портфолио",
    text: "К концу обучения у тебя будет GitHub, наполненный качественным кодом, и рабочий проект, который можно показать на собеседовании. Твое резюме будет выделяться среди сотен других кандидатов с типовыми пет-проектами.",
  },
  {
    id: 4,
    title: "Личное менторство",
    text: "Ты не останешься один на один с курсом. Я лично проверяю твой код, провожу созвоны и отвечаю на вопросы. Моя задача — довести тебя до трудоустройства, поэтому я сопровождаю тебя на каждом этапе обучения.",
  },
];

const curItem = computed(() => {
  return items.find((i) => i.id === curItemId.value);
});
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 50px;
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

.section__card {
  border-radius: 24px;
  border: 1px solid #e59cff;
  background: rgba(10, 1, 25, 0.6);
  flex-direction: column;
  gap: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  font-weight: 400;
  padding: 24px;
}

.section__card-title {
  font-size: 30px;
  font-weight: 500;
  line-height: 140%;
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
  .section {
    gap: 32px;
  }

  .section__title {
    font-size: 58px;
  }

  .section__card {
    border-radius: 16px;
    padding: 20px;
  }

  .section__card-title {
    font-size: 25px;
  }
}

@media screen and (max-width: 540px) {
  .section {
    gap: 24px;
  }

  .section__title {
    font-size: 28px;
  }

  .section__card {
    border-radius: 12px;
    padding: 16px;
  }

  .section__card-title {
    font-size: 20px;
  }
}

.cardText {
  transition: opacity 0.5s;
  opacity: 1;
}

.cardTextChange {
  transition: opacity 0.5s;
  opacity: 0;
}
</style>
