<template>
  <section class="section">
    <h2 class="section__title">Что ты получишь за время обучения</h2>

    <ul class="grid grid-cols-2 gap-10">
      <li class="section__card">
        <h3 class="section__card-title">
          Опыт, максимально приближенный к коммерческому
        </h3>

        <p>
          Будешь работать над проектом, выполняя поставленные задачи в условиях,
          как на реальной работе
        </p>
      </li>

      <li class="section__card">
        <h3 class="section__card-title">
          Освоишь современные <br />
          технологии
        </h3>

        <p>
          Научишься работать с современным стеком на .Net и React на практике
        </p>
      </li>

      <li class="section__card">
        <h3 class="section__card-title">Готовый проект</h3>

        <p>
          По итогу у тебя будет большой проект для портфолио, который станет
          твоей визитной карточкой
        </p>
      </li>

      <li class="section__card">
        <h3 class="section__card-title">Освоишь запуск и деплой проекта</h3>

        <p>
          Ты пройдешь весь путь создания проекта - от создания репозитория до
          подготовки к запуску и деплоя
        </p>
      </li>
    </ul>
  </section>
</template>

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
  display: flex;
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
</style>
