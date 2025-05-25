<script lang="ts" setup>
import type {ECharts, EChartsOption} from 'echarts';
import * as echarts from 'echarts';
import { computed, type CSSProperties, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import type { EChartProps } from '../types';
import { merge } from 'lodash-es';

const defaultOptions: EChartsOption = {
  animation: false,
  backgroundColor: 'transparent',
  tooltip: { show: false },
  legend: { show: false },
  textStyle: {
    fontSize: 14,
    fontFamily: '"Light", sans-serif',
    fontWeight: 800,
    fontStyle: 'normal',
    color: 'rgba(255,255,255,0.85)',
  },
  title: {
    text: 'Networth History',
    left: 'center',
    top: 20,
    textStyle: {
      fontSize: 18,
      fontFamily: '"Light", sans-serif',
      fontWeight: 800,
      fontStyle: 'normal',
      color: 'rgba(255,255,255,0.95)',
    },
  },
  xAxis: {
    type: 'category',
    axisLine: {
      lineStyle: { color: 'rgba(255,255,255,0.5)' },
    },
    axisLabel: { color: 'rgba(255,255,255,0.8)' },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: { color: 'rgba(255,255,255,0.5)' },
    },
    axisLabel: {
      color: 'rgba(255,255,255,0.8)',
      formatter: function (value: number) {
        let negative = false;
        let nAbs = value;

        if (value < 0) {
          negative = true;
          nAbs = -value;
        }

        let result: string;

        if (nAbs < 1_000) {
          result = nAbs.toFixed(2);
        } else if (nAbs < 1_000_000) {
          result = (nAbs / 1_000).toFixed(2) + 'K';
        } else if (nAbs < 1_000_000_000) {
          result = (nAbs / 1_000_000).toFixed(2) + 'M';
        } else if (nAbs < 1_000_000_000_000) {
          result = (nAbs / 1_000_000_000).toFixed(2) + 'B';
        } else if (nAbs < 1_000_000_000_000_000) {
          result = (nAbs / 1_000_000_000_000).toFixed(2) + 'T';
        } else if (nAbs < 1_000_000_000_000_000_000) {
          result = (nAbs / 1_000_000_000_000_000).toFixed(2) + 'Q';
        } else {
          result = (nAbs / 1_000_000_000_000_000_000).toFixed(2) + '+';
        }

        return negative ? '-' + result : result;
      },
    },
    splitLine: {
      lineStyle: { color: 'rgba(255,255,255,0.1)' },
    },
  },
  series: [
    {
      type: 'line',
      smooth: true,
      symbol: 'none',
      lineStyle: {
        width: 3,
        color: 'rgba(0,229,255,0.8)',
      },
      itemStyle: { color: 'rgba(0,229,255,0.8)' },
      emphasis: { disabled: true },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(0,229,255,0.4)' },
            { offset: 1, color: 'rgba(0,229,255,0)' },
          ],
        },
      },
    },
  ],
};

const props = withDefaults(defineProps<EChartProps>(), {
  width: '100%',
  height: '420px',
  top: '0%',
  left: '0%',
  absolute: false,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '0',
  borderRadius: '18px',
  boxShadow: '0 5px 25px rgba(0, 0, 0, 0.12)',
  zIndex: 1,
  border: 'none',
  theme: '',
  options: {} as any,
});

const mergedOptions = computed(() => merge({}, defaultOptions, props.options));

const chartRef = ref<HTMLDivElement | null>(null);
let chartInstance: ECharts | null = null;
let resizeObserver: ResizeObserver | null = null;

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
  border: props.border,
}));

const initChart = () => {
  if (!chartRef.value) return;
  const existingInstance = echarts.getInstanceByDom(chartRef.value);
  if (existingInstance) {
    chartInstance = existingInstance;
  } else {
    chartInstance = echarts.init(chartRef.value, props.theme);
  }
  chartInstance.setOption(mergedOptions.value);
};

const resizeChart = () => {
  if (chartInstance) {
    chartInstance.resize();
  }
};

watch(
    () => mergedOptions.value,
    (newVal) => {
      if (chartInstance) {
        chartInstance.setOption(newVal);
      }
    },
    { deep: true },
);

onMounted(() => {
  initChart();
  window.addEventListener('resize', resizeChart);

  if (window.ResizeObserver && chartRef.value) {
    resizeObserver = new ResizeObserver(resizeChart);
    resizeObserver.observe(chartRef.value);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeChart);

  if (resizeObserver && chartRef.value) {
    resizeObserver.unobserve(chartRef.value);
    resizeObserver = null;
  }

  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }
});
</script>

<template>
  <div ref="chartRef" :style="wrapperStyle"></div>
</template>
