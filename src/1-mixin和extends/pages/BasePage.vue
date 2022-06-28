<template>
  <div id="app"></div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  // 将 title属性 和 bar()进行混入
  data() {
    return {
      title: "hello page",
    };
  },
  methods: {
    bar() {
      console.log("base page bar");
    },
  },
  components: {},
};
</script>

<style scoped></style>
