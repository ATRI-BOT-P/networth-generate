<script lang="ts" setup>
import Item from './Item.vue';
import type { CategoryData } from '../types';

const props = defineProps<{
  categories: CategoryData[];
}>();
</script>

<template>
  <div class="item-grid-container">
    <div v-for="(category, catIndex) in props.categories" :key="catIndex" class="category-container">
      <div class="category-header">
        <div :style="{ color: category.titleColor }" class="category-title">
          {{ category.title }}
          <span v-if="category.value" class="category-value">{{ category.value }}</span>
        </div>
      </div>

      <div class="items-grid">
        <Item
          v-for="(item, itemIndex) in category.items"
          :key="`${catIndex}-${itemIndex}`"
          :icon="item.icon"
          :is-upgraded="item.isUpgraded"
          :name="item.name"
          :rarity="item.rarity"
          :stars="item.stars"
          :value="item.value"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item-grid-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 14px;
  max-height: 100%;
  overflow: hidden;
}

.category-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.category-header {
  display: flex;
  align-items: center;
  padding: 6px 14px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  margin-bottom: 6px;
}

.category-title {
  font-size: 30px;
  font-family: Medium, sans-serif;
  font-optical-sizing: auto;
  font-weight: 1000;
  font-style: normal;
  letter-spacing: 2px;
  text-shadow: 2px 2px 7px rgba(0, 0, 0, 0.75);
}

.category-value {
  margin-left: 20px;
  font-size: 26px;
  font-family: Regular, sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  color: #ffb700;
  text-shadow: 2px 2px 7px rgba(0, 0, 0, 0.75);
}

.items-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
}

.items-grid > * {
  flex: 0 0 calc(33.333% - 12px);
  min-width: 200px;
  max-width: calc(33.333% - 12px);
}
</style>
