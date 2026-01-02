<template>
  <section
    class="flex flex-row gap-8 max-[540px]:flex-col max-[540px]:gap-4 max-[1300px]:gap-7"
  >
    <div class="card flex flex-col justify-between gap-7 max-[540px]:gap-4">
      <div class="flex flex-row justify-between items-start">
        <h3 class="card__title">Стоимость курса</h3>

        <!-- <span class="card-disc text-xl font-semibold max-[540px]:text-base">
          -20%
        </span> -->
      </div>

      <ul class="flex flex-col gap-1">
        <li class="flex flex-row gap-2">
          <img src="/icon/check.svg" alt="включено." class="w-5" />
          <span class="text-lg max-[1300px]:text-base"> 92 видеоурока </span>
        </li>
        <li class="flex flex-row gap-2">
          <img src="/icon/check.svg" alt="включено." class="w-5" />
          <span class="text-lg max-[1300px]:text-base"> 80+ заданий </span>
        </li>
        <li class="flex flex-row gap-2">
          <img src="/icon/check.svg" alt="включено." class="w-5" />
          <span class="text-lg max-[1300px]:text-base">
            Доступ ко всем интенсивам
          </span>
        </li>
        <li class="flex flex-row gap-2">
          <img src="/icon/check.svg" alt="включено." class="w-5" />
          <span class="text-lg max-[1300px]:text-base">
            Регулярное код-ревью
          </span>
        </li>
        <li class="flex flex-row gap-2">
          <img src="/icon/check.svg" alt="включено." class="w-5" />
          <span class="text-lg max-[1300px]:text-base">
            Подготовка к собеседованию
          </span>
        </li>
        <li class="flex flex-row gap-2">
          <img src="/icon/check.svg" alt="включено." class="w-5" />
          <span class="text-lg max-[1300px]:text-base">
            Помощь в составлении резюме
          </span>
        </li>
        <li class="flex flex-row gap-2">
          <img src="/icon/check.svg" alt="включено." class="w-5" />
          <span class="text-lg max-[1300px]:text-base"> Доступ навсегда </span>
        </li>
      </ul>

      <div
        class="flex flex-row justify-between items-end gap-3 max-[540px]:flex-col max-[540px]:items-start max-[540px]:gap-4"
      >
        <div class="flex flex-col gap-4 max-[540px]:gap-2">
          <div class="mb-4 max-[540px]:mb-2">
            <span class="text-slate-400 max-[540px]:text-sm">
              от <span class="line-through">11 833</span> ₽/мес
            </span>

            <div class="flex flex-row items-start gap-2 max-[540px]:gap-1">
              <span class="text-xl max-[540px]:text-lg whitespace-nowrap">
                от
                <span class="text-4xl font-semibold max-[540px]:text-2xl">
                  10333
                </span>
              </span>
              <span class="text-xl max-[540px]:text-base whitespace-nowrap">
                ₽/мес
              </span>
            </div>
          </div>

          <div class="flex flex-col">
            <span class="text-slate-200 text-lg text-nowrap">
              Учись сейчас - плати потом!
            </span>
            <span class="text-slate-200 text-lg text-nowrap">
              В рассрочку до 12 месяцев
            </span>
          </div>
        </div>

        <div
          class="card-date flex flex-row items-center gap-3 w-fit h-fit mt-auto"
        >
          <img
            src="/icon/discount.svg"
            alt="скидка."
            class="w-8 max-[540px]:w-6"
          />
          <span class="text-2xl max-[540px]:text-base">
            112 000 ₽
            <span class="card__disc-text">при оплате сразу!</span>
          </span>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-8 flex-1">
      <div class="card flex flex-col justify-between gap-8 h-fit">
        <h3 class="card__title">
          Хочешь стать крутым разработчиком и получать большую зарплату?
        </h3>

        <span class="card__descr">
          Напиши нам в телеграмм, ответим на любые вопросы!
        </span>

        <a href="https://t.me/sachkova_mng" class="card__btn">
          <span class="card__btn-text">Написать в Telegram</span>
          <img src="/icon/tg2.png" alt="телеграм." class="max-[540px]:w-5" />
        </a>
      </div>

      <div class="card flex flex-col justify-between gap-8 h-fit">
        <h3 class="card__descr !text-2xl">Не хочется покупать целый курс?</h3>

        <h3 class="card__descr">
          Обрати внимание на наши
          <a
            href="https://sachkov-intensive.ru/"
            class="underline text-purple-400"
          >
            интенсивы
          </a>
        </h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  border-radius: 30px;
  border: 1px solid #e59cff;
  background: rgba(10, 1, 25, 0.6);
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
  padding: 40px;
  flex: 1;
}

.card-disc {
  border-radius: 12px;
  padding: 8px 10px;
  border: 1px solid #e59cff;
  background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 100%);
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
  color: #0a0119;
}

.card-date {
  border-radius: 24px;
  border: 1px solid #e59cff;
  background: rgba(10, 1, 25, 0.6);
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
  padding: 16px;
}

.card__title {
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  line-height: 110%;
}

.card__descr {
  color: #d0d0d0;
  font-size: 20px;
  line-height: 140%;
}

.card__btn {
  border-radius: 24px;
  border: 1px solid #e59cff;
  background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 100%);
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: box-shadow 0.2s ease-in-out;
}

.card__btn:focus-visible {
  outline: none;
}

.card__btn:hover {
  box-shadow: 0px 0px 15.1px 0px #e59cff inset;
  transition: box-shadow 0.2s ease-in-out;
}

.card__btn-text {
  color: #0a0119;
  font-size: 18px;
  font-weight: 400;
}

.card__disc-text {
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
    border-radius: 18px;
    padding: 32px;
  }

  .card-disc {
    padding: 6px 8px;
  }

  .card-date {
    border-radius: 16px;
    padding: 10px 14px;
  }

  .card__title {
    font-size: 32px;
  }

  .card__descr {
    font-size: 18px;
  }
}

@media screen and (max-width: 540px) {
  .card {
    border-radius: 12px;
    padding: 24px;
  }

  .card-disc {
    padding: 5px 7px;
  }

  .card-date {
    border-radius: 12px;
    padding: 8px 10px;
  }

  .card__title {
    font-size: 28px;
  }

  .card__descr {
    font-size: 16px;
  }

  .card__btn-text {
    font-size: 16px;
  }

  .card__btn {
    border-radius: 12px;
    padding: 10px 0;
    gap: 6px;
  }
}
</style>
