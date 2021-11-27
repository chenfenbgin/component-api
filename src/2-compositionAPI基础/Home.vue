<template>
  <div>
    <button @click="updateState">修改状态</button>
  </div>
</template>

<script>
import { reactive, readonly } from "vue";

export default {
  setup() {
    // 1.普通对象
    const info1 = { name: "chen" };
    const readonlyInfo1 = readonly(info1);

    // 2.响应式对象, 给子组件传
    const info2 = reactive({
      name: "chenheo",
    });
    const readonlyInfo2 = readonly(info2);

    const updateState = () => {
      // 无法修改
      readonlyInfo1.name = "chen1";
      // 下面的是可以i修改的
      info1.name = "chen";

      //无法修改
      readonlyInfo2.name = "chen2";
    };

    return {
      updateState,
    };
  },
};
</script>

<style scoped>
</style>