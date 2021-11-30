<template>
  <div id="app">
    <h2>当前计数： {{ counter }}</h2>
    <h2>计数 * 2： {{ doubleCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <p class="content"></p>

    <div class="scroll">
      <div class="scroll-x">scrollX: {{ scrollX }}</div>
      <div class="scroll-y">scrollY: {{ scrollY }}</div>
    </div>
  </div>
</template>

<script type="text/javascript">
import useCounter from "./hook/useCounter";
import useTitle from "./hook/useTitle";
import useScrollPosition from "./hook/useScrollPosition";
// import { ref } from "vue";

export default {
  setup() {
    const { counter, doubleCounter, increment, decrement } = useCounter();

    // title
    // 鼠标位置
    // 滚动位置
    // document.title = "哈哈哈哈";

    const titleRef = useTitle("我是默认值");
    setTimeout(() => {
      titleRef.value = "尘封";
    }, 2000);

    // //滚动位置
    // const scrollX = ref(0);
    // const scrollY = ref(0);
    // // 监听文档的滚动
    // document.addEventListener("scroll", () => {
    //   scrollX.value = window.scrollX;
    //   scrollY.value = window.scrollY;
    // });
    const { scrollX, scrollY } = useScrollPosition();
    return {
      counter,
      doubleCounter,
      increment,
      decrement,
      scrollX,
      scrollY,
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
.content {
  width: 3000px;
  height: 5000px;
}

.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>
