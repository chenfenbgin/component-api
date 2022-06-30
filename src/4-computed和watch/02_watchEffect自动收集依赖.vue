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
 * Component Api中，有两个选择： 1.使用watchEffect, 2.使用watch
 */
export default {
  setup() {
    // watchEffect： 会自动收集响应式的依赖
    const name = ref("chen");
    const age = ref(13);

    const changeName = () => (name.value = "liu");
    const changeAge = () => age.value++;

    // 回调函数默认执行一次，立即执行一次， name
    watchEffect(() => {
      // watchEffect可以自动收集可响应式的依赖
      // 点击按钮的时候，name有执行, age没有执行,因为age没被收集过依赖
      // console.log("name:====", name.value);

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

<style scoped></style>
