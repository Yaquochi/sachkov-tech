<template>
  <div class="app">
    <LayoutHeader />
    <LayoutCover />
  </div>
</template>

<script setup lang="ts"></script>

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
</style>
