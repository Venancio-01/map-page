<script lang="ts" setup>
const data = reactive({
  total: 0,
  activated: 0,
  collaborative: 0,
  todayActive: 0,
  monthActive: 0,
})

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
}]
</script>

<template>
  <div flex="~">
    <div v-for="(item, index) in statistics" :key="index" flex="1">
      <div text="xl">
        {{ data?.[item.value] }}
      </div>
      <div text="gray-700">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
