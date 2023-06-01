<script lang="ts" setup>
const data = reactive(window.statisticsData)

const statistics = [{
  label: '总设备',
  value: 'total',
}, {
  label: '已激活',
  value: 'activated',
}, {
  label: '合作项目',
  value: 'collaborative',
}, {
  label: '今日激活',
  value: 'todayActive',
}, {
  label: '本月激活',
  value: 'monthActive',
}] as const
</script>

<template>
  <div flex="~">
    <div v-for="(item, index) in statistics" :key="index" flex="~ 1 col" justify="center" items="center">
      <div text="36px" font="bold">
        {{ data[item.value] }}
      </div>
      <div text="secondary 16px">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
