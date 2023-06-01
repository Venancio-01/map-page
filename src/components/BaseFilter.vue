<script lang="ts" setup>

</script>

<template>
  <div flex="~" gap="x-8">
    <div flex="~ 1" items="center">
      <div w="50px" text="secondary">
        项目
      </div>
      <el-select placeholder="请选择项目" />
    </div>

    <div flex="~ 1" items="center">
      <div w="50px" text="secondary">
        机型
      </div>
      <el-select placeholder="请选择机型" />
    </div>

    <div flex="~ 1">
      <div w="4px" h="full" bg="red" rounded="2px" mr="10px" />

      <div flex="~ col" justify="end">
        <div text="secondary">
          设备数
        </div>
        <div flex="~ 1" items="end" font="bold" text="36px">
          254
        </div>
      </div>
    </div>

    <div flex="~ 1">
      <div w="4px" h="full" bg="green" rounded="2px" mr="10px" />

      <div flex="~ col" justify="end">
        <div text="secondary">
          已激活
        </div>
        <div flex="~ 1" items="end" font="bold" text="36px">
          124
        </div>
      </div>
    </div>
  </div>
</template>
