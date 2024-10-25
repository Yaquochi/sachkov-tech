<template>
  <section class="flex flex-row gap-10 max-[1300px]:gap-8">
    <div
      class="section__card w-3/4 p-10 rounded-3xl flex flex-col justify-between gap-8 max-[540px]:w-full max-[540px]:p-4 max-[1300px]:gap-6"
    >
      <div class="flex flex-col gap-12 max-[540px]:gap-6 max-[1300px]:gap-8">
        <h2 class="section__title">О професии</h2>

        <div class="flex flex-col gap-2">
          <p
            class="text-xl text-white tracking-wide max-[540px]:text-base max-[1300px]:text-lg"
          >
            .NET Fullstack разработчик способен разрабатывать всё: от
            высоконагруженных серверных приложений, которые обрабатывают тысячи
            запросов, до удобных интерфейсов для пользователей. Такой специалист
            способен разработать веб-приложение “под ключ”, обеспечив слаженную
            работу всех его компонентов.
          </p>
          <p
            class="text-xl text-white tracking-wide max-[540px]:text-base max-[1300px]:text-lg"
          >
            Такой специалист очень востребован на рынке, благодаря широкому
            спектру навыков найти работу для него не составит труда, особенно с
            учётом высокого спроса на разработчиков, умеющих работать как с
            бэкендом, так и с фронтендом.
          </p>
        </div>
      </div>

      <div class="hidden max-[540px]:block">
        <img
          src="~/assets/icon/lilRightArr.png"
          alt="смотреть."
          class="h-4 -mb-4 arrAnimation ml-auto"
        />
        <ul class="flex-row gap-4 overflow-scroll scrollbar-hide flex">
          <li class="flex flex-col gap-3 py-4 text-white">
            <span
              class="section__card-pay-color text-nowrap font-semibold text-[28px]"
            >
              от 78 000 руб
            </span>
            <span>Junior</span>
          </li>
          <li class="flex flex-col gap-2.5 min-w-5 justify-center">
            <img src="~/assets/icon/star.png" alt="пункт." class="w-3.5" />
            <img src="~/assets/icon/star.png" alt="пункт." class="w-3.5" />
            <img src="~/assets/icon/star.png" alt="пункт." class="w-3.5" />
          </li>
          <li class="flex flex-col gap-3 py-4 text-white">
            <span
              class="section__card-pay-color text-nowrap font-semibold text-[28px]"
            >
              от 163 000 руб
            </span>
            <span>Middle</span>
          </li>
          <li class="flex flex-col gap-2.5 min-w-5 justify-center">
            <img src="~/assets/icon/star.png" alt="пункт." class="w-3.5" />
            <img src="~/assets/icon/star.png" alt="пункт." class="w-3.5" />
            <img src="~/assets/icon/star.png" alt="пункт." class="w-3.5" />
          </li>
          <li class="flex flex-col gap-3 py-4 text-white">
            <span
              class="section__card-pay-color text-nowrap font-semibold text-[28px]"
            >
              от 353 000 руб
            </span>
            <span>Lead</span>
          </li>
        </ul>

        <span class="text-white opacity-[.6] text-xs">
          *По данным
          <a
            href="https://career.habr.com/salaries?spec_aliases[]=fullstack"
            class="underline cursor-pointer"
          >
            Хабр
          </a>
        </span>
      </div>

      <a href="https://t.me/sachkova_mng" class="section__consult-btn">
        Получить консультацию
      </a>
    </div>

    <div
      class="w-1/4 flex flex-row items-end gap-6 relative max-[540px]:hidden"
    >
      <ul class="flex flex-col gap-6 justify-between h-full w-full">
        <li
          class="section__card p-10 rounded-2xl flex flex-col items-start gap-6 text-white max-[1300px]:p-6 max-[1300px]:gap-4"
        >
          <span class="section__card-pay section__card-pay-color">
            от 78 000 руб
          </span>
          <span class="text-xl max-[1300px]:text-lg">Junior</span>
        </li>
        <li
          class="section__card p-10 rounded-2xl flex flex-col items-start gap-6 text-white max-[1300px]:p-6 max-[1300px]:gap-4"
        >
          <span class="section__card-pay section__card-pay-color">
            от 163 000 руб
          </span>
          <span class="text-xl max-[1300px]:text-lg">Middle</span>
        </li>
        <li
          class="section__card p-10 rounded-2xl flex flex-col items-start gap-6 text-white max-[1300px]:p-6 max-[1300px]:gap-4"
        >
          <span class="section__card-pay section__card-pay-color">
            от 353 000 руб
          </span>
          <span class="text-xl max-[1300px]:text-lg">Lead</span>
        </li>
      </ul>

      <span
        class="text-white text-lg -rotate-90 w-7 whitespace-nowrap absolute -right-12 top-2/3 max-[1300px]:text-base max-[1300px]:-right-8"
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

.section__card-pay-color {
  background: linear-gradient(
    180deg,
    #fff 22.5%,
    rgba(255, 255, 255, 0.7) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

@media screen and (max-width: 1300px) {
  .section__title {
    font-size: 58px;
  }

  .section__card-pay {
    font-size: 32px;
  }

  .section__consult-btn {
    padding: 20px 28px;
    border-radius: 16px;
  }
}

@media screen and (max-width: 540px) {
  .section__title {
    font-size: 28px;
  }

  .section__consult-btn {
    padding: 16px 24px;
    border-radius: 12px;
    font-size: 16px;
  }

  .arrAnimation {
    width: max-content;
    animation: 1s linear 1s infinite alternate slidein;
  }

  @keyframes slidein {
    0% {
      margin-right: 8%;
    }
    100% {
      margin-right: 0%;
    }
  }
}
</style>
