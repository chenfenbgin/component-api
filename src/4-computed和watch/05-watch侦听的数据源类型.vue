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

    // 2.侦听watch时，传入一个可响应式对象： reactive对象/ref对象
    // 情况一： reactive对象获取到的newValue和oldValue本身都是reactive对象
    // watch(info, (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue: ", oldValue);
    // });

    // 情况二： ref对象获取的newValue和oldValue是value值的本身
    //如果希望newValue和oldValue是一个普通的对象
    watch(
      () => {
        return { ...info };
      },
      (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue: ", oldValue);
      }
    );

    // 情况二： ref对象获取的newValue和oldValue是value值的本身
    const name = ref("chen");
    watch(name, (newValue, oldValue) => {
      console.log("newValue:", newValue, "oldValue: ", oldValue);
    });

    // 1.侦听watch时，传入一个getter函数
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

<style scoped>
</style>
