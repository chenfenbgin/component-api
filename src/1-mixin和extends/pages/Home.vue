<template>
  <div id="app">
    Home Page
    <h2>{{ title }}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script type="text/javascript">
import BasePage from "./BasePage.vue";

export default {
  name: "app",
  // Home.vue在BasePage基础之上，可以拿到title foo,用得很少
  extends: BasePage,
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
</style>
