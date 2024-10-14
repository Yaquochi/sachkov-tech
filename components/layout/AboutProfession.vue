<template>
  <section class="flex flex-row gap-10">
    <div
      class="section__card w-3/4 p-10 rounded-3xl flex flex-col justify-between"
    >
      <div class="flex flex-col gap-12">
        <h2 class="section__title">О професии</h2>

        <p class="text-xl text-white tracking-wide">
          .Net Fullstack разработчик — это универсальный специалист, который
          может создавать сайты и веб-приложения, работая, как над серверной
          частью, то есть бэкендом, так и над визуальной, клиентской частью -
          фронтендом. Поэтому такие разработчики очень ценятся, подумайте сами:
          компании выгоднее нанять одного специалиста, чем двух - фронтендера и
          бэкэндера.
        </p>
      </div>

      <a href="https://t.me/sachkova_mng" class="section__consult-btn">
        Получить консультацию
      </a>
    </div>

    <div class="w-1/4 flex flex-row items-end gap-6 relative">
      <ul class="flex flex-col gap-6 w-full">
        <li
          class="section__card p-10 rounded-2xl flex flex-col items-start gap-6 text-white"
        >
          <span class="section__card-pay">от 78 000 руб</span>
          <span class="text-xl">Junior</span>
        </li>
        <li
          class="section__card p-10 rounded-2xl flex flex-col items-start gap-6 text-white"
        >
          <span class="section__card-pay">от 163 000 руб</span>
          <span class="text-xl">Middle</span>
        </li>
        <li
          class="section__card p-10 rounded-2xl flex flex-col items-start gap-6 text-white"
        >
          <span class="section__card-pay">от 353 000 руб</span>
          <span class="text-xl">Lead</span>
        </li>
      </ul>

      <span
        class="text-white text-lg -rotate-90 w-7 whitespace-nowrap absolute -right-12 top-2/3"
      >
        *По данным
        <a
          href="https://career.habr.com/salaries?spec_aliases[]=fullstack"
          class="underline cursor-pointer"
        >
          Хабр
        </a>
      </span>
    </div>
  </section>
</template>

<style scoped>
.section__card {
  border: 1px solid #e59cff;
  background: rgba(10, 1, 25, 0.6);
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
}

.section__card-pay {
  font-size: 40px;
  font-weight: 600;
  line-height: 110%;
  white-space: nowrap;
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

.section__consult-btn {
  width: 100%;
  padding: 26px 32px;
  text-align: center;
  border-radius: 24px;
  border: 1px solid #e59cff;
  background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 100%);
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
  color: #0a0119;
  font-size: 18px;
  line-height: 150%;
  transition: box-shadow 0.2s ease-in-out;
}

.section__consult-btn:hover {
  box-shadow: 0px 0px 15.1px 0px #e59cff inset;
  transition: box-shadow 0.2s ease-in-out;
}
</style>
