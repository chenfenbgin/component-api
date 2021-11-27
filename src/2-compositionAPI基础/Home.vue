<template>
  <div id="app">
    home page
    <h2>{{ message }}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  /**
   * 参数一： props, 父组件传递过来的属性
   */
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  // setup函数有哪些参数？
  // setup函数有什么样的返回值
  // 写法一：
  // setup(props, context) {
  //   // setup里面不能使用this
  //   // console.log(this.props);
  //   console.log("props", props.message);

  //   // 我们不可以这么发出事件
  //   // this.$emit()
  //   console.log('id, class', context.attrs.id, context.attrs.class);
  //   console.log('slots', context.slots);
  //   console.log('emit', context.emit);
  // },
  // 之前的发出事件
  // methods:{
  //   btnClick(){
  //     this.$emit("")
  //   }
  // }

  // 写法二：对象的解构
  setup(props, { attrs, slots, emit }) {
    console.log(props.message);
    console.log(attrs.id, attrs.class);
    console.log(slots);
    console.log(emit);
  },
};
</script>

<style scoped>
</style>
