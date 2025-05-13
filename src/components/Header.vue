<script lang="ts" setup>
defineProps<{
  title?: string;
  logo?: string;
  info?: string;
}>();
</script>

<template>
  <header class="header">
    <div class="header-left">
      <img v-if="logo" :src="logo" alt="Logo" class="logo" />
      <h1 class="title">{{ title }}</h1>
    </div>
    <div class="header-right">
      <h1 v-if="info" class="info">{{ info }}</h1>
      <slot name="right" />
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 100px; /* 改为固定高度，而不是百分比 */
  background: #1b1b1b;
  color: white;
  z-index: 1000;
  box-sizing: border-box;
}

.header-left {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  height: 100%;
}

.header-right {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 12px;
  white-space: nowrap;
  font-family: 'JetBrains Mono', monospace;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  font-size: 50px; /* 调大字体大小 */
  height: 100%;
}

.logo {
  height: 88px;
  width: 88px;
  margin-right: 10px;
  flex-shrink: 0;
  border-radius: 10px;
}

.title {
  font-family: 'JetBrains Mono', monospace;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  font-size: 50px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info {
  font-size: 50px;
  margin: 0;
  font-weight: 800;
}
</style>
