<template>
  <div id="app">
    {{ counter }}
    <home></home>
    <button @click="increment">App+1</button>
  </div>
</template>

<script type="text/javascript">
import { provide, ref, readonly } from "vue";
import Home from "./Home.vue";

export default {
  components: {
    Home,
  },
  setup() {
    // 建议使用ref，reactive当然也可以，推荐ref, 方便以后数据的抽取
    const name = ref("coderchen");
    let counter = ref(100);

    // 使用provide导出给子孙组件使用
    // 不要在上面👆定义的时候使用readonly，应该在共享出去的时候使用readonly
    provide("name", readonly(name));
    provide("counter", readonly(counter));

    const increment = () => counter.value++;

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped>
</style>
