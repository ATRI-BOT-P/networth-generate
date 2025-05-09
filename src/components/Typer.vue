<template>
  <div
      class="frosted-glass"
      :style="computedStyle"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'

interface Props {
  width?: string
  height?: string
  top?: string
  left?: string
  borderRadius?: string
  absolute?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: '300px',
  height: '200px',
  top: '0',
  left: '0',
  borderRadius: '16px',
  absolute: true
})

const computedStyle = computed<CSSProperties>(() => {
  return {
    width: props.width,
    height: props.height,
    top: props.top,
    left: props.left,
    borderRadius: props.borderRadius,
    position: props.absolute ? 'absolute' : 'relative'
  }
})
</script>

<style scoped>
.frosted-glass {
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  /*background: rgba(255, 255, 255, 0.0);*/
  backdrop-filter: blur(5px) saturate(100%);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
</style>