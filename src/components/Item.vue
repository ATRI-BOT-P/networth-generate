<script lang="ts" setup>
import {computed} from 'vue';
import utils from '../utils';
import type {ItemData} from '../types';

interface RarityColors {
  [key: string]: string;
}

interface RarityMap {
  [key: string]: string;
}

const props = defineProps<ItemData>();

const nameChars = computed(() => utils.parseMinecraftStyledText(props.name));

const rarityColors: RarityColors = {
  'COMMON': '#FFFFFF',
  'UNCOMMON': '#55FF55',
  'RARE': '#5555FF',
  'EPIC': '#AA00AA',
  'LEGENDARY': '#FFAA00',
  'MYTHIC': '#FF55FF',
  'DIVINE': '#55FFFF',
  'SPECIAL': '#FF5555',
  'VERY_SPECIAL': '#FF5555'
};

const nextRarityMap: RarityMap = {
  'COMMON': 'COMMON',
  'UNCOMMON': 'COMMON',
  'RARE': 'UNCOMMON',
  'EPIC': 'RARE',
  'LEGENDARY': 'EPIC',
  'MYTHIC': 'LEGENDARY',
  'DIVINE': 'MYTHIC',
  'SPECIAL': 'SPECIAL',
  'VERY_SPECIAL': 'VERY_SPECIAL'
};

const backgroundGradientStyle = computed(() => {
  if (!props.rarity) return {};

  let currentColor = rarityColors[props.rarity];
  let nextColor: string;

  if (props.isUpgraded) {
    nextColor = rarityColors[nextRarityMap[props.rarity]];
  } else {
    currentColor = rarityColors[props.rarity];
    nextColor = rarityColors[props.rarity];
  }

  return {
    background: `linear-gradient(80deg, ${currentColor}A0 0%, ${nextColor}A0 100%)`,
    borderLeft: `4px solid ${currentColor}`
  };
});
</script>

<template>
  <div :style="backgroundGradientStyle" class="item">
    <div v-if="icon" class="item-icon">
      <img :src="icon" alt="Item icon"/>
    </div>
    <div v-else class="item-placeholder"></div>
    <div class="item-content">
      <div :class="{ 'upgraded': isUpgraded }" class="item-name">
        <span class="text-wrapper">
          <template v-for="(item, i) in nameChars" :key="i">
            <span :style="{ color: item.color }">{{ item.char }}</span>
          </template>
        </span>
      </div>
      <div class="item-value">
        <span class="value-wrapper">{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  align-items: flex-start;
  padding: 8px 10px;
  border-radius: 12px;
  margin-bottom: 8px;
  border-left: 3px solid;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  min-height: 48px;
  height: auto;
  transition: all 0.1s ease;
  position: relative;
  overflow: visible;
  backdrop-filter: blur(3px);
}

.item-icon, .item-placeholder {
  width: 32px;
  height: 32px;
  margin-right: 8px;
  flex-shrink: 0;
  vertical-align: top;
  margin-top: 2px;
}

.item-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.item-content {
  flex: 1;
  min-width: 0;
  overflow: visible;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.item-name {
  font-size: 12px;
  font-family: "JetBrains Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  line-height: 1.4;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  flex: 1;
  min-width: 0;
  text-shadow: 1px 1px 2px black;
}

.text-wrapper {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 3px 6px;
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  max-width: 100%;
  white-space: normal;
}

.upgraded {
  font-weight: 700;
}

.item-value {
  font-size: 12px;
  font-family: "JetBrains Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  flex-shrink: 0;
  text-shadow: 1px 1px 2px black;
}

.value-wrapper {
  background-color: rgba(0, 0, 0, 0.3);
  color: #FFAA00;
  border-radius: 8px;
  padding: 3px 6px;
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  white-space: nowrap;
}
</style>