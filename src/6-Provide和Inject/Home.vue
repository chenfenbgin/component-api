<template>
  <div id="app">
    <h2>{{ name }}</h2>
    <h2>{{ counter }}</h2>

    <button @click="homeIncrement">home+1</button>
  </div>
</template>

<script type="text/javascript">
import { inject } from "vue";

export default {
  setup() {
    // inject可以传两个参数，一个是名字，一个是没取到的时候的默认值
    const name = inject("name");
    const counter = inject("counter");

    const homeIncrement = () => counter.value++;

    return {
      name,
      counter,
      homeIncrement,
    };
  },
};
</script>

<style scoped>
</style>
