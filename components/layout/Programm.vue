<template>
  <section class="section">
    <h2 class="section__title">Программа обучения</h2>

    <ul class="flex flex-col gap-10 max-[540px]:hidden">
      <li class="flex flex-row gap-1 relative">
        <div class="section__card">
          Вы разработаете полноценное веб приложение, состоящее из нескольких
          backend сервисов, написанных на C# и ASP.NET Core.
        </div>
        <img
          src="~/assets/icon/lilRightArr.png"
          alt="стрелка."
          class="object-contain"
        />
        <div class="section__card">
          Вы разработаете полноценное веб приложение, состоящее из нескольких
          backend сервисов, написанных на C# и ASP.NET Core.
        </div>

        <img
          src="~/assets/icon/rightArr.png"
          alt="стрелка."
          class="object-contain absolute -right-7 top-12 h-40"
        />
      </li>

      <li class="flex flex-row gap-1 relative">
        <div class="section__card">
          Вы разработаете полноценное веб приложение, состоящее из нескольких
          backend сервисов, написанных на C# и ASP.NET Core.
        </div>
        <img
          src="~/assets/icon/lilLeftArr.png"
          alt="стрелка."
          class="object-contain"
        />
        <div class="section__card">
          Вы разработаете полноценное веб приложение, состоящее из нескольких
          backend сервисов, написанных на C# и ASP.NET Core.
        </div>

        <img
          src="~/assets/icon/leftArr.png"
          alt="стрелка."
          class="object-contain absolute -left-7 top-12 h-40"
        />
      </li>

      <li class="flex flex-row gap-1 relative">
        <div class="section__card">
          Вы разработаете полноценное веб приложение, состоящее из нескольких
          backend сервисов, написанных на C# и ASP.NET Core.
        </div>
        <img
          src="~/assets/icon/lilRightArr.png"
          alt="стрелка."
          class="object-contain"
        />
        <div class="section__card">
          Вы разработаете полноценное веб приложение, состоящее из нескольких
          backend сервисов, написанных на C# и ASP.NET Core.
        </div>

        <img
          src="~/assets/icon/rightArr.png"
          alt="стрелка."
          class="object-contain absolute -right-7 top-12 h-40"
        />
      </li>

      <li class="section__total">
        Подробно изучите популярные и эффективные архитектурные подходы к
        разработке. Поработаете с различными базами данных, такими
        как Postgresql и MongoDb.
      </li>
    </ul>

    <ul class="hidden max-[540px]:flex flex-col gap-3">
      <li class="section__card w-10/12">
        Вы разработаете полноценное веб приложение, состоящее из нескольких
        backend сервисов, написанных на C# и ASP.NET Core.
      </li>

      <li class="mx-auto py-2">
        <img
          src="~/assets/icon/lilRightArr.png"
          alt="стрелка."
          class="object-contain rotate-[35deg] h-6"
        />
      </li>

      <li class="section__card w-10/12 ml-auto">
        Вы разработаете полноценное веб приложение, состоящее из нескольких
        backend сервисов, написанных на C# и ASP.NET Core.
      </li>

      <li class="mx-auto py-2">
        <img
          src="~/assets/icon/lilLeftArr.png"
          alt="стрелка."
          class="object-contain -rotate-[35deg] h-6"
        />
      </li>

      <li class="section__card w-10/12">
        Вы разработаете полноценное веб приложение, состоящее из нескольких
        backend сервисов, написанных на C# и ASP.NET Core.
      </li>

      <li class="mx-auto py-2">
        <img
          src="~/assets/icon/lilRightArr.png"
          alt="стрелка."
          class="object-contain rotate-[35deg] h-6"
        />
      </li>

      <li class="section__total w-10/12 ml-auto">
        Подробно изучите популярные и эффективные архитектурные подходы к
        разработке.
      </li>
    </ul>

    <LayoutStack />
  </section>
</template>

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

.section__card {
  border-radius: 12px;
  border: 1px solid #e59cff;
  background: rgba(10, 1, 25, 0.6);
  padding: 24px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
}

.section__total {
  border-radius: 12px;
  border: 1px solid #e59cff;
  background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 100%);
  padding: 24px;
  color: #0a0119;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 110%;
}

@media screen and (max-width: 540px) {
  .section {
    gap: 24px;
  }

  .section__title {
    font-size: 28px;
  }

  .section__card {
    padding: 16px;
    font-size: 16px;
  }

  .section__total {
    padding: 16px;
    font-size: 18px;
  }
}
</style>
