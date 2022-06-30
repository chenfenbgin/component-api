<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>

    <!-- 当我们在template模板中使用ref对象，它会自动进行解包操作， 不需要写.value -->
    <h2>当前计数： {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    // reactive API对传入的类型是有所限制的，要求我们必须传入一个对象或者数组类型，
    // 如果我们传入一个基本类型（String、Number、Boolean）会报一个警告
    // 报警告， 要使用Ref API, ref会返回一个可变的响应式对象，该对象作为一个响应式的引用，维护它内部的值，
    // const counter = reactive(100)

    // counter = 100; //100是数值类型
    // 100变成了一个ref的可响应式的引用
    let counter = ref(100);

    const increment = () => {
      counter.value++;
      console.log(counter.value);
    };

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
