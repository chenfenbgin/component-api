<template>
  <div id="app">
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script type="text/javascript">
import { watchEffect, ref } from "vue";

export default {
  setup() {
    const name = ref("chen");
    const age = ref(13);

    const stop = watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        console.log("网络请求成功");
      }, 2000);
      // 根据name和age两个变量发送网络请求， 上一次请求产生的过程，称之为副作用
      // 就是比如在修改age的时候，onInvalidate()函数会优先被调用了一下， 可以做一些相关的清除操作
      onInvalidate(() => {
        //在这个函数中， 清除额外的副作用
        // request.cancel();//取消请求
        clearTimeout(timer);
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

<style scoped></style>
