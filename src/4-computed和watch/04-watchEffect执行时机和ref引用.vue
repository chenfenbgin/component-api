<template>
  <div id="app">
    <h2 ref="title">哈哈哈哈</h2>
  </div>
</template>

<script type="text/javascript">
import { watchEffect, ref } from "vue";

export default {
  setup() {
    // 怎么拿到title元素, 使用ref(null)返回即可，到时title会被自动赋值， 挂载之后会自动赋值到title中
    const title = ref(null);

    // 两种方式，可以去生命周期查看，也可以使用watchEffect
    watchEffect(
      () => {
        // 第一次立即执行，肯定是空的；第二次有具体的值
        console.log(title.value);
      },
      // 下面的对象，第一次就能打印正确的内容
      {
        // DOM更新完之后执行, 这个是要使用到DOM里面的东西才用到、
        // flush:'pre', DOM还没挂载完； post：DOM挂载完
        flush: "post",
      }
    );

    return {
      title,
    };
  },
  // methods:{
  //   foo(){
  //     // 以前我们时这么拿h2标签的
  //     this.$refs.title
  //   }
  // }
};
</script>

<style scoped></style>
