<template>
  <div id="app">
    <h2>当前计数： {{ counter }}</h2>
    <h2>计数 * 2： {{ doubleCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>{{ data }}</h2>
    <button @click="changeData">按钮</button>

    <p class="content"></p>

    <div class="scroll">
      <div class="scroll-x">scrollX: {{ scrollX }}</div>
      <div class="scroll-y">scrollY: {{ scrollY }}</div>
    </div>

    <div class="mouse">
      <div class="mouse-x">scrollX: {{ mouseX }}</div>
      <div class="mouse-y">scrollY: {{ mouseY }}</div>
    </div>
  </div>
</template>

<script type="text/javascript">
import useCounter from "./hook/useCounter";
import useTitle from "./hook/useTitle";
import useScrollPosition from "./hook/useScrollPosition";
import useMousePosition from "./hook/useMousePosition";
import useLocalStorage from "./hook/useLocalStorage";
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

    // 监听鼠标移动位置
    const { mouseX, mouseY } = useMousePosition();

    //localStorage使用, 第二次没有传，也是可以获取到info的
    const data = useLocalStorage("info", { name: "chenfeng", age: 22 });
    // 当我拿到data是，也可以修改里面的值
    const changeData = () => data.value = "hahhhhahahh"

    return {
      counter,
      doubleCounter,
      increment,
      decrement,

      scrollX,
      scrollY,

      mouseX,
      mouseY,

      data,
      changeData
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

.mouse {
  position: fixed;
  bottom: 8px;
}
</style>
