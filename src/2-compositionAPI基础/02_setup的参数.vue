<template>
  <div id="app">
    home page
    <!-- 这里使用父组件传过来的值 -->
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <h2>当前计算： {{ counter }}</h2>
    <!-- <button @click="btnClick">按钮</button> -->
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

  // setup函数有哪些参数？
  // setup函数有什么样的返回值

  // setup写法一：两个参数
  /**
   * 参数一： props, 父组件传递过来的属性,这里如果想要使用props参数，必须这么写
   */
  // setup(props, context) {
  //   // setup里面不能使用this，无法获取this.props
  //   // console.log(this.props);
  //   console.log("props", props.message);

  //   // 我们不可以这么发出事件
  //   // this.$emit()
  //   console.log('id, class', context.attrs.id, context.attrs.class);
  //   console.log('slots', context.slots);
  //   console.log('emit', context.emit);
  // },

  // 之前的发出事件，写了setup，以后就不再这么写了，当然，也不可以在setup中直接使用this.$emit()
  // methods:{
  //   btnClick(){
  //     this.$emit("")
  //   }
  // }

  // setup写法二：对象的解构，如果没有需要，直接对content进行解构获取只需要的属性即可
  setup(props, { attrs, slots, emit }) {
    console.log(props.message);
    console.log(attrs.id, attrs.class);
    console.log(slots);
    console.log(emit);

    // 这里可以返回数据，就不需要data(){return{}},
    return {
      title: "hello home",
      counter: 100,
    };
  },
};
</script>

<style scoped></style>
