<template>
  <div id="app">
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script type="text/javascript">
import { watchEffect, ref } from "vue";
/**
 * Options api中，我们可以通过watch选项来侦听data 或者 props的数据变化
 */
export default {
  setup() {
    // watchEffect： 会自动收集响应式的依赖
    const name = ref("chen");
    const age = ref(13);

    const changeName = () => (name.value = "liu");
    const changeAge = () => age.value++;

    // 立即执行一次， name
    watchEffect(() => {
      console.log("name:====", name.value, "age: ", age.value);
    });

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped>
</style>
