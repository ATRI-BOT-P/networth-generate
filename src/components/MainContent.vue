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
          :non-cosmetic-short="userData.nonSoulBoundShort"
          :non-cosmetic-total="userData.nonSoulBoundTotal"
          :profile="userData.profileName"
          :purse-value="userData.purseValue"
          :soulflow-value="userData.soulflowValue"
      />
    </div>

    <div class="items-container">
      <ItemGrid :categories="itemCategories"/>
    </div>

    <div class="chart-section">
      <EChart :options="chartOptions"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Info from './Info.vue';
import ItemGrid from './ItemGrid.vue';
import EChart from './EChart.vue';

defineProps<{
  userData: any;
  itemCategories: any[];
  chartOptions: any;
}>();
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 0;
}

.info-section {
  padding: 10px;
  margin-bottom: 15px;
}

.items-container {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.chart-section {
  width: 100%;
  height: auto;
  min-height: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
  overflow: visible;
}
</style>