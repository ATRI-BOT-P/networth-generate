<template>
    <div ref="chartRef" :style="wrapperStyle"></div>
</template>

<script lang="ts" setup>
import type { ECharts } from 'echarts';
import * as echarts from 'echarts';
import { computed, type CSSProperties, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import type { EChartProps } from '../types';

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
});

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
    chartInstance.setOption(props.options);
};

const resizeChart = () => {
    if (chartInstance) {
        chartInstance.resize();
    }
};

watch(
    () => props.options,
    () => {
        if (chartInstance) {
            chartInstance.setOption(props.options);
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
