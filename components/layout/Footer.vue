<template>
  <footer
    class="footer flex flex-row justify-between py-6 px-10 max-[540px]:px-4 max-[540px]:flex-col"
  >
    <div class="flex flex-col gap-6 justify-between">
      <div class="flex flex-row items-center gap-2 max-[540px]:mx-auto">
        <img src="~/assets/icon/code.svg" alt="логотип." />
        <span class="text-white text-4xl">Sachkov Tech</span>
      </div>

      <ul class="flex-col gap-3 hidden max-[540px]:flex">
        <li>
          <a href="https://t.me/sachkov_blog" class="footer__btn">
            <span class="footer__btn-text">Telegram</span>
            <img src="~/assets/icon/tg.png" alt="телеграм." class="w-5" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@KirillSachkov" class="footer__btn">
            <span class="footer__btn-text">YouTube</span>
            <img src="~/assets/icon/yt.png" alt="ютуб." class="w-5" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@KirillSachkov" class="footer__btn">
            <span class="footer__btn-text">Записаться на курс</span>
            <img src="~/assets/icon/star.png" alt="записаться." class="w-6" />
          </a>
        </li>
      </ul>

      <ul
        class="text-lg text-slate-400 uppercase max-[540px]:text-base max-[540px]:text-center"
      >
        <li>ИП САЧКОВ КИРИЛЛ ОЛЕГОВИЧ</li>
        <li>ИНН: 7707083893</li>
        <li>ОГРНИП 324774600480938</li>
      </ul>

      <a
        href="https://drive.google.com/uc?export=download&id=1jePJXm8QE0AuCN8FNZ0BmpdmL7p_aKlK"
        class="text-lg text-slate-400 underline max-[540px]:text-base max-[540px]:text-center"
      >
        Оферта
      </a>
    </div>

    <ul class="flex flex-col gap-6 max-[540px]:hidden">
      <li>
        <a href="https://t.me/sachkov_blog" class="footer__btn">
          <span class="footer__btn-text">Telegram</span>
          <img src="~/assets/icon/tg.png" alt="телеграм." />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/@KirillSachkov" class="footer__btn">
          <span class="footer__btn-text">YouTube</span>
          <img src="~/assets/icon/yt.png" alt="ютуб." />
        </a>
      </li>
      <li>
        <a href="https://t.me/sachkova_mng" class="footer__btn">
          <span class="footer__btn-text">Записаться на курс</span>
          <img src="~/assets/icon/star.png" alt="записаться." />
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.footer {
  border-radius: 24px;
  border: 1px solid #e59cff;
  background: rgba(10, 1, 25, 0.6);
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
}

.footer__btn {
  padding: 12px 20px;
  border-radius: 16px;
  border: 1px solid #e59cff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: box-shadow 0.2s ease-in-out;
  height: 52px;
}

.footer__btn:focus-visible {
  outline: none;
}

.footer__btn:hover {
  box-shadow: 0 0 15px #e59cff;
  transition: box-shadow 0.2s ease-in-out;
}

.footer__btn-text {
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
  .footer {
    border-radius: 18px;
  }
}

@media screen and (max-width: 540px) {
  .footer {
    border-radius: 12px;
    box-shadow: none;
  }

  .footer__btn {
    padding: 12px 16px;
    border-radius: 12px;
    gap: 4px;
    height: 43px;
  }

  .footer__btn:hover {
    box-shadow: 0 0 8px #e59cff;
  }
}
</style>
