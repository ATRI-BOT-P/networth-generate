<template>
  <div ref="chartRef" :style="wrapperStyle"></div>
</template>

<script lang="ts" setup>
import type {ECharts, EChartsOption} from 'echarts'
import * as echarts from 'echarts'
import {computed, type CSSProperties, onBeforeUnmount, onMounted, ref, watch} from 'vue'
import type {ChartOptions} from '../types'

interface Props {
  options: EChartsOption | ChartOptions;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  absolute?: boolean;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  boxShadow?: string;
  zIndex?: number | string;
  border?: string;
  theme?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '400px',
  top: '0%',
  left: '0%',
  absolute: false,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '0',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 1,
  border: 'none',
  theme: ''
})

const chartRef = ref<HTMLDivElement | null>(null)
let chartInstance: ECharts | null = null
let resizeObserver: ResizeObserver | null = null

const wrapperStyle = computed<CSSProperties>(() => ({
  position: props.absolute ? 'absolute' : 'relative',
  width: props.width,
  height: props.height,
  top: props.top,
  left: props.left,
  right: props.right,
  bottom: props.bottom,
  backgroundColor: props.backgroundColor,
  padding: props.padding,
  borderRadius: props.borderRadius,
  boxShadow: props.boxShadow,
  zIndex: props.zIndex,
  border: props.border
}))

const initChart = () => {
  if (!chartRef.value) return
  const existingInstance = echarts.getInstanceByDom(chartRef.value)
  if (existingInstance) {
    chartInstance = existingInstance
  } else {
    chartInstance = echarts.init(chartRef.value, props.theme)
  }
  chartInstance.setOption(props.options)
}

const resizeChart = () => {
  chartInstance?.resize()
}

watch(
    () => props.options,
    (newVal) => {
      chartInstance?.setOption(newVal, true)
    },
    {deep: true}
)

onMounted(() => {
  initChart()
  if (chartRef.value) {
    resizeObserver = new ResizeObserver(() => {
      resizeChart()
    })
    resizeObserver.observe(chartRef.value)
  }
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.dispose()
    chartInstance = null
  }
  if (resizeObserver && chartRef.value) {
    resizeObserver.unobserve(chartRef.value)
    resizeObserver.disconnect()
    resizeObserver = null
  }
})
</script>
