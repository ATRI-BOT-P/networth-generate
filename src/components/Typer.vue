<template>
  <div :style="computedStyle" class="frosted-glass">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import type {CSSProperties} from 'vue'
import {computed} from 'vue'
import type {TyperProps} from "../types";


const props = withDefaults(defineProps<TyperProps>(), {
  width: '300px',
  height: '200px',
  top: '0',
  left: '0',
  borderRadius: '16px',
  absolute: true,
  centered: false
})

const computedStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius,
    position: props.absolute ? 'absolute' : 'relative'
  }

  if (props.centered) {
    style.left = '50%'
    style.transform = 'translateX(-50%)'
    style.top = props.top
  } else {
    style.top = props.top
    style.left = props.left
  }

  return style
})
</script>

<style scoped>
.frosted-glass {
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px) saturate(80%);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
</style>