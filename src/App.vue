<script lang="ts" setup>
import { computed, type CSSProperties, onMounted, onUnmounted } from 'vue';
import Header from './components/Header.vue';
import Typer from './components/Typer.vue';
import MainContent from './components/MainContent.vue';
import localforage from 'localforage';
import { data, loadData } from './data';
import { useRoute } from 'vue-router';

localforage.config({
  driver: [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
  name: 'networth-generate',
  version: 1.0,
  storeName: 'meow',
  description: 'networth-generate',
});

const route = useRoute();
function getSessionKey() {
  const sessionID = route.query.sessionID as string | undefined;
  return sessionID ? `nw_${sessionID}` : 'nw';
}

const interval = setInterval(async () => {
  await loadData(getSessionKey());
}, 1);

onMounted(async () => {
  window.$localforage = localforage;
});

onUnmounted(() => {
  clearInterval(interval);
});

const backGroundStyle = computed((): CSSProperties => {
  const url = data.value?.userData?.backgroundUrl;
  return { backgroundImage: `url("${url || 'background.jpg'}")` };
});
</script>

<template>
  <div :style="backGroundStyle" class="background"></div>
  <Header :info="data.userData.version" :logo="data.userData.logo" :title="data.userData.title" />

  <div class="main-container">
    <div class="typer-container-wrapper">
      <Typer :absolute="false" :centered="false" border-radius="14px" class="typer-container" height="auto" width="98%">
        <MainContent :chart-options="data.chartOptions" :item-categories="data.itemCategories" :user-data="data.userData" />
      </Typer>
    </div>
  </div>
</template>

<style lang="scss">

@use "font/index";

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.main-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: calc(100px + 3%);
  padding-bottom: 3%;
}

.typer-container-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}

.typer-container {
  max-width: 99.8%;
  padding: 0.15rem 0.08rem;
  font-size: 0.95rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
