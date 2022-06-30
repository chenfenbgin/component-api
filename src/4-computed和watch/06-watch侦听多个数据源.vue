<template>
  <div id="app">
    <h2>哈哈哈哈</h2>
    <h2>{{ name }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script type="text/javascript">
import { ref, watch, reactive } from "vue";

export default {
  setup() {
    // 1.定义可响应式对象
    const info = reactive({ name: "chen", age: 13 });
    const name = ref("chen");

    // 2.侦听器watch, 侦听多个，写成数组
    watch(
      [() => ({ ...info }), name],
      ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(newInfo, newName, oldInfo, oldName);
      }
    );

    const changeData = () => {
      info.name = "hello";
    };

    return {
      info,
      changeData,
    };
  },
};
</script>

<style scoped></style>
