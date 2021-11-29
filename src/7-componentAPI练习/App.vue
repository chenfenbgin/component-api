<template>
  <div id="app">
    <h2>当前计数： {{ counter }}</h2>
    <h2>计数 * 2： {{ doubleCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script type="text/javascript">
import useCounter from "./hook/useCounter";

export default {
  setup() {
    const { counter, doubleCounter, increment, decrement } = useCounter();
    return {
      counter,
      doubleCounter,
      increment,
      decrement,
    };
  },

  //  之前的代码实现
  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },
  // components: {},
  // computed: {
  //   doubleCounter() {
  //     return this.counter * 2;
  //   },
  // },
  // methods: {
  //   increment() {
  //     this.counter++;
  //   },
  //   decrement() {
  //     this.counter--;
  //   },
  // },
};
</script>

<style scoped>
</style>
