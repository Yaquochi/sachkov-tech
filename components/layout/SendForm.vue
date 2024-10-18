<template>
  <section class="flex flex-row gap-8">
    <div class="card flex flex-col gap-8">
      <h3 class="card__title">Стоимость курса</h3>

      <div class="flex flex-col gap-5">
        <div class="flex flex-row items-center gap-2">
          <img src="~/assets/icon/discount.svg" alt="скидка." class="w-7" />
          <span class="text-lg">Скидка действует до 31 октября</span>
        </div>

        <div class="mb-3">
          <span class="text-slate-400">
            от <span class="line-through">16 990</span> ₽/мес
          </span>

          <div class="flex flex-row items-start gap-2">
            <span class="text-xl">
              от <span class="text-4xl font-semibold">11 600</span>
            </span>
            <span class="text-xl">₽/мес</span>
          </div>
        </div>

        <div class="flex flex-col">
          <span class="text-slate-200 text-sm">
            Учишься сейчас - платишь потом!
          </span>
          <span class="text-slate-200 text-sm">В рассрочку до 12 месяцев</span>
        </div>
      </div>
    </div>

    <div class="card flex flex-col gap-8">
      <h3 class="card__title">Хочешь стать крутым разработчиком?</h3>

      <span class="card__descr">
        Напиши нам в телеграмм, ответим на любые вопросы!
      </span>

      <a href="https://t.me/sachkova_mng" class="card__btn">
        <span class="card__btn-text">Написать в Telegram</span>
        <img src="~/assets/icon/tg2.png" alt="телеграм." />
      </a>
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
  box-shadow: 0 0 15px #e59cff;
  transition: box-shadow 0.2s ease-in-out;
}

.card__btn-text {
  color: #0a0119;
  font-size: 18px;
  font-weight: 400;
}
</style>
