<template>
  <main flex="~" gap="x-24px" h="full" p="x-14px y-20px">
    <div class="card" flex="1">
      <BaseStatistics />

      <el-divider />

      <BaseMap />
    </div>

    <div class="card" flex="1">
      <BaseFilter />
      <BaseLine />
      <BaseTable />
    </div>
  </main>
</template>

<style scoped>
.card {
  padding: 16px;
  box-shadow: 0px 0px 13px 0px rgba(0, 22, 45, 0.1);
}
</style>
