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
    const info = reactive({ name: "chen", age: 13 });

    // watch用法二：.侦听watch时，传入一个可响应式对象： reactive对象/ref对象
    // 1.reactive对象获取到的newValue和oldValue本身都是reactive对象
    // watch(info, (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue: ", oldValue); //newValue,oldValue都是reactive对象
    // });

    // 2.如果希望newValue和oldValue是一个普通的对象
    // watch(
    //   () => {
    //     // 解构之后放入普通的对象
    //     return { ...info };
    //   },
    //   (newValue, oldValue) => {
    //     console.log("newValue:", newValue, "oldValue: ", oldValue);
    //   }
    // );

    // 3： ref对象获取的newValue和oldValue是value值的本身
    const name = ref("chen");
    watch(name, (newValue, oldValue) => {
      console.log("newValue:", newValue, "oldValue: ", oldValue); // 这里newValue, oldValue取到的是value
    });


    // 直接侦听info，是不能侦听的，
    // watch(info, (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue: ", oldValue);
    // });
    // watch用法一：1.侦听watch时，需要传入一个getter函数， 这样就可以侦听info的变化了
    // watch(() => info.name, (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue: ", oldValue);
    // });

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
