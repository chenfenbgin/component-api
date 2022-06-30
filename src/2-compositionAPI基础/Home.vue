<template>
  <div>
    <button @click="updateState">修改状态</button>
  </div>
</template>

<script>
import { ref, reactive, readonly } from "vue";

export default {
  setup() {
    // 1.普通对象
    const info1 = { name: "chen" };
    const readonlyInfo1 = readonly(info1);

    // 2.响应式对象, reactive方式，给子组件传
    // 注：给子组件传过去的，应该是一个响应式对象
    const info2 = reactive({
      name: "chenheo",
    });
    const readonlyInfo2 = readonly(info2);

    // 3.响应式的对象，ref方式
    const info3 = ref("chen");
    const readonlyInfo3 = readonly(info3);

    const updateState = () => {
      // 无法修改
      readonlyInfo1.name = "chen1";
      // 下面的是可以i修改的
      info1.name = "chen";

      //无法修改
      readonlyInfo2.name = "chen2";

      // ref也是无法修改的
      readonlyInfo3.value = "天选子子";
    };

    return {
      updateState,
    };
  },
};
</script>

<style scoped></style>
