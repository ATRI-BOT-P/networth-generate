<script lang="ts" setup>
import {computed, type CSSProperties, onMounted, ref} from "vue";
import Header from "./components/Header.vue";
import Typer from "./components/Typer.vue";
import MainContent from "./components/MainContent.vue";
import localforage from "localforage";
import {getNetworthData, setNetworthData} from "./data";
import type {AppData} from "./types";

localforage.config({
  driver: [
    localforage.INDEXEDDB,
    localforage.WEBSQL,
    localforage.LOCALSTORAGE,
  ],
  name: "networth-generate",
  version: 1.0,
  storeName: "meow",
  description: "networth-generate",
});

const data = ref<AppData>(getNetworthData());
const isLoaded = ref(false);

const loadData = async () => {
  try {
    const savedData = await localforage.getItem("nw") as AppData | null;
    if (savedData) {
      setNetworthData(savedData);
    }
  } catch (error) {
    console.error(error);
  } finally {
    isLoaded.value = true;
  }
};

onMounted(async () => {
  (window as any).$localforage = localforage;
  await loadData();
});

const backGroundStyle = computed((): CSSProperties => {
  const url = data.value?.userData?.backgroundUrl;
  return {
    backgroundImage: url ? `url("${url}")` : 'url("background.jpg")',
  };
});
</script>

<template>
  <div v-if="!isLoaded" class="loading-screen">
    Loading...
  </div>

  <div v-else :style="backGroundStyle" class="background">
    <div class="content-area">
      <Header
          :info="data.userData.version"
          :logo="data.userData.logo"
          :title="data.userData.title"
      />

      <Typer
          :border-radius="'16px'"
          :centered="true"
          :height="'auto'"
          :width="'90%'"
          class="typer-container"
      >
        <MainContent
            :chart-options="data.chartOptions"
            :item-categories="data.itemCategories"
            :user-data="data.userData"
        />
      </Typer>
    </div>
  </div>
</template>

<style scoped>
.background {
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.content-area {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  overflow-y: auto;
}

.typer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  margin: 4% 0;
  overflow: visible;
}

.loading-screen {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: "JetBrains Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  background: #000;
  color: #fff;
}
</style>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
