<script setup lang="ts">
import Header from "./components/Header.vue"
import Logo from "./assets/4f6e398e2bacebf2c4322d4e8dca0e8a.png"
import Typer from "./components/Typer.vue";
import EChart from "./components/EChart.vue";

const customMap = {
  10000: '10k',
  20000: '20k',
  30000: '30k',
  40000: '40k',
  50000: '50k',
  60000: '60k',
  70000: '70k',
  80000: '80k',
  90000: '90k',
  100000: '💯k' // 你可以完全自定义映射值
};

const chartOptions = {
  animation: false,
  backgroundColor: 'transparent',
  textStyle: {
    color: 'rgba(255,255,255,0.85)',
    fontFamily: 'Arial',
    fontSize: 14
  },
  title: {
    text: 'Networth History',
    left: 'center',
    top: 20,
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'rgba(255,255,255,0.95)'
    }
  },
  tooltip: {
    show: false
  },
  legend: {
    show: false
  },
  xAxis: {
    type: 'category',
    data: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '1.10'],
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0.5)'
      }
    },
    axisLabel: {
      color: 'rgba(255,255,255,0.8)'
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0.5)'
      }
    },
    axisLabel: {
      color: 'rgba(255,255,255,0.8)',
      formatter: function (value) {
        return customMap[value] || (value / 1000 + 'k');
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0.1)'
      }
    }
  },
  series: [
    {
      name: 'NW',
      type: 'line',
      data: [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000],
      smooth: true,
      symbol: 'none',
      lineStyle: {
        width: 3,
        color: 'rgba(0,229,255,0.8)'
      },
      itemStyle: {
        color: 'rgba(0,229,255,0.8)'
      },
      opacity: 0.85,
      emphasis: {
        disabled: true
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(0,229,255,0.4)'
            },
            {
              offset: 1,
              color: 'rgba(0,229,255,0)'
            }
          ]
        }
      }
    }
  ]
};
  </script>

<template>
  <div class="background">
    <Header
        title="ATRI-BOT"
        :logo="Logo"
        info="v0.0.0-snapshot"
    />

    <div class="content-area">
      <div class="frosted-container">
        <Typer :width="'90%'" :height="'65%'" :left="'5%'" :top="'3%'" :absolute="true" :border-radius="'16px'">

        </Typer>
        <Typer :width="'90%'" :height="'26%'" :left="'5%'" :top="'71%'" :absolute="true" :border-radius="'16px'">
          <EChart
              :options="chartOptions"
              width="100% "
              height="100%"
              top="0%"
              left="0%"
              :absolute="true"
              background-color="rgba(255, 255, 255, 0.2)"
              border-radius="16px"
              border="1px solid #eee"
              box-shadow="0 4px 20px rgba(0, 0, 0, 0.1)"
          />
        </Typer>

      </div>
    </div>
  </div>
</template>


<style scoped>
.background {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url('assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.content-area {
  position: absolute;
  top: 5%;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frosted-container {
  width: 90%;
  height: 85%;
  padding: 2rem;
  /*border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px) saturate(150%);
  filter: blur(1px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);*/
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>