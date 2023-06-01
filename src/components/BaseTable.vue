<script lang="ts" setup>
const data = ref([])
</script>

<template>
  <div>
    <BaseLabel h="26px" m="b-16px">
      <div flex="~" items="center">
        机型信息
      </div>
    </BaseLabel>
    <el-table :data="data" header-cell-class-name="!bg-[#F1F8FF] !py-12px !border-b-0" empty-text="暂无数据">
      <el-table-column label="机型" align="center" />
      <el-table-column label="IMEI 1" align="center" />
      <el-table-column label="IMEI 2" align="center" />
      <el-table-column label="激活状态" align="center" />
      <el-table-column label="激活日期" align="center" />
      <el-table-column label="激活省份" align="center" />
      <el-table-column label="最新省份" align="center" />
    </el-table>
  </div>
</template>
