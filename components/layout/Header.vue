<template>
  <header class="header mb-10">
    <div class="flex flex-row items-center gap-2">
      <img src="~/assets/icon/code.svg" alt="логотип." />
      <span class="text-white text-4xl">Sachkov Tech</span>
    </div>

    <button class="header__btn">
      <span class="header__btn-text">Записаться на курс</span>
      <img src="~/assets/icon/star.png" alt="записаться." />
    </button>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  border-radius: 24px;
  border: 1px solid #e59cff;
  background: 10, 1, 25, 0.6;
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
}

.header__btn {
  border-radius: 16px;
  border: 1px solid #e59cff;
  background-color: transparent;
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: box-shadow 0.2s ease-in-out;
}

.header__btn:focus-visible {
  outline: none;
}

.header__btn:hover {
  box-shadow: 0 0 15px #e59cff;
  transition: box-shadow 0.2s ease-in-out;
}

.header__btn-text {
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
