<template>
  <div class="main-content">
    <div class="info-section">
      <Info
        :bank-value="userData.bankValue"
        :cosmetic="userData.isCosmeticEnabled"
        :essence-value="userData.essenceValue"
        :head="userData.playerHead"
        :name="userData.playerName"
        :networth-short="userData.networthShort"
        :networth-total="userData.networthTotal"
        :soul-bound-short="userData.soulBoundShort"
        :soul-bound-totall="userData.soulBoundTotal"
        :profile="userData.profileName"
        :purse-value="userData.purseValue"
        :soulflow-value="userData.soulflowValue"
      />
    </div>

    <div class="items-container">
      <ItemGrid :categories="itemCategories" />
    </div>

    <div class="chart-section">
      <EChart :options="chartOptions" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Info from './Info.vue';
import ItemGrid from './ItemGrid.vue';
import EChart from './EChart.vue';
import type { CategoryData, ChartOptions, UserData } from '../types';

defineProps<{
  userData: UserData;
  itemCategories: CategoryData[];
  chartOptions: ChartOptions;
}>();
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 0;
  margin: 0 auto;
}

.info-section {
  margin-bottom: 15px;
  flex: 1.5;
}

.items-container {
  width: 100%;
  padding: 3px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  flex: 1.2;
}

.chart-section {
  width: 100%;
  height: auto;
  min-height: 140px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 3px;
  box-sizing: border-box;
  overflow: visible;
  flex: 0.7;
}
</style>
