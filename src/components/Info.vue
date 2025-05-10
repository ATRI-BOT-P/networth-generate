<script lang="ts" setup>
import { computed, type CSSProperties } from 'vue';
import utils from '../utils';
import type { UserData } from '../types';

// 使用UserData类型的子集
type InfoProps = Pick<UserData, 
  'playerHead' | 'profileName' | 'isCosmeticEnabled' | 'playerName' | 
  'networthTotal' | 'networthShort' | 'nonSoulBoundTotal' | 'nonSoulBoundShort' | 
  'purseValue' | 'bankValue' | 'essenceValue' | 'soulflowValue'
>;

const props = defineProps<{
  head?: string;
  profile?: string;
  cosmetic?: boolean;
  name?: string;
  networthTotal?: string;
  networthShort?: string;
  nonSoulBoundTotal?: string;
  nonSoulBoundShort?: string;
  purseValue?: string;
  bankValue?: string;
  essenceValue?: string;
  soulflowValue?: string;
}>();

const textParts = computed(() => ({
  profile: props.profile,
  cosmeticText: utils.getCosmeticText(props.cosmetic),
  nameChars: utils.parseMinecraftStyledText(props.name),
}));

const profileStyle = computed((): CSSProperties => ({
  color: props.cosmetic ? 'white' : 'aqua'
}));

const cosmeticStyle = computed((): CSSProperties => ({
  color: props.cosmetic ? 'aqua' : 'white'
}));
</script>

<template>
  <div class="info">
    <div class="left">
      <div v-if="head" class="avatar">
        <img :src="head" alt="Player head" class="head"/>
      </div>
      <div class="name">
        <template v-for="(item, i) in textParts.nameChars" :key="i">
          <span :style="{ color: item.color, verticalAlign: 'top' }">{{ item.char }}</span>
        </template>
      </div>
      <span :style="profileStyle">{{ textParts.profile }}</span>
      <span :style="cosmeticStyle">{{ textParts.cosmeticText }}</span>
      <div class="networth">
        <span :style="{ color: '#FFAA00' }">{{ 'Networth: ' }}</span>
        <span :style="{ color: 'white' }">{{ networthTotal || '0' }}</span>
        <span :style="{ color: '#AAAAAA' }">{{ ` (${networthShort || '0'})` }}</span>
      </div>
      <div class="non-soulbound">
        <span :style="{ color: '#AAAAAA' }">{{ 'UnsoulBound: ' }}</span>
        <span :style="{ color: 'white' }">{{ nonSoulBoundTotal || '0' }}</span>
        <span :style="{ color: '#AAAAAA' }">{{ ` (${nonSoulBoundShort || '0'})` }}</span>
      </div>
    </div>

    <div class="right">
      <div class="purse">
        <img src="../../public/purse.png" alt="Purse icon" class="purse-icon"/>
        <span :style="{ color: '#ffdd00' }">{{ 'Purse: ' }}</span>
        <span :style="{ color: 'white' }">{{ purseValue || '0' }}</span>
      </div>
      <div class="bank">
        <img src="../../public/bank.png" alt="Bank icon" class="bank-icon"/>
        <span :style="{ color: '#FFAA00' }">{{ 'Bank: ' }}</span>
        <span :style="{ color: 'white' }">{{ bankValue || '0' }}</span>
      </div>
      <div class="essence">
        <img src="../../public/essence.png" alt="Essence icon" class="essence-icon"/>
        <span :style="{ color: '#ef00ff' }">{{ 'Essence: ' }}</span>
        <span :style="{ color: 'white' }">{{ essenceValue || '0' }}</span>
      </div>
      <div class="soulflow">
        <img src="../../public/soulflow.png" alt="Soulflow icon" class="soulflow-icon"/>
        <span :style="{ color: '#00adb5' }">{{ 'Soulflow: ' }}</span>
        <span :style="{ color: 'white' }">{{ soulflowValue || '0' }}</span>
      </div>

    </div>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 15px;
  font-size: clamp(10px, 1.8vw, 14px);
  font-weight: 600;
  text-shadow: 1px 1px 2px black,
  0 0 25px black,
  0 0 5px black;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.avatar {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.head {
  width: 6vw;
  max-width: 28px;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
}

.name {
  padding: 3px 4px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  max-width: 100%;
  overflow: hidden;
}

.left {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  flex: 1 1 auto;
  min-width: 140px;
  height: 100%;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1 1 auto;
  min-width: 120px;
}

.right > div {
  flex-shrink: 1;
  width: 100%;
  text-align: right;
}

.purse, .bank, .essence {
  margin-left: auto;
}

.purse-icon, .bank-icon, .essence-icon, .soulflow-icon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.networth, .non-soulbound {
  flex-basis: 100%;
  margin-top: 4px;
}
</style>