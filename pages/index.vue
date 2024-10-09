<template>
  <div class="app">
    <LayoutHeader />

    <div class="app__content">
      <LayoutCover />
      <LayoutShortAbout />
      <LayoutAboutProfession />
      <LayoutWillSuit />
      <LayoutConsistOf />
    </div>
  </div>
</template>

<style>
* {
  font-family: "Play", sans-serif;
}

.app {
  background-color: #0a0119;
  background-image: url("~/assets/img/bg.png");
  background-size: cover;
  background-position: center top;
  min-height: 100vh;
  padding: 40px 100px;
}

.app__content {
  display: flex;
  flex-direction: column;
  gap: 140px;
}
</style>
