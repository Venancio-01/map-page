<script lang="ts" setup>
import VChart from 'vue-echarts'

const radio1 = ref('按日')

const option = computed(() => {
  return {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      splitLine: {
        show: true,
        lineStyle: {
          color: '#F4F7FA',
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#6d6d6d',
        },
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: '#F4F7FA',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#6d6d6d',
        },
      },
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      symbolSize: 8,
      itemStyle: {
        color: '#22A1FE',
      },
      lineStyle: {
        color: '#22A1FE',
      },
    }],
  }
})
</script>

<template>
  <div>
    <BaseLabel h="26px">
      <div flex="~" items="center">
        新增人数
      </div>
      <el-radio-group v-model="radio1" size="small" m="l-12px">
        <el-radio-button label="按日" />
        <el-radio-button label="按月" />
      </el-radio-group>
    </BaseLabel>
    <VChart class="h-[350px] w-full" :option="option" autoresize />
  </div>
</template>
