<template>
  <div :style="wrapperStyle" ref="chartRef"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'

interface Props {
  options: any
  width?: string
  height?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  absolute?: boolean
  backgroundColor?: string
  color?: string
  padding?: string
  borderRadius?: string
  boxShadow?: string
  zIndex?: number | string
  border?: string
  theme?: string
}

const props = withDefaults(defineProps<Props>(), {
  options: {
    type: Object,
    required: true
  },
  width: { type: String, default: '100%' },
  height: { type: String, default: '400px' },
  top: { type: String, default: '0' },
  left: { type: String, default: '0' },
  right: { type: String },
  bottom: { type: String },
  absolute: { type: Boolean, default: false },
  backgroundColor: { type: String, default: '#fff' },
  color: { type: String, default: '#000' },
  padding: { type: String, default: '0' },
  borderRadius: { type: String, default: '0' },
  boxShadow: { type: String, default: 'none' },
  zIndex: { type: [Number, String], default: 1 },
  border: { type: String, default: 'none' },
  theme: { type: String, default: '' }
})

const chartRef = ref(null)
let chartInstance = null

const wrapperStyle = computed(() => ({
  position: props.absolute ? 'absolute' : 'relative',
  width: props.width,
  height: props.height,
  top: props.top,
  left: props.left,
  right: props.right,
  bottom: props.bottom,
  backgroundColor: props.backgroundColor,
  color: props.color,
  padding: props.padding,
  borderRadius: props.borderRadius,
  boxShadow: props.boxShadow,
  zIndex: props.zIndex,
  border: props.border,
  overflow: 'hidden',
  boxSizing: 'border-box'
}))

const initChart = () => {
  if (!chartRef.value) return
  chartInstance = echarts.init(chartRef.value, props.theme)
  chartInstance.setOption(props.options)
}

watch(
    () => props.options,
    (newVal) => {
      if (chartInstance) {
        chartInstance.setOption(newVal, true)
      }
    },
    { deep: true }
)

onMounted(() => {
  initChart()
  window.addEventListener('resize', resizeChart)
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.dispose()
    chartInstance = null
  }
  window.removeEventListener('resize', resizeChart)
})

const resizeChart = () => {
  chartInstance && chartInstance.resize()
}
</script>