<script lang="ts" setup>
import Item from './Item.vue';
import type {CategoryData} from "../types";

const props = defineProps<{
  categories: CategoryData[];
}>();

</script>

<template>
  <div class="item-grid-container">
    <div v-for="(category, catIndex) in props.categories" :key="catIndex" class="category-container">
      <div class="category-header">
        <div :style="{color:category.titleColor }" class="category-title">
          {{ category.title }} <span v-if="category.value" class="category-value">{{ category.value }}</span>
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

<style scoped>
.item-grid-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  max-height: 100%;
  overflow: hidden;
}

.category-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.category-header {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 5px;
}

.category-title {
  font-size: 16px;
  font-family: "Klee One", cursive;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 1px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

.category-value {
  margin-left: 10px;
  font-family: "Klee One", cursive;
  font-weight: 600;
  font-style: normal;
  color: #FFAA00;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

.items-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  width: 100%;
}

.items-grid > * {
  flex: 0 0 calc(20% - 8px);
  min-width: 100px;
  max-width: calc(20% - 8px);
}

@media (max-width: 1200px) {
  .items-grid > * {
    flex: 0 0 calc(25% - 8px);
    max-width: calc(25% - 8px);
  }
}

@media (max-width: 900px) {
  .items-grid > * {
    flex: 0 0 calc(33.333% - 8px);
    max-width: calc(33.333% - 8px);
  }
}

@media (max-width: 600px) {
  .items-grid > * {
    flex: 0 0 calc(50% - 8px);
    max-width: calc(50% - 8px);
  }
}
</style>
