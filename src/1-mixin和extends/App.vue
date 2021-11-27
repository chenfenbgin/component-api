<template>
  <div id="app">
    <!-- 我们看一下有没有混入进来 -->
    <h2>{{ message }}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script type="text/javascript">
// export default才是这种写法  import demoMixin from "./mixins/demoMixin";
import { demoMixin } from "./mixins/demoMixin";
export default {
  name: "app",
  // 把要混入的对象放到这个数组里面
  mixins: [demoMixin],
  data() {
    return {
      title: "hello world",
      // 如果出现下面这种同名, 会以这个组件为主，显示hello App
      message: "hello App",
    };
  },
  components: {},
  // 如果这里也有生命周期， 这两个都会执行；因为生命周期的钩子函数会被合并到数组中，都会被调用
  created() {
    console.log("执行了demo mixin created生命周期");
  },
};
</script>

<style scoped>
</style>
