<template>
  <div id="app">
    <!-- 非props, id class ，如果传给子组件了，
    可以使用setup第二个参数context中的attrs属性接受 -->
    <home message="hhhhh" id="aaa" class="bbbb">
      <!-- 如果传了插槽，可以使用setup第二个content中的slots接收 -->
      <!-- <template #default>
        <h2>哈哈哈哈</h2>
      </template> -->
    </home>
  </div>
</template>

<script type="text/javascript">
import Home from "./Home.vue";

export default {
  name: "app",

  components: {
    Home,
  },
};
</script>

<style scoped></style>
