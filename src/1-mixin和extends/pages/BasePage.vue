<template>
  <div id="app"></div>
</template>

<script type="text/javascript">
export default {
  name: "app",
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

<style scoped>
</style>
