<script lang="ts" setup>
import { computed, type CSSProperties } from 'vue';
import utils from '../utils';

const props = defineProps<{
  head?: string;
  profile?: string;
  cosmetic?: boolean;
  name?: string;
  networthTotal?: string;
  networthShort?: string;
  soulBoundTotal?: string;
  soulBoundShort?: string;
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

const profileStyle = computed(
  (): CSSProperties => ({
    color: props.cosmetic ? 'white' : 'aqua',
  }),
);

const cosmeticStyle = computed(
  (): CSSProperties => ({
    color: props.cosmetic ? 'aqua' : 'white',
  }),
);
</script>

<template>
  <div class="info">
    <div class="left">
      <div v-if="head" class="avatar">
        <img :src="head" alt="Player head" class="head" />
      </div>
      <div class="name">
        <template v-for="item in textParts.nameChars">
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
      <div class="soulbound">
        <span :style="{ color: '#AAAAAA' }">{{ 'SoulBound: ' }}</span>
        <span :style="{ color: 'white' }">{{ soulBoundTotal || '0' }}</span>
        <span :style="{ color: '#AAAAAA' }">{{ ` (${soulBoundShort || '0'})` }}</span>
      </div>
    </div>

    <div class="right">
      <div class="purse">
        <img alt="Purse icon" class="purse-icon" src="../../public/purse.png" />
        <span :style="{ color: '#ffdd00' }">Purse:&nbsp;</span>
        <span :style="{ color: 'white' }">{{ purseValue || '0' }}</span>
      </div>
      <div class="bank">
        <img alt="Bank icon" class="bank-icon" src="../../public/bank.png" />
        <span :style="{ color: '#FFAA00' }">Bank:&nbsp;</span>
        <span :style="{ color: 'white' }">{{ bankValue || '0' }}</span>
      </div>
      <div class="essence">
        <img alt="Essence icon" class="essence-icon" src="../../public/essence.png" />
        <span :style="{ color: '#ef00ff' }">Essence:&nbsp;</span>
        <span :style="{ color: 'white' }">{{ essenceValue || '0' }}</span>
      </div>
      <div class="soulflow">
        <img alt="Soulflow icon" class="soulflow-icon" src="../../public/soulflow.png" />
        <span :style="{ color: '#00adb5' }">Soulflow:&nbsp;</span>
        <span :style="{ color: 'white' }">{{ soulflowValue || '0' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  gap: 20px;
  padding: 20px 25px;
  border-radius: 30px;
  font-family: 'JetBrains Mono', monospace;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  font-size: clamp(22px, 3.2vw, 36px);
  text-shadow:
    3px 3px 6px black,
    0 0 38px black,
    0 0 8px black;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.avatar {
  width: 70px;
  height: 70px;
  flex-shrink: 0;
}

.head {
  width: 12vw;
  max-width: 70px;
  height: auto;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.name {
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  max-width: 100%;
  overflow: hidden;
}

.left {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  flex: 2.5 1 auto;
  min-width: 280px;
  position: relative;
  z-index: 1;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1 1 auto;
  min-width: 220px;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 2;
}

.right > div {
  flex-shrink: 1;
  width: 100%;
  text-align: right;
  margin-bottom: 14px;
}

.purse,
.bank,
.essence,
.soulflow {
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.purse-icon,
.bank-icon,
.essence-icon,
.soulflow-icon {
  width: 54px;
  height: 54px;
  vertical-align: middle;
  margin-right: 14px;
}

.networth,
.soulbound {
  flex-basis: 100%;
  margin-top: 14px;
}
</style>
