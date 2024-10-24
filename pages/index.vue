<template>
  <div class="app">
    <div class="app__fullcontent">
      <LayoutHeader />

      <div class="app__content">
        <LayoutCover />
        <LayoutShortAbout />
        <LayoutAboutProfession />
        <LayoutWillSuit />
        <LayoutConsistOf />
        <LayoutProgramm />
        <LayoutWhatYouGet />
        <LayoutReviews />
        <LayoutFaq />
        <LayoutSendForm />
        <LayoutFooter />
      </div>
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
  overflow: hidden;
}

.app__fullcontent {
  padding: 40px 100px;
  max-width: 1600px;
  margin: 0 auto;
}

.app__content {
  display: flex;
  flex-direction: column;
  gap: 140px;
}

@media screen and (max-width: 540px) {
  .app {
    background-image: url("~/assets/img/bgmobile.png");
  }

  .app__fullcontent {
    padding: 24px 8px;
  }

  .app__content {
    gap: 60px;
  }
}
</style>
