<script lang="ts" setup>
import VChart from 'vue-echarts'
import chinaGeoJSON from '@/assets/china.json'

function generateRandomNumber() {
  return Math.floor(Math.random() * (1000 - 50 + 1)) + 50
}

const data = chinaGeoJSON.features.map((item) => {
  return {
    name: item.properties.name,
    value: generateRandomNumber(),
  }
})

const option = ref({
  tooltip: {
    show: true,
    trigger: 'item',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    textStyle: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
    },
    formatter(params) {
      return `${params.name}：${params.value}`
    },
  },
  geo: {
    top: 200,
    map: 'china',
    zoom: 1.5,
    roam: false,
    itemStyle: {
      areaColor: '#ebf5ff',
      borderColor: '#c5def6',
      borderWidth: 1,
      shadowColor: '#335878',
      shadowOffsetX: -2,
      shadowOffsetY: 16,
    },
    emphasis: {
      itemStyle: {
        areaColor: '#2d87e8',
        borderWidth: 0,
      },
    },
    select: {
      itemStyle: {
        areaColor: '#2d87e8',
        borderWidth: 0,
      },
    },
    regions: [{
      name: '南海诸岛',
      itemStyle: {
        opacity: 0,
      },
    }],
  },
  series: [
    {
      top: 200,
      type: 'map',
      zoom: 1.5,
      roam: false,
      label: {
        show: true,
        formatter() {
          return generateRandomNumber()
        },
        color: '#2d2d2d',
      },

      itemStyle: {
        borderColor: '#c5def6',
        borderWidth: 1,
        areaColor: '#ebf5ff',
      },
      emphasis: {
        itemStyle: {
          areaColor: '#2d87e8',
          borderWidth: 0,
        },
      },
      select: {
        itemStyle: {
          areaColor: '#2d87e8',
          borderWidth: 0,
        },
      },
      map: 'china', // 使用
      data,
    },
  ],
})
</script>

<template>
  <div>
    <BaseLabel h="26px">
      <div h="full" flex="~" items="center" text="xl">
        全国分布情况
      </div>
    </BaseLabel>
    <VChart class="h-[600px] w-full" :option="option" autoresize />
  </div>
</template>
