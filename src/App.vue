<script lang="ts" setup>
import {computed, type CSSProperties, onMounted, onUnmounted} from 'vue'
import Header from './components/Header.vue'
import Typer from './components/Typer.vue'
import MainContent from './components/MainContent.vue'
import localforage from 'localforage'
import {getNetworthData, setNetworthData} from './data'
import type {AppData} from './types'
import "./app.css"

localforage.config({
  driver: [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
  name: 'networth-generate',
  version: 1.0,
  storeName: 'meow',
  description: 'networth-generate'
})

const data = getNetworthData()
let intervalId: number

async function loadData() {
  const saved = (await localforage.getItem('nw')) as AppData | null
  if (saved) setNetworthData(saved)
}

async function syncData() {
  const saved = (await localforage.getItem('nw')) as AppData | null
  if (saved) setNetworthData(saved)
}

function onStorage(e: StorageEvent) {
  if (e.key === 'nw' || e.key === null) syncData()
}

onMounted(async () => {
  ;(window as any).$localforage = localforage
  await loadData()
  window.addEventListener('storage', onStorage)
  intervalId = window.setInterval(syncData, 2000)
})

onUnmounted(() => {
  window.removeEventListener('storage', onStorage)
  clearInterval(intervalId)
})

const backGroundStyle = computed((): CSSProperties => {
  const url = data.value?.userData?.backgroundUrl
  return {backgroundImage: `url("${url || 'background.jpg'}")`}
})
</script>


<template>
  <div :style="backGroundStyle" class="background"></div>
  <Header :info="data.userData.version" :logo="data.userData.logo" :title="data.userData.title"/>

  <div class="main-container">
    <div class="typer-container-wrapper">
      <Typer
          :absolute="false"
          :centered="false"
          border-radius="16px"
          class="typer-container"
          height="auto"
          width="95%">
        <MainContent
            :chart-options="data.chartOptions"
            :item-categories="data.itemCategories"
            :user-data="data.userData"
        />
      </Typer>
    </div>
  </div>
</template>

<style>


</style>