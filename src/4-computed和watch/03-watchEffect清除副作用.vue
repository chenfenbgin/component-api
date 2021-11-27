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

    // 立即执行一次， name
    const stop = watchEffect((onInvalidate) => {
      // 根据name和age两个变量发送网络请求
      onInvalidate(() => {
        //在这个函数中， 清除额外的副作用
        // request.cancel();
        console.log("onInvalidate");
      });

      console.log("name:====", name.value, "age: ", age.value);
    });

    const changeName = () => (name.value = "liu");
    const changeAge = () => {
      age.value++;
      if (age.value > 25) {
        // 停止侦听
        stop();
      }
    };

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
