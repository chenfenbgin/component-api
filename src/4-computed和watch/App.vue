<template>
  <div id="app">
    <h2 ref="title">哈哈哈哈</h2>
  </div>
</template>

<script type="text/javascript">
import { watchEffect, ref } from "vue";

export default {
  setup() {
    // 怎么拿到title元素, title会被自动赋值
    const title = ref(null);

    watchEffect(() => {
      console.log(title.value);
    }, {
      // DOM更新完之后执行, 这个是要使用到DOM里面的东西才用到
      flush: "post"
    });

    return {
      title,
    };
  },
  // methods:{
  //   foo(){
  //     this.$refs.title
  //   }
  // }
};
</script>

<style scoped>
</style>
