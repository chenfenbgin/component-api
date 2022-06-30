<template>
  <div id="app">
    <button @click="increment">{{ counter }}</button>
  </div>
</template>

<script type="text/javascript">
import { onMounted, onUpdated, onUnmounted, ref } from "vue";

export default {
  name: "app",
  setup() {
    const counter = ref(0);

    const increment = () => counter.value++;

    onMounted(() => {
      console.log("App Mounted1");
    });

    // 生命周期是可以使用多次的
    onMounted(() => {
      console.log("App Mounted2");
    });
    onUpdated(() => {
      console.log("App onUpdated");
    });
    onUnmounted(() => {
      console.log("App onUnmounted");
    });

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
