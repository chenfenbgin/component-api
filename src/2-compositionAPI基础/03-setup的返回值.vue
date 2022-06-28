<template>
  <div id="app">
    home page
    <h2>{{ message }}</h2>

    <h2>{{ title }}</h2>
    <h2>当前计算： {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",

  props: {
    message: {
      type: String,
      required: true,
    },
  },

  setup() {
    let counter = 100;
    // 局部函数
    const increment = () => {
      console.log("increment");
      counter++;
      // y有打印， 但是没刷新， 因为没加入响应式，因为data(){return{}}返回的数据会经过reactive函数处理， 他是响应式的
      console.log("counter", counter);
    };

    return {
      title: "hello home",
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
