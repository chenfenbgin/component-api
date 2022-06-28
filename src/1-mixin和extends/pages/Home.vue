<template>
  <div id="app">
    Home Page

    <!-- 下面的 title 和 方法foo都是来自于 BasePage -->
    <h2>{{ title }}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script type="text/javascript">
import BasePage from "./BasePage.vue";

export default {
  name: "app",
  // 方式一： 我们使用Mixin进行混入
  // 方式二： Home.vue在BasePage基础之上，可以拿到title foo,用得很少,标签<div></div>是不会继承的
  extends: BasePage,
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped></style>
